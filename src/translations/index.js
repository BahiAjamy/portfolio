export const translations = {
    en: {
        nav: {
            about: "About",
            experience: "Experience",
            skills: "Skills",
            projects: "Projects",
            certifications: "Certifications",
            contact: "Contact"
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
                accuracy: "Data Accuracy"
            }
        },
        skills: {
            title: "Technical Expertise"
        },
        experience: {
            title: "Professional Journey",
            experienceTab: "Experience",
            educationTab: "Education"
        },
        projects: {
            title: "Projects",
            professional: "Professional Projects",
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
            contact: "Contact"
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
                accuracy: "Précision des Données"
            }
        },
        skills: {
            title: "Expertise Technique"
        },
        experience: {
            title: "Parcours Professionnel",
            experienceTab: "Expérience",
            educationTab: "Formation"
        },
        projects: {
            title: "Projets",
            professional: "Projets Professionnels",
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
