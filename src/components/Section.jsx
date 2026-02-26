import React from 'react';

const Section = ({ children, id, className = "" }) => {
    return (
        <section id={id} className={`scroll-mt-24 py-16 md:py-20 lg:py-24 ${className}`}>
            <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
                {children}
            </div>
        </section>
    );
};

export default Section;
