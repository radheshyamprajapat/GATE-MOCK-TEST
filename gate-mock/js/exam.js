/* =========================================
   GATE FIZIKS
   MOCK TEST ENGINE
   MOCK TEST 01
========================================= */


/* =========================================
   QUESTION BANK

   8 MCQ
   7 MSQ
   10 NAT

   All questions are original.
========================================= */

const questions = [

    /* =====================================
       MCQ 1
    ===================================== */

    {
        id: 1,
        type: "MCQ",
        topic: "Quantum Mechanics",

        question: `
        A particle of mass m is in a one-dimensional infinite
        potential well of width L. If the particle is initially
        in the ground state, the expectation value of its kinetic
        energy is:
        <span class="equation">
        \\( \\langle T \\rangle = ? \\)
        </span>
        `,

        options: [
            "\\( \\frac{\\pi^2\\hbar^2}{2mL^2} \\)",
            "\\( \\frac{\\pi^2\\hbar^2}{mL^2} \\)",
            "\\( \\frac{\\hbar^2}{2mL^2} \\)",
            "\\( \\frac{2\\pi^2\\hbar^2}{mL^2} \\)"
        ],

        answer: 0,

        explanation: `
        For an infinite well,
        \\(E_n = n^2\\pi^2\\hbar^2/(2mL^2)\\).
        The ground state has n = 1 and the potential energy
        inside the well is zero. Hence all the energy is kinetic:
        \\(\\langle T\\rangle = \\pi^2\\hbar^2/(2mL^2)\\).
        `
    },


    /* =====================================
       MCQ 2
    ===================================== */

    {
        id: 2,
        type: "MCQ",
        topic: "Classical Mechanics",

        question: `
        A particle moves in one dimension under the potential
        <span class="equation">
        \\( V(x)=\\frac{1}{2}kx^2 \\)
        </span>
        If its total energy is E, the maximum speed of the
        particle is:
        `,

        options: [
            "\\(\\sqrt{E/m}\\)",
            "\\(\\sqrt{2E/m}\\)",
            "\\(\\sqrt{E/2m}\\)",
            "\\(2\\sqrt{E/m}\\)"
        ],

        answer: 1,

        explanation: `
        At the equilibrium position x = 0, the potential energy
        is minimum and equal to zero. Therefore all the total
        energy is kinetic:
        \\(E = mv_{max}^2/2\\).
        Hence \\(v_{max}=\\sqrt{2E/m}\\).
        `
    },


    /* =====================================
       MCQ 3
    ===================================== */

    {
        id: 3,
        type: "MCQ",
        topic: "Electrodynamics",

        question: `
        In vacuum, an electromagnetic plane wave has electric
        field amplitude E₀. The corresponding magnetic field
        amplitude is:
        `,

        options: [
            "\\(cE_0\\)",
            "\\(E_0/c\\)",
            "\\(E_0/c^2\\)",
            "\\(\\mu_0E_0\\)"
        ],

        answer: 1,

        explanation: `
        For an electromagnetic wave propagating in vacuum,
        \\(E_0 = cB_0\\).
        Therefore,
        \\(B_0=E_0/c\\).
        `
    },


    /* =====================================
       MCQ 4
    ===================================== */

    {
        id: 4,
        type: "MCQ",
        topic: "Mathematical Physics",

        question: `
        Consider the differential equation
        <span class="equation">
        \\( y'' + \\lambda y = 0 \\)
        </span>
        with boundary conditions y(0)=0 and y(L)=0.
        The allowed values of λ are:
        `,

        options: [
            "\\(\\lambda_n=n\\pi/L\\)",
            "\\(\\lambda_n=n^2\\pi^2/L^2\\)",
            "\\(\\lambda_n=n^2\\pi/L\\)",
            "\\(\\lambda_n=2n\\pi/L^2\\)"
        ],

        answer: 1,

        explanation: `
        The solution satisfying y(0)=0 is
        y = A sin(√λ x).
        The second boundary condition gives
        sin(√λ L)=0.
        Thus √λ L=nπ, giving
        λ_n=n²π²/L².
        `
    },


    /* =====================================
       MCQ 5
    ===================================== */

    {
        id: 5,
        type: "MCQ",
        topic: "Thermodynamics",

        question: `
        For an ideal monatomic gas, the ratio of specific heats
        γ = Cₚ/Cᵥ is:
        `,

        options: [
            "4/3",
            "5/3",
            "7/5",
            "3/2"
        ],

        answer: 1,

        explanation: `
        A monatomic ideal gas has three translational degrees
        of freedom. Thus
        Cᵥ = 3R/2 and Cₚ = 5R/2.
        Therefore γ = 5/3.
        `
    },


    /* =====================================
       MCQ 6
    ===================================== */

    {
        id: 6,
        type: "MCQ",
        topic: "Statistical Physics",

        question: `
        For photons in thermal equilibrium, the chemical potential
        is:
        `,

        options: [
            "positive",
            "negative",
            "zero",
            "temperature dependent but non-zero"
        ],

        answer: 2,

        explanation: `
        Photon number is not conserved because photons can be
        created or destroyed by interaction with matter.
        For a system whose particle number is not conserved,
        the equilibrium chemical potential of photons is zero.
        `
    },


    /* =====================================
       MCQ 7
    ===================================== */

    {
        id: 7,
        type: "MCQ",
        topic: "Solid State Physics",

        question: `
        In a simple cubic crystal, the number of nearest neighbours
        of each lattice point is:
        `,

        options: [
            "4",
            "6",
            "8",
            "12"
        ],

        answer: 1,

        explanation: `
        A simple cubic lattice has nearest neighbours along
        the ±x, ±y and ±z directions. Hence the coordination
        number is 6.
        `
    },


    /* =====================================
       MCQ 8
    ===================================== */

    {
        id: 8,
        type: "MCQ",
        topic: "Nuclear Physics",

        question: `
        A radioactive nucleus has decay constant λ. Its mean
        lifetime τ is:
        `,

        options: [
            "\\(\\lambda\\)",
            "\\(1/\\lambda\\)",
            "\\(\\lambda^2\\)",
            "\\(\\ln 2/\\lambda\\)"
        ],

        answer: 1,

        explanation: `
        For exponential radioactive decay,
        N(t)=N₀e^{-λt}.
        The mean lifetime is
        τ=1/λ.
        The quantity ln2/λ is the half-life.
        `
    },


    /* =====================================
       MSQ 9
    ===================================== */

    {
        id: 9,
        type: "MSQ",
        topic: "Quantum Mechanics",

        question: `
        Which of the following statements about Hermitian
        operators are correct?
        `,

        options: [
            "Their eigenvalues are real.",
            "Eigenfunctions corresponding to distinct eigenvalues are orthogonal.",
            "They always commute with every other operator.",
            "They represent measurable observables in quantum mechanics."
        ],

        answer: [0, 1, 3],

        explanation: `
        Hermitian operators have real eigenvalues and orthogonal
        eigenstates belonging to distinct eigenvalues. Physical
        observables are represented by Hermitian operators.
        Hermitian operators do not necessarily commute with
        arbitrary operators.
        `
    },


    /* =====================================
       MSQ 10
    ===================================== */

    {
        id: 10,
        type: "MSQ",
        topic: "Electrodynamics",

        question: `
        Which statements about electromagnetic waves in vacuum
        are correct?
        `,

        options: [
            "Electric and magnetic fields are perpendicular to the direction of propagation.",
            "Electric and magnetic fields are mutually perpendicular.",
            "The wave is transverse.",
            "The electric field is parallel to the magnetic field."
        ],

        answer: [0, 1, 2],

        explanation: `
        In a plane electromagnetic wave, E, B and the propagation
        vector k are mutually perpendicular. Hence the wave is
        transverse.
        `
    },


    /* =====================================
       MSQ 11
    ===================================== */

    {
        id: 11,
        type: "MSQ",
        topic: "Classical Mechanics",

        question: `
        For a simple harmonic oscillator, which quantities remain
        constant during the motion?
        `,

        options: [
            "Total mechanical energy",
            "Angular frequency",
            "Amplitude",
            "Instantaneous kinetic energy"
        ],

        answer: [0, 1, 2],

        explanation: `
        For an ideal harmonic oscillator without damping,
        total energy, angular frequency and amplitude remain
        constant. Kinetic energy varies periodically.
        `
    },


    /* =====================================
       MSQ 12
    ===================================== */

    {
        id: 12,
        type: "MSQ",
        topic: "Mathematical Physics",

        question: `
        Which of the following are properties of Fourier transforms?
        `,

        options: [
            "The transform of a derivative is related to multiplication by iω.",
            "A Gaussian function has a Gaussian Fourier transform.",
            "Convolution in real space corresponds to multiplication in Fourier space.",
            "Every periodic function has a finite Fourier transform."
        ],

        answer: [0, 1, 2],

        explanation: `
        Differentiation becomes multiplication by iω in Fourier
        space. A Gaussian transforms into another Gaussian, and
        convolution becomes multiplication. The last statement
        is not generally true because transform existence depends
        on the mathematical conditions imposed.
        `
    },


    /* =====================================
       MSQ 13
    ===================================== */

    {
        id: 13,
        type: "MSQ",
        topic: "Thermodynamics",

        question: `
        Which statements are true for an ideal gas undergoing
        a reversible adiabatic process?
        `,

        options: [
            "\\(PV^\\gamma\\) remains constant.",
            "No heat is exchanged with the surroundings.",
            "The entropy remains constant.",
            "Temperature necessarily remains constant."
        ],

        answer: [0, 1, 2],

        explanation: `
        A reversible adiabatic process satisfies
        PV^γ = constant and dQ=0. Since the process is reversible,
        dS=0. Temperature does not remain constant; it changes
        during compression or expansion.
        `
    },


    /* =====================================
       MSQ 14
    ===================================== */

    {
        id: 14,
        type: "MSQ",
        topic: "Solid State Physics",

        question: `
        Which statements about semiconductors are correct?
        `,

        options: [
            "Intrinsic carrier concentration increases with temperature.",
            "Doping can increase electrical conductivity.",
            "An n-type semiconductor has electrons as majority carriers.",
            "An intrinsic semiconductor contains no holes."
        ],

        answer: [0, 1, 2],

        explanation: `
        Increasing temperature creates more electron-hole pairs.
        Doping increases carrier concentration. In n-type material,
        electrons are the majority carriers. Intrinsic semiconductors
        contain both electrons and holes.
        `
    },


    /* =====================================
       MSQ 15
    ===================================== */

    {
        id: 15,
        type: "MSQ",
        topic: "Nuclear Physics",

        question: `
        Which statements about nuclear binding energy are correct?
        `,

        options: [
            "Binding energy is related to mass defect.",
            "Higher binding energy per nucleon generally indicates greater stability.",
            "Nuclear fusion can release energy for light nuclei.",
            "Binding energy of every nucleus is zero."
        ],

        answer: [0, 1, 2],

        explanation: `
        Binding energy is B = Δmc². Binding energy per nucleon
        is a useful indicator of nuclear stability. Fusion of
        light nuclei can move the system toward higher binding
        energy per nucleon and release energy.
        `
    },


    /* =====================================
       NAT 16
    ===================================== */

    {
        id: 16,
        type: "NAT",
        topic: "Quantum Mechanics",

        question: `
        A particle is in the ground state of an infinite square
        well of width L. If its ground-state energy is E₁,
        determine the ratio E₂/E₁.
        `,

        answer: 4,

        tolerance: 0,

        explanation: `
        For an infinite square well,
        E_n = n²E₁.
        Therefore E₂/E₁ = 2² = 4.
        `
    },


    /* =====================================
       NAT 17
    ===================================== */

    {
        id: 17,
        type: "NAT",
        topic: "Classical Mechanics",

        question: `
        A simple harmonic oscillator has angular frequency
        ω = 5 rad/s. Its period in seconds is approximately
        equal to:
        `,

        answer: 1.2566,

        tolerance: 0.01,

        explanation: `
        T = 2π/ω.
        Therefore
        T = 2π/5 ≈ 1.2566 s.
        `
    },


    /* =====================================
       NAT 18
    ===================================== */

    {
        id: 18,
        type: "NAT",
        topic: "Electrodynamics",

        question: `
        A point charge q = 2 μC is placed in vacuum.
        Calculate the electric field magnitude at a distance
        r = 1 m. Use k = 9 × 10⁹ Nm²/C².
        Give the numerical value in N/C.
        `,

        answer: 18000,

        tolerance: 0,

        explanation: `
        E = kq/r².
        Substituting q = 2×10⁻⁶ C and r=1 m,
        E = 9×10⁹ × 2×10⁻⁶ = 1.8×10⁴ N/C.
        `
    },


    /* =====================================
       NAT 19
    ===================================== */

    {
        id: 19,
        type: "NAT",
        topic: "Mathematical Physics",

        question: `
        Evaluate the Gaussian integral
        ∫₋∞⁺∞ exp(-x²) dx.
        Give the answer correct to three decimal places.
        `,

        answer: 1.772,

        tolerance: 0.001,

        explanation: `
        The standard Gaussian integral is
        √π ≈ 1.77245.
        Therefore the value to three decimal places is 1.772.
        `
    },


    /* =====================================
       NAT 20
    ===================================== */

    {
        id: 20,
        type: "NAT",
        topic: "Thermodynamics",

        question: `
        An ideal gas undergoes an isothermal expansion from
        volume V to 2V at temperature T. The work done by the
        gas in units of nRT is:
        `,

        answer: 0.6931,

        tolerance: 0.001,

        explanation: `
        For reversible isothermal expansion,
        W = nRT ln(V₂/V₁).
        Here V₂/V₁=2.
        Thus W/(nRT)=ln2≈0.6931.
        `
    },


    /* =====================================
       NAT 21
    ===================================== */

    {
        id: 21,
        type: "NAT",
        topic: "Statistical Physics",

        question: `
        A system has two equally probable microstates.
        Its entropy in units of k_B is:
        `,

        answer: 0.6931,

        tolerance: 0.001,

        explanation: `
        S = k_B ln Ω.
        For Ω=2,
        S/k_B = ln2 ≈ 0.6931.
        `
    },


    /* =====================================
       NAT 22
    ===================================== */

    {
        id: 22,
        type: "NAT",
        topic: "Solid State Physics",

        question: `
        A simple cubic lattice has lattice constant
        a = 2 Å. What is the nearest-neighbour distance
        in Å?
        `,

        answer: 2,

        tolerance: 0,

        explanation: `
        In a simple cubic lattice, the nearest neighbours
        lie along the cube edges. Hence the nearest-neighbour
        distance is simply a = 2 Å.
        `
    },


    /* =====================================
       NAT 23
    ===================================== */

    {
        id: 23,
        type: "NAT",
        topic: "Nuclear Physics",

        question: `
        A radioactive sample has a half-life of 10 days.
        What fraction of the original sample remains after
        30 days? Express the answer as a decimal.
        `,

        answer: 0.125,

        tolerance: 0,

        explanation: `
        30 days corresponds to three half-lives.
        Remaining fraction = (1/2)³ = 1/8 = 0.125.
        `
    },


    /* =====================================
       NAT 24
    ===================================== */

    {
        id: 24,
        type: "NAT",
        topic: "Atomic & Molecular Physics",

        question: `
        For hydrogen, the wavelength of the photon emitted
        during a transition from n=2 to n=1 is approximately
        121.6 nm. Express this value in metres.
        `,

        answer: 1.216e-7,

        tolerance: 1e-9,

        explanation: `
        1 nm = 10⁻⁹ m.
        Therefore
        121.6 nm = 121.6 × 10⁻⁹ m
        = 1.216 × 10⁻⁷ m.
        `
    },


    /* =====================================
       NAT 25
    ===================================== */

    {
        id: 25,
        type: "NAT",
        topic: "Quantum Mechanics",

        question: `
        For a particle of momentum p, the de Broglie wavelength
        is λ = h/p. If the momentum is doubled, the wavelength
        becomes what fraction of its original value?
        `,

        answer: 0.5,

        tolerance: 0,

        explanation: `
        Since λ = h/p, wavelength is inversely proportional
        to momentum. Doubling p therefore makes λ equal to
        one-half of its original value.
        `
    }

];


