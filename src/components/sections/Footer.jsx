"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ContactModal } from '@/components/ui/ContactModal';

export const Footer = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <>
            <footer
                className="relative h-[85vh] md:h-[70vh] w-full bg-charcoal z-0"
                style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
                <div className="fixed bottom-0 left-0 w-full h-[85vh] md:h-[70vh] bg-charcoal text-white flex flex-col justify-between pt-24 pb-8 z-0 overflow-hidden">

                    {/* Top Section: CTA + Info */}
                    <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-16 relative z-10">
                        <div className="flex flex-col gap-6 w-full max-w-lg">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white/95 tracking-tight leading-[1.1]">
                                The Agentic Network<br />Everywhere. <span className="whitespace-nowrap">Always on.</span>
                            </h2>
                            <button
                                onClick={() => setIsContactOpen(true)}
                                className="w-fit border-b border-electric-mint/50 pb-1 text-electric-mint hover:text-white transition-colors duration-300 font-sans tracking-widest text-xs uppercase mt-4 cursor-pointer bg-transparent"
                            >
                                Join the network
                            </button>

                        </div>

                        <div className="flex gap-16 md:gap-24 font-mono text-xs text-white/60 shrink-0">
                            <div className="flex flex-col gap-3">
                                <span className="text-white/80 font-sans tracking-widest text-[10px] uppercase mb-2">Connect</span>
                                <a href="https://x.com/aivelocitydev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Follow us on X</a>
                                <button
                                    onClick={() => setIsContactOpen(true)}
                                    className="text-left hover:text-white transition-colors bg-transparent cursor-pointer"
                                >
                                    Email us
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Massive Typography Background Watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-full text-center pointer-events-none z-0 opacity-[0.03]">
                        <span className="font-serif italic text-[16vw] leading-none whitespace-nowrap block tracking-tighter">
                            AI VELOCITY
                        </span>
                    </div>

                    {/* Bottom Bar - Minimal Row */}
                    <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono text-white/60 tracking-widest relative z-10">
                        <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
                            <Link href="/" className="hover:text-white transition-colors uppercase">Home</Link>
                            <Link href="/agentic-commerce" className="hover:text-white transition-colors uppercase">Commerce</Link>
                            <Link href="/agentic-marketing" className="hover:text-white transition-colors uppercase">Marketing</Link>
                            <Link href="/agentic-payments" className="hover:text-white transition-colors uppercase">Payments</Link>
                            <Link href="/agentic-aeo" className="hover:text-white transition-colors uppercase">AEO</Link>
                            <Link href="/agentic-strategy" className="hover:text-white transition-colors uppercase">Strategy</Link>
                            <Link href="/news-insights" className="hover:text-white transition-colors uppercase">News & Insights</Link>
                        </div>
                        <div className="flex gap-6 justify-center">
                            <span>©2026 AI VELOCITY</span>
                            <Link href="/privacy" className="hover:text-white transition-colors uppercase">Privacy Policy</Link>
                        </div>
                    </div>

                </div>
            </footer>

            {/* Contact Modal — rendered outside footer for z-index stacking */}
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </>
    );
};
