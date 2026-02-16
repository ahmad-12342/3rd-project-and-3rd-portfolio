import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaUserCircle } from 'react-icons/fa';

const testimonials = [
    {
        name: 'Mahad Khan',
        role: 'CEO at FinTech Solutions',
        content: "Ahmad is an exceptional developer. He took our complex requirements and turned them into a sleek, fast, and highly functional platform. Highly recommended!",
        stars: 5
    },
    {
        name: 'Hassan Khan',
        role: 'Marketing Director',
        content: "The attention to detail in his work is incredible. Our conversion rate increased by 25% after the redesign he implemented. A true professional.",
        stars: 5
    },
    {
        name: 'Shoaib Qureshi',
        role: 'Founder of Bloom',
        content: "Working with Ahmad was a breeze. He communicates clearly, meets deadlines, and writes clean, maintainable code. Perfect partner for any startup.",
        stars: 5
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="section-padding bg-slate-50 dark:bg-slate-900/30 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
                    >
                        What Clients <span className="text-primary-600">Say</span>
                    </motion.h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Don't just take my word for it. Here's what some of my amazing clients have to say about our collaboration.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 relative group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <FaQuoteLeft className="text-primary-500/10 text-6xl absolute top-6 right-8 group-hover:text-primary-500/20 transition-colors" />

                            <div className="flex gap-1 text-yellow-500 mb-6">
                                {[...Array(item.stars)].map((_, i) => <FaStar key={i} size={14} />)}
                            </div>

                            <p className="text-slate-600 dark:text-slate-300 mb-8 italic relative z-10 leading-relaxed">
                                "{item.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 border-2 border-primary-500 p-0.5">
                                    <FaUserCircle size={32} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.name}</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
