"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

export const FeatureShowcase = () => {
    const containerRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });

            tl.fromTo(gridRef.current.children,
                { y: 50, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-12 bg-cloud-dancer">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                {/*
                  Flat 4-col × 2-row grid so all cells in the same row
                  share the same height — left panel spans both rows.
                */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.1fr_1.1fr_0.65fr] gap-4">
                    {/* ── Col 1: Text panel ── */}
                    <div className="rounded-2xl bg-charcoal p-10 flex flex-col justify-between lg:row-span-2 opacity-0">
                        <div className="space-y-6">
                            <span className="inline-block font-sans text-xs text-white/50 border border-white/20 rounded-full px-3 py-1">
                                Our Agents
                            </span>
                            <h2 className="font-sans font-bold text-white text-3xl md:text-4xl leading-tight tracking-tight">
                                Agentic creators building your brand around the clock.
                            </h2>
                            <p className="font-sans text-white/50 text-sm leading-relaxed max-w-xs">
                                Our AI-powered agents operate autonomously — generating content, running campaigns, and engaging audiences without interruption or fatigue.
                            </p>
                        </div>
                        <a
                            href="#contact"
                            className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-card bg-white text-charcoal text-sm font-sans font-medium hover:bg-electric-mint transition-all duration-300 group"
                        >
                            Explore More
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </a>
                    </div>

                    {/* ── Item 2 ── */}
                    <div className="group rounded-2xl overflow-hidden min-h-[240px] relative opacity-0">
                        <Image
                            src="/images/agentic-agent-hero.webp"
                            alt="Agentic AI"
                            fill
                            quality={60}
                            sizes="(max-width: 768px) 100vw, 25vw"
                            className="object-cover will-change-transform transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* ── Item 3 ── */}
                    <div className="group rounded-2xl overflow-hidden min-h-[240px] relative opacity-0">
                        <Image
                            src="/images/ai-model-2.webp"
                            alt="AI model"
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* ── Item 4 ── */}
                    <div className="rounded-2xl bg-electric-mint p-8 flex flex-col justify-between min-h-[240px] opacity-0">
                        <h3 className="font-sans font-bold text-charcoal text-3xl leading-tight tracking-tight">
                            Agentic Commerce
                        </h3>
                        <p className="font-sans text-charcoal/60 text-sm leading-relaxed">
                            The future of brand growth.
                        </p>
                    </div>

                    {/* ── Item 5 ── */}
                    <div className="group relative rounded-2xl overflow-hidden min-h-[240px] opacity-0">
                        <Image
                            src="/images/ai-model-1.webp"
                            alt="AI model campaign"
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                        <div className="absolute bottom-5 left-5 space-y-1">
                            <p className="font-sans font-bold text-white text-xl tracking-tight">AI Models</p>
                            <p className="font-sans text-white/70 text-xs">Always on. Always creating.</p>
                        </div>
                    </div>

                    {/* ── Item 6 ── */}
                    <div className="group rounded-2xl overflow-hidden min-h-[240px] relative opacity-0">
                        <Image
                            src="/images/ai-model-3.webp"
                            alt="AI influencer"
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* ── Item 7 ── */}
                    <div className="group rounded-2xl overflow-hidden min-h-[240px] relative opacity-0">
                        <Image
                            src="/images/ai-model-4.webp"
                            alt="AI campaign model"
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};
