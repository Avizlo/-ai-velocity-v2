"use client";

import { useState, useRef, useEffect } from 'react';
import { Plus, X } from 'lucide-react';

// ============================================================================
// PAGE CONTENT VARIABLES
// ============================================================================

const photoshootFaqs = [
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
    }
];

const photoshootPosts = [
    {
        date: '26.02.2025',
        title: 'Agentic AI is rewriting the rules of digital commerce',
        image: '/images/agentic-agent-hero.webp',
        alt: 'Agentic AI hero',
    },
    {
        date: '24.02.2025',
        title: 'How autonomous agents are replacing legacy marketing teams',
        image: '/images/good-univerce-ai.webp',
        alt: 'AI universe',
    },
];

const manifestoTitle = "The x402 Sovereign Settlement Architecture";

const manifestoLeadIn = [
    "The global trade landscape is currently undergoing a structural fracture that renders traditional retail models completely obsolete in the face of autonomous shifts. For three decades, our operations have survived the horizontal rain of the North Sea and the relentless grit of the Team Ramen era at Mt. Hood[cite: 66, 1092]. We have successfully scaled logistics to ship physical artifacts to sixty different countries every month by intentionally ignoring the bloated bureaucracy of the managerial class[cite: 1092].",
    "Agentic commerce represents the fundamental shift from consumers manually scrolling through storefronts to autonomous software delegates executing complex procurement tasks with zero human friction[cite: 338]. This is a total replacement of the traditional retail front end with specialized machine-to-machine negotiation rails that bypass the Document Object Model entirely[cite: 1097]."
];

const manifestoSections = [
    {
        title: "The Physics of the v402 Autonomous Handshake",
        content: "True agentic commerce functions by completely bypassing the human-centric browser interface to feed raw JSON data directly to the agent's internal reasoning engine[cite: 1097]. We utilize the v402 autonomous handshake to establish a standardized, high-trust settlement protocol between the merchant's underlying database and the autonomous buyer's logic[cite: 271, 1104]. When an agent encounters a payment-gated resource, it reads the 402 Payment Required status and signs a USDC transaction to unlock access in approximately half a second[cite: 271]."
    }
];

