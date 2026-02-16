import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
    return (
        <Layout showFooter={false}>
            <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-9xl font-bold text-slate-100 dark:text-slate-800 absolute select-none -z-10"
                >
                    404
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <FaExclamationTriangle className="text-yellow-500 text-6xl mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Page Not Found
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-md mx-auto">
                        Oops! It seems you've ventured into uncharted territory. The page you're looking for doesn't exist.
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-medium transition-transform hover:scale-105 shadow-lg shadow-primary-500/30"
                    >
                        <FaHome /> Return Home
                    </Link>
                </motion.div>
            </div>
        </Layout>
    );
};

export default NotFound;
