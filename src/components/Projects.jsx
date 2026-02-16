import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaCheck } from 'react-icons/fa';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-featured online store with cart functionality and payment integration.',
        details: 'This project involved building a robust ordering system with real-time inventory tracking. I implemented complex state management for the cart and integrated Stripe for secure payments.',
        features: ['Admin Dashboard', 'Stripe Integration', 'Responsive UI', 'Inventory Management'],
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2089',
        tags: ['React', 'Node.js', 'Firebase'],
        link: '#',
        github: '#'
    },
    {
        title: 'AI Chat Dashboard',
        description: 'Modern dashboard interface for managing AI-powered customer interactions.',
        details: 'A data-heavy application that visualizes customer interaction metrics. It uses OpenAI API for sentiment analysis and Framer Motion for high-fidelity animations.',
        features: ['Real-time Analytics', 'NLP Integration', 'Dark/Light Mode', 'Custom Graphs'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
        tags: ['Next.js', 'Tailwind', 'OpenAI'],
        link: '#',
        github: '#'
    },
    {
        title: 'Portfolio Website',
        description: 'Premium responsive portfolio for creative professionals and agencies.',
        details: 'Focused on high performance and smooth user experience. Used Vite for ultra-fast builds and Framer Motion for the fluid animations seen across the sections.',
        features: ['Dynamic Routing', 'SEO Optimized', 'Custom Animations', 'Contact System'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2026',
        tags: ['React', 'Framer Motion', 'Vite'],
        link: '#',
        github: '#'
    },
    {
        title: 'Task Management App',
        description: 'Collaborative tool for teams to manage tasks and increase productivity.',
        details: 'Built with team collaboration in mind. Features includes real-time updates via WebSockets, persistent storage with PostgreSQL, and a drag-and-drop task board.',
        features: ['Drag & Drop', 'Team Roles', 'Live Updates', 'File Attachments'],
        image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=2032',
        tags: ['TypeScript', 'Redux', 'PostgreSQL'],
        link: '#',
        github: '#'
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="section-padding bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
                    >
                        Featured <span className="text-primary-600">Projects</span>
                    </motion.h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Explore some of my most impactful works, combining functional code with elegant design.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                            className="group relative bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 cursor-pointer"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                                    <span className="px-6 py-2 bg-white text-slate-900 rounded-full font-bold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                        View Details
                                    </span>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 text-xs font-bold rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6">{project.description}</p>
                                <button className="inline-flex items-center gap-2 text-primary-600 font-bold hover:gap-3 transition-all">
                                    Explored Case Study <span>&rarr;</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] border border-slate-200 dark:border-slate-800"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-slate-100/50 dark:bg-slate-800/50 hover:bg-red-500 hover:text-white rounded-full transition-colors backdrop-blur-md"
                            >
                                <FaTimes />
                            </button>

                            <div className="w-full md:w-1/2 overflow-hidden h-64 md:h-auto">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                                <div className="flex gap-2 mb-4">
                                    {selectedProject.tags.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-primary-500">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{selectedProject.title}</h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                    {selectedProject.details}
                                </p>

                                <div className="mb-8">
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Key Features</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {selectedProject.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                                <FaCheck className="text-primary-500" /> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                                    <a href={selectedProject.link} className="btn-primary py-2 text-sm flex items-center gap-2">
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                    <a href={selectedProject.github} className="px-6 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2">
                                        <FaGithub /> Source Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
