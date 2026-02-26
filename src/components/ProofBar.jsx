import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const proofItems = ['ARED', 'CRDES', 'ANSD', 'J-PAL Europe', 'MITx Online'];

const ProofBar = () => {
    const { language } = useLanguage();

    return (
        <section className="bg-slate-50 border-y border-slate-200">
            <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16 py-8">
                <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-slate-600 text-sm mb-4 text-center"
                >
                    {getTranslation(language, 'proof.title')}
                </motion.p>

                <div className="flex flex-wrap gap-2.5 justify-center">
                    {proofItems.map((item, index) => (
                        <motion.span
                            key={item}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.04 }}
                            className="px-3 py-1.5 rounded-full bg-white text-slate-700 text-xs border border-slate-300"
                        >
                            {item}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProofBar;
