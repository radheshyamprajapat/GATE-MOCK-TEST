window.MOCK = {
  title: "Quantum Mechanics Mock Test 1 (GATE PYQs)",
  subject: "Quantum Mechanics",
  duration: 45,
  questions: [
    {
      q: "Which of the following functions represents an acceptable wavefunction of the particle in the range $-\\infty \\le x \\le \\infty$?",
      o: [
        "$\\psi(x) = A\\tan x, A > 0$",
        "$\\psi(x) = B\\cos x, B$ is real",
        "$\\psi(x) = C\\exp(-x^2), C$ is real",
        "$\\psi(x) = D\\exp(x), D > 0$"
      ],
      a: 2,
      m: 1,
      negative: 0.33
    },
    {
      q: "The expectation value of $\\hat{A}$ for the state $\\psi = (3\\psi_1 + 4\\psi_2)/5$ (where $\\psi_1, \\psi_2$ are orthonormal eigenfunctions of $\\hat{A}$ with eigenvalues $1$ and $0$ respectively) is:",
      o: [
        "-0.32",
        "0.0",
        "0.75",
        "0.36"
      ],
      a: 3,
      m: 1,
      negative: 0.33
    },
    {
      q: "The normalized wavefunctions $\\psi_1$ and $\\psi_2$ correspond to the ground state and the first excited state of a particle in a potential. You are given the information that the operator $\\hat{A}$ acts on the wavefunctions as $\\hat{A}\\psi_1 = \\psi_2$ and $\\hat{A}\\psi_2 = \\psi_1$. Which of the following are eigenfunctions of $\\hat{A}^2$?",
      o: [
        "\\(\\psi_1\\) and \\(\\psi_2\\)",
        "\\(\\psi_2\\) and not \\(\\psi_1\\)",
        "\\(\\psi_1\\) and not \\(\\psi_2\\)",
        "neither \\(\\psi_1\\) nor \\(\\psi_2\\)"
      ],
      a: 0,
      m: 1,
      negative: 0.33
    },
    {
      q: "A particle is located in a three-dimensional cubic well of width $L$ with impenetrable walls. The sum of the energies of the third and the fourth levels is:",
      o: [
        "$10\\pi^2\\hbar^2 / mL^2$",
        "$10\\pi^2\\hbar^2 / 3mL^2$",
        "$11\\pi^2\\hbar^2 / 2mL^2$",
        "$15\\pi^2\\hbar^2 / 2mL^2$"
      ],
      a: 2,
      m: 2,
      negative: 0.66
    },
    {
      q: "A particle is located in a three-dimensional cubic well of width $L$ with impenetrable walls. The degeneracy of the fourth level is given by:",
      o: [
        "1",
        "2",
        "3",
        "4"
      ],
      a: 2,
      m: 1,
      negative: 0.33
    },
    {
      q: "The wave function of a spin-less particle of mass $m$ in a one-dimensional potential $V(x)$ is $\\psi(x) = A\\exp(-\\alpha^2 x^2)$ corresponding to an eigenvalue $E_0 = \\hbar^2 \\alpha^2 / m$. The potential $V(x)$ is:",
      o: [
        "$2E_0(1 - \\alpha^2 x^2)$",
        "$2E_0(1 + \\alpha^2 x^2)$",
        "$2E_0 \\alpha^2 x^2$",
        "$2E_0(1 + 2\\alpha^2 x^2)$"
      ],
      a: 2,
      m: 2,
      negative: 0.66
    },
    {
      q: "A particle is confined to the region $0 < x < L$ in one dimension. If the particle is in the first excited state, then the probability of finding the particle is maximum at:",
      o: [
        "$x = L/6$",
        "$x = L/2$",
        "$x = L/3$",
        "$x = L/4$ and $3L/4$"
      ],
      a: 3,
      m: 1,
      negative: 0.33
    },
    {
      q: "A particle is confined to the region $0 < x < L$ in one dimension. If the particle is in the lowest energy state, then the probability of finding the particle in the region $0 < x < L/4$ is:",
      o: [
        "$\\frac{1}{4} - \\frac{1}{2\\pi}$",
        "$\\frac{1}{4}$",
        "$\\frac{1}{4} + \\frac{1}{2\\pi}$",
        "$\\frac{1}{2}$"
      ],
      a: 0,
      m: 2,
      negative: 0.66
    },
    {
      q: "A free particle is moving in $+x$-direction with a linear momentum $p$. The wavefunction of the particle normalized in a length $L$ is:",
      o: [
        "$\\frac{1}{\\sqrt{L}}\\sin\\left(\\frac{p}{\\hbar}x\\right)$",
        "$\\frac{1}{\\sqrt{L}}\\cos\\left(\\frac{p}{\\hbar}x\\right)$",
        "$\\frac{1}{\\sqrt{L}}e^{-i\\frac{p}{\\hbar}x}$",
        "$\\frac{1}{\\sqrt{L}}e^{i\\frac{p}{\\hbar}x}$"
      ],
      a: 3,
      m: 1,
      negative: 0.33
    },
    {
      q: "The wavefunction of a particle in a one-dimensional potential at time $t = 0$ is $\\psi(x, t=0) = \\frac{1}{\\sqrt{5}}[2\\psi_0(x) - \\psi_1(x)]$, where $\\psi_0(x)$ and $\\psi_1(x)$ are the ground and first excited states with energies $E_0$ and $E_1$. The wavefunction of the particle at time $t$ is:",
      o: [
        "$\\frac{1}{\\sqrt{5}}e^{-\\frac{i(E_0+E_1)t}{2\\hbar}}[2\\psi_0(x) - \\psi_1(x)]$",
        "$\\frac{1}{\\sqrt{5}}e^{-\\frac{iE_0t}{\\hbar}}[2\\psi_0(x) - \\psi_1(x)]$",
        "$\\frac{1}{\\sqrt{5}}e^{-\\frac{iE_1t}{\\hbar}}[2\\psi_0(x) - \\psi_1(x)]$",
        "$\\frac{1}{\\sqrt{5}}\\left[2\\psi_0(x)e^{-\\frac{iE_0t}{\\hbar}} - \\psi_1(x)e^{-\\frac{iE_1t}{\\hbar}}\\right]$"
      ],
      a: 3,
      m: 2,
      negative: 0.66
    },
    {
      q: "The wavefunction of a particle, moving in a one-dimensional time-independent potential $V(x)$, is given by $\\psi(x) = e^{-iax + b}$, where $a$ and $b$ are constants. This means that the potential $V(x)$ is of the form:",
      o: [
        "$V(x) \\propto x$",
        "$V(x) \\propto x^2$",
        "$V(x) = 0$",
        "$V(x) \\propto e^{-ax}$"
      ],
      a: 2,
      m: 2,
      negative: 0.66
    }
  ]
};
