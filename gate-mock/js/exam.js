/* =====================================================
   GATE PHYSICS 2027
   MOCK TEST ENGINE
===================================================== */


/* -----------------------------
   QUESTION BANK
----------------------------- */

const questionBank = {

quantum: [

{
q:"For a particle in a one-dimensional infinite potential well of width L, the energy of the nth state is proportional to:",
o:["n","n²","1/n","1/n²"],
a:1
},

{
q:"The eigenvalues of a Hermitian operator are always:",
o:["Complex","Real","Purely imaginary","Zero"],
a:1
},

{
q:"For a harmonic oscillator, the ground state energy is:",
o:["0","ℏω","ℏω/2","2ℏω"],
a:2
},

{
q:"The commutator [x,p] is:",
o:["0","iℏ","-iℏ","ℏ"],
a:1
},

{
q:"The parity of the nth harmonic oscillator state is:",
o:["Always even","Always odd","(-1)^n","n"],
a:2
},

{
q:"For an angular momentum eigenstate |l,m>, the eigenvalue of L² is:",
o:["ℏl","ℏm","ℏ²l(l+1)","ℏ²m²"],
a:2
}

],


electrodynamics: [

{
q:"The divergence of magnetic field B is:",
o:["ρ/ε₀","0","μ₀J","∇×B"],
a:1
},

{
q:"Gauss's law for electric field in differential form is:",
o:["∇·E=ρ/ε₀","∇×E=0","∇·E=0","∇×E=ρ"],
a:0
},

{
q:"The speed of electromagnetic waves in vacuum is:",
o:["√(μ₀ε₀)","1/√(μ₀ε₀)","μ₀/ε₀","ε₀/μ₀"],
a:1
},

{
q:"In an electromagnetic plane wave in vacuum, E and B are:",
o:["Parallel","Antiparallel","Perpendicular","Always zero"],
a:2
},

{
q:"The Poynting vector represents:",
o:["Charge density","Energy flux","Electric potential","Magnetic charge"],
a:1
},

{
q:"Faraday's law relates changing magnetic flux to:",
o:["Electric field circulation","Charge density","Mass","Temperature"],
a:0
}

],


classical: [

{
q:"The Euler-Lagrange equation is:",
o:["dL/dq=0","d/dt(∂L/∂q̇)-∂L/∂q=0","L=0","H=L"],
a:1
},

{
q:"For a cyclic coordinate, the corresponding generalized momentum is:",
o:["Always zero","Conserved","Infinite","Negative"],
a:1
},

{
q:"The Hamiltonian of a time-independent system is generally:",
o:["The kinetic energy only","The potential energy only","Conserved","Always zero"],
a:2
},

{
q:"For simple harmonic motion, acceleration is:",
o:["ωx","-ω²x","ω²x","constant"],
a:1
},

{
q:"The Poisson bracket {q,p} equals:",
o:["0","1","-1","ℏ"],
a:1
},

{
q:"In central force motion, angular momentum about the centre is:",
o:["Not conserved","Conserved","Always zero","Infinite"],
a:1
}

],


thermal: [

{
q:"For an ideal gas, internal energy depends only on:",
o:["Volume","Pressure","Temperature","Entropy"],
a:2
},

{
q:"For a reversible process, entropy change is:",
o:["dS=δQrev/T","dS=TδQ","dS=δW/T","Always zero"],
a:0
},

{
q:"The partition function is central to:",
o:["Quantum measurement only","Statistical mechanics","Classical optics","Electrostatics"],
a:1
},

{
q:"The chemical potential of an ideal photon gas is:",
o:["Positive","Negative","Zero","Infinite"],
a:2
},

{
q:"For a classical ideal gas, Cp-Cv equals:",
o:["R","0","γR","2R"],
a:0
},

{
q:"The Maxwell-Boltzmann distribution applies most directly to:",
o:["Highly degenerate bosons","Classical dilute gases","Photons only","Fermions at zero temperature"],
a:1
}

],


condensed: [

{
q:"The reciprocal lattice of a simple cubic lattice is:",
o:["FCC","BCC","Simple cubic","Hexagonal"],
a:2
},

{
q:"The number of atoms per conventional unit cell of FCC is:",
o:["1","2","4","8"],
a:2
},

{
q:"A completely filled energy band generally:",
o:["Conducts freely","Does not contribute to electrical conduction","Has infinite energy","Contains no electrons"],
a:1
},

{
q:"The Brillouin zone is constructed in:",
o:["Real space","Momentum space","Time space","Energy only"],
a:1
},

{
q:"Phonons are quanta of:",
o:["Electronic charge","Lattice vibrations","Magnetic field","Electric potential"],
a:1
},

{
q:"A semiconductor with donor impurities is called:",
o:["p-type","n-type","intrinsic","insulating"],
a:1
}

],


nuclear: [

{
q:"The nuclear force is approximately:",
o:["Long range","Short range","Infinite range","Purely electromagnetic"],
a:1
},

{
q:"Alpha decay changes the mass number by:",
o:["-1","-2","-4","+4"],
a:2
},

{
q:"Beta-minus decay converts a:",
o:["Proton into neutron","Neutron into proton","Neutron into neutron","Proton into proton"],
a:1
},

{
q:"Binding energy per nucleon is approximately maximum near:",
o:["Hydrogen","Iron","Uranium","Helium only"],
a:1
},

{
q:"The half-life is related to decay constant by:",
o:["T½=λ","T½=1/λ","T½=ln2/λ","T½=λ/ln2"],
a:2
},

{
q:"A nucleus with equal numbers of protons and neutrons has:",
o:["N=Z","N=2Z","Z=2N","N=0"],
a:0
}

],


atomic: [

{
q:"The orbital angular momentum quantum number for a p-state is:",
o:["0","1","2","3"],
a:1
},

{
q:"For an electric dipole transition, the orbital selection rule is:",
o:["Δl=0","Δl=±1","Δl=±2","Δl=±3"],
a:1
},

{
q:"The normal Zeeman effect arises from interaction with:",
o:["Electric field only","Magnetic field","Gravity","Temperature"],
a:1
},

{
q:"The principal quantum number primarily determines:",
o:["Orbital size and energy in hydrogen","Spin only","Nuclear charge","Magnetic field"],
a:0
},

{
q:"The spin of an electron is:",
o:["0","1/2","1","2"],
a:1
},

{
q:"The ground state of hydrogen has principal quantum number:",
o:["0","1","2","∞"],
a:1
}

],


mathematical: [

{
q:"The divergence of a curl is:",
o:["1","-1","Always zero","Infinite"],
a:2
},

{
q:"The curl of a gradient is:",
o:["Always zero","1","∞","The gradient"],
a:0
},

{
q:"The Fourier transform decomposes a function into:",
o:["Exponentials/waves","Only polynomials","Only constants","Matrices only"],
a:0
},

{
q:"The residue theorem is associated with:",
o:["Real mechanics","Complex analysis","Thermodynamics","Nuclear physics"],
a:1
},

{
q:"The Laplacian operator in Cartesian coordinates is:",
o:["∂x+∂y","∂²x+∂²y+∂²z","∂x∂y","x+y+z"],
a:1
},

{
q:"A function satisfying ∇²ψ=0 is called:",
o:["Harmonic","Periodic","Gaussian","Singular"],
a:0
}

]

};


