import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLock, FaEnvelope, FaTimes, FaUser, FaExclamationCircle } from 'react-icons/fa';

const LoginModal = ({ isOpen, onClose }) => {
    const [isLoginView, setIsLoginView] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!password.trim()) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (!isLoginView && !name.trim()) {
            newErrors.name = 'Full name is required';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        if (isLoginView) {
            if (email === 'muhammadansariahmad323@gmail.com' && password === 'admin') {
                alert('Login Successful! Welcome back, Ahmad.');
                onClose();
            } else {
                setErrors({ auth: 'Invalid email or password' });
            }
        } else {
            alert(`Account created for ${name}! Please login.`);
            setIsLoginView(true);
            setErrors({});
            setEmail('');
            setPassword('');
            setName('');
        }
    };

    const toggleView = () => {
        setIsLoginView(!isLoginView);
        setErrors({});
        setEmail('');
        setPassword('');
        setName('');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    {/* Backdrop with extreme blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative mx-4 w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-8 border border-slate-200 dark:border-slate-800 overflow-hidden"
                    >
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 -tr-1/4 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl" />
                        <div className="absolute bottom-0 left-0 -bl-1/4 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />

                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors cursor-pointer z-20"
                        >
                            <FaTimes />
                        </button>

                        <div className="text-center mb-8 relative z-10">
                            <h2 className="text-3xl font-bold font-primary mb-2 text-slate-900 dark:text-white">
                                {isLoginView ? 'Welcome Back' : 'Create Account'}
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400">
                                {isLoginView ? 'Please enter your details to sign in.' : 'Join us to explore amazing features.'}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                            {errors.auth && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="text-red-500 text-sm text-center bg-red-50 dark:bg-red-900/10 p-3 rounded-xl border border-red-100 dark:border-red-900/30"
                                >
                                    {errors.auth}
                                </motion.div>
                            )}

                            {!isLoginView && (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                >
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 ml-1">Full Name</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><FaUser /></span>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => {
                                                setName(e.target.value);
                                                if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                                            }}
                                            className={`w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border ${errors.name ? 'border-red-500 ring-2 ring-red-500/20' : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500'} focus:outline-none dark:text-white transition-all shadow-inner`}
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <AnimatePresence>
                                        {errors.name && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -5 }}
                                                className="text-red-500 text-[10px] mt-1 ml-2 flex items-center gap-1"
                                            >
                                                <FaExclamationCircle /> {errors.name}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            )}

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 ml-1">Email Address</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><FaEnvelope /></span>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                                        }}
                                        className={`w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border ${errors.email ? 'border-red-500 ring-2 ring-red-500/20' : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500'} focus:outline-none dark:text-white transition-all shadow-inner`}
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <AnimatePresence>
                                    {errors.email && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            className="text-red-500 text-[10px] mt-1 ml-2 flex items-center gap-1"
                                        >
                                            <FaExclamationCircle /> {errors.email}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 ml-1">Password</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><FaLock /></span>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            if (errors.password) setErrors(prev => ({ ...prev, password: '' }));
                                        }}
                                        className={`w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border ${errors.password ? 'border-red-500 ring-2 ring-red-500/20' : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500'} focus:outline-none dark:text-white transition-all shadow-inner`}
                                        placeholder="Enter your password"
                                    />
                                </div>
                                <AnimatePresence>
                                    {errors.password && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            className="text-red-500 text-[10px] mt-1 ml-2 flex items-center gap-1"
                                        >
                                            <FaExclamationCircle /> {errors.password}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            {isLoginView && (
                                <div className="flex items-center justify-between text-sm px-1">
                                    <label className="flex items-center space-x-2 cursor-pointer group">
                                        <input type="checkbox" className="rounded-md text-primary-600 focus:ring-primary-500 border-slate-300 dark:border-slate-600 dark:bg-slate-700 w-4 h-4 transition-all" />
                                        <span className="text-slate-600 dark:text-slate-400 group-hover:text-primary-600 transition-colors">Remember me</span>
                                    </label>
                                    <a href="#" className="text-primary-600 hover:underline font-medium">Forgot password?</a>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-700 hover:to-indigo-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary-500/20 hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
                            >
                                {isLoginView ? 'Sign In' : 'Create Account'}
                            </button>
                        </form>

                        <div className="text-center mt-8 relative z-10">
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                {isLoginView ? "Don't have an account?" : "Already have an account?"}
                                <button
                                    onClick={toggleView}
                                    className="text-primary-600 font-bold hover:underline ml-1"
                                >
                                    {isLoginView ? 'Sign up' : 'Sign in'}
                                </button>
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LoginModal;
