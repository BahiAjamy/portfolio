import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap, ExternalLink } from 'lucide-react';
import Section from './Section';
import Card from './Card';
import { EXPERIENCE, EDUCATION } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const Experience = () => {
    const { language } = useLanguage();

    return (
        <Section id="experience" className="bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{getTranslation(language, 'experience.title')}</h2>
                <div className="w-20 h-1 bg-teal-600 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Experience Column */}
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                        <Briefcase className="mr-3 text-teal-600" /> {getTranslation(language, 'experience.experienceTab')}
                    </h3>
                    <div className="space-y-8">
                        {EXPERIENCE.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8 border-l border-slate-300"
                            >
                                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-teal-600"></div>
                                <div className="mb-1 text-teal-600 font-medium">{job.role}</div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">{job.company}</h4>
                                <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {job.period}</span>
                                    <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {job.location}</span>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {job.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education Column */}
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                        <GraduationCap className="mr-3 text-blue-600" /> {getTranslation(language, 'experience.educationTab')}
                    </h3>
                    <div className="space-y-8">
                        {EDUCATION.map((edu, index) => (
                            <Card key={index} className="mb-6">
                                <div className="flex items-start justify-between mb-1">
                                    <div className="text-blue-600 font-medium flex-1">{edu.degree}</div>
                                    {edu.link && (
                                        <a
                                            href={edu.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-700 transition-colors ml-2"
                                            aria-label={`View certificate for ${edu.degree}`}
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{edu.institution}</h4>
                                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {edu.period}</span>
                                    <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {edu.location}</span>
                                </div>
                                {edu.details && (
                                    <div className="mt-3 text-slate-600 text-sm border-t border-slate-200 pt-3">
                                        {edu.details}
                                    </div>
                                )}
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Experience;
