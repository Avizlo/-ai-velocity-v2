"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MagneticButton } from '@/components/ui/MagneticButton';
import Image from 'next/image';

export const SplitFeature = ({
    image = "/images/ai-model-1.webp",
    imageAlt,
    label,
    watermark,
    title,
    text1 = "Our agentic systems combine sovereign AI intelligence with creative precision to bring exceptional growth velocity to every brand we activate. Specialising in autonomous content generation, digital identity design, and AI-powered campaign execution — we build infrastructure that performs without limits.",
    text2 = "We are dedicated to achieving exceptional revenue outcomes, while maintaining full brand integrity and strategic alignment for our clients and their audiences.",
    reverse = false,
    bgClass = "bg-cloud-dancer",
    theme = "light" // "light" or "dark"
}) => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        let ctx;
        const frameId = requestAnimationFrame(() => {
            ctx = gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                    }
                });

                tl.fromTo(imageRef.current,
                    { y: 50, opacity: 0, scale: 0.95 },
                    { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
                )
                    .fromTo(".split-anim",
                        { y: 30, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
                        "-=0.6"
                    );
            }, containerRef);
        });

        return () => {
            cancelAnimationFrame(frameId);
            ctx?.revert();
        };
    }, []);

    return (
        <section ref={containerRef} className={`relative py-20 ${bgClass} overflow-hidden`}>
            {/* Typographic Watermark */}
            {watermark && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 select-none">
                    <span className={`font-serif italic text-[12vw] leading-none whitespace-nowrap block tracking-tighter opacity-[0.03] ${theme === 'dark' ? 'text-white' : 'text-charcoal'}`}>
                        {watermark}
                    </span>
                </div>
            )}
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left/Right: Image */}
                    <div ref={imageRef} className={`group rounded-card overflow-hidden aspect-[4/5] w-full max-w-md relative ${reverse ? 'md:order-last md:justify-self-end' : ''} opacity-0`}>
                        <Image
                            src={image}
                            alt={imageAlt || "Agentic AI model"}
                            fill
                            quality={60}
                            sizes="(max-width: 768px) 100vw, 448px"
                            className="object-cover will-change-transform transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Left/Right: Text + CTA */}
                    <div ref={textRef} className={`flex flex-col justify-between h-full gap-16 ${reverse ? 'md:order-first' : ''}`}>
                        <div>
                            {label && (
                                <span className={`split-anim block font-mono text-[10px] tracking-[0.25em] uppercase mb-4 opacity-0 translate-y-4 ${theme === 'dark' ? 'text-white/60' : 'text-charcoal/40'}`}>
                                    {label}
                                </span>
                            )}
                            {title && (
                                <h2 className={`split-anim text-4xl md:text-5xl font-serif tracking-tight mb-8 opacity-0 translate-y-4 ${theme === 'dark' ? 'text-white' : 'text-charcoal'}`}>
                                    {title}
                                </h2>
                            )}
                            {text1 && (
                                <p className={`split-anim font-sans opacity-0 translate-y-4 ${theme === 'dark' ? 'text-white/90' : 'text-charcoal'}`}>
                                    {text1}
                                </p>
                            )}
                            {text2 && (
                                <p className={`split-anim font-sans mt-4 opacity-0 translate-y-4 ${theme === 'dark' ? 'text-white/90' : 'text-charcoal'}`}>
                                    {text2}
                                </p>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
