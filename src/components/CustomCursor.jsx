import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [cursorVariant, setCursorVariant] = useState('default');

    // Smooth motion values
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Separate spring configs for "Liquid" effect
    const dotSpringConfig = { damping: 50, stiffness: 1000, mass: 0.1 };
    const ringSpringConfig = { damping: 30, stiffness: 120, mass: 0.5 };

    const dotX = useSpring(cursorX, dotSpringConfig);
    const dotY = useSpring(cursorY, dotSpringConfig);

    const ringX = useSpring(cursorX, ringSpringConfig);
    const ringY = useSpring(cursorY, ringSpringConfig);

    useEffect(() => {
        const mouseMove = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener('mousemove', mouseMove, { passive: true });

        const handleHover = () => setCursorVariant('hover');
        const handleDefault = () => setCursorVariant('default');

        const hoverElements = document.querySelectorAll('a, button, input, textarea, [role="button"], .cursor-pointer, .group');
        hoverElements.forEach((el) => {
            el.addEventListener('mouseenter', handleHover);
            el.addEventListener('mouseleave', handleDefault);
        });

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            hoverElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleHover);
                el.removeEventListener('mouseleave', handleDefault);
            });
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Inner Dot - Fast & Responsive */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary-500 rounded-full pointer-events-none z-[10000] hidden lg:block"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
            />
            {/* Outer Ring - Liquid Trailing Effect */}
            <motion.div
                className="fixed top-0 left-0 rounded-full border border-primary-500/40 pointer-events-none z-[9999] hidden lg:block shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
                animate={{
                    width: cursorVariant === 'hover' ? 64 : 32,
                    height: cursorVariant === 'hover' ? 64 : 32,
                    backgroundColor: cursorVariant === 'hover' ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.05)',
                    borderWidth: cursorVariant === 'hover' ? '2px' : '1px'
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 150 }}
            />
        </>
    );
};

export default CustomCursor;
