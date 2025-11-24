import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Folder, ExternalLink, Calendar, Wrench } from 'lucide-react';
import Section from './Section';
import Card from './Card';
import { PROJECTS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const Projects = () => {
    const { language } = useLanguage();
    const [showAllAcademic, setShowAllAcademic] = useState(false);

    const displayedAcademic = showAllAcademic
        ? PROJECTS.academic
        : PROJECTS.academic.slice(0, 6);

    return (
        <Section id="projects" className="bg-gray-50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{getTranslation(language, 'projects.title')}</h2>
                <div className="w-20 h-1 bg-teal-600 rounded-full"></div>
            </motion.div>

            {/* Professional Projects */}
            <div className="mb-16">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                    <Folder className="mr-3 text-teal-600" /> {getTranslation(language, 'projects.professional')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROJECTS.professional.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col hover:border-teal-600/50 transition-all duration-300">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h4 className="text-xl font-bold text-teal-600 mb-1">
                                            {project.name}
                                        </h4>
                                        <p className="text-sm text-slate-400">{project.organization}</p>
                                    </div>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-teal-600 hover:text-teal-700 transition-colors"
                                            aria-label={`Visit ${project.name}`}
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>

                                <div className="flex items-center text-sm text-slate-500 mb-4">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {project.period}
                                </div>

                                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-200">
                                    {project.tools.map((tool, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded border border-teal-200"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Academic Projects */}
            <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                    <Wrench className="mr-3 text-blue-600" /> {getTranslation(language, 'projects.academic')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedAcademic.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Card className="h-full flex flex-col hover:border-blue-600/50 transition-all duration-300">
                                <div className="mb-3">
                                    <span className="text-xs text-blue-600 font-medium">
                                        {project.category}
                                    </span>
                                    <h4 className="text-lg font-bold text-slate-900 mt-1">
                                        {project.name}
                                    </h4>
                                </div>

                                <div className="flex items-center text-xs text-slate-500 mb-3">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    {project.period}
                                </div>

                                <p className="text-slate-600 text-xs leading-relaxed mb-4 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-slate-200">
                                    {project.tools.map((tool, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs rounded border border-slate-300"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Show More/Less Button */}
                {PROJECTS.academic.length > 6 && (
                    <div className="text-center mt-8">
                        <button
                            onClick={() => setShowAllAcademic(!showAllAcademic)}
                            className="px-6 py-3 bg-white text-slate-700 rounded-lg border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                        >
                            {showAllAcademic ? getTranslation(language, 'projects.showLess') : `${getTranslation(language, 'projects.showAll')} ${PROJECTS.academic.length} ${getTranslation(language, 'projects.title')}`}
                        </button>
                    </div>
                )}
            </div>
        </Section>
    );
};

export default Projects;
