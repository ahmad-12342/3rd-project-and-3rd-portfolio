import React from 'react';
import { motion } from 'framer-motion';

import AboutProfile from '../assets/about-profile.jpeg';

const About = () => {
    return (
        <section id="about" className="section-padding bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden rounded-2xl shadow-2xl group border-4 border-slate-100 dark:border-slate-800">
                        {/* Profile Image */}
                        <img
                            src={AboutProfile}
                            alt="Ahmad Profile"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </motion.div>

                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-primary mb-6 text-slate-900 dark:text-white">
                        About <span className="text-primary-600">Me</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                        I am a passionate <span className="font-semibold text-primary-500">Frontend Developer</span> with a knack for creating seamless, user-centric web applications. With a strong foundation in modern web technologies, I transform complex requirements into elegant, high-performance solutions.
                    </p>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                        My journey in web development is driven by a curiosity to learn and a commitment to excellence. Whether it's a simple landing page or a complex web app, I bring the same level of dedication and attention to detail.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                            <span className="block text-2xl font-bold text-primary-600 mb-1">50+</span>
                            <span className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</span>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                            <span className="block text-2xl font-bold text-primary-600 mb-1">30+</span>
                            <span className="text-sm text-slate-600 dark:text-slate-400">Happy Clients</span>
                        </div>
                    </div>

                    <a href="#contact" className="btn-primary">
                        Hire Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
