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
        "$\\psi(x) = C e^{-x^2}, C$ is real",
        "$\\psi(x) = D e^{x}, D > 0$"
      ],
      a: 2,
      m: 1,
      negative: 0.33
    },
    {
      q: "The expectation value of $\\hat{A}$ for the state $\\psi = (3\\psi_1 + 4\\psi_2)/5$ (where $\\psi_1, \\psi_2$ are orthonormal eigenfunctions with eigenvalues 1 and 0) is:",
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
      q: "The normalized wavefunctions $\\psi_1$ and $\\psi_2$ correspond to the ground state and first excited state. If $\\hat{A}\\psi_1 = \\psi_2$ and $\\hat{A}\\psi_2 = \\psi_1$, which are eigenfunctions of $\\hat{A}^2$?",
      o: [
        "$\\psi_1$ and $\\psi_2$",
        "$\\psi_2$ and not $\\psi_1$",
        "$\\psi_1$ and not $\\psi_2$",
        "neither $\\psi_1$ nor $\\psi_2$"
      ],
      a: 0,
      m: 1,
      negative: 0.33
    },
    {
      q: "A particle is located in a 3D cubic well of width $L$ with impenetrable walls. The sum of the energies of the third and the fourth levels is:",
      o: [
        "$\\frac{10\\pi^2\\hbar^2}{mL^2}$",
        "$\\frac{10\\pi^2\\hbar^2}{3mL^2}$",
        "$\\frac{11\\pi^2\\hbar^2}{2mL^2}$",
        "$\\frac{15\\pi^2\\hbar^2}{2mL^2}$"
      ],
      a: 2,
      m: 2,
      negative: 0.66
    },
    {
      q: "A particle is located in a 3D cubic well of width $L$ with impenetrable walls. The degeneracy of the fourth level is given by:",
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
      q: "The wavefunction of a particle of mass $m$ in 1D is $\\psi(x) = A e^{-\\alpha^2 x^2}$ with energy $E_0 = \\frac{\\hbar^2 \\alpha^2}{m}$. The potential $V(x)$ is:",
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
      q: "A particle is confined to $0 < x < L$. In the first excited state, the probability of finding the particle is maximum at:",
      o: [
        "$x = L/6$",
        "$x = L/2$",
        "$x = L/3$",
        "$x = L/4$ and $x = 3L/4$"
      ],
      a: 3,
      m: 1,
      negative: 0.33
    },
    {
      q: "A particle is confined to $0 < x < L$. In the lowest energy state, the probability of finding the particle in $0 < x < L/4$ is:",
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
      q: "A free particle is moving in $+x$-direction with linear momentum $p$. The wavefunction normalized in length $L$ is:",
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
      q: "The wavefunction at $t=0$ is $\\psi(x,0) = \\frac{1}{\\sqrt{5}}[2\\psi_0(x) - \\psi_1(x)]$. The wavefunction at time $t$ is:",
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
      q: "The wavefunction in a 1D time-independent potential is $\\psi(x) = e^{-iax + b}$. The potential $V(x)$ is of the form:",
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
