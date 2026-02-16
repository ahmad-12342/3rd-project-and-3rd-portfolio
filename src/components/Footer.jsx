import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="mt-20 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 py-12 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-bold font-primary mb-4 text-slate-800 dark:text-white">Ahmad.dev</h3>
                    <p className="text-sm">Building digital experiences that matter.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-slate-800 dark:text-white">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#home" className="hover:text-primary-500 transition-colors">Home</a></li>
                        <li><a href="#about" className="hover:text-primary-500 transition-colors">About</a></li>
                        <li><a href="#services" className="hover:text-primary-500 transition-colors">Services</a></li>
                        <li><a href="#contact" className="hover:text-primary-500 transition-colors">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-slate-800 dark:text-white">Contact</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                            <FaEnvelope className="text-primary-500" />
                            <a href="mailto:muhammadansariahmad323@gmail.com" className="hover:text-primary-500 transition-colors">muhammadansariahmad323@gmail.com</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt className="text-primary-500" />
                            <a href="tel:03252207294" className="hover:text-primary-500 transition-colors">03252207294</a>
                        </li>
                        <div className="flex gap-4 mt-4">
                            <a href="https://github.com/ahmad-12342" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-500 transition-colors p-2 bg-white dark:bg-slate-800 rounded-full shadow-sm hover:scale-110">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/muhammad-ahmad-ansari123/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-500 transition-colors p-2 bg-white dark:bg-slate-800 rounded-full shadow-sm hover:scale-110">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="https://www.instagram.com/wdm.ahmad/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-500 transition-colors p-2 bg-white dark:bg-slate-800 rounded-full shadow-sm hover:scale-110">
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-xs">
                &copy; {new Date().getFullYear()} Ahmad.dev. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
