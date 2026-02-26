import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Folder, ExternalLink, Calendar, Wrench, FlaskConical } from 'lucide-react';
import Section from './Section';
import Card from './Card';
import { PROJECTS, CASE_STUDIES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const Projects = () => {
    const { language } = useLanguage();
    const [showAllAcademic, setShowAllAcademic] = useState(false);

    const displayedAcademic = showAllAcademic
        ? PROJECTS.academic
        : PROJECTS.academic.slice(0, 3);

    return (
        <Section id="projects" className="bg-gray-50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 md:mb-16"
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">{getTranslation(language, 'projects.title')}</h2>
                <div className="w-20 h-1 bg-teal-600 rounded-full"></div>
            </motion.div>

            {/* Featured Case Studies */}
            <div className="mb-16">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center">
                    <FlaskConical className="mr-3 text-teal-600" /> {getTranslation(language, 'projects.caseStudies')}
                </h3>
                <p className="text-slate-700 mb-6 md:mb-8 max-w-3xl">{getTranslation(language, 'projects.caseStudiesSubtitle')}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {CASE_STUDIES.map((study, index) => (
                        <motion.div
                            key={study.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                        >
                            <Card className="h-full flex flex-col border-teal-200/60">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h4 className="text-xl font-bold text-teal-600 mb-1">{study.name}</h4>
                                        <p className="text-sm text-slate-500">{study.organization}</p>
                                    </div>
                                    {study.link && (
                                        <a
                                            href={study.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-teal-600 hover:text-teal-700 transition-colors"
                                            aria-label={`Visit ${study.name}`}
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>

                                <div className="flex items-center text-sm text-slate-600 mb-5">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {study.period}
                                </div>

                                <div className="space-y-4 mb-5">
                                    <div>
                                        <p className="text-xs uppercase tracking-wide font-semibold text-teal-600 mb-1">
                                            {getTranslation(language, 'projects.contextLabel')}
                                        </p>
                                        <p className="text-sm text-slate-700">{study.context}</p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-wide font-semibold text-teal-600 mb-1">
                                            {getTranslation(language, 'projects.methodLabel')}
                                        </p>
                                        <p className="text-sm text-slate-700">{study.method}</p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-wide font-semibold text-teal-600 mb-1">
                                            {getTranslation(language, 'projects.resultsLabel')}
                                        </p>
                                        <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                                            {study.results.map((result, idx) => (
                                                <li key={idx}>{result}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-200">
                                    {study.tools.map((tool, idx) => (
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

            {/* Other Professional Projects */}
            <div className="mb-16">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 md:mb-8 flex items-center">
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
                                        <p className="text-sm text-slate-500">{project.organization}</p>
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

                                <div className="flex items-center text-sm text-slate-600 mb-4">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {project.period}
                                </div>

                                <p className="text-slate-700 text-sm mb-4 flex-grow">
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
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 md:mb-8 flex items-center">
                    <Wrench className="mr-3 text-teal-600" /> {getTranslation(language, 'projects.academic')}
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
                            <Card className="h-full flex flex-col hover:border-teal-600/50 transition-all duration-300">
                                <div className="mb-3">
                                    <span className="text-xs text-teal-600 font-medium">
                                        {project.category}
                                    </span>
                                    <h4 className="text-lg font-bold text-slate-900 mt-1">
                                        {project.name}
                                    </h4>
                                </div>

                                <div className="flex items-center text-sm text-slate-600 mb-3">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    {project.period}
                                </div>

                                <p className="text-slate-700 text-sm mb-4 flex-grow">
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
                {PROJECTS.academic.length > 3 && (
                    <div className="text-center mt-8">
                        <button
                            onClick={() => setShowAllAcademic(!showAllAcademic)}
                            className="px-6 py-3 bg-white text-slate-700 rounded-lg border-2 border-slate-300 hover:border-teal-600 hover:text-teal-600 transition-all duration-300"
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