/* =====================================================
   TEST CONFIGURATION
===================================================== */

const subjectNames = {

quantum:"Quantum Mechanics",
electrodynamics:"Electrodynamics",
classical:"Classical Mechanics",
thermal:"Thermal Physics",
condensed:"Condensed Matter",
nuclear:"Nuclear Physics",
atomic:"Atomic & Molecular Physics",
mathematical:"Mathematical Physics"

};


/* =====================================================
   GET TEST FROM URL
===================================================== */

const params =
new URLSearchParams(window.location.search);

const testId =
params.get("test") || "full-1";


/* =====================================================
   CREATE TEST
===================================================== */

function createTest(id){

    let questions = [];

    let title = "GATE Physics Mock Test";

    let time = 30;


    /* FULL LENGTH */

    if(id.startsWith("full-")){

        title =
        "GATE Physics Full Length Mock Test " +
        id.split("-")[1];

        time = 30;


        const subjects =
        Object.keys(questionBank);


        subjects.forEach(subject => {

            questions.push(
                ...questionBank[subject]
            );

        });


        /*
          We have a common pool.
          Shuffle and take 25.
        */

        questions =
        shuffle([...questions]).slice(0,25);

    }


    /* SUBJECT TEST */

    else{

        const parts =
        id.split("-");

        const subject =
        parts[0];

        const testNumber =
        parts[1];


        title =
        subjectNames[subject] +
        " Mock Test " +
        testNumber;

        time = 15;


        if(questionBank[subject]){

            questions =
            shuffle(
                [...questionBank[subject]]
            ).slice(0,10);

        }

    }


    return {
        title,
        time,
        questions
    };

}


/* =====================================================
   SHUFFLE
===================================================== */

function shuffle(array){

    for(let i=array.length-1;i>0;i--){

        const j =
        Math.floor(Math.random()*(i+1));

        [array[i],array[j]] =
        [array[j],array[i]];

    }

    return array;

}


/* =====================================================
   INITIALIZE
===================================================== */

const test =
createTest(testId);


let currentQuestion = 0;

let answers =
new Array(test.questions.length).fill(null);

let timeRemaining =
test.time * 60;

let timerInterval;


/* =====================================================
   ELEMENTS
===================================================== */

const titleElement =
document.getElementById("examTitle");

const questionNumber =
document.getElementById("questionNumber");

