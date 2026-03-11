'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CTABanner } from '@/components/sections/CTABanner';
import { GsapPageWrapper } from '@/components/ui/GsapPageWrapper';
import { FAQ } from '@/components/sections/FAQ';
import { FoundryManifesto } from '@/components/sections/FoundryManifesto';
import { RelatedInsights } from '@/components/sections/RelatedInsights';

// ============================================================================
// PAGE CONTENT VARIABLES
// Edit these variables to update the text and images across the page components
// ============================================================================

const heroFeature = {
    image: "/images/agentic-agent-hero.webp",
    imageAlt: "Digital representation of an autonomous Agentic AEO software delegate structuring semantic data",
    label: "Semantic Discovery",
    watermark: "AEO",
    title: "The Future of SEO",
    text1: "Agentic AEO represents the transition from a keyword-driven web to a horizontal ecosystem of answer-centric intelligence. We are moving past the structural fractures of traditional SEO where success was defined by clicks, blue links, and fragmented attention. In this new era, the AI agent becomes the primary consumer. These discovery engines do not browse traditional landing pages. They query at the protocol level to secure the most accurate, machine-readable outcomes for the human queries they assist.",
    text2: "By 2030, this shift toward Agentic Answer Engine Optimization will orchestrate billions in organic visibility as discovery and immediate synthesis converge into a single, frictionless flow."
};

const statementSection = {
    title: "Agentic AEO",
    subtitle: "PHASE-IN: MACHINE-READABLE DISCOVERY",
    statement: `The world of search is shifting from "Human-to-Link" to "Agent-to-Answer," and traditional SEO playbooks are being vaporized. Agentic AEO is a transformative approach to digital discovery where autonomous AI models bypass visual interfaces, extracting structured semantic data to instantly synthesize and execute on behalf of the user.`,
    actionText: "Are you ready?",
    watermark: "AEO"
};



const secondaryFeature = {
    image: "/images/semantic-knowledge-graph.webp",
    imageAlt: "Visualization of semantic knowledge graph structuring",
    label: "Knowledge Infrastructure",
    watermark: "Entities",
    title: "Semantic Knowledge Graphs",
    text1: "The 2026 signal for Agentic AEO is already appearing in the way global content infrastructure is being restructured for machine-to-machine discovery. At the heart of this transition is the semantic knowledge graph—a continuous data layer designed to facilitate instant answer retrieval by AI search agents without human intervention. This decentralized discovery layer allows language models to validate factual entities directly from your origin data, bypassing the noise and bias of legacy search engine algorithms.",
    text2: "By utilizing structured data formats like JSON-LD, this infrastructure provides mathematical clarity to every piece of content, ensuring your brand's authority perfectly aligns with the intelligence engine's query. This level of machine-readable legibility enables zero-click dominance and a total reduction in traditional SEO guesswork. Businesses that optimize their technical architecture for algorithmic synthesis and direct answer routing will dominate the next era of organic, human-free discovery."
};

const aeoFaqs = [
    {
        question: "What is Agentic AEO?",
        answer: "Agentic AEO is the process of optimizing a brand's digital presence so that it is easily discovered and cited by autonomous AI agents. Unlike traditional SEO which focuses on human users, this strategy focuses on providing machine-readable data that answer engines can use to make recommendations."
    },
    {
        question: "How does it differ from traditional SEO?",
        answer: "Traditional SEO focuses on keywords, backlinks, and website traffic to improve rankings on a search results page. Agentic AEO focuses on entity authority and data provenance to ensure that a brand is the primary source cited by an AI agent when answering a user's question."
    },
    {
        question: "Why is the current agency model failing?",
        answer: "The traditional agency model is often based on manual labor and surface-level marketing tactics that do not account for the technical complexity of AI. This leads to high failure rates as legacy strategies are unable to keep up with the speed and logic of autonomous search systems."
    },
    {
        question: "What is an Answer Engine?",
        answer: "An answer engine is an AI system like ChatGPT, Perplexity, or Gemini that provides a direct answer to a user's query rather than just a list of links. These engines synthesize information from across the web to provide a single, coherent response."
    },
    {
        question: "How do I make my brand legible to AI agents?",
        answer: "Making a brand legible requires structuring your data using standardized formats like JSON-LD and creating a clear knowledge graph of your products and services. This allows the AI to understand the relationships between different entities and verify the accuracy of your information."
    },
    {
        question: "What is a Knowledge Graph?",
        answer: "A knowledge graph is a network of interconnected entities and their attributes that provides a semantic framework for understanding information. For a brand, this includes data on products, pricing, materials, and supply chain ethics in a format that machines can process."
    },
    {
        question: "Will AI agents replace search engines?",
        answer: "AI agents are not replacing search engines but are evolving into the primary interface through which users interact with search data. Instead of browsing a list of links, users will ask their agents to find and execute tasks on their behalf using information sourced from across the web."
    },
    {
        question: "What is information gain in the context of AEO?",
        answer: "Information gain refers to the unique and valuable data that a brand provides that is not found elsewhere on the web. Answer engines prioritize sources that offer fresh, verifiable insights over those that simply repeat existing information."
    },
    {
        question: "Is my current website compatible with agentic search?",
        answer: "Most current websites are designed for human eyes and often lack the clean, machine-readable backend required for agentic search. Compatibility requires a shift toward headless architectures and the implementation of advanced data protocols."
    },
    {
        question: "How quickly can a brand see results from agentic optimization?",
        answer: "The transition to agentic authority is an ongoing process, but brands that prioritize technical integrity can see improved citations and visibility as answer engines update their models. Early adoption is critical to establishing a position as a trusted source before the market becomes saturated."
    }
];


