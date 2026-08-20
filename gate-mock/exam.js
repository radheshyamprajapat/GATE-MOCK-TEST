/* OFFICIAL GATE/NTA CBT ENGINE */
let currentQuestionIndex = 0;
let userAnswers = {};      // Stores selected option index
let questionStatus = {};   // 'not-visited', 'not-answered', 'answered', 'marked', 'ans-marked'
let timerInterval = null;
let totalTimeSeconds = 0;

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const testId = urlParams.get("test");

  if (!testId || !window.TEST_CATALOG) {
    alert("Invalid test request.");
    window.location.href = "index.html";
    return;
  }

  let testEntry = null;
  window.TEST_CATALOG.subjects.forEach((s) => {
    s.tests.forEach((t) => {
      if (t.id === testId) testEntry = t;
    });
  });

  if (!testEntry) {
    alert("Test does not exist.");
    window.location.href = "index.html";
    return;
  }

  const script = document.createElement("script");
  script.src = "../" + testEntry.file;
  script.onload = () => initExam();
  document.head.appendChild(script);
});

function initExam() {
  if (!window.MOCK || !window.MOCK.questions) return;

  document.getElementById("test-title").textContent = window.MOCK.title;
  totalTimeSeconds = (window.MOCK.duration || 45) * 60;

  // Initialize all questions as not-visited
  window.MOCK.questions.forEach((_, idx) => {
    questionStatus[idx] = "not-visited";
  });

  startTimer();
  renderPalette();
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
      alert("Time is up! Submitting exam.");
      submitTest();
    }
  }, 1000);
}

function loadQuestion(index) {
  currentQuestionIndex = index;

  // Set status to not-answered if first visit
  if (questionStatus[index] === "not-visited") {
    questionStatus[index] = "not-answered";
  }

  const qData = window.MOCK.questions[index];
  document.getElementById("q-number").textContent = `Question No. ${index + 1}`;
  document.getElementById("q-marks").textContent = `Marks: +${qData.m || 1} | -${qData.negative || 0.33}`;
  document.getElementById("q-text").innerHTML = qData.q;

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  qData.o.forEach((optText, oIdx) => {
    const item = document.createElement("div");
    item.className = `cbt-opt-item ${userAnswers[index] === oIdx ? 'selected' : ''}`;
    item.onclick = () => selectOption(oIdx);

    item.innerHTML = `
      <input type="radio" name="opt" ${userAnswers[index] === oIdx ? 'checked' : ''}>
      <span><strong>(${String.fromCharCode(65 + oIdx)})</strong> ${optText}</span>
    `;
    optionsContainer.appendChild(item);
  });

  updatePalette();

  if (window.MathJax && window.MathJax.typesetPromise) {
    MathJax.typesetPromise([document.getElementById("q-text"), optionsContainer]).catch((e) => console.log(e));
  }
}

function selectOption(optIdx) {
  userAnswers[currentQuestionIndex] = optIdx;
  loadQuestion(currentQuestionIndex);
}

function clearResponse() {
  delete userAnswers[currentQuestionIndex];
  questionStatus[currentQuestionIndex] = "not-answered";
  loadQuestion(currentQuestionIndex);
}

function saveAndNext() {
  if (userAnswers.hasOwnProperty(currentQuestionIndex)) {
    questionStatus[currentQuestionIndex] = "answered";
  } else {
    questionStatus[currentQuestionIndex] = "not-answered";
  }
  nextQuestion();
}

function markForReview() {
  if (userAnswers.hasOwnProperty(currentQuestionIndex)) {
    questionStatus[currentQuestionIndex] = "ans-marked";
  } else {
    questionStatus[currentQuestionIndex] = "marked";
  }
  nextQuestion();
}

function nextQuestion() {
  if (currentQuestionIndex < window.MOCK.questions.length - 1) {
    loadQuestion(currentQuestionIndex + 1);
  } else {
    updatePalette();
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
    btn.id = `p-btn-${idx}`;
    btn.textContent = idx + 1;
    btn.onclick = () => loadQuestion(idx);
    grid.appendChild(btn);
  });
}

function updatePalette() {
  let counts = { 'not-visited': 0, 'not-answered': 0, 'answered': 0, 'marked': 0, 'ans-marked': 0 };

  window.MOCK.questions.forEach((_, idx) => {
    const btn = document.getElementById(`p-btn-${idx}`);
    const st = questionStatus[idx];

    counts[st]++;
    btn.className = `p-btn ${st}`;

    if (idx === currentQuestionIndex) {
      btn.classList.add("active-q");
    }
  });

  document.getElementById("count-not-visited").textContent = counts["not-visited"];
  document.getElementById("count-not-answered").textContent = counts["not-answered"];
  document.getElementById("count-answered").textContent = counts["answered"];
  document.getElementById("count-marked").textContent = counts["marked"];
  document.getElementById("count-ans-marked").textContent = counts["ans-marked"];
}

function submitTest() {
  clearInterval(timerInterval);

  let score = 0, correct = 0, wrong = 0, skipped = 0;

  window.MOCK.questions.forEach((q, idx) => {
    const st = questionStatus[idx];
    // In GATE, both 'answered' and 'ans-marked' are evaluated
    if ((st === "answered" || st === "ans-marked") && userAnswers.hasOwnProperty(idx)) {
      if (userAnswers[idx] === q.a) {
        correct++;
        score += (q.m || 1);
      } else {
        wrong++;
        score -= (q.negative || 0.33);
      }
    } else {
      skipped++;
    }
  });

  const maxMarks = window.MOCK.questions.reduce((a, c) => a + (c.m || 1), 0);
  const attempted = correct + wrong;

  const resultData = {
    testTitle: window.MOCK.title,
    score: score.toFixed(2),
    maxMarks,
    correct,
    wrong,
    skipped,
    accuracy: attempted > 0 ? ((correct / attempted) * 100).toFixed(1) : 0,
    percentage: ((score / maxMarks) * 100).toFixed(1)
  };

  sessionStorage.setItem("MOCK_RESULT", JSON.stringify(resultData));
  window.location.href = "result.html";
}
