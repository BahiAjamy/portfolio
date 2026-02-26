import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: getTranslation(language, 'nav.about'), href: '#about' },
        { name: getTranslation(language, 'nav.experience'), href: '#experience' },
        { name: getTranslation(language, 'nav.skills'), href: '#skills' },
        { name: getTranslation(language, 'nav.projects'), href: '#projects' },
        { name: getTranslation(language, 'nav.certifications'), href: '#certifications' },
        { name: getTranslation(language, 'nav.contact'), href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/98 backdrop-blur-lg border-b border-slate-200 shadow-md py-3 md:py-4' : 'bg-white/90 backdrop-blur-md py-4 md:py-6'}`}>
            <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                    IB.
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-7">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="inline-flex items-center rounded-full bg-teal-500 text-white px-4 py-2 text-sm font-medium hover:bg-teal-600 transition-colors shadow-sm"
                    >
                        {getTranslation(language, 'nav.cta')}
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-3">
                    <button
                        className="text-slate-700 hover:text-teal-600"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-slate-200 shadow-md overflow-hidden"
                    >
                        <div className="px-6 py-4 space-y-4 flex flex-col">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-700 hover:text-teal-600 py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="mt-1 inline-flex items-center justify-center rounded-lg bg-teal-500 text-white px-4 py-2.5 text-sm font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {getTranslation(language, 'nav.cta')}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
