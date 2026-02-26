export const translations = {
    en: {
        nav: {
            about: "About",
            experience: "Experience",
            skills: "Skills",
            projects: "Projects",
            certifications: "Certifications",
            contact: "Contact",
            cta: "Let's Talk"
        },
        hero: {
            portfolio: "Portfolio",
            title: "Turning Data into",
            titleHighlight: "Actionable Insights",
            description: "Monitoring & Evaluation Specialist | Statistician & Data Analyst. I specialize in poverty & gender analytics, survey design, and impact evaluations to drive evidence-based decision making.",
            viewWork: "View My Work",
            downloadCV: "Download CV",
            stats: {
                experience: "Years Experience",
                certifications: "MITx Certifications",
                projects: "Projects",
                accuracy: "Data Accuracy",
                regions: "Regions Covered"
            }
        },
        proof: {
            title: "Trusted across public institutions, research organizations, and international evaluation partners."
        },
        impact: {
            title: "Impact Snapshot",
            subtitle: "Selected delivery and evaluation metrics from recent programs.",
            scholarships: "Scholarships targeted",
            learners: "Learners covered in Ndaw Wune cycles",
            classes: "Classes covered in Ndaw Wune cycles",
            households: "Households surveyed",
            regions: "Regions covered",
            enumerators: "Enumerators deployed",
            indicators: "KPIs tracked monthly",
            sites: "Implementation sites",
            fieldTeams: "Teachers and supervisors coordinated"
        },
        skills: {
            title: "Technical Expertise",
            methodsTitle: "Methods in Practice",
            methodsSubtitle: "How I run monitoring and evaluation work from design to decision."
        },
        experience: {
            title: "Professional Journey",
            experienceTab: "Experience",
            educationTab: "Education",
            showOlder: "Show Older Roles",
            showRecent: "Show Fewer Roles"
        },
        projects: {
            title: "Projects",
            professional: "Other Professional Projects",
            caseStudies: "Featured Case Studies",
            caseStudiesSubtitle: "Priority projects with full context, methodology, and measurable outputs.",
            contextLabel: "Context",
            methodLabel: "Method",
            resultsLabel: "Results",
            academic: "Academic Projects",
            showAll: "Show All",
            showLess: "Show Less"
        },
        certifications: {
            title: "Certifications"
        },
        contact: {
            title: "Get In Touch",
            description: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
            info: "Contact Information",
            primaryCta: "Start a Conversation",
            secondaryCta: "Connect on LinkedIn",
            quickCta: "Contact Me",
            emailLabel: "Email Me",
            phoneLabel: "Call Me",
            locationLabel: "Location",
            linkedinLabel: "LinkedIn",
            viewProfile: "View Profile",
            form: {
                name: "Name",
                namePlaceholder: "Your Name",
                email: "Email",
                emailPlaceholder: "Your Email",
                message: "Message",
                messagePlaceholder: "Your Message",
                send: "Send Message"
            }
        },
        footer: {
            rights: "All rights reserved."
        }
    },
    fr: {
        nav: {
            about: "À propos",
            experience: "Expérience",
            skills: "Compétences",
            projects: "Projets",
            certifications: "Certifications",
            contact: "Contact",
            cta: "Discutons"
        },
        hero: {
            portfolio: "Portfolio",
            title: "Transformer les Données en",
            titleHighlight: "Insights Actionnables",
            description: "Spécialiste Suivi & Évaluation | Statisticien & Analyste de Données. Je me spécialise dans l'analyse de la pauvreté et du genre, la conception d'enquêtes et les évaluations d'impact pour une prise de décision basée sur les preuves.",
            viewWork: "Voir Mes Travaux",
            downloadCV: "Télécharger CV",
            stats: {
                experience: "Années d'Expérience",
                certifications: "Certifications MITx",
                projects: "Projets",
                accuracy: "Précision des Données",
                regions: "Régions Couvertes"
            }
        },
        proof: {
            title: "Références issues d'institutions publiques, d'organisations de recherche et de partenaires internationaux d'évaluation."
        },
        impact: {
            title: "Impact en Chiffres",
            subtitle: "Indicateurs clés issus des missions récentes de suivi, d'évaluation et d'analyse.",
            scholarships: "Bourses ciblées",
            learners: "Apprenants couverts dans les cycles Ndaw Wune",
            classes: "Classes couvertes dans les cycles Ndaw Wune",
            households: "Ménages enquêtés",
            regions: "Régions couvertes",
            enumerators: "Enquêteurs déployés",
            indicators: "KPIs suivis mensuellement",
            sites: "Sites d'implémentation",
            fieldTeams: "Enseignants et superviseurs coordonnés"
        },
        skills: {
            title: "Expertise Technique",
            methodsTitle: "Méthodes Appliquées",
            methodsSubtitle: "Comment j'exécute les travaux de suivi-évaluation, de la conception à la décision."
        },
        experience: {
            title: "Parcours Professionnel",
            experienceTab: "Expérience",
            educationTab: "Formation",
            showOlder: "Afficher les anciens postes",
            showRecent: "Afficher moins de postes"
        },
        projects: {
            title: "Projets",
            professional: "Autres Projets Professionnels",
            caseStudies: "Études de Cas Mises en Avant",
            caseStudiesSubtitle: "Projets prioritaires avec contexte, méthode et résultats mesurables.",
            contextLabel: "Contexte",
            methodLabel: "Méthode",
            resultsLabel: "Résultats",
            academic: "Projets Académiques",
            showAll: "Tout Afficher",
            showLess: "Afficher Moins"
        },
        certifications: {
            title: "Certifications"
        },
        contact: {
            title: "Me Contacter",
            description: "Je suis toujours ouvert à discuter de nouveaux projets, d'idées créatives ou d'opportunités pour faire partie de vos visions.",
            info: "Informations de Contact",
            primaryCta: "Démarrer une Discussion",
            secondaryCta: "Se connecter sur LinkedIn",
            quickCta: "Me Contacter",
            emailLabel: "M'Envoyer un Email",
            phoneLabel: "M'Appeler",
            locationLabel: "Localisation",
            linkedinLabel: "LinkedIn",
            viewProfile: "Voir le Profil",
            form: {
                name: "Nom",
                namePlaceholder: "Votre Nom",
                email: "Email",
                emailPlaceholder: "Votre Email",
                message: "Message",
                messagePlaceholder: "Votre Message",
                send: "Envoyer le Message"
            }
        },
        footer: {
            rights: "Tous droits réservés."
        }
    }
};

export const getTranslation = (language, key) => {
    const keys = key.split('.');
    let value = translations[language];

    for (const k of keys) {
        value = value?.[k];
    }

    return value || key;
};
