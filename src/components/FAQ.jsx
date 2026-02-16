import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
    {
        question: 'What is your typical project timeline?',
        answer: 'Most projects take between 2-4 weeks depending on complexity. Small websites can be delivered in 7-10 days.'
    },
    {
        question: 'Do you offer post-launch support?',
        answer: 'Yes! All my pricing plans include support ranging from 1 to 6 months to ensure everything runs smoothly.'
    },
    {
        question: 'Can you work with existing codebases?',
        answer: 'Absolutely. I can audit your current site and perform refactoring, feature additions, or UI upgrades.'
    },
    {
        question: 'Do you design the UI as well?',
        answer: 'Yes, I provide modern UI/UX design services along with clean, optimized frontend development.'
    },
    {
        question: 'What technologies do you specialize in?',
        answer: 'My core stack includes React, Next.js, Tailwind CSS, Node.js, and Firebase. I also work with Python and Git.'
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section id="faq" className="section-padding bg-white dark:bg-slate-950">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
                    >
                        Common <span className="text-primary-600">Questions</span>
                    </motion.h2>
                    <p className="text-slate-600 dark:text-slate-400">
                        Everything you need to know about starting a project together.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-slate-50 dark:bg-slate-900/50 rounded-2xl border transition-all duration-300 ${activeIndex === index ? 'border-primary-500 shadow-lg shadow-primary-500/5' : 'border-slate-100 dark:border-slate-800'}`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full p-10 flex items-center justify-between text-left hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors gap-6"
                            >
                                <span className={`text-xl font-bold transition-colors ${activeIndex === index ? 'text-primary-600' : 'text-slate-800 dark:text-slate-200'}`}>{faq.question}</span>
                                <span className="text-primary-600 shrink-0">
                                    {activeIndex === index ? <FaMinus size={20} /> : <FaPlus size={20} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-10 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/50 text-lg w-[90%]">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
