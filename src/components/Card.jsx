import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = "" }) => {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            className={`bg-white border border-slate-200/90 rounded-2xl p-5 md:p-6 shadow-sm hover:border-teal-500/40 hover:shadow-md transition-all duration-200 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default Card;
