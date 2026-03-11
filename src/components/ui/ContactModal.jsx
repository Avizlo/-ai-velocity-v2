"use client";

import { useState, useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { Turnstile } from '@marsidev/react-turnstile';

// Turnstile site key — uses Cloudflare's always-pass test key in development.
// Replace with your real site key for production.
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA';

export const ContactModal = ({ isOpen, onClose }) => {
    const overlayRef = useRef(null);
    const panelRef = useRef(null);
    const formRef = useRef(null);
    const turnstileRef = useRef(null);

    const [formData, setFormData] = useState({ name: '', email: '', message: '', _honeypot: '' });
    const [turnstileToken, setTurnstileToken] = useState(null);
    const [status, setStatus] = useState('idle'); // idle | sending | success | error
    const [errorMessage, setErrorMessage] = useState('');

    // ── GSAP open/close ──
    useEffect(() => {
        if (!overlayRef.current || !panelRef.current) return;

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            gsap.set(overlayRef.current, { display: 'flex' });
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
            tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 })
                .fromTo(panelRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.25');
        } else {
            const tl = gsap.timeline({
                defaults: { ease: 'power3.in' },
                onComplete: () => {
                    gsap.set(overlayRef.current, { display: 'none' });
                    document.body.style.overflow = '';
                    // Reset form after close animation
                    setFormData({ name: '', email: '', message: '', _honeypot: '' });
                    setStatus('idle');
                    setErrorMessage('');
                    setTurnstileToken(null);
                },
            });
            tl.to(panelRef.current, { y: 40, opacity: 0, duration: 0.35 })
                .to(overlayRef.current, { opacity: 0, duration: 0.3 }, '-=0.15');
        }
    }, [isOpen]);

    // ── Close on Escape ──
    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape' && isOpen) onClose(); };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [isOpen, onClose]);

    // ── Handlers ──
    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        if (status === 'sending') return;

        // Client-side validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setStatus('error');
            setErrorMessage('Please fill in all fields.');
            return;
        }

        setStatus('sending');
        setErrorMessage('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _honeypot: formData._honeypot,
                    turnstileToken,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong.');
            }

            setStatus('success');
            // Auto-close after success
            setTimeout(() => onClose(), 2500);
        } catch (err) {
            setStatus('error');
            setErrorMessage(err.message || 'Failed to send message.');
        }
    }, [formData, turnstileToken, status, onClose]);

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[9998] hidden items-center justify-center px-4"
            style={{ backgroundColor: 'rgba(10, 10, 10, 0.85)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
            onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
            role="dialog"
            aria-modal="true"
            aria-label="Contact form"
        >
            <div
                ref={panelRef}
                className="relative w-full max-w-lg bg-charcoal/90 border border-white/10 p-8 md:p-12"
                style={{ backdropFilter: 'blur(24px)' }}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors text-lg leading-none cursor-pointer"
                    aria-label="Close contact form"
                >
                    ✕
                </button>

                {/* ── Success state ── */}
                {status === 'success' ? (
                    <div className="text-center py-12">
                        <div className="text-4xl mb-4">✓</div>
                        <h3 className="font-serif italic text-2xl md:text-3xl text-white/90 mb-3">Message sent.</h3>
                        <p className="font-mono text-xs text-white/60 tracking-wider">We'll be in touch shortly.</p>
                    </div>
                ) : (
                    /* ── Form state ── */
                    <>
                        <h2 className="font-serif italic text-3xl md:text-4xl text-white/90 tracking-tight leading-tight mb-2">
                            We'd love to hear from you.
                        </h2>
                        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/60 block mb-10">
                            Get in touch
                        </span>

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            {/* Honeypot — hidden from humans, bots auto-fill */}
                            <div className="absolute" style={{ left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                                <label htmlFor="contact-hp">Do not fill this</label>
                                <input
                                    type="text"
                                    id="contact-hp"
                                    name="_honeypot"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    value={formData._honeypot}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-name" className="sr-only">Name</label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-white/15 pb-3 text-sm text-white placeholder-white/30 font-sans tracking-wide focus:outline-none focus:border-electric-mint/50 transition-colors duration-300"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-email" className="sr-only">Email</label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-white/15 pb-3 text-sm text-white placeholder-white/30 font-sans tracking-wide focus:outline-none focus:border-electric-mint/50 transition-colors duration-300"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-message" className="sr-only">Message</label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    placeholder="Message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-white/15 pb-3 text-sm text-white placeholder-white/30 font-sans tracking-wide focus:outline-none focus:border-electric-mint/50 transition-colors duration-300 resize-none"
                                    required
                                />
                            </div>

                            {/* Error message */}
                            {status === 'error' && errorMessage && (
                                <p className="font-mono text-xs text-red-400/80 tracking-wide">{errorMessage}</p>
                            )}

                            {/* Cloudflare Turnstile — invisible mode */}
                            <Turnstile
                                ref={turnstileRef}
                                siteKey={TURNSTILE_SITE_KEY}
                                onSuccess={setTurnstileToken}
                                options={{ theme: 'dark', size: 'invisible' }}
                            />

                            {/* Submit */}
                            <div className="flex items-center justify-between pt-4">
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="border-b border-electric-mint/50 pb-1 text-electric-mint hover:text-white transition-colors duration-300 font-sans tracking-widest text-xs uppercase cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    {status === 'sending' ? 'Sending...' : 'Send message'}
                                </button>
                            </div>

                            <p className="font-mono text-[9px] text-white/20 tracking-wider pt-2">
                                Protected by Cloudflare Turnstile
                            </p>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};
