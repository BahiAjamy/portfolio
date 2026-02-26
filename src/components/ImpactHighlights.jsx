import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import Card from './Card';
import { IMPACT_METRICS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const ImpactHighlights = () => {
    const { language } = useLanguage();

    return (
        <Section id="impact" className="bg-gradient-to-b from-white to-slate-50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10 md:mb-12"
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4">{getTranslation(language, 'impact.title')}</h2>
                <p className="text-slate-700 max-w-3xl">{getTranslation(language, 'impact.subtitle')}</p>
                <div className="w-20 h-1 bg-teal-600 rounded-full mt-5"></div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {IMPACT_METRICS.map((metric, index) => {
                    const Icon = metric.icon;
                    return (
                        <motion.div
                            key={metric.key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Card className="h-full bg-white/95 border-slate-200/80">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">{metric.value}</div>
                                    <div className="p-2 rounded-lg bg-teal-50 text-teal-600 border border-teal-100">
                                        <Icon size={20} />
                                    </div>
                                </div>
                                <p className="text-sm text-slate-700">{getTranslation(language, `impact.${metric.key}`)}</p>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
};

export default ImpactHighlights;
