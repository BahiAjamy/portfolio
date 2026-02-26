import { ChartBar, Database, Map, Code, BookOpen, Users, Brain, Globe } from 'lucide-react';

export const PERSONAL_INFO = {
    name: "Ibrahima BAH",
    title: "Monitoring & Evaluation Specialist | Statistician & Data Analyst",
    email: "bahi1922@gmail.com",
    phone: "(+221) 77 148 66 00 / 76 854 66 00",
    location: "Dakar, Senegal",
    linkedin: "https://www.linkedin.com/in/ibrahima-bah-44448b133/",
    about: "5+ years in poverty & gender analytics, survey design, and impact evaluations (RCT & quasi-exp). Expert in SurveyCTO/ODK, R/Stata, dashboarding (Power BI/R Shiny), and GIS. Strong record leading baselines/midlines, sample & power calculations, and translating evidence into actionable program insights.",
};

export const IMPACT_METRICS = [
    { key: "scholarships", value: "400", icon: BookOpen },
    { key: "learners", value: "8,400", icon: Users },
    { key: "classes", value: "280", icon: Globe },
    { key: "households", value: "7,200+", icon: Users },
    { key: "enumerators", value: "170+", icon: Brain },
    { key: "regions", value: "14", icon: Map },
];

export const EXPERIENCE = [
    {
        role: "Junior Monitoring and Evaluation Officer",
        company: "Associates in Research and Education for Development (ARED)",
        location: "Dakar, Senegal",
        period: "Nov 2024 - Present",
        highlights: [
            "Pilot the M&E system for Ndaw Wune School Year, delivered in 2024-2025 and currently being implemented again in 2025-2026.",
            "School-year scope across two cycles (2024-2025 and 2025-2026): 200 classes, 192 schools, 200 tutors, and 6,000 students.",
            "Vacation cycle 2025 scope tracked: 80 classes, 67 schools, 80 tutors, and 2,400 students; now supporting 2026 vacation preparation.",
            "Built and maintain KPI reporting workflows for management and field supervisors."
        ]
    },
    {
        role: "Research Assistant",
        company: "Centre for Economic and Social Research and Development (CRDES)",
        location: "Dakar, Senegal",
        period: "Nov 2024 - Present",
        highlights: [
            "Co-implemented FAME, an RCT targeting 400 scholarships for women entering male-dominated trades.",
            "Co-led phase-2 baseline operations with a Willingness-to-Pay module: survey design/piloting, enumerator training, field deployment, and quality spot checks.",
            "Coordinated intervention and follow-up preparation across cohorts, including treatment/control tracking and synthesis reports."
        ]
    },
    {
        role: "Senior Research Officer",
        company: "National Agency for Statistics and Demography (ANSD)",
        location: "Dakar, Senegal",
        period: "May 2024 - Dec 2024",
        highlights: [
            "Contributed to phases 2 and 3 of EHCVM-II and co-authored multidimensional poverty analyses and regional poverty maps.",
            "Produced analytical notes used to prepare the next national poverty survey cycle and support policy discussions."
        ]
    },
    {
        role: "Project Manager Assistant",
        company: "nLine",
        location: "Dakar & Kaolack, Senegal",
        period: "Apr 2024 - May 2024",
        highlights: [
            "Managed operational planning and logistics for multi-site data collection activities in Dakar and Kaolack.",
            "Trained and supervised 18 enumerators, then tracked daily progress against quality and timeline targets."
        ]
    },
    {
        role: "Junior Research Officer",
        company: "National Agency for Statistics and Demography (ANSD)",
        location: "Dakar, Senegal",
        period: "Jul 2021 - Oct 2023",
        highlights: [
            "Supported EHCVM-II phase 2 implementation, including field logistics, team training, and monitoring reports.",
            "Trained and coordinated 170 enumerators across all 14 regions of Senegal, covering 7,200 households.",
            "Delivered weekly and monthly monitoring notes and contributed to data-cleaning workflows for the national poverty report."
        ]
    },
    {
        role: "Consultant",
        company: "Partnership for African Social and Governance Research (PASGR)",
        location: "Dakar, Senegal",
        period: "Jan 2023",
        description: "Set up data collection application using Survey CTO for the survey \"Young Women and Men's Aspirations and Resilience: Prospects for Livelihoods, Employment, and Accountability before, during and beyond COVID-19\"."
    },
    {
        role: "Research Assistant",
        company: "Centre for Economic and Social Research and Development (CRDES)",
        location: "Dakar, Senegal",
        period: "Jul 2022 - Feb 2023",
        description: "Setting up data collection applications through survey CTO, monitoring the collection of various surveys, processing and clearing data, outputting and analysing results."
    },
    {
        role: "Research Assistant",
        company: "Consortium for Economic and Social Research (CRES)",
        location: "Dakar, Senegal",
        period: "Feb 2021 - Jun 2021",
        description: "Implementation of a carbon tax: \"Use of the Energy Balance and SAM to assess the level of CO2 emissions from sectors and products\". Monitoring and data processing of the survey \"Resilience of the informal food economy to the test of COVID-19: What lessons can be learned from the experience of the large Dakar metropolis?\""
    },
    {
        role: "Junior Research Officer",
        company: "National Agency for Statistics and Demography (ANSD)",
        location: "Dakar, Senegal",
        period: "Dec 2020 - Feb 2021",
        description: "Junior researcher: Assistance with the production of the data collection application, supervision of the data collection, data clearance and output of results for the \"Benevolat\" labour survey co-conducted with the ILO."
    },
    {
        role: "Research Assistant",
        company: "Institute for Research and Development (IRD), LPED",
        location: "Dakar, Senegal",
        period: "Jul 2020 - Nov 2020",
        description: "Production of wealth indicators by factorial methods, analysis of evolution & study of the determining factors of poverty."
    }
];