/* =========================================
   STATE
========================================= */

let currentIndex = 0;

let answers = {};

let visited = new Set();

let marked = new Set();

let submitted = false;

let remainingSeconds = 30 * 60;

let timerInterval = null;


/* =========================================
   DOM
========================================= */

const questionText =
    document.getElementById("questionText");

const options =
    document.getElementById("options");

const natArea =
    document.getElementById("natArea");

const natAnswer =
    document.getElementById("natAnswer");

const currentQuestion =
    document.getElementById("currentQuestion");

const totalQuestions =
    document.getElementById("totalQuestions");

const questionType =
    document.getElementById("questionType");

const questionTopic =
    document.getElementById("questionTopic");

const progressBar =
    document.getElementById("progressBar");

const palette =
    document.getElementById("palette");

const timer =
    document.getElementById("timer");

const markBtn =
    document.getElementById("markBtn");

const clearBtn =
    document.getElementById("clearBtn");

const previousBtn =
    document.getElementById("previousBtn");

const saveNextBtn =
    document.getElementById("saveNextBtn");

const submitBtn =
    document.getElementById("submitBtn");

const submitModal =
    document.getElementById("submitModal");

const closeModal =
    document.getElementById("closeModal");

const cancelSubmit =
    document.getElementById("cancelSubmit");

