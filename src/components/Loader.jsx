import React from 'react';

const Loader = ({ isLoading }) => {
    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="relative">
                <div className="loader-circle animate-spin border-4 border-solid border-primary-500 border-t-transparent w-16 h-16 rounded-full mx-auto mb-4"></div>
                <h2 className="text-xl font-bold font-primary text-slate-800 dark:text-white animate-pulse">
                    Loading Portfolio...
                </h2>
            </div>
        </div>
    );
};

export default Loader;
