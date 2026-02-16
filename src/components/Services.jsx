import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaSearch } from 'react-icons/fa';

const services = [
    {
        icon: <FaLaptopCode aria-hidden="true" />,
        title: 'Web Development',
        description: 'Custom websites built with modern technologies like React, Next.js, and Node.js.',
    },
    {
        icon: <FaMobileAlt aria-hidden="true" />,
        title: 'Responsive Design',
        description: 'Web applications that look and function flawlessly on all screen sizes and devices.',
    },
    {
        icon: <FaPaintBrush aria-hidden="true" />,
        title: 'UI/UX Design',
        description: 'Creating visually stunning and intuitive user interfaces that enhance user experience.',
    },
    {
        icon: <FaSearch aria-hidden="true" />,
        title: 'SEO Optimization',
        description: 'Implementing SEO best practices to improve your visibility on search engines.',
    },
];

const Services = () => {
    return (
        <section id="services" className="section-padding py-24 bg-slate-50 border-t border-slate-100 dark:bg-slate-900/50 dark:border-slate-800">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-primary mb-4 text-slate-900 dark:text-white">
                    My <span className="text-primary-600">Services</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    I provide a comprehensive range of web development services tailored to meet your unique needs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="group p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl hover:scale-105 transition-all text-center border border-slate-100 dark:border-slate-700"
                    >
                        <div className="mx-auto w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 flex items-center justify-center text-3xl mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">
                            {service.title}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
