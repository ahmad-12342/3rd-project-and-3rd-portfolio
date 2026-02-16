import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import Layout from '../components/Layout';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate login logic
        if (email === 'muhammadansariahmad323@gmail.com' && password === 'admin') {
            alert('Login Successful! Welcome back, Ahmad.');
            // Redirect or clear
        } else {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <Layout showFooter={false}>
            <div className="min-h-screen flex items-center justify-center pt-20 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-8 border border-slate-200 dark:border-slate-800"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold font-primary mb-2 text-slate-900 dark:text-white">Welcome Back</h2>
                        <p className="text-slate-500 dark:text-slate-400">Please enter your details to sign in.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        {error && <div className="text-red-500 text-sm text-center bg-red-50 dark:bg-red-900/20 p-2 rounded-lg border border-red-200 dark:border-red-800">{error}</div>}

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                            <div className="relative">
                                <span className="absolute left-4 top-3.5 text-slate-400"><FaEnvelope /></span>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Password</label>
                            <div className="relative">
                                <span className="absolute left-4 top-3.5 text-slate-400"><FaLock /></span>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700" />
                                <span className="text-slate-600 dark:text-slate-400">Remember me</span>
                            </label>
                            <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">Forgot password?</a>
                        </div>

                        <button type="submit" className="w-full btn-primary py-3 text-lg shadow-xl">
                            Sign In
                            . </button>
                    </form>

                    <p className="text-center mt-6 text-sm text-slate-600 dark:text-slate-400">
                        Don't have an account? <a href="/signup" className="text-primary-600 font-bold hover:underline">Sign up</a>
                    </p>
                </motion.div>
            </div>
        </Layout>
    );
};

export default Login;
