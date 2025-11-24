import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import Section from './Section';
import Card from './Card';
import Button from './Button';
import { PERSONAL_INFO } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const Contact = () => {
    const { language } = useLanguage();

    return (
        <Section id="contact" className="bg-gray-50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{getTranslation(language, 'contact.title')}</h2>
                <div className="w-20 h-1 bg-teal-600 rounded-full mx-auto mb-6"></div>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    {getTranslation(language, 'contact.description')}
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">{getTranslation(language, 'contact.info')}</h3>
                    <div className="space-y-6">
                        <Card className="flex items-center space-x-4">
                            <div className="p-3 bg-teal-50 rounded-lg text-teal-600">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">{getTranslation(language, 'contact.emailLabel')}</p>
                                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-900 hover:text-teal-600 transition-colors">
                                    {PERSONAL_INFO.email}
                                </a>
                            </div>
                        </Card>

                        <Card className="flex items-center space-x-4">
                            <div className="p-3 bg-teal-50 rounded-lg text-teal-600">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">{getTranslation(language, 'contact.phoneLabel')}</p>
                                <p className="text-slate-900">{PERSONAL_INFO.phone}</p>
                            </div>
                        </Card>

                        <Card className="flex items-center space-x-4">
                            <div className="p-3 bg-teal-50 rounded-lg text-teal-600">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">{getTranslation(language, 'contact.locationLabel')}</p>
                                <p className="text-slate-900">{PERSONAL_INFO.location}</p>
                            </div>
                        </Card>

                        <Card className="flex items-center space-x-4">
                            <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                                <Linkedin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">{getTranslation(language, 'contact.linkedinLabel')}</p>
                                <a
                                    href={PERSONAL_INFO.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-900 hover:text-blue-600 transition-colors"
                                >
                                    {getTranslation(language, 'contact.viewProfile')}
                                </a>
                            </div>
                        </Card>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <form action="https://formspree.io/f/xkgagqak" method="post" className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">{getTranslation(language, 'contact.form.name')}</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-600 transition-colors"
                                placeholder={getTranslation(language, 'contact.form.namePlaceholder')}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">{getTranslation(language, 'contact.form.email')}</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-600 transition-colors"
                                placeholder={getTranslation(language, 'contact.form.emailPlaceholder')}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">{getTranslation(language, 'contact.form.message')}</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-600 transition-colors"
                                placeholder={getTranslation(language, 'contact.form.messagePlaceholder')}
                            ></textarea>
                        </div>
                        <Button className="w-full" type="submit">{getTranslation(language, 'contact.form.send')}</Button>
                    </form>
                </motion.div>
            </div>
        </Section>
    );
};

export default Contact;
