import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        // Clear error when user starts typing
        if (errors[id]) {
            setErrors(prev => ({ ...prev, [id]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Please enter your name';
        if (!formData.email.trim()) {
            newErrors.email = 'Please enter your email';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.message.trim()) newErrors.message = 'Please enter your message';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <section id="contact" className="section-padding py-24 mb-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
                <div className="w-full md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-primary mb-6 text-slate-900 dark:text-white">
                            Get In <span className="text-primary-600">Touch</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                            Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas, or opportunities that can contribute to your vision.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-slate-700 text-primary-600 flex items-center justify-center text-xl">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-white">Email Me</h4>
                                    <a href="mailto:muhammadansariahmad323@gmail.com" className="text-primary-600 hover:underline">muhammadansariahmad323@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-slate-700 text-primary-600 flex items-center justify-center text-xl">
                                    <FaPhone />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-white">Call Me</h4>
                                    <a href="tel:03252207294" className="text-primary-600 hover:underline">03252207294</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="w-full md:w-1/2 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                            <div className="relative">
                                <span className="absolute left-4 top-3.5 text-slate-400"><FaUser /></span>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="John Doe"
                                    className={`w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-700 focus:ring-primary-500'} focus:outline-none focus:ring-2 dark:text-white transition-all`}
                                />
                            </div>
                            <AnimatePresence>
                                {errors.name && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="text-red-500 text-xs mt-1 flex items-center gap-1"
                                    >
                                        <FaExclamationCircle /> {errors.name}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                            <div className="relative">
                                <span className="absolute left-4 top-3.5 text-slate-400"><FaEnvelope /></span>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="john@example.com"
                                    className={`w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-700 focus:ring-primary-500'} focus:outline-none focus:ring-2 dark:text-white transition-all`}
                                />
                            </div>
                            <AnimatePresence>
                                {errors.email && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="text-red-500 text-xs mt-1 flex items-center gap-1"
                                    >
                                        <FaExclamationCircle /> {errors.email}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Tell me about your project..."
                                className={`w-full p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-700 focus:ring-primary-500'} focus:outline-none focus:ring-2 dark:text-white transition-all`}
                            ></textarea>
                            <AnimatePresence>
                                {errors.message && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="text-red-500 text-xs mt-1 flex items-center gap-1"
                                    >
                                        <FaExclamationCircle /> {errors.message}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                        <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                            <FaPaperPlane /> Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