const confirmSubmit =
    document.getElementById("confirmSubmit");

const modalAnswered =
    document.getElementById("modalAnswered");

const modalNotAnswered =
    document.getElementById("modalNotAnswered");

const modalMarked =
    document.getElementById("modalMarked");

const resultScreen =
    document.getElementById("resultScreen");

const restartBtn =
    document.getElementById("restartBtn");


totalQuestions.textContent =
    questions.length;


/* =========================================
   INITIALIZE
========================================= */

function init() {

    visited.add(0);

    buildPalette();

    renderQuestion();

    startTimer();

}


/* =========================================
   RENDER QUESTION
========================================= */

function renderQuestion() {

    const q = questions[currentIndex];

    visited.add(currentIndex);

    currentQuestion.textContent =
        currentIndex + 1;

    questionType.textContent =
        q.type;

    questionTopic.textContent =
        q.topic;

    questionText.innerHTML =
        q.question;

    progressBar.style.width =
        ((currentIndex + 1) / questions.length * 100) + "%";


    /* ------------------------------
       OPTIONS
    ------------------------------ */

    options.innerHTML = "";

    natArea.classList.add("hidden");


    if (q.type === "NAT") {

        natArea.classList.remove("hidden");

        natAnswer.value =
            answers[currentIndex] !== undefined
                ? answers[currentIndex]
                : "";

    }

    else {

        q.options.forEach((optionText, i) => {

            const label =
                document.createElement("label");

            label.className = "option";


            const input =
                document.createElement("input");

            input.type =
                q.type === "MSQ"
                    ? "checkbox"
                    : "radio";

            input.name =
                "question-option";

            input.value =
                i;


            let selected = false;


            if (q.type === "MCQ") {

                selected =
                    answers[currentIndex] === i;

            }


            if (q.type === "MSQ") {

                selected =
                    Array.isArray(answers[currentIndex]) &&
                    answers[currentIndex].includes(i);

            }


            input.checked =
                selected;


            const optionLabel =
                document.createElement("span");

            optionLabel.className =
                "option-label";

            optionLabel.textContent =
                String.fromCharCode(65 + i) + ".";


            const text =
                document.createElement("span");

            text.className =
                "option-text";

            text.innerHTML =
                optionText;


            label.appendChild(input);

            label.appendChild(optionLabel);

            label.appendChild(text);

            options.appendChild(label);


            if (selected) {

                label.classList.add("selected");

            }


            input.addEventListener(
                "change",
                () => {

                    saveCurrentAnswer();

                    renderSelectionState();

                    updatePalette();

                }
            );

        });

    }


    markBtn.innerHTML =
        marked.has(currentIndex)
            ? "🔖 Unmark Question"
            : "🔖 Mark for Review";


    previousBtn.disabled =
        currentIndex === 0;


    if (currentIndex === questions.length - 1) {

        saveNextBtn.textContent =
            "Save & Review →";

    }

    else {

        saveNextBtn.textContent =
            "Save & Next →";

    }


    updatePalette();

    renderMath();

}


