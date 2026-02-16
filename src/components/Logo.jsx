import React from 'react';

const Logo = ({ className = "w-10 h-10" }) => {
    return (
        <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className} stroke-slate-900 dark:stroke-white`}
        >
            <circle cx="50" cy="50" r="45" strokeWidth="5" className="stroke-primary-500" />
            <path d="M50 20L25 80H35L50 40L65 80H75L50 20Z" fill="currentColor" className="text-slate-900 dark:text-white" strokeWidth="0" />
            <path d="M38 60H62" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        </svg>
    );
};

export default Logo;
