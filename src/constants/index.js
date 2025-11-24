import { ChartBar, Database, Map, Code, BookOpen, Users, Brain, Globe } from 'lucide-react';

export const PERSONAL_INFO = {
    name: "Ibrahima BAH",
    title: "Monitoring & Evaluation Specialist | Statistician & Data Analyst",
    email: "bahi1922@gmail.com",
    phone: "(+221) 77 148 66 00 / 76 854 66 00",
    location: "Dakar, Senegal",
    linkedin: "https://www.linkedin.com/in/ibrahima-bah-44448b133/",
    about: "4+ years in poverty & gender analytics, survey design, and impact evaluations (RCT & quasi-exp). Expert in SurveyCTO/ODK, R/Stata, dashboarding (Power BI/Rshiny) and GIS. Strong record leading baselines/midlines, sample & power calculations, and translating evidence into actionable program insights.",
};

export const EXPERIENCE = [
    {
        role: "Junior Monitoring and Evaluation Officer",
        company: "Associates in Research and Education for Development (ARED)",
        location: "Dakar, Senegal",
        period: "Since Nov 2024",
        description: "Assisted in the implementation and supervision of the monitoring and evaluation system for ARED's programs and projects, particularly the Ndaw Wune program. Lead of the midline evaluation of Ndaw Wune. Collected and analyzed data, managed performance indicators, and produced activity reports. Developed and managed a database for tracking the Ndaw Wune program. Ensured the quality of collected data and monitored the effectiveness of activities. Contributed to sample design and the digitization of data collection tools. Assisted in identifying and designing key indicators for other components of the Gates Program. Produced weekly and monthly reports for activity monitoring."
    },
    {
        role: "Research Assistant",
        company: "Centre for Economic and Social Research and Development (CRDES)",
        location: "Dakar, Senegal",
        period: "Since Nov 2024",
        description: "Supporting the FAME impact evaluation (Female Access to Male-dominated Employment), a large-scale RCT conducted by CRDES in collaboration with Stockholm School of Economics, Queen Mary University of London, J-PAL Europe, and research institutions in Luxembourg. Phase 1 (Nov 2024 - Feb 2025): Conducted literature reviews and drafted policy briefs on women's empowerment in male-dominated sectors. Organized stakeholder engagement meetings with ASAFIN and CEDAF. Planned and supervised focus group discussions with female vocational students, families, and firms. Phase 2 (May 2025 - Dec 2026): Leading preparatory work including ethics approvals, sample selection, and survey instrument development. Managing baseline data collection with willingness-to-pay elicitation module. Coordinating intervention implementation with ASAFIN across multiple cohorts. Overseeing follow-up surveys, data cleaning and validation. Conducting statistical analysis and drafting research reports for stakeholder dissemination."
    },
    {
        role: "Senior Research Officer",
        company: "National Agency for Statistics and Demography (ANSD)",
        location: "Dakar, Senegal",
        period: "May 2024 - Dec 2024",
        description: "Research assistant for the second and the third phase of the Harmonised Survey of Household Living Conditions (\"EHCVM- II\"). Authored comprehensive poverty report, synthesizing data insights to inform national policies. Conducted in-depth analyses on the dynamics of poverty, on multidimensional poverty and the development of poverty maps to better understand regional disparities and target interventions. Preparation of the next phase of the poverty survey."
    },
    {
        role: "Project Manager Assistant",
        company: "nLine",
        location: "Dakar & Kaolack, Senegal",
        period: "Apr 2024 - May 2024",
        description: "Assisted in managing the logistics and planning for data collection, improving the overall process efficiency. Trained and supervised data collectors, ensuring high-quality data entry. Monitored the data collection progress to ensure compliance with deadlines and quality standards."
    },
    {
        role: "Junior Research Officer",
        company: "National Agency for Statistics and Demography (ANSD)",
        location: "Dakar, Senegal",
        period: "Jul 2021 - Oct 2023",
        description: "Research assistant for the second phase of the Harmonised Survey of Household Living Conditions (\"EHCVM - II\"). Logistical management and planning of data collection. Training of data collectors, weekly reporting and drafting of monthly reports. Contributing to data cleansing and analysis for the national poverty report."
    },
    {
        role: "Consultant",
        company: "Expertise France",
        location: "Dakar, Senegal",
        period: "Dec 2021 - Mar 2022",
        description: "Management and planning of data collection for the REF project. Training of data collectors, daily field monitoring, and weekly reporting. Contributed to data cleansing."
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
        degree: "Master's Degree in Statistics and Economics Applied to Development",
        institution: "Gaston Berger University (UGB)",
        location: "Saint-Louis, Senegal",
        period: "2021 - 2023",
        details: "Thesis: 'The Impact of Internal Migration on Poverty: Empirical Evidence from Senegal'."
    },
    {
        degree: "Bachelor's Degree in Statistics and Economic Planning",
        institution: "Gaston Berger University (UGB)",
        location: "Saint-Louis, Senegal",
        period: "2018 - 2021",
        details: "Coursework: Statistics, Econometrics, Demography, Mathematics."
    },
    {
        degree: "High School Diploma (Baccalauréat) in Science",
        institution: "Almamy Samori Toure High School",
        location: "Labé, Guinea",
        period: "2017 - 2018",
        details: "Specialization: Experimental Sciences."
    }
];