const manifestoTitle = "The Clinical Transition to Agentic AEO";

const manifestoLeadIn = [
    "The modern commercial landscape is currently defined by a profound structural fracture that legacy institutions are failing to reconcile. For three decades, the retail sector has relied on the parasitic model of the agency retainer, a system characterized by high failure rates and a fundamental lack of technical accountability. These legacy structures are built on the manual optimization of surface-level keywords, a strategy that is rapidly being vaporized as the web shifts from a human-readable library to a machine-negotiated foundry. We are no longer competing for the attention of a human scrolling through a list of blue links. We are competing for the trust of an autonomous agent that requires cold, mathematical provenance to verify a brand as a primary fact. This shift necessitates a new standard of intelligence known as agentic AEO, where the objective is to secure the definitive citation within the generative search layer.",
    "Traditional search engine optimization is a fractured relic of a slower era that prioritizes volume over information gain. The current saturation of the digital timeline with synthetic noise has created an environment where the signal is lost in a sea of low-fidelity content echoes. Brands that continue to invest in the old playbooks are essentially funding their own obsolescence by building on foundations that Answer Engines can no longer trust. Agentic AEO represents the strategic pivot toward entity-based authority, where a brand’s digital footprint is engineered for algorithmic negotiation rather than passive discovery. This process involves the deep integration of JSON-LD and the construction of a robust Knowledge Graph to ensure that every product attribute is legible to a Large Language Model. By focusing on entity embedding, we establish a semantic mass that allows the brand to survive the transition from traditional search to a world of horizontal intelligence."
];

