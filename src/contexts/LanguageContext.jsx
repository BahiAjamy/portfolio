import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

const getInitialLanguage = () => {
    if (typeof window === 'undefined') return 'en';
    try {
        const saved = window.localStorage.getItem('portfolio-language');
        return saved === 'fr' ? 'fr' : 'en';
    } catch {
        return 'en';
    }
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(getInitialLanguage);

    useEffect(() => {
        try {
            window.localStorage.setItem('portfolio-language', language);
        } catch {
            // Ignore storage write errors in restricted/private environments.
        }
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'fr' : 'en');
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
