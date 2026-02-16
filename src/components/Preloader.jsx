import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-slate-950"
                >
                    <div className="relative flex items-center justify-center">
                        {/* Glowing Background - Softer Pulse */}
                        <motion.div
                            className="absolute inset-0 bg-primary-500/10 blur-3xl rounded-full scale-150"
                            animate={{ opacity: [0.5, 0.8, 0.5], scale: [1.4, 1.6, 1.4] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />

                        <svg
                            width="140"
                            height="140"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative z-10"
                        >
                            {/* Static Background Circle (Very Faint) */}
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                strokeWidth="4"
                                className="stroke-slate-100 dark:stroke-slate-800/50"
                            />

                            {/* Animated Loading Border - Ultra Smooth */}
                            <motion.circle
                                cx="50"
                                cy="50"
                                r="45"
                                strokeWidth="4"
                                strokeLinecap="round"
                                className="stroke-primary-500"
                                fill="transparent"
                                initial={{ pathLength: 0, rotate: -90 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />

                            {/* The 'A' Mark - Slow Gentle Fade In */}
                            <motion.g
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                            >
                                <path
                                    d="M50 20L25 80H35L50 40L65 80H75L50 20Z"
                                    fill="currentColor"
                                    className="text-slate-900 dark:text-white"
                                />
                                <path
                                    d="M38 60H62"
                                    stroke="currentColor"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                    className="text-slate-900 dark:text-white"
                                />
                            </motion.g>
                        </svg>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