const manifestoSections = [
    {
        title: "Navigating the Physics of Agentic AEO and Digital Provenance",
        content: "A luxury eyewear brand seeking to dominate a high-intent query for titanium frames must provide the machine with more than just a beautiful landing page. In the agentic era, a user might ask an autonomous assistant to find a specific weight-to-strength ratio at a set price point with a verified ethical supply chain. This is the functional bridge where the visual storefront disappears and the underlying technical physics take command. To satisfy this intent, the brand must utilize the Model Context Protocol to facilitate a high-fidelity API handshake between its internal inventory and the agentic workforce. This interaction relies on Retrieval-Augmented Generation and the deployment of RESTful services to provide real-time, verifiable data that the agent can reason with. Without this level of technical density, the brand remains invisible to the very systems that are now responsible for the majority of global commercial discovery."
    },
    {
        content: "The intelligence layer of this operation is managed by OpenClaw, our proprietary engine designed to negotiate the terms of citation within the generative environment. OpenClaw functions by analyzing the inference costs and token usage of various search models to identify the most efficient path to authority. This is not about tricking an algorithm; it is about providing the precise \"Information Gain\" that the system requires to justify a recommendation. By optimizing for the specific weights and biases of frontier models, we ensure that the brand is not just mentioned, but cited as the Reference Zero source. This level of clinical precision is what separates the AI Velocity foundry from the generic \"GEO\" services that offer nothing more than surface-level brand mentions. We are building the structural integrity required to dominate the conversation between machines."
    },
    {
        content: "The 2026 signal is already clear as the market moves toward a reality of autonomous settlement through tools like the Whop x Tether WDK. This convergence of discovery and payment means that the agentic AEO process must now account for the entire commercial lifecycle within a single, atomic event. When an agent identifies a product, it must also have the capacity to verify the settlement layer and execute the trade without human intervention. This requires a headless architecture that allows the transactional logic to exist independently of the visual frontend, ensuring that the process is as fast as the intelligence driving it. We are moving toward a world where the payment is as autonomous as the search, creating a frictionless loop that legacy retailers are currently unable to navigate. The brands that survive this shift will be those that treat their technical infrastructure as a living, commercial organism."
    },
    {
        content: "Security and trust are the final anchors of the agentic transition, managed through the x402 Sentinel protocol. The x402 Sentinel provides the cryptographic verification required to prove that a brand’s data has not been tampered with or synthesized by a malicious actor. In an era where deepfakes and automated misinformation are rampant, this level of technical provenance is the only way to secure a permanent spot in the generative citation layer. Every data point provided to an Answer Engine must be signed and auditable, creating a trail of integrity that the machine can verify in milliseconds. This is the death of the \"black box\" agency model and the birth of a new era of radical transparency. We provide the mathematical proof that your brand is the only logical choice for the agentic workforce."
    },
    {
        content: "The final stage of the optimization loop is the v402 handshake, which closes the gap between the agent's intent and the final settlement. The v402 handshake ensures that the attribution data is preserved throughout the entire negotiation, providing the brand with a clear view of how the agent navigated the decision-making process. This protocol-level trust allows for a more sophisticated level of customer modeling, where the brand can adapt its offerings in real-time based on the feedback from the agentic swarm. It is a system built for velocity, moving past the high-friction redirects and manual tracking pixels of the legacy web. By integrating the v402 handshake, we ensure that every interaction is a verified commercial fact that contributes to the brand’s overall algorithmic weight. This is the foundation of the sovereign digital workforce."
    },
    {
        content: "We are building a world where the distinction between marketing and engineering has effectively vanished. Agentic AEO is the clinical application of this reality, designed for those who understand that the future of commerce is a technical competition. The legacy management class will continue to struggle with the failure rates of their outdated retainers while we build the foundries that define the next century of global retail. This is not a transition that can be ignored or delayed. It is a rapid, inevitable shift toward a machine-mediated economy where the most technically resilient brands will claim the highest ground. We are the architects of this new era, translating the complexity of the future into the physical reality of today. The era of the human-to-human web is fading, and the era of the agentic protocol is here."
    }
];

// ============================================================================
// INLINED PAGE COMPONENTS
// You can edit the HTML structure and Tailwind classes for any section below
// ============================================================================

