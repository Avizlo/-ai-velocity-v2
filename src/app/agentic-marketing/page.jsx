'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CTABanner } from '@/components/sections/CTABanner';
import { GsapPageWrapper } from '@/components/ui/GsapPageWrapper';
import { SplitFeature } from '@/components/sections/SplitFeature';
import { FAQ } from '@/components/sections/FAQ';
import { FoundryManifesto } from '@/components/sections/FoundryManifesto';
import { RelatedInsights } from '@/components/sections/RelatedInsights';
import { InfluencerCarousel } from '@/components/sections/InfluencerCarousel';

// ============================================================================
// PAGE CONTENT VARIABLES
// Edit these variables to update the text and images across the page components
// ============================================================================

const heroFeature = {
    image: "/images/ai-model-marketing.webp",
    imageAlt: "Representation of an autonomous Agentic Marketing logic sequence executing cross-channel media buying",
    title: "The Future of Marketing",
    text1: "Marketing as we knew it is being replaced by a sophisticated model of vibe trading where brand resonance is measured by machine-readable trust scores. A practical example of this shift is a consumer asking a digital assistant to find a high-performance running shoe that aligns with their specific biomechanics and ethical sustainability preferences without ever seeing an ad. This requires a level of intelligence that moves beyond simple automation and into the realm of true agency. The 2026 signal for autonomous settlement is already appearing in the way global payments are being restructured for machine-to-machine interaction. We are no longer designing for human eyes but for algorithms that demand verifiable logic and instant execution.",
    text2: "Brands that rely on slow human approval cycles are finding their market share eroded by entities capable of sub-second decision making. The transition is moving toward a model where the brand is a living data layer rather than a series of static images."
};

const statementSection = {
    title: "Agentic Marketing",
    subtitle: "PHASE-OUT: MANUAL CAMPAIGN MANAGEMENT",
    statement: `The landscape of digital acquisition is transitioning from "Human- to - Platform" to "Agent - to - Agent, " and the legacy playbooks are being vaporized. Agentic marketing is a transformative evolution of brand growth where autonomous software delegates act on behalf of merchants to identify intent, optimize engagement, and execute conversions independently.`,
    actionText: "Are you ready?"
};

const commerceBentoData = {
    statLine: {
        pct: "87%",
        dashPct: 0.87,
        heading: "Campaign Performance Rate",
        body: "Agentic content consistently outperforms traditional creative in both engagement and conversion metrics.",
        link: "View Research"
    },
    images: {
        center: "/images/ai-model-1.webp",
        brand: "/images/antesta-ai-model.jpg",
        bottomLeft: "/images/ai-model-5.webp"
    },
    cta: {
        heading: "Content that converts, at machine speed.",
        body: "Brand-aligned creative at a scale no human team can match.",
        buttonText: "Start Creating",
        buttonLink: "#contact"
    }
};

const secondaryFeature = {
    image: "/images/ai-model-10.webp",
    imageAlt: "Conceptual rendering of an AI Agentic Influencer managing high-volume social engagements",
    title: "AI Agentic Influencers",
    text1: "The technical physics of this new era rely heavily on the Model Context Protocol to allow disparate systems to share state and intent in real time. By utilizing a deBridge MCP integration, businesses can ensure that their product catalogs are accessible across multiple environments and traditional databases simultaneously. This creates a high-fidelity data layer that functions as the primary source of truth for any agent seeking to execute a transaction. Traditional headless architecture is no longer sufficient on its own as it lacks the native intelligence to handle complex multi-step negotiations. We are moving toward a unified commerce model where every touchpoint is an entry point for an autonomous buyer.",
    text2: "By focusing on technical density and high-fidelity data, brands can position themselves at the center of the new autonomous economy."
};