export const METHODS_HIGHLIGHTS = [
    {
        title: "KPI Framework Design and RBM",
        description: "Define indicators, baselines, targets, and reporting cadence so management and field teams can make fast, evidence-based decisions.",
        icon: ChartBar
    },
    {
        title: "Survey Operations and Data Quality",
        description: "Design digital tools, train enumerators, monitor field execution, and run spot checks to secure reliable datasets from the first wave.",
        icon: Database
    },
    {
        title: "Impact Evaluation Workflow",
        description: "Operationalize RCT and quasi-experimental studies from sampling and ethics preparation to treatment/control tracking and follow-up design.",
        icon: Brain
    },
    {
        title: "Policy Reporting and Storytelling",
        description: "Translate analysis into dashboards, briefs, and actionable recommendations for program managers, donors, and public stakeholders.",
        icon: BookOpen
    }
];

export const EDUCATION = [
    {
        degree: "MicroMaster in Data, Economics, and Design of Policy: International Development",
        institution: "Massachusetts Institute of Technology (MITx Online)",
        location: "Cambridge, USA",
        period: "Jan 2024 - Aug 2025",
        details: "5 certifications",
        link: "https://mitxonline.mit.edu/certificate/program/cb33094e-e0df-4904-8111-f59eefd515c3/"
    },
    {
        degree: "Master 2 Decision Support and Evaluation of Public Policies",
        institution: "Paris Dauphine University / National School of Statistics and Economic Analysis (ENSAE)",
        location: "Dakar, Senegal",
        period: "Oct 2023 - Jul 2024",
        details: ""
    },
    {
        degree: "Statistical Engineer",
        institution: "National School of Statistics and Economic Analysis (ENSAE)",
        location: "Dakar, Senegal",
        period: "Oct 2016 - Jun 2020",
        details: ""
    },
    {
        degree: "High School Graduation",
        institution: "Blaise DIAGNE High School",
        location: "Dakar, Senegal",
        period: "Oct 2013 - Jul 2016",
        details: ""
    }
];

