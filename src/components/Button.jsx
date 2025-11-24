import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, href, variant = 'primary', className = "", target, download, type = "button" }) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300";
    const variants = {
        primary: "bg-teal-500 text-white hover:bg-teal-600 shadow-lg shadow-teal-500/30 hover:shadow-xl",
        outline: "border-2 border-teal-500 text-teal-600 hover:bg-teal-50 hover:border-teal-600",
        ghost: "text-slate-600 hover:text-teal-600"
    };

    const Component = href ? motion.a : motion.button;
    const props = href ? { href, target, download } : { onClick, type };

    return (
        <Component
            {...props}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </Component>
    );
};

export default Button;
