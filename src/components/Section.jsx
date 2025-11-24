import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, id, className = "" }) => {
    return (
        <section id={id} className={`py-24 ${className}`}>
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                {children}
            </div>
        </section>
    );
};

export default Section;