/* =========================================
   MATH RENDERING
========================================= */

function renderMath() {

    /*
       If MathJax is added later,
       this function can call MathJax.typeset().
    */

}


/* =========================================
   SAVE ANSWER
========================================= */

function saveCurrentAnswer() {

    const q =
        questions[currentIndex];


    if (q.type === "NAT") {

        const value =
            natAnswer.value.trim();

        if (value !== "") {

            answers[currentIndex] =
                parseFloat(value);

        }
        else {

            delete answers[currentIndex];

        }

        return;

    }


    if (q.type === "MCQ") {

        const selected =
            options.querySelector(
                'input[type="radio"]:checked'
            );

        if (selected) {

            answers[currentIndex] =
                Number(selected.value);

        }
        else {

            delete answers[currentIndex];

        }

        return;

    }


    if (q.type === "MSQ") {

        const selected =
            [...options.querySelectorAll(
                'input[type="checkbox"]:checked'
            )]
            .map(input => Number(input.value));


        if (selected.length > 0) {

            answers[currentIndex] =
                selected;

        }
        else {

            delete answers[currentIndex];

        }

    }

}


/* =========================================
   SELECTION VISUAL
========================================= */

function renderSelectionState() {

    const optionLabels =
        options.querySelectorAll(".option");


    optionLabels.forEach(label => {

        const input =
            label.querySelector("input");

        if (input.checked) {

            label.classList.add("selected");

        }
        else {

            label.classList.remove("selected");

        }

    });

}