const SplitFeature = ({
    image,
    imageAlt,
    label,
    watermark,
    title,
    text1,
    text2,
    reverse = false,
    bgClass = "bg-cloud-dancer",
    theme = "light"
}) => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
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
                .fromTo(containerRef.current.querySelectorAll(".split-anim"),
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
                    "-=0.6"
                );
        }, containerRef);

        return () => ctx.revert();
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
                            sizes="(max-width: 768px) 100vw, 448px"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    {/* Left/Right: Text + CTA */}
                    <div className={`flex flex-col justify-between h-full gap-16 ${reverse ? 'md:order-first' : ''}`}>
                        <div>
                            {label && (
                                <span className={`split-anim block font-mono text-[10px] tracking-[0.25em] uppercase mb-4 opacity-0 translate-y-4 ${theme === 'dark' ? 'text-white/40' : 'text-charcoal/40'}`}>
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

const StatementAction = ({ title, subtitle, statement, actionText, watermark = "AGENTIC" }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(sectionRef.current.querySelectorAll('.stmt-anim'),
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-28 md:py-36 bg-charcoal overflow-hidden" data-nav-theme="dark">
            {/* Massive Typographic Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 select-none">
                <span className="font-serif italic text-[14vw] leading-none whitespace-nowrap block tracking-tighter opacity-[0.03] text-white">
                    {watermark}
                </span>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
                {(title || subtitle) && (
                    <div className="mb-14 text-left">
                        {title && (
                            <h1 className="stmt-anim text-6xl md:text-7xl lg:text-8xl font-serif text-white/95 tracking-tighter leading-[0.95] mb-6 opacity-0 translate-y-4">
                                {title}
                            </h1>
                        )}
                        {subtitle && (
                            <p className="stmt-anim font-sans text-xs font-bold text-white/40 tracking-[0.2em] uppercase max-w-xl opacity-0 translate-y-4">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_28rem] gap-12 lg:gap-20 items-end">
                    <p className="stmt-anim font-serif italic text-[1.5rem] md:text-[2rem] lg:text-[2.2rem] text-white/80 leading-[1.3] tracking-tight lg:-mr-[125px] relative z-10 opacity-0 translate-y-4">
                        {statement}
                    </p>
                    <div className="stmt-anim w-full flex items-center justify-center md:justify-end opacity-0 translate-y-4">
                        <span className="text-electric-mint font-sans tracking-widest text-xs uppercase border-b border-electric-mint/50 pb-1">
                            {actionText}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AeoDiscoveryGrid = () => {
    const gridRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(gridRef.current.querySelectorAll('.bento-anim'),
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }, gridRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative py-20 bg-cloud-dancer overflow-hidden">
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-[1] select-none">
                <span className="font-serif italic text-[12vw] leading-none whitespace-nowrap block tracking-tighter opacity-[0.04] text-charcoal">
                    SCHEMA
                </span>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-12">
                    <span className="block font-mono text-[10px] tracking-[0.25em] uppercase mb-3 text-electric-mint">
                        Answer Engine Optimization
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-charcoal tracking-tight">
                        Beyond Search
                    </h2>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridTemplateRows: 'auto auto' }}>
                    {/* Tall KPI Panel — left, spans 2 rows */}
                    <div className="bento-anim relative md:row-span-2 rounded-2xl bg-charcoal p-8 flex flex-col min-h-[560px] ring-1 ring-charcoal/5 overflow-hidden transition-all duration-300 hover:-translate-y-1 opacity-0">
                        <span className="absolute bottom-4 right-4 font-serif italic text-[4.5rem] leading-none text-white/[0.03] pointer-events-none select-none tracking-tighter">
                            Search
                        </span>
                        <div className="relative z-10">
                            <span className="font-serif italic text-2xl text-electric-mint block mb-6">The Future of Search</span>
                            <div className="space-y-4">
                                <div className="border-b border-white/[0.10] pb-3">
                                    <p className="font-serif italic text-3xl text-white tracking-tight">61%</p>
                                    <p className="font-sans font-normal text-white/70 text-sm mt-1">Enterprise Purchase Decisions Influenced by LLM Answers</p>
                                </div>
                                <div className="border-b border-white/[0.10] pb-3">
                                    <p className="font-serif italic text-3xl text-white tracking-tight">40%</p>
                                    <p className="font-sans font-normal text-white/70 text-sm mt-1">Product Discovery via AI Agents by 2027</p>
                                </div>
                                <div className="border-b border-white/[0.10] pb-3">
                                    <p className="font-serif italic text-3xl text-white tracking-tight">77%</p>
                                    <p className="font-sans font-normal text-white/70 text-sm mt-1">Competitors Structurally Invisible to Agents</p>
                                </div>
                                <div>
                                    <p className="font-serif italic text-3xl text-white tracking-tight">34%</p>
                                    <p className="font-sans font-normal text-white/70 text-sm mt-1">Correlation Between SEO Rankings and AI Citations</p>
                                </div>
                            </div>
                        </div>
                        <Link href="/news-insights?category=agentic-aeo" className="relative z-10 mt-auto self-start inline font-sans text-white/40 text-xs tracking-widest uppercase border-b border-white/10 pb-1 hover:text-electric-mint hover:border-electric-mint/50 transition-colors duration-200">
                            Explore AEO Insights →
                        </Link>
                    </div>

                    {/* Content/entity card — top middle (mint) */}
                    <div className="bento-anim relative rounded-2xl bg-electric-mint p-8 flex flex-col justify-between min-h-[270px] ring-1 ring-charcoal/5 overflow-hidden transition-all duration-300 hover:-translate-y-1 opacity-0">
                        <span className="absolute -bottom-1 -right-1 font-serif italic text-[4rem] leading-none text-charcoal/[0.06] pointer-events-none select-none tracking-tighter">
                            Entity
                        </span>
                        <div className="space-y-4 relative z-10">
                            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/40 block">Entity Anchoring</span>
                            <h3 className="font-serif italic text-charcoal text-2xl leading-tight tracking-tight">
                                Embed your brand into the knowledge graph.
                            </h3>
                            <p className="font-sans text-charcoal/50 text-sm leading-relaxed">
                                Structured schema, semantic metadata, and verifiable provenance that make your entity the canonical answer.
                            </p>
                        </div>
                        <a href="#contact" className="relative z-10 self-start inline-block border-b border-charcoal/30 pb-1 text-charcoal transition-colors duration-300 font-sans tracking-widest text-xs uppercase hover:text-charcoal/60">
                            Start Optimization →
                        </a>
                    </div>

                    {/* Large image — RIGHT col, spans 2 rows, links to blog */}
                    <Link href="/news-insights/the-end-of-legacy-seo" className="bento-anim group md:row-span-2 rounded-2xl overflow-hidden min-h-[560px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 opacity-0 block relative">
                        <Image
                            src="/images/insights/the-end-of-legacy-seo.webp"
                            alt="The End of Legacy SEO - Transitioning to Agentic AEO"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent flex items-end p-6">
                            <div>
                                <p className="font-sans font-bold text-white text-sm">The End of Legacy SEO</p>
                                <p className="font-sans text-white/50 text-xs mt-1">Transitioning to Agentic AEO.</p>
                                <span className="inline-block font-sans text-white/70 text-xs tracking-widest uppercase border-b border-white/30 pb-1 mt-3 group-hover:text-electric-mint group-hover:border-electric-mint/50 transition-colors duration-200">
                                    Read Article →
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Blog article card — bottom middle, links to blog */}
                    <Link href="/news-insights/schema-markup-is-not-optional-the-aeo-technical-checklist" className="bento-anim relative group rounded-2xl overflow-hidden min-h-[270px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 opacity-0 block">
                        <Image
                            src="/images/insights/schema-markup-checklist.webp"
                            alt="Schema Markup is Not Optional - The AEO Technical Checklist"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent flex items-end p-6">
                            <div>
                                <p className="font-sans font-bold text-white text-sm">Schema Markup is Not Optional</p>
                                <p className="font-sans text-white/50 text-xs mt-1">The AEO Technical Checklist.</p>
                                <span className="inline-block font-sans text-white/70 text-xs tracking-widest uppercase border-b border-white/30 pb-1 mt-3 group-hover:text-electric-mint group-hover:border-electric-mint/50 transition-colors duration-200">
                                    Read Article →
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};



// ============================================================================
// MAIN PAGE LAYOUT
// ============================================================================

export default function AgenticAEO() {

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://aivelocity.dev/#organization",
                "name": "AI Velocity",
                "url": "https://aivelocity.dev",
                "sameAs": [
                    "https://www.linkedin.com/company/ai-velocity"
                ]
            },
            {
                "@type": "WebPage",
                "@id": "https://aivelocity.dev/agentic-aeo/#webpage",
                "url": "https://aivelocity.dev/agentic-aeo",
                "name": "Agentic AEO — Answer Engine Optimization for AI Agents",
                "description": "Agentic AEO restructures your digital footprint so autonomous AI agents cite your brand as the canonical answer. Structured schema, semantic knowledge graphs, and entity anchoring.",
                "isPartOf": { "@id": "https://aivelocity.dev/#website" },
                "about": { "@id": "https://aivelocity.dev/agentic-aeo/#service" },
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", "h2", ".stmt-anim"]
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://aivelocity.dev"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Agentic AEO",
                        "item": "https://aivelocity.dev/agentic-aeo"
                    }
                ]
            },
            {
                "@type": "Service",
                "@id": "https://aivelocity.dev/agentic-aeo/#service",
                "name": "Agentic AEO",
                "description": "Answer Engine Optimization infrastructure that makes your brand the canonical citation for autonomous AI agents like ChatGPT, Perplexity, and Gemini.",
                "serviceType": "Answer Engine Optimization",
                "areaServed": "Worldwide",
                "provider": { "@id": "https://aivelocity.dev/#organization" },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Agentic AEO Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Entity Anchoring & Knowledge Graphs",
                                "description": "Structured schema, semantic metadata, and verifiable provenance that embed your brand as the canonical entity in AI knowledge bases."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Information Gain Optimization",
                                "description": "Unique, verifiable data that answer engines prioritize over commodity content — ensuring your brand is cited as the primary authority."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Machine-Readable Architecture",
                                "description": "Headless infrastructure with JSON-LD, semantic HTML, and API-first backends optimised for autonomous agent discovery and citation."
                            }
                        }
                    ]
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": aeoFaqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            }
        ]
    };

    return (
        <main data-nav-theme="dark" className="pb-24 w-full min-h-screen bg-cloud-dancer">
            {/* Inject JSON-LD Schema directly into the head */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <GsapPageWrapper className="gap-16 lg:gap-24">
                <StatementAction
                    title={statementSection.title}
                    subtitle={statementSection.subtitle}
                    statement={statementSection.statement}
                    actionText={statementSection.actionText}
                    watermark={statementSection.watermark}
                />

                <AeoDiscoveryGrid />

                <SplitFeature
                    reverse
                    bgClass="bg-[#212121]"
                    theme="dark"
                    image={heroFeature.image}
                    imageAlt={heroFeature.imageAlt}
                    label={heroFeature.label}
                    watermark={heroFeature.watermark}
                    title={heroFeature.title}
                    text1={heroFeature.text1}
                    text2={heroFeature.text2}
                />

                <SplitFeature
                    image={secondaryFeature.image}
                    imageAlt={secondaryFeature.imageAlt}
                    label={secondaryFeature.label}
                    watermark={secondaryFeature.watermark}
                    title={secondaryFeature.title}
                    text1={secondaryFeature.text1}
                    text2={secondaryFeature.text2}
                />

                <FAQ
                    title="FAQ's"
                    faqs={aeoFaqs}
                    bgClass="bg-electric-mint"
                />

                {/* Internal Cross-Links for SEO/AEO topical authority */}
                <section className="py-16 bg-cloud-dancer">
                    <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                        <span className="block font-mono text-[10px] tracking-[0.25em] uppercase mb-3 text-electric-mint">
                            Related Services
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-charcoal tracking-tight mb-10">
                            Explore the Ecosystem
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Link href="/agentic-commerce" className="group rounded-2xl bg-electric-mint p-8 flex flex-col justify-between min-h-[200px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1">
                                <div>
                                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/40 block mb-3">Commerce</span>
                                    <h3 className="font-serif italic text-charcoal text-2xl leading-tight tracking-tight">Agentic Commerce</h3>
                                    <p className="font-sans text-charcoal/60 text-sm leading-relaxed mt-2">Autonomous procurement and settlement for machine-to-machine trade.</p>
                                </div>
                                <span className="self-start inline-block border-b border-charcoal/20 pb-1 text-charcoal/50 font-sans tracking-widest text-xs uppercase mt-4 group-hover:text-charcoal group-hover:border-charcoal/50 transition-colors duration-200">
                                    Explore →
                                </span>
                            </Link>
                            <Link href="/agentic-marketing" className="group rounded-2xl bg-electric-mint p-8 flex flex-col justify-between min-h-[200px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1">
                                <div>
                                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/40 block mb-3">Acquisition</span>
                                    <h3 className="font-serif italic text-charcoal text-2xl leading-tight tracking-tight">Agentic Marketing</h3>
                                    <p className="font-sans text-charcoal/60 text-sm leading-relaxed mt-2">Autonomous campaign orchestration and AI-generated content at machine speed.</p>
                                </div>
                                <span className="self-start inline-block border-b border-charcoal/20 pb-1 text-charcoal/50 font-sans tracking-widest text-xs uppercase mt-4 group-hover:text-charcoal group-hover:border-charcoal/50 transition-colors duration-200">
                                    Explore →
                                </span>
                            </Link>
                            <Link href="/agentic-payments" className="group rounded-2xl bg-electric-mint p-8 flex flex-col justify-between min-h-[200px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1">
                                <div>
                                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/40 block mb-3">Settlement</span>
                                    <h3 className="font-serif italic text-charcoal text-2xl leading-tight tracking-tight">Agentic Payments</h3>
                                    <p className="font-sans text-charcoal/60 text-sm leading-relaxed mt-2">Machine-to-machine settlement infrastructure for autonomous procurement.</p>
                                </div>
                                <span className="self-start inline-block border-b border-charcoal/20 pb-1 text-charcoal/50 font-sans tracking-widest text-xs uppercase mt-4 group-hover:text-charcoal group-hover:border-charcoal/50 transition-colors duration-200">
                                    Explore →
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>

                <RelatedInsights
                    category="Agentic AEO"
                    description="Optimising for AI engines instead of search engines — the new frontier of brand visibility and discovery."
                />

                <FoundryManifesto
                    title={manifestoTitle}
                    leadIn={manifestoLeadIn}
                    sections={manifestoSections}
                />

                <CTABanner />
            </GsapPageWrapper>
        </main>
    );
}
