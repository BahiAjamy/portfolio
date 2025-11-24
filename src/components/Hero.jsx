import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Button from './Button';
import { PERSONAL_INFO } from '../constants';
import profilePhoto from '../assets/photo1.jpeg';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const Hero = () => {
    const { language } = useLanguage();

    return (
        <section id="about" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-teal-600 font-medium tracking-wider text-sm uppercase mb-4 block">
                            {getTranslation(language, 'hero.portfolio')}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
                            {getTranslation(language, 'hero.title')} <br />
                            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                                {getTranslation(language, 'hero.titleHighlight')}
                            </span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                            {getTranslation(language, 'hero.description')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Button href="#experience">
                                {getTranslation(language, 'hero.viewWork')} <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                            <Button variant="outline" href="/Ibrahima_BAH_CV_ENG_V2-4.pdf" download="Ibrahima_BAH_CV.pdf" target="_blank">
                                {getTranslation(language, 'hero.downloadCV')} <Download className="ml-2 w-4 h-4" />
                            </Button>
                        </div>

                        {/* Stats/Highlights */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-200 pt-8">
                            <div>
                                <h3 className="text-3xl font-bold text-slate-900">4+</h3>
                                <p className="text-slate-500 text-sm">{getTranslation(language, 'hero.stats.experience')}</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-slate-900">5+</h3>
                                <p className="text-slate-500 text-sm">{getTranslation(language, 'hero.stats.certifications')}</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-slate-900">10+</h3>
                                <p className="text-slate-500 text-sm">{getTranslation(language, 'hero.stats.projects')}</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-slate-900">100%</h3>
                                <p className="text-slate-500 text-sm">{getTranslation(language, 'hero.stats.accuracy')}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Photo Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Gradient Border Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl blur-xl opacity-25"></div>

                            {/* Photo Container */}
                            <div className="relative bg-gradient-to-br from-teal-500 to-blue-600 p-1.5 rounded-2xl shadow-xl">
                                <img
                                    src={profilePhoto}
                                    alt={PERSONAL_INFO.name}
                                    className="w-full max-w-md rounded-2xl object-cover aspect-square"
                                />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-500/15 rounded-full blur-2xl -z-10"></div>
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/15 rounded-full blur-2xl -z-10"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
