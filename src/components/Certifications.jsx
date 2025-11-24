import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, MapPin, Trophy } from 'lucide-react';
import Section from './Section';
import Card from './Card';
import { CERTIFICATIONS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const Certifications = () => {
    const { language } = useLanguage();

    return (
        <Section id="certifications" className="bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{getTranslation(language, 'certifications.title')}</h2>
                <div className="w-20 h-1 bg-teal-600 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {CERTIFICATIONS.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="h-full flex flex-col hover:border-teal-600/50 transition-all duration-300">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-start space-x-3">
                                    <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                                        <Award size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">
                                            {cert.name}
                                        </h3>
                                    </div>
                                </div>
                                {cert.link && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-teal-600 hover:text-teal-700 transition-colors flex-shrink-0 ml-2"
                                        aria-label={`View certificate for ${cert.name}`}
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                )}
                            </div>

                            <p className="text-sm text-blue-600 font-medium mb-3">{cert.issuer}</p>

                            {cert.description && (
                                <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow">
                                    {cert.description}
                                </p>
                            )}

                            <div className="mt-auto pt-4 border-t border-slate-200 space-y-2">
                                <div className="flex items-center text-xs text-slate-500">
                                    <Award className="w-3 h-3 mr-1" />
                                    <span>{cert.date}</span>
                                </div>

                                {cert.location && (
                                    <div className="flex items-center text-xs text-slate-500">
                                        <MapPin className="w-3 h-3 mr-1" />
                                        <span>{cert.location}</span>
                                    </div>
                                )}

                                {cert.score && (
                                    <div className="flex items-center text-xs text-teal-600 font-medium">
                                        <Trophy className="w-3 h-3 mr-1" />
                                        <span>Score: {cert.score}</span>
                                    </div>
                                )}

                                {cert.id && (
                                    <div className="text-xs text-slate-400 font-mono mt-2">
                                        ID: {cert.id}
                                    </div>
                                )}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Certifications;
