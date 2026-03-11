"use client";

import { useState, useEffect } from 'react';

const COOKIE_KEY = 'cookie-consent';

export const CookieConsent = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(COOKIE_KEY);
        if (!consent) {
            const timer = setTimeout(() => setVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const accept = () => {
        localStorage.setItem(COOKIE_KEY, 'accepted');
        window.dispatchEvent(new Event('cookie-consent-update'));
        setVisible(false);
    };

    const decline = () => {
        localStorage.setItem(COOKIE_KEY, 'declined');
        window.dispatchEvent(new Event('cookie-consent-update'));
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div
            className={`fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[60]
                bg-charcoal/95 backdrop-blur-2xl border border-white/10 rounded-card
                p-6 shadow-2xl
                transform transition-all duration-500 ease-out
                ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
            {/* Accent bar */}
            <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-electric-mint/40 to-transparent" />

            <div className="flex items-center justify-between gap-3 mb-3">
                <button
                    onClick={decline}
                    className="px-5 py-2 border border-white/20 text-white/70 font-sans text-xs uppercase tracking-widest rounded-card
                        hover:border-white/40 hover:text-white/90 transition-all duration-300 cursor-pointer"
                >
                    Decline
                </button>
                <button
                    onClick={accept}
                    className="px-5 py-2 bg-electric-mint text-charcoal font-sans text-xs font-medium uppercase tracking-widest rounded-card
                        hover:shadow-[0_0_15px_rgba(133,216,172,0.3)] transition-all duration-300 cursor-pointer"
                >
                    Accept
                </button>
            </div>

            <p className="text-white/60 font-sans text-[10px] leading-relaxed">
                Essential cookies only. No tracking or ads.{' '}
                <a href="/privacy" className="text-white/70 hover:text-electric-mint transition-colors duration-200 underline underline-offset-2">
                    Privacy Policy
                </a>
            </p>
        </div>
    );
};