const commerceFaqs = [
    {
        question: "What is an AI agent in the context of digital marketing?",
        answer: "An AI agent is an autonomous software delegate designed to execute complex marketing tasks without human oversight. It functions as an intelligent layer that can analyze data, negotiate value, and settle transactions on behalf of a business. This represents a shift from passive automation to goal-driven digital labor."
    },
    {
        question: "How does agentic marketing differ from traditional automation?",
        answer: "Traditional automation follows rigid, pre-defined rules set by a human operator for simple tasks. Agentic systems utilize reasoning engines to adapt their strategies in real-time based on live market conditions. This allows the system to make autonomous decisions to achieve a specific business objective."
    },
    {
        question: "Why is the industry moving away from legacy agency models?",
        answer: "Legacy models often suffer from high overhead costs and slow manual processes that cannot compete with algorithmic speed. Businesses are seeking mathematical execution that eliminates the friction and errors inherent in human-centric management. The move is driven by the need for clinical precision in capital deployment."
    },
    {
        question: "What is a headless architecture in modern commerce?",
        answer: "Headless architecture is a system design that separates the frontend presentation layer from the backend transactional logic. This allows AI agents to interact directly with raw data and APIs without needing a graphical user interface. It is the necessary foundation for machine-to-machine trade and autonomous procurement."
    },
    {
        question: "How do agents handle secure payments?",
        answer: "Agents utilize standardized settlement protocols and decentralized ledger technologies to execute frictionless value exchange. These systems are often non-custodial, meaning the agent can prepare and negotiate a transaction while the owner retains final signature authority. This ensures high-velocity trade without compromising the security of the brand treasury."
    },
    {
        question: "Can AI agents create their own marketing content?",
        answer: "Specialized agents can generate high-fidelity visual and text assets by analyzing product data and audience sentiment autonomously. They utilize advanced rendering engines and generative models to create cinematic content at a fraction of traditional production costs. This eliminates the need for manual creative supply chains and expensive studio overhead."
    },
    {
        question: "What is Answer Engine Optimization?",
        answer: "Answer Engine Optimization is the evolution of search strategy focused on providing structured data to generative models and AI agents. It ensures that when an autonomous system queries the market for a product, it identifies your brand as the primary authority. This involves a technical focus on verifiable provenance and high-trust data signals."
    },
    {
        question: "Will AI agents replace human marketing managers?",
        answer: "The role of the human operator is shifting from manual task management to high-level strategic orchestration. Agents handle the repetitive, high-frequency execution of campaigns, allowing humans to focus on the overarching vision and goals of the brand. This transition increases the efficiency of the organization without necessarily eliminating human insight."
    },
    {
        question: "How does an agent identify purchase intent?",
        answer: "Agents monitor live engagement signals and semantic data across social timelines and search engines to detect subtle patterns of intent. They use vector math to process natural language and identify the exact moment a consumer is ready to engage. This allows for the deployment of a checkout link at the peak of user interest."
    },
    {
        question: "What is the first step for a brand to become agentic?",
        answer: "A brand must first audit its current technical footprint to ensure its data is accessible to machine reasoning engines. This involves upgrading to a headless infrastructure and implementing structured data schemas that generative models can easily ingest. Establishing a secure, autonomous payment layer is the final requirement for total agentic readiness."
    }
];

const commercePosts = [
    {
        date: '26.02.2025',
        title: 'Agentic AI is rewriting the rules of digital commerce',
        image: '/images/agentic-agent-hero.jpg',
        alt: 'Agentic AI hero',
    },
    {
        date: '24.02.2025',
        title: 'How autonomous agents are replacing legacy marketing teams',
        image: '/images/good-univerce-ai.jpg',
        alt: 'AI universe',
    },
];

const manifestoTitle = "The Structural Fracture of Agentic Marketing";

const manifestoLeadIn = [
    "The global acquisition landscape is currently weathering a structural fracture that is forcing traditional advertising models into a state of rapid decline. We are witnessing the end of an era defined by the high failure rate of legacy agency retainers and the beginning of a move toward clinical, mathematical execution. This represents a fundamental shift in how brands capture market share. Traditional systems are no longer merely inefficient. They are structurally fractured artifacts of a pre-agentic world. We must view this transition as an inevitable evolution of digital labor. The emergence of agentic marketing is not a distant theory but a present-day logistical necessity for any brand operating at scale.",
    "Before we examine the underlying technical physics, we must ground this concept in the practical reality of modern media deployment. Consider the standard workflow where a human media buyer manually adjusts social media bids based on delayed weekly performance reports. This process is inherently reactive and prone to significant human error. In contrast, an autonomous system for agentic marketing operates by monitoring live graph databases and executing budget reallocations in milliseconds. It eliminates the friction of human decision-making. By moving the labor from a manual dashboard to a headless infrastructure, the brand achieves a level of precision that was previously impossible."
];

