"use client";

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';

// Dynamically import the animated backgrounds so they only render on client
const ParticleWave = dynamic(() => import('@/components/ui/ParticleWave').then(mod => mod.ParticleWave), { ssr: false });
const LiquidCanvas = dynamic(() => import('@/components/ui/LiquidCanvas').then(mod => mod.LiquidCanvas), { ssr: false });

export const Hero = () => {
    const containerRef = useRef(null);
    const labelRef = useRef(null);
    const outlineRef = useRef(null);
    const solidRef = useRef(null);
    const subRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

            tl.fromTo(labelRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 }
            )
                .fromTo(outlineRef.current,
                    { y: 80, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.4 },
                    "-=0.6"
                )
                .fromTo(solidRef.current,
                    { y: 80, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.4 },
                    "-=1.1"
                )
                .fromTo(subRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.2 },
                    "-=0.8"
                )
                .fromTo(ctaRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    "-=0.6"
                );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} data-nav-theme="dark" className="relative min-h-[100svh] w-full flex flex-col justify-end pb-24 md:pb-40 overflow-hidden bg-charcoal">
            {/* Particle Wave Background Effect */}
            <div className="absolute inset-0 z-0">
                <ParticleWave />
            </div>

            <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-12">
                {/* Micro-label */}
                <div ref={labelRef} className="mb-6 opacity-0">
                    <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/40">
                        001 — Foundry
                    </span>
                </div>

                {/* Main Heading — Mixed Weight */}
                <div className="space-y-1 md:space-y-2 mb-10 md:mb-14">
                    {/* "Agentic" — Outlined stroke, no fill */}
                    <h1 ref={outlineRef} className="opacity-0">
                        <span
                            className="block text-6xl md:text-[8rem] lg:text-[10rem] font-serif italic font-light leading-[0.9] tracking-tight"
                            style={{
                                WebkitTextStroke: '1.5px rgba(133, 216, 172, 0.7)',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Agentic
                        </span>
                    </h1>

                    {/* "Commerce." — Solid bold fill */}
                    <div ref={solidRef} className="opacity-0">
                        <span className="block text-6xl md:text-[8rem] lg:text-[10rem] font-serif italic font-bold leading-[0.9] tracking-tight text-electric-mint">
                            Commerce.
                        </span>
                    </div>
                </div>

                {/* Subtitle — Clean with accent dots */}
                <div ref={subRef} className="opacity-0 flex items-start gap-4 max-w-xl">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-electric-mint flex-shrink-0" />
                    <p className="text-sm md:text-base text-white/50 font-mono leading-relaxed tracking-wide">
                        Sovereign visual intelligence & autonomous growth systems — designed to vaporize legacy management.
                    </p>
                </div>

                {/* Editorial CTA */}
                <div ref={ctaRef} className="opacity-0 mt-10">
                    <a href="/agentic-commerce" className="inline-flex items-center gap-3 group">
                        <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/60 group-hover:text-electric-mint transition-colors duration-300">
                            Enter the Era
                        </span>
                        <span className="w-8 h-px bg-white/30 group-hover:w-12 group-hover:bg-electric-mint transition-all duration-300" />
                        <span className="text-white/60 group-hover:text-electric-mint transition-colors duration-300">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};