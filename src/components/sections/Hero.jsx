"use client";

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';

// Dynamically import the animated backgrounds so they only render on client
const ParticleWave = dynamic(() => import('@/components/ui/ParticleWave').then(mod => mod.ParticleWave), { ssr: false });

export const Hero = () => {
    const containerRef = useRef(null);
    const outlineRef = useRef(null);
    const solidRef = useRef(null);
    const subRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

            tl.fromTo(outlineRef.current,
                { y: 80, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.4 }
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
                );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} data-nav-theme="dark" className="min-h-[70vh] relative flex items-center bg-charcoal overflow-hidden">
            {/* Particle Wave Background Effect */}
            <div className="absolute inset-0 z-0">
                <ParticleWave />
            </div>

            <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-12">

                {/* Main Heading - Mixed Weight */}
                <div className="space-y-1 md:space-y-2 mb-10 md:mb-14">
                    {/* "Agentic" - Outlined stroke, no fill */}
                    <h1 ref={outlineRef} className="text-6xl md:text-[7rem] lg:text-[8rem] font-serif italic leading-[0.9] tracking-tight">
                        <span
                            className="font-light"
                            style={{
                                WebkitTextStroke: '1.5px rgba(133, 216, 172, 0.7)',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Agentic{' '}
                        </span>
                        <span ref={solidRef} className="font-bold text-electric-mint">
                            Commerce.
                        </span>
                    </h1>
                </div>

                {/* Subtitle - Clean with accent dots */}
                <div ref={subRef} className="max-w-xl">
                    <p className="text-sm md:text-base text-white/50 font-mono leading-relaxed tracking-wide">
                        Agentic Commerce. Marketing. Payments. Discovery. Autonomous systems for the AI economy.
                    </p>
                </div>
            </div>
        </section>
    );
};