export const PROJECTS = {
    professional: [
        {
            name: "Ndaw Wune",
            description: "Midline evaluation of the Ndaw Wune program (ARED). The Ndaw Wune program is a youth economic empowerment intervention implemented in urban and rural areas of Senegal.",
            tools: ["ODK", "R", "Stata", "Power BI", "QGIS"],
            link: null
        },
        {
            name: "FAME Impact Evaluation",
            description: "Female Access to Male-dominated Employment - Large-scale RCT evaluating interventions to increase women's participation in male-dominated sectors in Senegal.",
            tools: ["SurveyCTO", "R", "Stata"],
            link: null
        },
        {
            name: "Poverty Mapping and Analysis",
            description: "Development of comprehensive poverty maps and multidimensional poverty analysis for Senegal using EHCVM-II data.",
            tools: ["R", "Stata", "QGIS", "Power BI"],
            link: null
        },
        {
            name: "Gender-Responsive Budgeting Dashboard",
            description: "Interactive dashboard for tracking gender-responsive budget allocations across sectors in Senegal.",
            tools: ["Power BI", "R"],
            link: null
        }
    ],
    academic: [
        {
            name: "Impact of Internal Migration on Poverty",
            description: "Master's thesis examining the causal relationship between internal migration and poverty reduction in Senegal using propensity score matching.",
            tools: ["Stata", "R"]
        },
        {
            name: "COVID-19 Impact on Household Welfare",
            description: "Analysis of COVID-19's effects on household consumption and welfare using difference-in-differences estimation.",
            tools: ["Stata", "Excel"]
        },
        {
            name: "Gender Wage Gap Analysis",
            description: "Econometric analysis of gender wage disparities in Senegal's formal sector using Oaxaca-Blinder decomposition.",
            tools: ["Stata", "R"]
        },
        {
            name: "Agricultural Productivity Determinants",
            description: "Study on factors affecting agricultural productivity in rural Senegal using stochastic frontier analysis.",
            tools: ["Stata"]
        },
        {
            name: "Education Access and Quality",
            description: "Assessment of education access and quality across regions using multilevel modeling techniques.",
            tools: ["R", "Stata"]
        },
        {
            name: "Health Service Utilization",
            description: "Analysis of determinants of health service utilization among vulnerable populations.",
            tools: ["Stata", "SPSS"]
        }
    ]
};

export const CERTIFICATIONS = [
    {
        name: "Evaluating Social Programs",
        issuer: "Massachusetts Institute of Technology (MITx Online)",
        date: "Aug - Dec 2023",
        id: "0e1145ed-f680-44e1-bfe3-3135fc34c6dc",
        link: "https://mitxonline.mit.edu/certificates/0e1145ed-f680-44e1-bfe3-3135fc34c6dc"
    },
    {
        name: "Gender Indicator Calculation Workshop",
        issuer: "World Bank",
        location: "Dakar, Senegal",
        date: "Sep 2024",
        description: "Intensive workshop on designing, calculating, and interpreting gender-disaggregated indicators for development projects."
    },
    {
        name: "Gender Responsive Economic Policy Management",
        issuer: "African Institute for Economic Development and Planning (IDEP)",
        date: "Dec 2023",
        id: "Certificate ID: GREPM/2023/230",
        description: "Training on integrating gender perspectives into economic policy analysis and design."
    }
];

export const SKILLS = [
    {
        category: "Data Analysis & Statistics",
        items: [
            "R (ggplot2, dplyr, tidyr)",
            "Stata (advanced)",
            "SPSS",
            "Python (pandas, NumPy)",
            "Excel (advanced)"
        ]
    },
    {
        category: "Dashboarding & Visualization",
        items: [
            "Power BI",
            "R Shiny",
            "Tableau"
        ]
    },
    {
        category: "Survey & Data Collection",
        items: [
            "SurveyCTO",
            "ODK",
            "KoBoToolbox",
            "Survey Design",
            "Questionnaire Development"
        ]
    },
    {
        category: "Geospatial Analysis",
        items: [
            "QGIS",
            "ArcGIS",
            "Spatial Analysis",
            "Mapping"
        ]
    },
    {
        category: "Impact Evaluation Methods",
        items: [
            "RCT Design",
            "Difference-in-Differences",
            "Propensity Score Matching",
            "Regression Discontinuity",
            "Power Calculations"
        ]
    },
    {
        category: "Programming & Tools",
        items: [
            "Git/GitHub",
            "LaTeX",
            "Markdown",
            "VS Code"
        ]
    }
];
