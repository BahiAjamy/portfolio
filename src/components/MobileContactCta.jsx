import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const MobileContactCta = () => {
    const { language } = useLanguage();

    return (
        <div className="md:hidden fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] inset-x-0 z-40 flex justify-center pointer-events-none">
            <a
                href="#contact"
                aria-label={getTranslation(language, 'contact.quickCta')}
                className="pointer-events-auto max-w-[92vw] inline-flex items-center gap-2 rounded-full bg-teal-500/95 backdrop-blur text-white px-5 py-3 shadow-lg shadow-teal-500/30 border border-teal-400/70"
            >
                <MessageCircle size={16} />
                <span className="text-sm font-medium">{getTranslation(language, 'contact.quickCta')}</span>
            </a>
        </div>
    );
};

export default MobileContactCta;