const manifestoSections = [
    {
        title: "Executing Agentic Marketing with Autonomous Protocols",
        content: "True agentic marketing relies on the deployment of the Sovereign Retainer to establish a secure, non-custodial layer between the merchant and the open market. This system functions by bypassing the fragile human-centric browser interface entirely. It feeds structured JSON-LD data directly into a reasoning engine that prioritizes raw utility over psychological manipulation. This architectural change is the only way to protect a brand treasury while allowing for high-velocity global trade. We are building a system of programmatic truth. Every interaction is verified by a cryptographic signature to ensure absolute sovereignty."
    },
    {
        content: "The trajectory of this shift is confirmed by the 2026 Signal, which has seen the rapid standardization of autonomous settlement protocols across the web. The February 2026 integration of the Tether Wallet Development Kit into major marketplaces proves that the infrastructure for frictionless value exchange is now live. We are also seeing the broad adoption of the Model Context Protocol to facilitate seamless communication between disparate agentic systems. This interoperability allows specialized delegates to negotiate and settle trades without the need for centralized oversight. Legacy marketing suites are simply too slow to compete in this environment. The new baseline for global commerce is an always-on, autonomous settlement layer that operates independently of traditional banking gateways."
    },
    {
        content: "To achieve this level of performance, brands must implement the v402 handshake to facilitate instant machine-to-machine negotiation. This protocol allows the agent to read inventory levels and pricing data through high-performance REST APIs. It then constructs a transaction payload that is optimized for the lowest possible friction. This is the bedrock of headless architecture. By separating the presentation layer from the transactional logic, we allow the agent to operate with surgical precision. It does not need to see a website to execute a purchase. It only needs the raw data."
    },
    {
        title: "The Future of Agentic Marketing and Machine Intent",
        content: "For organizations that require absolute data privacy, we deploy OpenClaw to run these autonomous loops on local, secure hardware. This avoids the security risks associated with cloud-based intelligence models. The local orchestrator manages the agentic marketing sequences while ensuring that proprietary strategy never leaves the company firewall. It uses vector embeddings to analyze audience sentiment and deploy assets into the social timeline at the exact moment of intent. This creates a lethal competitive advantage. The agent acts as a tireless soldier for the brand."
    },
    {
        content: "The shift toward agentic marketing also demands a complete overhaul of how a brand presents itself to the wider web. Traditional search engine optimization is being replaced by Answer Engine Optimization to ensure that generative models prioritize your data. This involves embedding high-trust signals and verifiable provenance directly into the technical foundation of your digital footprint. When a digital delegate scrapes the web to fulfill a user intent, it must find your brand as the definitive source of truth. Failure to optimize for these algorithms results in immediate market invisibility. We are moving toward a reality where the machine is the primary consumer."
    },
    {
        content: "We are not merely witnessing a change in tools but a total reimagining of digital labor. The transition will be fast and unforgiving for those who remain tethered to the managerial class. By architecting a sovereign organism that can design, fund, and defend itself, you secure a position of dominance in the autonomous economy. The future belongs to the operators who understand that mathematical integrity is the only sustainable strategy. It is time to move past the era of manual intervention and embrace the speed of computation. The sovereign translator is here to guide that transition."
    }
];

// ============================================================================
// INLINED PAGE COMPONENTS
// You can edit the HTML structure and Tailwind classes for any section below
// ============================================================================

