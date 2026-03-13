"use client";

import { useState, useRef, useEffect } from 'react';
import { Plus, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const defaultFaqs = [
    {
        question: "What makes your agentic marketing services unique?",
        answer: "Our studio combines sovereign AI intelligence with full-stack creative execution to deliver marketing systems that never sleep. We believe in a holistic approach, ensuring every aspect of your brand's digital presence — from visual identity to autonomous growth engines — is cohesive, compelling, and algorithmically optimised for maximum conversion velocity."
    },
    {
        question: "How do you ensure the brand's voice stays consistent?",
        answer: "Every agentic persona we deploy is trained on your exact brand guidelines, tone of voice, and audience data. The system continuously self-calibrates against real-time engagement signals, maintaining perfect brand coherence across every channel and market — 24 hours a day, without human error."
    },
    {
        question: "Can you help with both AI photoshoots and content strategy?",
        answer: "Yes. Our foundry handles end-to-end production — from AI-generated model photography and digital lookbooks to full content calendar strategy and autonomous publishing. Everything is built within one sovereign ecosystem so there is zero friction between visual creation and distribution."
    },
    {
        question: "How do you measure the success of agentic campaigns?",
        answer: "We operate on live data dashboards that track conversion velocity, engagement depth, and revenue attribution in real time. Unlike legacy agencies that report monthly, our agentic systems surface performance insights instantly and auto-optimise campaigns mid-flight based on sub-second behavioural signals."
    },
    {
        question: "What is the process for starting a project with Ai Velocity?",
        answer: "It begins with a discovery session to map your brand's current architecture and growth objectives. From there, we design a bespoke agentic infrastructure, deploy your virtual team, and run a controlled launch sequence. Most clients see measurable output within the first 48 hours of activation."
    }
];

/* Accordion item with ref-based height animation */
const FAQItem = ({ faq, isOpen, onToggle, index }) => {
    const bodyRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (bodyRef.current) {
            setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
        }
    }, [isOpen]);

    return (
        <div className="border-t border-charcoal/10 last:border-b">
            {/* Question row */}
            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className="w-full flex items-center justify-between gap-8 py-7 text-left group cursor-pointer"
            >
                <h3
                    className="font-sans text-lg font-medium tracking-tight transition-colors duration-300"
                    style={{ color: isOpen ? '#1A1A1A' : '#1A1A1A' }}
                >
                    {faq.question}
                </h3>

                <span
                    className="shrink-0 flex items-center justify-center transition-all duration-300"
                    style={{ color: isOpen ? '#1A1A1A' : '#1A1A1A' }}
                >
                    <span
                        className="inline-block transition-transform duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    >
                        {isOpen
                            ? <X className="w-4 h-4" strokeWidth={1.5} />
                            : <Plus className="w-4 h-4" strokeWidth={1.5} />
                        }
                    </span>
                </span>
            </button>

            {/* Answer — true height animation using scrollHeight */}
            <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                aria-hidden={!isOpen}
                style={{
                    height: `${height}px`,
                    overflow: 'hidden',
                    transition: 'height 0.55s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease',
                    opacity: isOpen ? 1 : 0,
                }}
            >
                <div ref={bodyRef}>
                    <p className="pb-8 text-[#1A1A1A] font-sans max-w-2xl">
                        {faq.answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

export const FAQ = ({ title = "FAQ's", label, faqs = defaultFaqs, bgClass = "bg-cloud-dancer" }) => {
    const [openIndex, setOpenIndex] = useState(0);
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const blob1Ref = useRef(null);
    const blob2Ref = useRef(null);
    const blob3Ref = useRef(null);
    const blob4Ref = useRef(null);

    const toggle = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Organic mesh gradient — 4 blobs drifting on infinite loops
            const blobs = [blob1Ref.current, blob2Ref.current, blob3Ref.current, blob4Ref.current];

            blobs.forEach((blob, i) => {
                const duration = 12 + i * 4; // 12s, 16s, 20s, 24s
                const xRange = 15 + i * 10;
                const yRange = 10 + i * 8;

                gsap.to(blob, {
                    xPercent: xRange,
                    yPercent: yRange,
                    scale: 1.15,
                    duration: duration,
                    ease: 'sine.inOut',
                    repeat: -1,
                    yoyo: true,
                });

                gsap.to(blob, {
                    xPercent: -xRange * 0.7,
                    yPercent: -yRange * 0.5,
                    duration: duration * 0.7,
                    ease: 'sine.inOut',
                    repeat: -1,
                    yoyo: true,
                    delay: duration * 0.3,
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative py-24 bg-electric-mint overflow-hidden">
            {/* Stronger graduated fade */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    background: `
                        radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.4) 0%, transparent 60%),
                        linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.08) 100%)
                    `
                }}
            />

            {/* Organic mesh gradient blobs */}
            <div
                ref={blob1Ref}
                className="absolute pointer-events-none z-[1]"
                style={{
                    width: '55%', height: '70%',
                    top: '-5%', left: '-10%',
                    background: 'radial-gradient(ellipse, rgba(255,255,255,0.3) 0%, rgba(223,244,231,0.15) 40%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    willChange: 'transform'
                }}
            />
            <div
                ref={blob2Ref}
                className="absolute pointer-events-none z-[1]"
                style={{
                    width: '45%', height: '60%',
                    top: '30%', right: '-8%',
                    background: 'radial-gradient(ellipse, rgba(150,210,170,0.2) 0%, rgba(192,233,203,0.1) 45%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(50px)',
                    willChange: 'transform'
                }}
            />
            <div
                ref={blob3Ref}
                className="absolute pointer-events-none z-[1]"
                style={{
                    width: '40%', height: '50%',
                    bottom: '-10%', left: '25%',
                    background: 'radial-gradient(ellipse, rgba(255,255,255,0.25) 0%, rgba(200,240,215,0.1) 40%, transparent 65%)',
                    borderRadius: '50%',
                    filter: 'blur(45px)',
                    willChange: 'transform'
                }}
            />
            {/* Deep forest shadow blob */}
            <div
                ref={blob4Ref}
                className="absolute pointer-events-none z-[1]"
                style={{
                    width: '60%', height: '65%',
                    bottom: '5%', right: '-5%',
                    background: 'radial-gradient(ellipse, rgba(80,140,90,0.14) 0%, rgba(60,120,75,0.08) 40%, transparent 65%)',
                    borderRadius: '50%',
                    filter: 'blur(70px)',
                    willChange: 'transform'
                }}
            />

            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 lg:gap-24">

                    {/* Left: Title */}
                    <div ref={titleRef} className="lg:pt-2 flex flex-col items-start">
                        {label && (
                            <span className="block font-mono text-[10px] tracking-[0.25em] uppercase text-[#1a1a1a]/50 mb-4">
                                {label}
                            </span>
                        )}
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif italic text-[#1a1a1a] tracking-tight">
                            {title}
                        </h2>
                    </div>

                    {/* Right: Accordion */}
                    <div className="flex flex-col">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                index={index}
                                faq={faq}
                                isOpen={openIndex === index}
                                onToggle={() => toggle(index)}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};
