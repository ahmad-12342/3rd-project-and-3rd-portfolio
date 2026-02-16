import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const experiences = [
    {
        year: '2025 - 2026',
        title: 'Full Stack Developer',
        company: 'Tech Innovations Inc.',
        description: 'Lead developer for high-performance web applications, managing both frontend and backend architectures.',
        type: 'work'
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section-padding bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
                    >
                        Success <span className="text-primary-600">Journey</span>
                    </motion.h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A quick look into my professional background and academic path.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line - Centered on MD, Left on Mobile */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 md:translate-x-0" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`flex flex-col md:flex-row items-start md:items-center justify-between w-full relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className="hidden md:block w-5/12" />

                                {/* Icon Circle - Left on Mobile, Center on MD */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 md:translate-x-1/2 top-0 md:top-auto z-10 bg-white dark:bg-slate-900 p-3 rounded-full border-4 border-slate-50 dark:border-slate-800 text-primary-600 shadow-xl">
                                    {exp.type === 'work' ? <FaBriefcase size={20} /> : <FaGraduationCap size={20} />}
                                </div>

                                <div className={`w-full md:w-5/12 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 hover:border-primary-500/50 transition-colors relative">
                                        {/* Mobile Arrow */}
                                        <div className="absolute top-4 -left-2 w-4 h-4 bg-white dark:bg-slate-900 rotate-45 border-l border-b border-slate-100 dark:border-slate-800 md:hidden"></div>

                                        <span className="text-sm font-bold text-primary-500 mb-2 block">{exp.year}</span>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{exp.title}</h3>
                                        <h4 className="text-slate-500 dark:text-slate-400 font-medium mb-4">{exp.company}</h4>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{exp.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