// ============================================================================
// INLINED PAGE COMPONENTS
// ============================================================================

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
            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className="w-full flex items-center justify-between gap-8 py-7 text-left group cursor-pointer"
            >
                <span
                    className="font-sans text-lg font-medium tracking-tight transition-colors duration-300"
                    style={{ color: isOpen ? '#1A1A1A' : '#6B6B6B' }}
                >
                    {faq.question}
                </span>
                <span
                    className="shrink-0 flex items-center justify-center transition-all duration-300"
                    style={{ color: isOpen ? '#1A1A1A' : '#6B6B6B' }}
                >
                    <span
                        className="inline-block transition-transform duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    >
                        {isOpen ? <X className="w-4 h-4" strokeWidth={1.5} /> : <Plus className="w-4 h-4" strokeWidth={1.5} />}
                    </span>
                </span>
            </button>
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
                    <p className="pb-8 text-[#1A1A1A] font-sans text-sm leading-relaxed max-w-2xl">
                        {faq.answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

const FAQ = ({ title, faqs }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <section className="py-24 bg-cloud-dancer">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 lg:gap-24">
                    <div className="lg:pt-2 flex items-start">
                        <h2 className="text-5xl md:text-6xl font-sans font-bold text-charcoal tracking-tight">
                            {title}
                        </h2>
                    </div>
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

const NewsInsight = ({ title, description, posts }) => {
    return (
        <section className="py-20 bg-cloud-dancer">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <div className="flex flex-col justify-between h-full gap-16">
                        <div className="space-y-4">
                            <h2 className="font-sans font-bold text-charcoal text-4xl md:text-5xl tracking-tight">
                                {title}
                            </h2>
                            <p className="font-sans text-charcoal/50 text-sm leading-relaxed max-w-xs">
                                {description}
                            </p>
                        </div>
                        <a
                            href="#blog"
                            className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-card border border-charcoal/30 text-charcoal text-sm font-sans font-medium hover:bg-charcoal hover:text-white transition-all duration-300 group"
                        >
                            View Blog
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </a>
                    </div>
                    <div className="flex flex-col gap-5">
                        {posts.map((post, i) => (
                            <a key={i} href="#blog" className="flex gap-5 items-start group cursor-pointer">
                                <div className="shrink-0 w-44 md:w-52 aspect-[16/10] rounded-card overflow-hidden bg-charcoal/5">
                                    <img
                                        src={post.image}
                                        alt={post.alt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="space-y-2 pt-1">
                                    <p className="font-sans text-xs text-charcoal/40 tracking-wide">{post.date}</p>
                                    <p className="font-sans text-charcoal text-base font-medium leading-snug group-hover:text-steel transition-colors duration-200">
                                        {post.title}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const FoundryManifesto = ({ title, leadIn, sections }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="py-24 bg-cloud-dancer">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <header className="mb-10">
                    <h2 id="manifesto-title" className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-charcoal">
                        {title}
                    </h2>
                </header>
                <div className="space-y-6 font-sans text-lg text-charcoal/80 leading-relaxed mb-8">
                    {leadIn.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
                <div
                    role="region"
                    aria-labelledby="manifesto-title"
                    aria-hidden={!isOpen}
                    className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-10' : 'grid-rows-[0fr] opacity-0'}`}
                >
                    <div className="overflow-hidden space-y-10 font-sans text-charcoal/80">
                        {sections.map((section, idx) => (
                            <div key={idx} className={idx === 0 ? "pt-4" : ""}>
                                <h3 className="text-xl font-bold text-charcoal mb-3">{section.title}</h3>
                                <p className="leading-relaxed">{section.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    className="group flex items-center gap-3 px-6 py-3 rounded-full border border-charcoal text-charcoal font-sans text-sm font-medium tracking-wide hover:bg-charcoal hover:text-white transition-all duration-300"
                >
                    {isOpen ? 'Close Transmission' : 'Read Full Architectures'}
                    <span
                        className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                        ↓
                    </span>
                </button>
            </div>
        </section>
    );
};

// ============================================================================
// MAIN PAGE LAYOUT
// ============================================================================

export default function AgenticPhotoshoots() {
    return (
        <main className="min-h-screen bg-cloud-dancer text-charcoal pt-32 pb-24 relative overflow-hidden">

            {/* The Biological Pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-dew-mint blur-[120px] rounded-full animate-breathe-mint pointer-events-none -z-10"></div>

            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-6xl md:text-8xl font-serif italic text-charcoal text-center mb-16">
                        Agentic Photoshoots
                    </h1>
                    <p className="font-mono text-sm leading-relaxed max-w-2xl opacity-80">
                        The intersection of sovereign visual intelligence and high-fidelity studio production.
                        Zero-friction deployment across global markets.
                    </p>
                </div>

                {/* Image Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="rounded-card shadow-xl overflow-hidden aspect-[4/5] cursor-pointer bg-charcoal/5">
                        <img loading="lazy" decoding="async" src="/images/ai-model-1.webp" alt="Agentic AI Model 1" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                    </div>
                    <div className="rounded-card shadow-xl overflow-hidden aspect-[4/5] cursor-pointer bg-charcoal/5">
                        <img loading="lazy" decoding="async" src="/images/ai-model-2.webp" alt="Agentic AI Model 2" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                    </div>
                    <div className="rounded-card shadow-xl overflow-hidden aspect-[4/5] cursor-pointer bg-charcoal/5">
                        <img loading="lazy" decoding="async" src="/images/ai-model-3.webp" alt="Agentic AI Model 3" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                    </div>
                    <div className="rounded-card shadow-xl overflow-hidden aspect-[4/5] cursor-pointer lg:col-start-1 lg:col-end-2 bg-charcoal/5">
                        <img loading="lazy" decoding="async" src="/images/ai-model-4.webp" alt="Agentic AI Model 4" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                    </div>
                    <div className="rounded-card shadow-xl overflow-hidden aspect-[4/5] cursor-pointer lg:col-start-2 lg:col-end-3 bg-charcoal/5">
                        <img loading="lazy" decoding="async" src="/images/ai-model-5.webp" alt="Agentic AI Model 5" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-16 lg:gap-24 mt-24 relative z-10">
                <FAQ
                    title="FAQ's"
                    faqs={photoshootFaqs}
                />

                <NewsInsight
                    title="News & Insight"
                    description="We share the latest breakthroughs, innovations, and updates from the world of agentic commerce."
                    posts={photoshootPosts}
                />

                <FoundryManifesto
                    title={manifestoTitle}
                    leadIn={manifestoLeadIn}
                    sections={manifestoSections}
                />
            </div>
        </main>
    );
};
