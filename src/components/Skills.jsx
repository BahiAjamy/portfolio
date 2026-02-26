import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import Card from './Card';
import { SKILLS, METHODS_HIGHLIGHTS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const Skills = () => {
    const { language } = useLanguage();

    return (
        <Section id="skills" className="bg-gray-50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{getTranslation(language, 'skills.title')}</h2>
                <div className="w-20 h-1 bg-teal-600 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SKILLS.map((category, index) => (
                    <Card key={index} className="h-full">
                        <h3 className="text-xl font-semibold text-teal-600 mb-6">{category.category}</h3>
                        <div className="flex flex-wrap gap-3">
                            {category.items.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 bg-white text-slate-700 text-sm rounded-full border border-slate-300 hover:border-teal-500 shadow-sm transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>

            <div className="mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{getTranslation(language, 'skills.methodsTitle')}</h3>
                    <p className="text-slate-600 max-w-3xl">{getTranslation(language, 'skills.methodsSubtitle')}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {METHODS_HIGHLIGHTS.map((method, index) => {
                        const Icon = method.icon;
                        return (
                            <motion.div
                                key={method.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.06 }}
                            >
                                <Card className="h-full border-teal-200/50">
                                    <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 border border-teal-100 flex items-center justify-center mb-4">
                                        <Icon size={20} />
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2">{method.title}</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">{method.description}</p>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};

export default Skills;
