import React, { useState, useRef, useEffect } from 'react';
import { IoChatbubblesSharp, IoSend, IoClose } from 'react-icons/io5';

const knowledgeBase = {
    greetings: ['Hello!', 'Hi there!', 'Greetings!', 'Welcome to my portfolio!'],
    about: "I'm Muhammad Ansari Ahmad, a Frontend Developer specialized in building modern, responsive web applications using React, Tailwind CSS, and more.",
    skills: "My skills include HTML, CSS, JavaScript, React, Tailwind CSS, Firebase, and UI/UX Design.",
    services: "I offer services like Portfolio Website Development, Custom Web Apps, Responsive Design, and Frontend Optimization.",
    contact: "You can reach me at muhammadansariahmad323@gmail.com or call me at 03252207294.",
    projects: "I've worked on various projects including e-commerce sites, portfolio websites, and landing pages.",
    default: "I'm an AI Assistant for Muhammad Ansari Ahmad. Ask me about his skills, services, contact info, or projects!",
};

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! I'm Muhammad's AI Assistant. How can I help you?", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { text: input, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);

        // Simulate AI response
        setTimeout(() => {
            let botResponse = knowledgeBase.default;
            const lowerInput = input.toLowerCase();

            if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
                botResponse = knowledgeBase.greetings[Math.floor(Math.random() * knowledgeBase.greetings.length)];
            } else if (lowerInput.includes('about') || lowerInput.includes('who are you')) {
                botResponse = knowledgeBase.about;
            } else if (lowerInput.includes('skill') || lowerInput.includes('stack')) {
                botResponse = knowledgeBase.skills;
            } else if (lowerInput.includes('service') || lowerInput.includes('offer')) {
                botResponse = knowledgeBase.services;
            } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone') || lowerInput.includes('number')) {
                botResponse = knowledgeBase.contact;
            } else if (lowerInput.includes('project') || lowerInput.includes('work')) {
                botResponse = knowledgeBase.projects;
            }

            setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
        }, 1000);

        setInput('');
    };

    return (
        <div className={`fixed bottom-4 left-4 ${isOpen ? 'z-[60]' : 'z-50'}`}>
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 animate-bounce"
                >
                    <IoChatbubblesSharp size={24} />
                </button>
            )}

            {isOpen && (
                <div className="bg-white dark:bg-slate-900 w-80 sm:w-96 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col h-[500px]">
                    {/* Include Chat Header */}
                    <div className="bg-primary-600 p-4 flex justify-between items-center text-white">
                        <h3 className="font-bold">AI Assistant</h3>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1">
                            <IoClose size={20} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                        ? 'bg-primary-600 text-white rounded-tr-none'
                                        : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-sm rounded-tl-none'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask me something..."
                            className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <button
                            onClick={handleSend}
                            className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-full transition-colors"
                        >
                            <IoSend size={18} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
