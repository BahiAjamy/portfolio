import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Button from './Button';
import { PERSONAL_INFO } from '../constants';
import profilePhoto from '../assets/photo1.webp';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const Hero = () => {
    const { language } = useLanguage();

    return (
        <section id="about" className="min-h-screen flex items-center justify-center pt-24 md:pt-20 relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-teal-600 font-medium tracking-wider text-sm uppercase mb-4 block">
                            {getTranslation(language, 'hero.portfolio')}
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            {getTranslation(language, 'hero.title')} <br />
                            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                                {getTranslation(language, 'hero.titleHighlight')}
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-slate-700 mb-8 max-w-xl">
                            {getTranslation(language, 'hero.description')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 md:mb-12">
                            <Button href="#experience">
                                {getTranslation(language, 'hero.viewWork')} <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                            <Button variant="outline" href="/CV_COMBINE_LV.pdf" download="Ibrahima_BAH_CV.pdf" target="_blank">
                                {getTranslation(language, 'hero.downloadCV')} <Download className="ml-2 w-4 h-4" />
                            </Button>
                        </div>

                        {/* Stats/Highlights */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 border-t border-slate-200 pt-6 md:pt-8">
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">5+</h3>
                                <p className="text-slate-600 text-sm">{getTranslation(language, 'hero.stats.experience')}</p>
                            </div>
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">5+</h3>
                                <p className="text-slate-600 text-sm">{getTranslation(language, 'hero.stats.certifications')}</p>
                            </div>
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">10+</h3>
                                <p className="text-slate-600 text-sm">{getTranslation(language, 'hero.stats.projects')}</p>
                            </div>
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">14</h3>
                                <p className="text-slate-600 text-sm">{getTranslation(language, 'hero.stats.regions')}</p>
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
                                    loading="eager"
                                    decoding="async"
                                    fetchPriority="high"
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
