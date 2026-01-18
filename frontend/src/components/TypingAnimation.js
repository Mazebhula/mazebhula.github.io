import React from 'react';
import { motion } from 'framer-motion';

const TypingAnimation = ({ text }) => {
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            style={{ overflow: 'hidden', display: 'flex' }}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {text.split('').map((char, index) => (
                <motion.span
                    variants={child}
                    key={index}
                    style={{ marginRight: char === ' ' ? '5px' : '0px' }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default TypingAnimation;