/* =========================================
   CLEAR RESPONSE
========================================= */

clearBtn.addEventListener(
    "click",
    () => {

        delete answers[currentIndex];


        if (questions[currentIndex].type === "NAT") {

            natAnswer.value = "";

        }

        else {

            const inputs =
                options.querySelectorAll("input");

            inputs.forEach(input => {

                input.checked = false;

            });

            renderSelectionState();

        }


        updatePalette();

    }
);


/* =========================================
   MARK
========================================= */

markBtn.addEventListener(
    "click",
    () => {

        if (marked.has(currentIndex)) {

            marked.delete(currentIndex);

        }
        else {

            marked.add(currentIndex);

        }

        renderQuestion();

    }
);


/* =========================================
   SAVE NEXT
========================================= */

saveNextBtn.addEventListener(
    "click",
    () => {

        saveCurrentAnswer();

        updatePalette();


        if (currentIndex <
            questions.length - 1) {

            currentIndex++;

            visited.add(currentIndex);

            renderQuestion();

        }

        else {

            openSubmitModal();

        }

    }
);


/* =========================================
   PREVIOUS
========================================= */

previousBtn.addEventListener(
    "click",
    () => {

        saveCurrentAnswer();

        if (currentIndex > 0) {

            currentIndex--;

            visited.add(currentIndex);

            renderQuestion();

        }

    }
);


