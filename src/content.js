export const LANGS = ['ca', 'es', 'en']

export const links = {
  email: 'hector_alvarez_perez@outlook.es',
  github: 'https://github.com/HectorAlvarezPerez',
  linkedin: 'https://www.linkedin.com/in/hector-alvarez-perez',
}

const cvcLinks = [
  { label: 'ATTA', href: 'https://github.com/HectorAlvarezPerez/ATTA' },
  { label: 'LoRA', href: 'https://github.com/HectorAlvarezPerez/LoRA-for-semantic-segmentation' },
]

export const content = {
  ca: {
    title: 'Héctor Álvarez Pérez — AI Engineer',
    role: 'AI Engineer',
    place: 'Barcelona',
    intro: "Construint solucions d'IA des de zero.",
    sections: {
      work: 'Experiència',
      projects: 'Projectes',
      education: 'Formació',
      contact: 'Contacte',
    },
    work: [
      {
        company: 'Haddock',
        role: 'AI Engineer · Agents i automatitzacions internes',
        period: 'Abr 2026 — Ara',
        points: [
          'Suport que respon sol i sap quan passar el cas a una persona.',
          'Ningú explicava què canviava al producte. Ara ho fa un changelog automàtic.',
          "Alguns feien servir Claude a la seva manera i altres ni el feien servir. Ajudo tothom a treballar-hi perquè tot l'equip rendeixi al 10x.",
          "La feina administrativa manual i repetitiva frenava l'equip. Ara la resolen panells i automatitzacions.",
        ],
      },
      {
        company: 'Aily Labs',
        role: 'Machine Learning Engineer (pràctiques)',
        period: 'Oct 2024 — Mar 2026',
        points: [
          "Agents d'IA que donen als equips de Finances i Supply Chain informació en temps real i en conversa.",
          "Pipelines de MLOps a AWS que van reduir el temps de desplegament dels models i van mantenir la plataforma global sempre disponible.",
          "Col·laboració amb equips multidisciplinaris per integrar senyals predictius a l'aplicació principal.",
        ],
      },
      {
        company: 'Altia-IN2',
        role: 'Data Scientist (pràctiques)',
        period: 'Jul — Ago 2024',
        points: [
          'Pipeline de dades sintètiques en formats mèdics, per poder provar complint la privacitat.',
          'Automatització de punta a punta amb n8n per simplificar el processament intern de dades.',
        ],
      },
      {
        company: 'CVC',
        role: 'AI Research (pràctiques)',
        period: 'Oct 2023 — Feb 2024',
        points: [
          'Recerca en adaptació de domini per a segmentació semàntica.',
          'Fine-tuning de models de segmentació amb LoRA sobre dades sintètiques, reduint el cost de càlcul sense perdre precisió.',
          "Active Test-Time Adaptation (ATTA) per millorar el rendiment amb mal temps amb mínima interacció de l'usuari.",
        ],
        links: cvcLinks,
      },
    ],
    projects: [
      {
        name: 'Finance Foundation',
        desc: "Finances personals sense fulls de càlcul: pressupostos, inversions i categorització amb IA.",
        href: 'https://github.com/HectorAlvarezPerez/finance-foundation',
      },
      {
        name: 'Fitness App',
        desc: 'Registre d’entrenaments ràpid des del mòbil, amb progrés i rècords.',
        href: 'https://github.com/HectorAlvarezPerez/fitness-app',
      },
    ],
    education: {
      school: 'Universitat Autònoma de Barcelona',
      degree: 'Grau en Matemàtica Computacional i Analítica de Dades',
      period: 'Juny 2026',
    },
    contactIntro: 'Parlem?',
  },

  es: {
    title: 'Héctor Álvarez Pérez — AI Engineer',
    role: 'AI Engineer',
    place: 'Barcelona',
    intro: 'Construyendo soluciones de IA desde cero.',
    sections: {
      work: 'Experiencia',
      projects: 'Proyectos',
      education: 'Formación',
      contact: 'Contacto',
    },
    work: [
      {
        company: 'Haddock',
        role: 'AI Engineer · Agentes y automatizaciones internas',
        period: 'Abr 2026 — Ahora',
        points: [
          'Soporte que responde solo y sabe cuándo pasar el caso a una persona.',
          'Nadie explicaba qué cambiaba en el producto. Ahora lo hace un changelog automático.',
          'Algunos usaban Claude a su manera y otros ni lo usaban. Ayudo a todos a trabajar con él para que todo el equipo rinda al 10x.',
          'El trabajo administrativo manual y repetitivo frenaba al equipo. Ahora lo resuelven paneles y automatizaciones.',
        ],
      },
      {
        company: 'Aily Labs',
        role: 'Machine Learning Engineer (prácticas)',
        period: 'Oct 2024 — Mar 2026',
        points: [
          'Agentes de IA que dan a los equipos de Finanzas y Supply Chain información en tiempo real y en conversación.',
          'Pipelines de MLOps en AWS que redujeron el tiempo de despliegue de los modelos y mantuvieron la plataforma global siempre disponible.',
          'Colaboración con equipos multidisciplinares para integrar señales predictivas en la aplicación principal.',
        ],
      },
      {
        company: 'Altia-IN2',
        role: 'Data Scientist (prácticas)',
        period: 'Jul — Ago 2024',
        points: [
          'Pipeline de datos sintéticos en formatos médicos, para poder probar cumpliendo la privacidad.',
          'Automatización de punta a punta con n8n para simplificar el procesamiento interno de datos.',
        ],
      },
      {
        company: 'CVC',
        role: 'AI Research (prácticas)',
        period: 'Oct 2023 — Feb 2024',
        points: [
          'Investigación en adaptación de dominio para segmentación semántica.',
          'Fine-tuning de modelos de segmentación con LoRA sobre datos sintéticos, reduciendo el coste de cómputo sin perder precisión.',
          'Active Test-Time Adaptation (ATTA) para mejorar el rendimiento con mal tiempo con mínima interacción del usuario.',
        ],
        links: cvcLinks,
      },
    ],
    projects: [
      {
        name: 'Finance Foundation',
        desc: 'Finanzas personales sin hojas de cálculo: presupuestos, inversiones y categorización con IA.',
        href: 'https://github.com/HectorAlvarezPerez/finance-foundation',
      },
      {
        name: 'Fitness App',
        desc: 'Registro de entrenamientos rápido desde el móvil, con progreso y récords.',
        href: 'https://github.com/HectorAlvarezPerez/fitness-app',
      },
    ],
    education: {
      school: 'Universitat Autònoma de Barcelona',
      degree: 'Grado en Matemática Computacional y Analítica de Datos',
      period: 'Junio 2026',
    },
    contactIntro: '¿Hablamos?',
  },

  en: {
    title: 'Héctor Álvarez Pérez — AI Engineer',
    role: 'AI Engineer',
    place: 'Barcelona',
    intro: 'Building AI solutions from scratch.',
    sections: {
      work: 'Experience',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
    },
    work: [
      {
        company: 'Haddock',
        role: 'AI Engineer · Internal agents and automations',
        period: 'Apr 2026 — Present',
        points: [
          'Support that answers on its own and knows when to hand over to a person.',
          'Nobody explained what changed in the product. Now an automatic changelog does it.',
          'Some people used Claude their own way, and some not at all. I help everyone work with it, so the whole team performs at 10x.',
          'Manual, repetitive admin work slowed the team down. Dashboards and automations now handle it.',
        ],
      },
      {
        company: 'Aily Labs',
        role: 'Machine Learning Engineer (intern)',
        period: 'Oct 2024 — Mar 2026',
        points: [
          'AI agents that give Finance and Supply Chain teams real-time, conversational insights.',
          'MLOps pipelines on AWS that cut model deployment time and kept the global platform highly available.',
          'Worked with cross-functional teams to integrate predictive signals into the core application.',
        ],
      },
      {
        company: 'Altia-IN2',
        role: 'Data Scientist (intern)',
        period: 'Jul — Aug 2024',
        points: [
          'Synthetic data pipeline for medical formats, enabling privacy-compliant testing.',
          'End-to-end automation with n8n to streamline internal data processing.',
        ],
      },
      {
        company: 'CVC',
        role: 'AI Research (intern)',
        period: 'Oct 2023 — Feb 2024',
        points: [
          'Research on domain adaptation for semantic segmentation.',
          'LoRA fine-tuning of segmentation models on synthetic data, cutting compute without losing accuracy.',
          'Active Test-Time Adaptation (ATTA) to improve performance in challenging weather with minimal user interaction.',
        ],
        links: cvcLinks,
      },
    ],
    projects: [
      {
        name: 'Finance Foundation',
        desc: 'Personal finance without spreadsheets: budgets, investments and AI categorization.',
        href: 'https://github.com/HectorAlvarezPerez/finance-foundation',
      },
      {
        name: 'Fitness App',
        desc: 'Fast workout logging from your phone, with progress and personal records.',
        href: 'https://github.com/HectorAlvarezPerez/fitness-app',
      },
    ],
    education: {
      school: 'Universitat Autònoma de Barcelona',
      degree: 'BSc in Computational Mathematics and Data Analysis',
      period: 'June 2026',
    },
    contactIntro: "Let's talk.",
  },
}