export const PROJECTS = {
    professional: [
        {
            name: "Poverty Mapping and Analysis",
            organization: "ANSD",
            period: "May 2024 - Dec 2024",
            description: "Development of comprehensive poverty maps and multidimensional poverty analysis for Senegal using EHCVM-II data.",
            tools: ["R", "Stata", "QGIS", "Power BI"],
            link: null
        },
        {
            name: "Gender-Responsive Budgeting Dashboard",
            organization: "Personal Project",
            period: "2024",
            description: "Interactive dashboard for tracking gender-responsive budget allocations across sectors in Senegal.",
            tools: ["Power BI", "R"],
            link: null
        }
    ],
    academic: [
        {
            name: "Mise en place d'une application web de gestion de la scolarité",
            category: "Base de données avancées",
            period: "Fev 2020",
            description: "La réalisation d'une application web dans le cadre du cours de Base de données avancées.",
            tools: ["Web App", "Database"]
        },
        {
            name: "Utilisation des Outils Hadoop pour la regression logistique",
            category: "Big Data",
            period: "Jan 2020",
            description: "Utiliser les techniques des Big Data pour les etudes économétriques.",
            tools: ["Hadoop", "Regression Logistique"]
        },
        {
            name: "Établissement d'un modele de prédiction d'une maladie",
            category: "Data Mining",
            period: "Jan 2020",
            description: "Utiliser les techniques du Data Mining.",
            tools: ["Data Mining", "Prediction"]
        },
        {
            name: "Construction d'un Indicateur de développement durable IDD",
            category: "Analyse Multidimensionnelle",
            period: "Juin 2019",
            description: "Pour les pays d'Afrique au sud du Sahara, Par l'utilisation des techniques d'analyse multidimensionnelle.",
            tools: ["SPAD", "R", "MS Excel avancé"]
        },
        {
            name: "Modélisation du PIB du Bénin de 1980 à 2018",
            category: "Séries Temporelles",
            period: "Juin 2019",
            description: "Une approche économétrique par l'utilisation des modèles ARMA MCE des séries temporelles, collectif.",
            tools: ["R"]
        },
        {
            name: "Dossier d'économie: La Finance Islamique",
            category: "Économie",
            period: "Mars 2019",
            description: "Enjeux et Perspectives.",
            tools: ["Recherche"]
        },
        {
            name: "Mise en place d'une application de tirage d'échantillon",
            category: "Sondage",
            period: "Fév 2019",
            description: "Par les différentes méthodes probabilistes.",
            tools: ["Microsoft Excel-VBA"]
        },
        {
            name: "Les déterminants des dépenses en santé des ménages sénégalais",
            category: "Économétrie",
            period: "Jan 2019",
            description: "Une approche économétrique par l'utilisation d'une regression multiple linéaire.",
            tools: ["STATA"]
        },
        {
            name: "Mise en place d'une application de gestion du restaurant de l'ANSD",
            category: "Base de données",
            period: "Juin 2018",
            description: "Application de gestion.",
            tools: ["Microsoft Access", "Power AMC", "Visual Basic"]
        },
        {
            name: "Mise en place d'une application d'analyses statistiques descriptives",
            category: "Programmation",
            period: "Jan 2018",
            description: "Analyses univariées et bivariées d'une série de données.",
            tools: ["Langage C"]
        },
        {
            name: "Analyse du niveau d'insalubrité des ménages de Louga",
            category: "Statistiques Descriptives",
            period: "Juin 2017",
            description: "Mémoire statistiques descriptives première année.",
            tools: ["SPSS"]
        },
        {
            name: "Dossier d'économie: Situation Économique et Sociale du Sénégal",
            category: "Économie",
            period: "Jan 2017",
            description: "Analyse de la situation économique et sociale.",
            tools: ["Recherche"]
        }
    ]
};

