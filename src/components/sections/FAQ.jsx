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
        <div className="border-t border-charcoal/10 last:border-b faq-item opacity-0 translate-y-4">
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
                    style={{ color: isOpen ? '#1A1A1A' : '#6B6B6B' }}
                >
                    {faq.question}
                </h3>

                <span
                    className="shrink-0 flex items-center justify-center transition-all duration-300"
                    style={{ color: isOpen ? '#1A1A1A' : '#6B6B6B' }}
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

    const toggle = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

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

            tl.fromTo(titleRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
            )
                .fromTo(".faq-item",
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
                    "-=0.4"
                );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative py-24 bg-electric-mint overflow-hidden">
            {/* Graduated fade for depth — lighter center, softer edges */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    background: `
                        radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.25) 0%, transparent 65%),
                        linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 25%, transparent 75%, rgba(0,0,0,0.04) 100%)
                    `
                }}
            />

            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 lg:gap-24">

                    {/* Left: Title */}
                    <div ref={titleRef} className="lg:pt-2 flex flex-col items-start opacity-0 translate-y-4">
                        {label && (
                            <span className="block font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/40 mb-4">
                                {label}
                            </span>
                        )}
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif italic text-charcoal tracking-tight">
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
