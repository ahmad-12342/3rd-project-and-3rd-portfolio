import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Chatbot from './Chatbot';
import Translator from './Translator';
import VoiceAssistant from './VoiceAssistant';
import LoginModal from './LoginModal';
import CustomCursor from './CustomCursor';
import WhatsAppButton from './WhatsAppButton';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children, showFooter = true }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const openLogin = () => {
        setIsLoginOpen(true);
        setIsMenuOpen(false); // Close mobile menu if open
    };
    const closeLogin = () => setIsLoginOpen(false);

    return (
        <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 font-secondary transition-colors duration-300 ${isLoginOpen ? 'overflow-hidden' : ''}`}>
            <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} onLoginClick={openLogin} />
            <main className={`relative z-0 ${isMenuOpen || isLoginOpen ? 'blur-sm' : ''} transition-all duration-300`}>
                {children}
            </main>
            <Chatbot />
            <WhatsAppButton />
            <Translator />
            <VoiceAssistant />
            <ScrollToTop />
            <LoginModal isOpen={isLoginOpen} onClose={closeLogin} />
            <CustomCursor />
            {showFooter && <Footer />}
        </div>
    );
};

export default Layout;