/* =========================================
   PALETTE
========================================= */

function buildPalette() {

    palette.innerHTML = "";

    questions.forEach((q, index) => {

        const button =
            document.createElement("button");

        button.className =
            "palette-btn";

        button.textContent =
            index + 1;


        button.addEventListener(
            "click",
            () => {

                saveCurrentAnswer();

                currentIndex =
                    index;

                visited.add(index);

                renderQuestion();

            }
        );


        palette.appendChild(button);

    });

    updatePalette();

}


function getQuestionStatus(index) {

    const answered =
        answers[index] !== undefined;


    const isMarked =
        marked.has(index);


    if (answered && isMarked) {

        return "answered-marked";

    }


    if (isMarked) {

        return "marked";

    }


    if (answered) {

        return "answered";

    }


    if (visited.has(index)) {

        return "not-answered";

    }


    return "not-visited";

}


function updatePalette() {

    const buttons =
        palette.querySelectorAll(
            ".palette-btn"
        );


    buttons.forEach((button, index) => {

        button.className =
            "palette-btn";


        button.classList.add(
            getQuestionStatus(index)
        );


        if (index === currentIndex) {

            button.classList.add("current");

        }

    });

}


/* =========================================
   TIMER
========================================= */

function startTimer() {

    updateTimerDisplay();


    timerInterval =
        setInterval(
            () => {

                remainingSeconds--;

                updateTimerDisplay();


                if (remainingSeconds <= 0) {

                    clearInterval(timerInterval);

                    autoSubmit();

                }

            },
            1000
        );

}


