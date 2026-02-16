import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { MdTranslate, MdDarkMode, MdLightMode, MdLogout } from 'react-icons/md';
import { IoMenu, IoClose } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { auth } from '../firebase'; // Import auth
import { onAuthStateChanged, signOut } from 'firebase/auth'; // Import auth functions
import md5 from 'md5';

const Navbar = ({ toggleMenu, isMenuOpen, onLoginClick }) => {
    const { theme, toggleTheme } = useTheme();
    const [user, setUser] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);

    const getGravatarUrl = (email) => {
        const hash = md5(email.toLowerCase().trim());
        return `https://www.gravatar.com/avatar/${hash}?d=identicon&s=200`;
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        if (window.confirm("Are you sure you want to logout?")) {
            try {
                await signOut(auth);
                setShowDropdown(false);
            } catch (error) {
                console.error("Error logging out:", error);
            }
        }
    };

    return (
        <nav className="fixed w-full z-40 top-0 left-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <a href="/" className="flex items-center gap-2 text-2xl font-bold font-primary bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                    <Logo /> Ahmad
                </a>

                <div className="hidden md:flex items-center space-x-8">
                    {['Home', 'About', 'Services', 'Experience', 'Projects', 'FAQs', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={item === 'FAQs' ? '#faq' : `#${item.toLowerCase()}`}
                            className="text-slate-600 dark:text-slate-300 hover:text-primary-500 hover:scale-105 transition-all font-medium font-secondary"
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href="/AhmadAnsariResume.pdf"
                        download="Ahmad_Ansari_CV.pdf"
                        className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-primary-500 font-medium font-secondary border-l border-slate-200 dark:border-slate-800 pl-6"
                    >
                        CV <span className="text-xs py-0.5 px-2 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">PDF</span>
                    </a>


                    {user ? (
                        <div className="relative">
                            <button
                                onClick={() => setShowDropdown(!showDropdown)}
                                className="flex items-center gap-2 focus:outline-none"
                            >
                                <img
                                    src={user.photoURL || getGravatarUrl(user.email)}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full border-2 border-primary-500 object-cover hover:border-primary-600 transition-colors cursor-pointer"
                                    title={user.displayName || user.email}
                                />
                            </button>

                            <AnimatePresence>
                                {showDropdown && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden z-50"
                                    >
                                        <div className="p-3 border-b border-slate-200 dark:border-slate-700">
                                            <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
                                                {user.displayName || "User"}
                                            </p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                                                {user.email}
                                            </p>
                                        </div>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors flex items-center gap-2"
                                        >
                                            <MdLogout size={18} />
                                            Logout
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <button
                            onClick={onLoginClick}
                            className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg shadow-lg hover:bg-primary-700 transition-all hover:scale-105"
                        >
                            Login
                        </button>
                    )}

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-gray-200 dark:border-slate-800 overflow-hidden"
                    >
                        <div className="flex flex-col space-y-4 px-6 py-8">
                            {['Home', 'About', 'Services', 'Experience', 'Projects', 'FAQs', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={item === 'FAQs' ? '#faq' : `#${item.toLowerCase()}`}
                                    className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-primary-500 transition-colors"
                                    onClick={toggleMenu}
                                >
                                    {item}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-gray-200 dark:border-slate-800">
                                {user ? (
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={user.photoURL || getGravatarUrl(user.email)}
                                                alt="Profile"
                                                className="w-10 h-10 rounded-full border-2 border-primary-500 object-cover"
                                            />
                                            <span className="text-slate-700 dark:text-slate-200 font-medium">{user.displayName || "User"}</span>
                                        </div>
                                        <button
                                            onClick={handleLogout}
                                            className="text-red-500 hover:text-red-600 font-medium"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        onClick={onLoginClick}
                                        className="block w-full text-center py-3 text-sm font-medium text-white bg-primary-600 rounded-lg shadow-lg"
                                    >
                                        Login
                                    </button>
                                )}
                            </div>
                            <button
                                onClick={toggleTheme}
                                className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                            >
                                {theme === 'dark' ? (
                                    <>
                                        <MdLightMode size={20} />
                                        <span>Switch to Light Mode</span>
                                    </>
                                ) : (
                                    <>
                                        <MdDarkMode size={20} />
                                        <span>Switch to Dark Mode</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
