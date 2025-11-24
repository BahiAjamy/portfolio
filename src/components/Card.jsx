import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = "" }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={`bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-teal-500/60 hover:shadow-lg transition-all duration-300 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default Card;
