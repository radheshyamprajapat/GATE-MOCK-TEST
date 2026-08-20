/* CBT EXAM ENGINE */
let currentQuestionIndex = 0;
let userAnswers = {};
let timerInterval = null;
let totalTimeSeconds = 0;

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const testId = urlParams.get("test");

  if (!testId || !window.TEST_CATALOG) {
    alert("Invalid test context.");
    window.location.href = "index.html";
    return;
  }

  // Find Test Info
  let testEntry = null;
  window.TEST_CATALOG.subjects.forEach((s) => {
    s.tests.forEach((t) => {
      if (t.id === testId) testEntry = t;
    });
  });

  if (!testEntry) {
    alert("Test requested does not exist.");
    window.location.href = "index.html";
    return;
  }

  // Load question script dynamically
  const script = document.createElement("script");
  script.src = "../" + testEntry.file;
  script.onload = () => {
    initExam();
  };
  script.onerror = () => {
    alert("Failed to load test questions data file.");
  };
  document.head.appendChild(script);
});

function initExam() {
  if (!window.MOCK || !window.MOCK.questions) {
    alert("Corrupted question structure.");
    return;
  }

  document.getElementById("test-title").textContent = window.MOCK.title;
  
  // Timer setup
  totalTimeSeconds = (window.MOCK.duration || 30) * 60;
  startTimer();

  // Render Palette
  renderPalette();

  // Render First Question
  loadQuestion(0);
}

function startTimer() {
  const timerDisplay = document.getElementById("timer-display");
  timerInterval = setInterval(() => {
    totalTimeSeconds--;
    const m = Math.floor(totalTimeSeconds / 60);
    const s = totalTimeSeconds % 60;
    timerDisplay.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

    if (totalTimeSeconds <= 0) {
      clearInterval(timerInterval);
      alert("Time is up! Submitting test automatically.");
      submitTest();
    }
  }, 1000);
}

function loadQuestion(index) {
  currentQuestionIndex = index;
  const qData = window.MOCK.questions[index];

  document.getElementById("q-number").textContent = `Question ${index + 1} of ${window.MOCK.questions.length}`;
  document.getElementById("q-marks").textContent = `Marks: +${qData.m || 1} | -${qData.negative || 0.25}`;
  document.getElementById("q-text").innerHTML = qData.q;

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  qData.o.forEach((optText, oIdx) => {
    const item = document.createElement("div");
    item.className = `option-item ${userAnswers[index] === oIdx ? 'selected' : ''}`;
    item.onclick = () => selectOption(oIdx);

    item.innerHTML = `
      <input type="radio" name="opt" ${userAnswers[index] === oIdx ? 'checked' : ''}>
      <span><strong>${String.fromCharCode(65 + oIdx)}.</strong> ${optText}</span>
    `;
    optionsContainer.appendChild(item);
  });

  updatePaletteHighlights();

  // Trigger MathJax re-render
  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

function selectOption(optIndex) {
  userAnswers[currentQuestionIndex] = optIndex;
  loadQuestion(currentQuestionIndex);
}

function clearResponse() {
  delete userAnswers[currentQuestionIndex];
  loadQuestion(currentQuestionIndex);
}

function nextQuestion() {
  if (currentQuestionIndex < window.MOCK.questions.length - 1) {
    loadQuestion(currentQuestionIndex + 1);
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    loadQuestion(currentQuestionIndex - 1);
  }
}

function renderPalette() {
  const grid = document.getElementById("palette-grid");
  grid.innerHTML = "";
  window.MOCK.questions.forEach((_, idx) => {
    const btn = document.createElement("button");
    btn.className = "palette-btn unanswered";
    btn.id = `palette-btn-${idx}`;
    btn.textContent = idx + 1;
    btn.onclick = () => loadQuestion(idx);
    grid.appendChild(btn);
  });
}

function updatePaletteHighlights() {
  window.MOCK.questions.forEach((_, idx) => {
    const btn = document.getElementById(`palette-btn-${idx}`);
    btn.className = "palette-btn";
    if (userAnswers.hasOwnProperty(idx)) {
      btn.classList.add("answered");
    } else {
      btn.classList.add("unanswered");
    }
    if (idx === currentQuestionIndex) {
      btn.classList.add("current");
    }
  });
}

function submitTest() {
  clearInterval(timerInterval);

  let score = 0;
  let correct = 0;
  let wrong = 0;
  let skipped = 0;

  window.MOCK.questions.forEach((q, idx) => {
    if (!userAnswers.hasOwnProperty(idx)) {
      skipped++;
    } else if (userAnswers[idx] === q.a) {
      correct++;
      score += (q.m || 1);
    } else {
      wrong++;
      score -= (q.negative || 0.25);
    }
  });

  const totalQuestions = window.MOCK.questions.length;
  const attempted = correct + wrong;
  const accuracy = attempted > 0 ? ((correct / attempted) * 100).toFixed(1) : 0;
  const maxPossibleMarks = window.MOCK.questions.reduce((acc, curr) => acc + (curr.m || 1), 0);
  const percentage = ((score / maxPossibleMarks) * 100).toFixed(1);

  const resultData = {
    testTitle: window.MOCK.title,
    score: score.toFixed(2),
    maxMarks: maxPossibleMarks,
    correct,
    wrong,
    skipped,
    accuracy,
    percentage
  };

  sessionStorage.setItem("MOCK_RESULT", JSON.stringify(resultData));
  window.location.href = "result.html";
}