function updateTimerDisplay() {

    const minutes =
        Math.floor(
            remainingSeconds / 60
        );

    const seconds =
        remainingSeconds % 60;


    timer.textContent =
        String(minutes).padStart(2, "0")
        + ":"
        +
        String(seconds).padStart(2, "0");


    const timerBox =
        timer.parentElement;


    timerBox.classList.remove(
        "timer-warning",
        "timer-danger"
    );


    if (remainingSeconds <= 300) {

        timerBox.classList.add(
            "timer-warning"
        );

    }


    if (remainingSeconds <= 60) {

        timerBox.classList.remove(
            "timer-warning"
        );

        timerBox.classList.add(
            "timer-danger"
        );

    }

}


/* =========================================
   SUBMIT MODAL
========================================= */

function openSubmitModal() {

    saveCurrentAnswer();

    const answered =
        Object.keys(answers).length;


    const notAnswered =
        questions.length - answered;


    modalAnswered.textContent =
        answered;

    modalNotAnswered.textContent =
        notAnswered;

    modalMarked.textContent =
        marked.size;


    submitModal.classList.remove(
        "hidden"
    );

}


submitBtn.addEventListener(
    "click",
    openSubmitModal
);


closeModal.addEventListener(
    "click",
    () => {

        submitModal.classList.add(
            "hidden"
        );

    }
);


cancelSubmit.addEventListener(
    "click",
    () => {

        submitModal.classList.add(
            "hidden"
        );

    }
);


confirmSubmit.addEventListener(
    "click",
    () => {

        submitModal.classList.add(
            "hidden"
        );

        submitTest();

    }
);


/* =========================================
   AUTO SUBMIT
========================================= */

function autoSubmit() {

    if (submitted) return;

    saveCurrentAnswer();

    submitTest();

}


/* =========================================
   CALCULATE ANSWER
========================================= */

function isCorrect(q, userAnswer) {

    if (userAnswer === undefined) {

        return false;

    }


    if (q.type === "MCQ") {

        return userAnswer === q.answer;

    }


    if (q.type === "MSQ") {

        if (!Array.isArray(userAnswer)) {

            return false;

        }

        if (
            userAnswer.length !==
            q.answer.length
        ) {

            return false;

        }

        const a =
            [...userAnswer].sort();

        const b =
            [...q.answer].sort();


        return a.every(
            (value, index) =>
                value === b[index]
        );

    }


    if (q.type === "NAT") {

        return Math.abs(
            userAnswer - q.answer
        ) <= q.tolerance;

    }


    return false;

}


/* =========================================
   SCORE
========================================= */

function calculateResult() {

    let score = 0;

    let correct = 0;

    let wrong = 0;

    let unattempted = 0;


    questions.forEach(
        (q, index) => {

            const userAnswer =
                answers[index];


            if (userAnswer === undefined) {

                unattempted++;

                return;

            }


            if (isCorrect(q, userAnswer)) {

                correct++;

                score += 1;

            }

            else {

                wrong++;


                /*
                   GATE-style negative marking
                   applied only to MCQ.

                   MSQ and NAT have no
                   negative marking here.
                */

                if (q.type === "MCQ") {

                    score -= 1 / 3;

                }

            }

        }
    );


    return {
        score,
        correct,
        wrong,
        unattempted
    };

}


/* =========================================
   SUBMIT TEST
========================================= */

function submitTest() {

    if (submitted) return;

    submitted = true;


    clearInterval(timerInterval);


    saveCurrentAnswer();


    const result =
        calculateResult();


    showResult(result);

}


/* =========================================
   SHOW RESULT
========================================= */

