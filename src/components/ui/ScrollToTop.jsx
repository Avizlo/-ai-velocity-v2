"use client";

import { useState, useEffect } from 'react';

export const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 600);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[55]
                w-11 h-11 rounded-card
                bg-charcoal/80 backdrop-blur-xl border border-white/10
                flex items-center justify-center
                text-white/50 hover:text-electric-mint hover:border-electric-mint/30
                hover:shadow-[0_0_15px_rgba(133,216,172,0.15)]
                transition-all duration-300 cursor-pointer
                ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}
        >
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M8 13V3" />
                <path d="M3 7L8 2L13 7" />
            </svg>
        </button>
    );
};