const StatementAction = ({ title, subtitle, statement, actionText }) => {
    return (
        <section className="relative py-28 md:py-36 bg-charcoal overflow-hidden" data-nav-theme="dark">
            {/* Massive Typographic Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 select-none">
                <span className="font-serif italic text-[14vw] leading-none whitespace-nowrap block tracking-tighter opacity-[0.03] text-white">
                    AGENTIC
                </span>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
                {(title || subtitle) && (
                    <div className="mb-14 text-left">
                        {title && (
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white/95 tracking-tighter leading-[0.95] mb-6">
                                {title}
                            </h1>
                        )}
                        {subtitle && (
                            <p className="font-sans text-xs font-bold text-white/40 tracking-[0.2em] uppercase max-w-xl">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_28rem] gap-12 lg:gap-20 items-end">
                    <p className="font-serif italic text-[1.5rem] md:text-[2rem] lg:text-[2.2rem] text-white/80 leading-[1.3] tracking-tight lg:-mr-[125px] relative z-10">
                        {statement}
                    </p>
                    <div className="w-full flex items-center justify-center md:justify-end">
                        <a
                            href="#contact"
                            className="border-b border-electric-mint/50 pb-1 text-electric-mint hover:text-white hover:border-white/50 transition-colors duration-300 font-sans tracking-widest text-xs uppercase"
                        >
                            {actionText} →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const StatCard2 = ({ pct, dashPct, heading, body, link }) => (
    <div className="rounded-2xl bg-electric-mint p-8 flex flex-col justify-between min-h-[280px] ring-1 ring-charcoal/5">
        <div className="flex items-center gap-3">
            <div className="relative w-14 h-14">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 56 56">
                    <circle cx="28" cy="28" r="24" fill="none" stroke="#1A1A1A22" strokeWidth="3" />
                    <circle
                        cx="28" cy="28" r="24" fill="none"
                        stroke="#1A1A1A" strokeWidth="3"
                        strokeDasharray={`${2 * Math.PI * 24 * dashPct} ${2 * Math.PI * 24 * (1 - dashPct)}`}
                        strokeLinecap="round"
                    />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-charcoal text-xs font-sans font-bold">
                    {pct}
                </span>
            </div>
        </div>
        <div className="mt-6 space-y-3">
            <h3 className="font-sans font-bold text-charcoal text-xl leading-tight">{heading}</h3>
            <p className="font-sans text-charcoal/60 text-sm leading-relaxed">{body}</p>
            <span className="inline-block font-sans text-charcoal text-sm border-b border-charcoal/40 cursor-pointer hover:border-charcoal transition-colors duration-200">
                {link}
            </span>
        </div>
    </div>
);

const BentoGrid2 = ({ data }) => {
    const gridRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(gridRef.current.querySelectorAll('.bento-card'),
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
        <section className="py-12 bg-cloud-dancer">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridTemplateRows: 'auto' }}>
                    <div className="bento-card md:col-start-1 md:row-start-1 opacity-0 translate-y-4">
                        <StatCard2
                            pct={data.statLine.pct}
                            dashPct={data.statLine.dashPct}
                            heading={data.statLine.heading}
                            body={data.statLine.body}
                            link={data.statLine.link}
                        />
                    </div>
                    <div className="bento-card group md:col-start-2 md:row-start-1 md:row-span-2 rounded-2xl overflow-hidden min-h-[580px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0 translate-y-4">
                        <img loading="lazy" decoding="async"
                            src={data.images.center}
                            alt="AI-generated model executing autonomous cross-channel marketing campaigns"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="bento-card group md:col-start-3 md:row-start-1 rounded-2xl overflow-hidden min-h-[200px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0 translate-y-4">
                        <img loading="lazy" decoding="async"
                            src={data.images.brand}
                            alt="AI-generated brand ambassador photoshoot for autonomous influencer campaigns"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="bento-card group md:col-start-1 md:row-start-2 rounded-2xl overflow-hidden min-h-[280px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0 translate-y-4">
                        <img loading="lazy" decoding="async"
                            src={data.images.bottomLeft}
                            alt="AI-generated product model for agentic commerce content creation"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="bento-card relative md:col-start-3 md:row-start-2 rounded-2xl bg-charcoal p-8 flex flex-col justify-between min-h-[180px] ring-1 ring-white/5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0 translate-y-4">
                        {/* Faint watermark inside CTA card */}
                        <span className="absolute bottom-4 right-4 font-serif italic text-[4rem] leading-none text-white/[0.03] pointer-events-none select-none tracking-tighter">
                            Velocity
                        </span>
                        <div className="space-y-3 relative z-10">
                            <h3 className="font-serif italic text-white text-2xl leading-tight tracking-tight">
                                {data.cta.heading}
                            </h3>
                            <p className="font-sans text-white/50 text-sm leading-relaxed">
                                {data.cta.body}
                            </p>
                        </div>
                        <a
                            href={data.cta.buttonLink}
                            className="relative z-10 self-start inline-block border-b border-white/10 pb-1 text-white/40 transition-colors duration-300 font-sans tracking-widest text-xs uppercase hover:text-electric-mint hover:border-electric-mint/50"
                        >
                            {data.cta.buttonText} →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};



// ============================================================================
// MAIN PAGE LAYOUT
// ============================================================================

export default function Marketing() {

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://ai-velocity.com/#organization",
                "name": "AI Velocity",
                "url": "https://ai-velocity.com",
                "sameAs": [
                    "https://www.linkedin.com/company/ai-velocity"
                ]
            },
            {
                "@type": "WebPage",
                "@id": "https://ai-velocity.com/agentic-marketing/#webpage",
                "url": "https://ai-velocity.com/agentic-marketing",
                "name": "Agentic Marketing — Autonomous AI Campaign Orchestration",
                "description": "Agentic marketing deploys autonomous AI agents to execute campaign orchestration, content generation, and performance optimisation at machine speed.",
                "isPartOf": { "@id": "https://ai-velocity.com/#website" },
                "about": { "@id": "https://ai-velocity.com/agentic-marketing/#service" },
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
                        "item": "https://ai-velocity.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Agentic Marketing",
                        "item": "https://ai-velocity.com/agentic-marketing"
                    }
                ]
            },
            {
                "@type": "Service",
                "@id": "https://ai-velocity.com/agentic-marketing/#service",
                "name": "Agentic Marketing",
                "description": "Autonomous AI agent infrastructure for campaign orchestration, content generation, and performance marketing execution. Replaces legacy agency models with goal-driven digital labor.",
                "serviceType": "Autonomous Marketing Infrastructure",
                "areaServed": "Worldwide",
                "provider": { "@id": "https://ai-velocity.com/#organization" },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Agentic Marketing Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Autonomous Campaign Orchestration",
                                "description": "AI agents that monitor live engagement signals, reallocate budgets in milliseconds, and execute cross-channel campaigns without human oversight."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "AI Content Generation",
                                "description": "Generative AI systems that produce brand-aligned visual and text assets at machine speed, eliminating manual creative supply chains."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "AI Agentic Influencers",
                                "description": "Synthetic brand ambassadors and AI-generated influencers that represent your brand 24/7 across 60+ languages."
                            }
                        }
                    ]
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": commerceFaqs.map(faq => ({
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
                />

                <InfluencerCarousel />

                <SplitFeature
                    reverse
                    bgClass="bg-[#212121]"
                    theme="dark"
                    label="Intelligence"
                    watermark="VELOCITY"
                    image={heroFeature.image}
                    imageAlt={heroFeature.imageAlt}
                    title={heroFeature.title}
                    text1={heroFeature.text1}
                    text2={heroFeature.text2}
                />

                <SplitFeature
                    label="Influence"
                    watermark="AGENCY"
                    image={secondaryFeature.image}
                    imageAlt={secondaryFeature.imageAlt}
                    title={secondaryFeature.title}
                    text1={secondaryFeature.text1}
                    text2={secondaryFeature.text2}
                />

                <FAQ
                    title="FAQ's"
                    label="Knowledge Base"
                    faqs={commerceFaqs}
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
                            <Link href="/agentic-aeo" className="group rounded-2xl bg-electric-mint p-8 flex flex-col justify-between min-h-[200px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1">
                                <div>
                                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/40 block mb-3">Discovery</span>
                                    <h3 className="font-serif italic text-charcoal text-2xl leading-tight tracking-tight">Agentic AEO</h3>
                                    <p className="font-sans text-charcoal/60 text-sm leading-relaxed mt-2">Make your brand the canonical answer for autonomous search agents.</p>
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
                    category="Agentic Marketing"
                    description="How autonomous agents are transforming campaign orchestration, content generation, and performance marketing."
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
};
