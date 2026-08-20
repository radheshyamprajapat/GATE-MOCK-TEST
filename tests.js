window.TEST_CATALOG = {
  subjects: [
    {
      id: "quantum",
      name: "Quantum Mechanics",
      icon: "⚛️",
      description: "Wave mechanics, operators, angular momentum, perturbation theory.",
      tests: [
        {
          id: "quantum-test-1",
          name: "Quantum Mechanics Mock Test 1",
          file: "questions/quantum-test-1.js",
          questionsCount: 2,
          duration: 30,
          marks: 3,
          difficulty: "Medium"
        },
        {
          id: "quantum-test-2",
          name: "Quantum Mechanics Mock Test 2",
          file: "questions/quantum-test-2.js",
          questionsCount: 2,
          duration: 30,
          marks: 3,
          difficulty: "Hard"
        }
      ]
    },
    {
      id: "mechanics",
      name: "Classical Mechanics",
      icon: "🪐",
      description: "Lagrangian & Hamiltonian dynamics, central forces, rigid bodies.",
      tests: [
        {
          id: "mechanics-test-1",
          name: "Classical Mechanics Mock Test 1",
          file: "questions/mechanics-test-1.js",
          questionsCount: 1,
          duration: 20,
          marks: 2,
          difficulty: "Easy"
        }
      ]
    },
    {
      id: "electrodynamics",
      name: "Electrodynamics",
      icon: "⚡",
      description: "Electrostatics, Maxwell equations, electromagnetic waves, radiation.",
      tests: [
        {
          id: "electrodynamics-test-1",
          name: "Electrodynamics Mock Test 1",
          file: "questions/electrodynamics-test-1.js",
          questionsCount: 1,
          duration: 20,
          marks: 1,
          difficulty: "Medium"
        }
      ]
    },
    {
      id: "mathphysics",
      name: "Mathematical Physics",
      icon: "∑",
      description: "Complex variables, linear algebra, differential equations, Fourier series.",
      tests: []
    },
    {
      id: "thermo",
      name: "Thermodynamics & Statistical Physics",
      icon: "🔥",
      description: "Ensembles, Fermi-Dirac & Bose-Einstein statistics, phase transitions.",
      tests: []
    },
    {
      id: "condensed",
      name: "Condensed Matter Physics",
      icon: "🔬",
      description: "Crystal structures, band theory, superconductivity, semiconductors.",
      tests: []
    },
    {
      id: "nuclear",
      name: "Nuclear & Particle Physics",
      icon: "☢️",
      description: "Nuclear models, radioactive decay, elementary particles & symmetries.",
      tests: []
    },
    {
      id: "atomic",
      name: "Atomic & Molecular Physics",
      icon: "🌌",
      description: "Zeeman effect, Stark effect, rotational/vibrational spectra, lasers.",
      tests: []
    }
  ]
};
