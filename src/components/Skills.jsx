import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJsSquare />, color: '#F7DF1E' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38B2AC' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
];

const Skills = () => {
    return (
        <section id="skills" className="section-padding bg-slate-50 border-t border-slate-100 dark:bg-slate-900/50 dark:border-slate-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-primary mb-6 text-slate-900 dark:text-white">
                        My <span className="text-primary-600">Skills</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                        I continuously refine my skillset to stay at the forefront of web development. Here are the core technologies I work with:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 flex items-center gap-3 hover:shadow-md transition-shadow"
                            >
                                <span className="text-2xl" style={{ color: skill.color }}>{skill.icon}</span>
                                <span className="font-semibold text-slate-700 dark:text-slate-200">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Skill Progress Bars */}
                    <div className="space-y-6">
                        {[
                            { label: 'Frontend Development', percentage: 95 },
                            { label: 'Backend Development', percentage: 70 },
                            { label: 'UI/UX Design', percentage: 85 },
                            { label: 'SEO Optimization', percentage: 80 },
                        ].map((skill, index) => (
                            <div key={index} className="w-full">
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{skill.label}</span>
                                    <span className="text-sm font-semibold text-primary-600">{skill.percentage}%</span>
                                </div>
                                <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.percentage}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className="h-full bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