const questionText =
document.getElementById("questionText");

const optionsElement =
document.getElementById("options");

const progressBar =
document.getElementById("progressBar");

const palette =
document.getElementById("questionPalette");

const timer =
document.getElementById("timer");

const previousBtn =
document.getElementById("previousBtn");

const nextBtn =
document.getElementById("nextBtn");

const submitBtn =
document.getElementById("submitBtn");


titleElement.textContent =
test.title;


/* =====================================================
   RENDER QUESTION
===================================================== */

function renderQuestion(){

    const q =
    test.questions[currentQuestion];


    questionNumber.textContent =
    `Question ${currentQuestion+1} of ${test.questions.length}`;


    questionText.textContent =
    q.q;


    optionsElement.innerHTML = "";


    q.o.forEach((option,index)=>{

        const label =
        document.createElement("label");

        label.className =
        "option";


        if(answers[currentQuestion] === index){

            label.classList.add("selected");

        }


        label.innerHTML = `

        <input
        type="radio"
        name="answer"
        value="${index}"
        ${answers[currentQuestion] === index ? "checked":""}
        >

        <span class="option-letter">
        ${String.fromCharCode(65+index)}
        </span>

        <span class="option-text">
        ${option}
        </span>

        `;


        label.addEventListener("click",()=>{

            answers[currentQuestion] =
            index;

            renderQuestion();

            renderPalette();

        });


        optionsElement.appendChild(label);

    });


    const progress =
    ((currentQuestion+1)/test.questions.length)*100;


    progressBar.style.width =
    progress + "%";


    previousBtn.disabled =
    currentQuestion === 0;


    if(currentQuestion === test.questions.length-1){

        nextBtn.style.display =
        "none";

        submitBtn.style.display =
        "block";

    }

    else{

        nextBtn.style.display =
        "block";

        submitBtn.style.display =
        "none";

    }

}


/* =====================================================
   PALETTE
===================================================== */

function renderPalette(){

    palette.innerHTML = "";


    test.questions.forEach((_,index)=>{

        const button =
        document.createElement("button");


        button.textContent =
        index+1;


        if(answers[index] !== null){

            button.classList.add("answered");

        }


        if(index === currentQuestion){

            button.classList.add("current");

        }


        button.onclick = ()=>{

            currentQuestion =
            index;

            renderQuestion();

            renderPalette();

        };


        palette.appendChild(button);

    });

}


/* =====================================================
   NEXT
===================================================== */

nextBtn.onclick = ()=>{

    if(currentQuestion <
       test.questions.length-1){

        currentQuestion++;

        renderQuestion();

        renderPalette();

    }

};


/* =====================================================
   PREVIOUS
===================================================== */

previousBtn.onclick = ()=>{

    if(currentQuestion > 0){

        currentQuestion--;

        renderQuestion();

        renderPalette();

    }

};


/* =====================================================
   SUBMIT
===================================================== */

submitBtn.onclick =
()=>{

    const unanswered =
    answers.filter(
        answer => answer === null
    ).length;


    const message =
    unanswered > 0
    ?
    `You have ${unanswered} unanswered question(s). Submit anyway?`
    :
    "Submit your test?";


    if(confirm(message)){

        finishTest();

    }

};


/* =====================================================
   FINISH TEST
===================================================== */

function finishTest(){

    clearInterval(timerInterval);


    let correct = 0;

    let wrong = 0;

    let skipped = 0;


    test.questions.forEach((question,index)=>{

        if(answers[index] === null){

            skipped++;

        }

        else if(
            answers[index] === question.a
        ){

            correct++;

        }

        else{

            wrong++;

        }

    });


    const total =
    test.questions.length;


    const percentage =
    Math.round((correct/total)*100);


    document.getElementById("score")
    .textContent =
    percentage + "%";


    document.getElementById("correctCount")
    .textContent =
    correct;


    document.getElementById("wrongCount")
    .textContent =
    wrong;


    document.getElementById("unattemptedCount")
    .textContent =
    skipped;


    document.querySelector(".exam-page")
    .classList.add("blur-page");


    document.getElementById("resultScreen")
    .classList.remove("hidden");

}


/* =====================================================
   TIMER
===================================================== */

function startTimer(){

    updateTimer();


    timerInterval =
    setInterval(()=>{

        timeRemaining--;


        updateTimer();


        if(timeRemaining <= 0){

            clearInterval(timerInterval);

            alert("Time is over. Your test will be submitted.");

            finishTest();

        }

    },1000);

}


function updateTimer(){

    const minutes =
    Math.floor(timeRemaining/60);

    const seconds =
    timeRemaining%60;


    timer.textContent =
    `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;


    if(timeRemaining <= 60){

        timer.parentElement
        .classList.add("danger");

    }

}


/* =====================================================
   START
===================================================== */

renderQuestion();

renderPalette();

startTimer();