function showResult(result) {

    document.querySelector(
        ".exam-layout"
    ).classList.add("hidden");


    document.querySelector(
        ".exam-header"
    ).classList.add("hidden");


    resultScreen.classList.remove(
        "hidden"
    );


    const displayScore =
        Math.max(
            0,
            result.score
        );


    document.getElementById(
        "finalScore"
    ).textContent =
        displayScore.toFixed(2);


    document.getElementById(
        "correctCount"
    ).textContent =
        result.correct;


    document.getElementById(
        "wrongCount"
    ).textContent =
        result.wrong;


    document.getElementById(
        "unattemptedCount"
    ).textContent =
        result.unattempted;


    const attempted =
        result.correct +
        result.wrong;


    const accuracy =
        attempted === 0
            ? 0
            : (result.correct / attempted) * 100;


    document.getElementById(
        "accuracy"
    ).textContent =
        accuracy.toFixed(1) + "%";


    let message =
        "Keep Practising!";


    const percentage =
        displayScore / questions.length * 100;


    if (percentage >= 80) {

        message =
            "Excellent Performance! 🔥";

    }

    else if (percentage >= 60) {

        message =
            "Very Good! Keep Pushing! 💪";

    }

    else if (percentage >= 40) {

        message =
            "Good Start — Improve Your Weak Areas!";

    }


    document.getElementById(
        "resultMessage"
    ).textContent =
        message;


    renderTopicPerformance();

    renderQuestionAnalysis();

}


/* =========================================
   TOPIC ANALYSIS
========================================= */

function renderTopicPerformance() {

    const container =
        document.getElementById(
            "topicPerformance"
        );


    container.innerHTML = "";


    const topics = {};


    questions.forEach(
        (q, index) => {

            if (!topics[q.topic]) {

                topics[q.topic] = {

                    total: 0,

                    correct: 0

                };

            }


            topics[q.topic].total++;


            if (
                isCorrect(
                    q,
                    answers[index]
                )
            ) {

                topics[q.topic].correct++;

            }

        }
    );


    Object.keys(topics).forEach(
        topic => {

            const data =
                topics[topic];


            const percentage =
                data.total === 0
                    ? 0
                    : data.correct /
                      data.total * 100;


            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "topic-row";


            row.innerHTML = `

                <div class="topic-heading">

                    <span>
                        ${topic}
                    </span>

                    <span>
                        ${data.correct}/${data.total}
                        (${percentage.toFixed(0)}%)
                    </span>

                </div>

                <div class="topic-track">

                    <div
                        class="topic-fill"
                        style="width:${percentage}%">
                    </div>

                </div>

            `;


            container.appendChild(row);

        }
    );

}


/* =========================================
   QUESTION ANALYSIS
========================================= */

function renderQuestionAnalysis() {

    const container =
        document.getElementById(
            "questionAnalysis"
        );


    container.innerHTML = "";


    questions.forEach(
        (q, index) => {

            const userAnswer =
                answers[index];


            const attempted =
                userAnswer !== undefined;


            const correct =
                attempted &&
                isCorrect(
                    q,
                    userAnswer
                );


            let statusClass =
                "unattempted";


            let statusText =
                "Unattempted";


            if (correct) {

                statusClass =
                    "correct";

                statusText =
                    "✓ Correct";

            }

            else if (attempted) {

                statusClass =
                    "wrong";

                statusText =
                    "✕ Incorrect";

            }


            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "analysis-question";


            div.innerHTML = `

                <div class="
                    analysis-question-header
                    ${statusClass}
                ">

                    <span>
                        <strong>
                            Q${index + 1}
                        </strong>
                    </span>

                    <span class="analysis-status">
                        ${statusText}
                    </span>

                    <span class="analysis-question-text">
                        ${stripHTML(q.question)}
                    </span>

                </div>


                <div class="solution">

                    <strong>
                        Explanation:
                    </strong>

                    <br><br>

                    ${q.explanation}

                </div>

            `;


            container.appendChild(div);

        }
    );

}


/* =========================================
   STRIP HTML
========================================= */

function stripHTML(html) {

    const temp =
        document.createElement("div");

    temp.innerHTML =
        html;

    return temp.textContent ||
           temp.innerText ||
           "";

}


/* =========================================
   RESTART
========================================= */

restartBtn.addEventListener(
    "click",
    () => {

        location.reload();

    }
);


/* =========================================
   BEFORE PAGE EXIT
========================================= */

window.addEventListener(
    "beforeunload",
    event => {

        if (
            !submitted &&
            Object.keys(answers).length > 0
        ) {

            event.preventDefault();

            event.returnValue = "";

        }

    }
);


/* =========================================
   START
========================================= */

init();
