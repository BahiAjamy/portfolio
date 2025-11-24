import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const Footer = () => {
    const { language } = useLanguage();

    return (
        <footer className="bg-white border-t border-slate-200 py-8">
            <div className="container mx-auto px-6 text-center">
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} Ibrahima BAH. {getTranslation(language, 'footer.rights')}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