export const CERTIFICATIONS = [
    {
        name: "Evaluating Social Programs",
        issuer: "Massachusetts Institute of Technology (MITx Online)",
        date: "Aug - Dec 2023",
        id: "0e1145ed-f680-44e1-bfe3-3135fc34c6dc",
        link: "https://mitxonline.mit.edu/certificate/0e1145ed-f680-44e1-bfe3-3135fc34c6dc/"
    },
    {
        name: "Gender Indicator Calculation Workshop",
        issuer: "World Bank",
        location: "Lomé, Togo",
        date: "Oct 2023",
        description: "Using the Harmonized Household Living Standard Survey (EHCVM II). Awarded by World Bank Strengthening Gender Statistics (SGS) Project."
    },
    {
        name: "Gender Responsive Economic Policy Management",
        issuer: "African Institute for Economic Development and Planning (IDEP)",
        date: "10 Dec 2024",
        id: "G3PX074Zmc",
        description: "Sponsored and Executed by the African Institute for Economic Development and Planning (IDEP), and is certified as a competent person in this area."
    }
];

export const CASE_STUDIES = [
    {
        name: "Ndaw Wune Impact Evaluation",
        organization: "ARED",
        period: "Nov 2024 - Present",
        context: "Multilingual remedial education program with two sub-programs: School Year and Vacation cycles.",
        method: "Led M&E implementation for School Year 2024-2025 and 2025-2026, and supported preparation for Vacation 2026 through planning, tracking frameworks, and monitoring workflows.",
        results: [
            "School Year scope delivered across two cycles: 200 classes, 192 schools, 200 tutors, and 6,000 students.",
            "Vacation 2025 scope tracked: 80 classes, 67 schools, 80 tutors, and 2,400 students.",
            "Monitoring and reporting cadence established to support implementation decisions and 2026 preparation."
        ],
        tools: ["ODK", "R", "Stata", "Power BI", "QGIS"],
        link: "https://ared-edu.org/en/education/"
    },
    {
        name: "FAME RCT Operations",
        organization: "CRDES / J-PAL Europe",
        period: "Nov 2024 - Present",
        context: "RCT on women's access to male-dominated employment in Senegal, targeting 400 scholarships.",
        method: "Co-led ethics and sampling preparation, designed and piloted baseline and Willingness-to-Pay instruments, and delivered phase-2 baseline operations.",
        results: [
            "Enumerator training and baseline deployment completed with quality spot checks.",
            "Treatment/control tracking workflow and follow-up cohort plan put in place.",
            "First-round data cleaning and validation outputs delivered for analysis and reporting."
        ],
        tools: ["SurveyCTO", "R", "Stata"],
        link: null
    }
];

export const SKILLS = [
    {
        category: "Data Analysis",
        items: [
            "STATA",
            "R & Shiny",
            "PYTHON",
            "SPSS",
            "POWER BI",
            "TABLEAU",
            "QGIS",
            "ARCGIS"
        ]
    },
    {
        category: "Data Collection",
        items: [
            "CSPRO",
            "ODK",
            "SurveyCTO",
            "KoboToolbox",
            "Survey Solution",
            "CommCare"
        ]
    },
    {
        category: "Methodological",
        items: [
            "ANOVA",
            "Econometrics",
            "Poverty Analysis",
            "Modelling",
            "Sampling",
            "Impact Evaluation (RCT, DID, RDD, IV, PSM)",
            "MEL",
            "DB Management",
            "Machine Learning",
            "Scoring",
            "Dashboard",
            "GIS",
            "Gender analysis",
            "EGRA",
            "EGMA"
        ]
    },
    {
        category: "Other Software",
        items: [
            "LaTeX",
            "Pack Microsoft Office",
            "MS-Project"
        ]
    },
    {
        category: "Soft Skills",
        items: [
            "Motivator & Leader",
            "Time management",
            "Problem solving"
        ]
    },
    {
        category: "Languages",
        items: [
            "French (Native)",
            "English (Professional)",
            "Arabic (Intermediate)"
        ]
    }
];
