'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CTABanner } from '@/components/sections/CTABanner';
import { GsapPageWrapper } from '@/components/ui/GsapPageWrapper';
import { FAQ } from '@/components/sections/FAQ';
import { FoundryManifesto } from '@/components/sections/FoundryManifesto';

// ============================================================================
// PAGE CONTENT VARIABLES
// Edit these variables to update the text and images across the page components
// ============================================================================

const heroFeature = {
    image: "/images/agentic-agent-hero.webp",
    imageAlt: "Digital representation of an autonomous Agentic Commerce software delegate",
    label: "Autonomous Procurement",
    watermark: "Commerce",
    title: "The Future of Commerce",
    text1: "Agentic commerce represents the fundamental shift to autonomous software delegates executing complex procurement tasks with zero human friction. This is a total replacement of the traditional retail front end with specialized machine-to-machine negotiation rails that bypass the Document Object Model entirely. These digital agents do not care about sleek marketing copy or the psychological tricks used by legacy retail giants to manipulate human desire.",
    text2: "They parse raw data schemas and real-time inventory levels to identify the most efficient purchase route based on a user's pre-defined budget. Every critical product attribute must be instantly readable and verifiable to ensure the autonomous buyer can execute trade with surgical precision."
};

const statementSection = {
    title: "Agentic Commerce",
    subtitle: "Agentic commerce is where autonomous software agents execute, and settle commercial transactions across digital platforms.",
    statement: `The world of commerce is shifting from "Human-to-Human" to "Agent-to-Agent," and the old playbooks are being vaporized. Agentic commerce is a transformative form of online shopping where autonomous AI agents act on behalf of customers to find, compare, and execute purchases independently.`,
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
        centerAlt: "Dashboard explicitly showing Agentic Commerce transaction velocity",
        brand: "/images/antesta-ai-model.jpg",
        brandAlt: "Autonomous AI visual agent processing high-volume legacy marketing campaigns",
        bottomLeft: "/images/ai-model-5.webp",
        bottomLeftAlt: "AI-generated product model executing algorithmic negotiations"
    },
    cta: {
        heading: "Content that converts, at machine speed.",
        body: "Brand-aligned creative at a scale no human team can match.",
        buttonText: "Start Creating",
        buttonLink: "#contact"
    }
};

const secondaryFeature = {
    image: "/images/ai-model-9.webp",
    imageAlt: "Visualization of the v402 autonomous machine-readable settlement handshake",
    label: "Settlement Protocol",
    watermark: "Agents",
    title: "Agentic Agents",
    text1: "The 2026 signal for autonomous settlement is already appearing in the way global payments are being restructured for machine-to-machine commerce. At the heart of this transition is the v402 handshake, a protocol designed to facilitate secure and instant value transfers between agentic agents without human oversight. This system utilizes JSON-LD to provide semantic clarity to every transaction, ensuring that the intent of the buyer is perfectly aligned with the offer of the seller. When an agent initiates a purchase, it validates the cryptographic signatures of the merchant to prevent fraud in a way that legacy credit card processors simply cannot match. The speed of these settlements allows for a level of logistical agility that was previously impossible in international trade.",
    text2: "Ultimately, the move toward agentic commerce is a return to the fundamental principles of trade, stripped of the bloat and inefficiency of the early internet era. By focusing on technical density and high-fidelity data, brands can position themselves at the center of the new autonomous economy. Those who understand the physics of the handshake and the protocol will be the ones who define the next thirty years of global commerce. The transition is accelerating, and the era of the passive consumer is coming to a definitive end."
};

const commerceFaqs = [
    {
        question: "What is agentic commerce?",
        answer: "Agentic commerce is the transition from human-centric online shopping to autonomous procurement executed by specialized artificial intelligence delegates. Instead of users manually browsing storefronts, these digital agents negotiate, compare, and settle transactions directly with merchant databases. This shift eliminates the friction of traditional web checkout processes entirely by operating at the speed of computation."
    },
    {
        question: "How do AI agents make purchases online?",
        answer: "Artificial intelligence agents execute purchases through secure machine-to-machine API handshakes rather than interacting with graphical user interfaces. They read raw inventory and pricing data directly from the merchant backend system to determine the optimal purchase route based on user parameters. Once conditions are met, the agent constructs a transaction payload for instant cryptographic or tokenized settlement."
    },
    {
        question: "What is the difference between an AI assistant and an AI agent?",
        answer: "An artificial intelligence assistant provides recommendations or answers questions but still requires a human to execute the final physical task. An AI agent possesses the autonomy and transactional capability to complete the entire procurement cycle from discovery to final payment. This transition turns passive chatbots into active, goal-driven economic participants."
    },
    {
        question: "How does agentic commerce reduce operational overhead for businesses?",
        answer: "By replacing the need for bloated account management and manual sales pipelines, autonomous commerce systems allow businesses to scale transaction volume without increasing headcount. Agents handle inbound inquiries, negotiate terms, and execute settlements twenty-four hours a day. This automated logistics layer turns high-friction sales cycles into instantaneous programmatic revenue."
    },
    {
        question: "Will traditional e-commerce websites become obsolete?",
        answer: "Traditional human-centric websites are rapidly becoming secondary interfaces as the volume of machine-to-machine trade eclipses manual browsing. Future commerce infrastructure must prioritize headless data-rich backend systems that feed raw JSON data directly to autonomous buyers. Brands that fail to optimize their architecture for algorithmic negotiation will become invisible to the primary digital consumer."
    },
    {
        question: "How are agentic payments securely authorized?",
        answer: "Secure agentic payments rely on non-custodial wallet infrastructure and strict cryptographic signing protocols that keep the human in control. The user retains the master authority by setting specific spending limits and daily operational budgets for their digital delegates. When a transaction is negotiated the agent prepares the exact payload but the final settlement is governed by these pre-defined financial firewalls."
    },
    {
        question: "What is Answer Engine Optimization (AEO) in this context?",
        answer: "Answer Engine Optimization is the structural evolution of traditional search engine optimization designed to ensure a brand is cited as the absolute source of truth by generative models. Instead of chasing traditional keyword volume, AEO embeds verifiable provenance and high-trust signals directly into the technical architecture of the website. This guarantees that when an autonomous agent queries the market your inventory is prioritized."
    },
    {
        question: "How does agentic commerce handle cross-border logistics?",
        answer: "Autonomous systems execute global trade by instantly verifying compliance, calculating dynamic cross-border fees, and routing fulfillment without manual intervention. Digital delegates analyze real-time shipping data to determine the most efficient delivery paths across multiple international borders. This eliminates the bureaucratic delays that typically choke legacy retail operations."
    },
    {
        question: "What infrastructure is required to accept agentic payments?",
        answer: "Businesses must upgrade from legacy banking gateways to decentralized settlement layers and headless commerce APIs capable of reading machine intent. This involves integrating protocols that allow digital delegates to securely connect, verify inventory, and process stablecoin or fiat transactions instantly. The foundation of this new economy is the ability to support frictionless machine-to-machine settlement."
    },
    {
        question: "Why is agentic commerce considered a structural fracture in retail?",
        answer: "It represents the first fundamental shift in the mechanics of digital trade in over twenty-five years by moving the market from a human-to-business model to agent-to-agent negotiation. This entirely vaporizes the psychological manipulation tactics of legacy advertising because machines execute purchases based on raw data and absolute utility. Survival in this era requires programmatic truth rather than traditional marketing fluff."
    }
];

const commercePosts = [
    {
        date: '26.02.2025',
        title: 'Agentic AI is rewriting the rules of digital commerce',
        image: '/images/agentic-agent-hero.jpg',
        alt: 'Abstract visualization of an Agentic AI system rewriting global digital commerce rules',
    },
    {
        date: '24.02.2025',
        title: 'How autonomous agents are replacing legacy marketing teams',
        image: '/images/good-univerce-ai.jpg',
        alt: 'Illustration of autonomous agents managing a high-volume legacy marketing workflow',
    },
];

const manifestoTitle = "Agentic Commerce";

const manifestoLeadIn = [
    "The 25-year stagnation of e-commerce has finally reached a breaking point where traditional click-to-buy interfaces no longer satisfy the velocity of modern global trade. We are witnessing a structural fracture in legacy retail systems that relied on manual human intervention for every decision from product discovery to checkout. This transition is not a distant possibility but a rapid and inevitable shift toward a world where software acts with genuine autonomy. Digital storefronts are evolving into fluid environments where intent is captured and executed without the friction of a standard shopping cart. The current architecture of the internet is being rebuilt to support these autonomous entities that can negotiate, purchase, and settle transactions on behalf of the user.",
    "Marketing as we knew it is being replaced by a sophisticated model of vibe trading where brand resonance is measured by machine-readable trust scores. A practical example of this shift is a consumer asking a digital assistant to find and purchase a sustainable winter coat that matches their existing wardrobe and budget constraints without ever visiting a website. This requires a level of intelligence that moves beyond simple automation and into the realm of true agency. The legacy agency retainer model is failing because it cannot keep pace with the sub-second decision making required in an agentic economy. Brands must now prepare their data for discovery by non-human actors that prioritize technical precision and verifiable logic over traditional visual storytelling."
];

const manifestoSections = [
    {
        title: "The Structural Fracture and the Rise of Agentic Commerce",
        content: "The technical physics of this new era rely heavily on the Model Context Protocol to allow disparate systems to share state and intent in real time. By utilizing a deBridge MCP integration, businesses can ensure that their product catalogs are accessible across multiple blockchain environments and traditional databases simultaneously. This creates a high-fidelity data layer that functions as the primary source of truth for any agent seeking to execute a transaction. Traditional headless architecture is no longer sufficient on its own as it lacks the native intelligence to handle complex multi-step negotiations. We are moving toward a unified commerce model where every touchpoint is an entry point for an autonomous buyer."
    },
    {
        content: "The 2026 signal for autonomous settlement is already appearing in the way global payments are being restructured for machine-to-machine commerce. At the heart of this transition is the v402 handshake, a protocol designed to facilitate secure and instant value transfers between agents without human oversight. This system utilizes JSON-LD to provide semantic clarity to every transaction, ensuring that the intent of the buyer is perfectly aligned with the offer of the seller. When an agent initiates a purchase, it validates the cryptographic signatures of the merchant to prevent fraud in a way that legacy credit card processors simply cannot match. The speed of these settlements allows for a level of logistical agility that was previously impossible in international trade."
    },
    {
        title: "Implementing Agentic Commerce via MoonPay Agents",
        content: "To maintain a competitive edge, developers are now integrating MoonPay Agents into their stack to provide the necessary tools to navigate complex web environments and execute financial tasks. This technology allows for the seamless conversion of fiat and digital assets, ensuring that agents can settle debts across any jurisdictional boundary instantly. By combining this with a robust implementation of the Model Context Protocol, a brand can ensure its offerings are always at the top of an agent's consideration set. The shift is moving away from search engine optimization and toward agentic engine optimization where technical metadata is the most valuable asset a company owns."
    },
    {
        content: "The logistical volatility of shipping and global supply chains demands a system that can pivot in real time based on fluctuating costs and delivery windows. Agentic agents are uniquely equipped to handle this complexity by constantly monitoring API feeds and adjusting procurement strategies without waiting for human approval. This represents a fundamental departure from the static inventory management of the past two decades. As we approach the 2026 milestone, the gap between those using autonomous settlement and those stuck in legacy workflows will become an unbridgeable chasm. The future of commerce is not about better websites but about more capable agents operating within a high-trust digital ecosystem."
    },
    {

        content: "The core of this evolution is the ability of software to handle the entire lifecycle of a commercial interaction from discovery to final settlement. This requires a deep understanding of the underlying technical physics, including how various protocols interact to create a seamless user experience. The integration of advanced payment standards and communication protocols ensures that every interaction is recorded on a transparent ledger. This transparency builds the necessary trust for consumers to delegate significant purchasing power to their digital representatives. We are no longer designing for eyes but for algorithms that demand efficiency and verifiable data."
    },
    {
        content: "Ultimately, the move toward agentic commerce is a return to the fundamental principles of trade, stripped of the bloat and inefficiency of the early internet era. By focusing on technical density and high-fidelity data, brands can position themselves at the center of the new autonomous economy. The fractured systems of today are the foundations upon which the agentic world is being built. Those who understand the physics of the handshake and the protocol will be the ones who define the next thirty years of global commerce. The transition is accelerating, and the era of the passive consumer is coming to a definitive end."
    },
    {
        title: "The Era of Algorithmic Negotiation",
        content: "Scaling a global brand today requires the absolute elimination of managerial bureaucracy and the integration of goal-driven digital labor. A company can scale its volume tenfold without hiring a single new manager by utilizing the backend orchestrators of the AI Velocity engine. Routing the order securing the fulfillment and managing the customer email sequences happen invisibly through our autonomous nervous system. This infrastructure provides the grit and intelligence required to survive in an unmanaged arena where only the sovereign individual thrives."
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
    ctaText = "Discover",
    ctaLink = "#contact",
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
                    <div ref={imageRef} className={`group rounded-card overflow-hidden aspect-[4/5] w-full max-w-md ${reverse ? 'md:order-last md:justify-self-end' : ''} opacity-0`}>
                        <img loading="lazy" decoding="async"
                            src={image}
                            alt={imageAlt || "Agentic AI model"}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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

                        <div className="split-anim opacity-0 translate-y-4">
                            <a
                                href={ctaLink}
                                className={`inline-block border-b pb-1 transition-colors duration-300 font-sans tracking-widest text-xs uppercase ${theme === 'dark' ? 'text-white/70 border-white/30 hover:text-electric-mint hover:border-electric-mint/50' : 'text-charcoal border-charcoal/30 hover:text-electric-mint hover:border-electric-mint/50'}`}
                            >
                                {ctaText} →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const StatementAction = ({ title, subtitle, statement, actionText }) => {
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
                    AGENTIC
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
    <div className="rounded-2xl bg-electric-mint p-8 flex flex-col justify-between min-h-[280px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
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
            <span className="inline-block font-sans text-charcoal text-xs tracking-widest uppercase border-b border-charcoal/30 pb-1 cursor-pointer hover:text-electric-mint hover:border-electric-mint/50 transition-colors duration-200">
                {link} →
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
        <section className="relative py-20 bg-cloud-dancer overflow-hidden">
            {/* Section Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 select-none">
                <span className="font-serif italic text-[12vw] leading-none whitespace-nowrap block tracking-tighter opacity-[0.03] text-charcoal">
                    COMMERCE
                </span>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
                {/* Section Header */}
                <div className="mb-12">
                    <span className="block font-mono text-[10px] tracking-[0.25em] uppercase mb-3 text-charcoal/40">
                        Performance Data
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-charcoal tracking-tight">
                        Agentic Intelligence
                    </h2>
                </div>

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
                            alt={data.images.centerAlt || "Center featured"}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="bento-card group md:col-start-3 md:row-start-1 rounded-2xl overflow-hidden min-h-[200px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0 translate-y-4">
                        <img loading="lazy" decoding="async"
                            src={data.images.brand}
                            alt={data.images.brandAlt || "Brand campaign"}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="bento-card group md:col-start-1 md:row-start-2 rounded-2xl overflow-hidden min-h-[280px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0 translate-y-4">
                        <img loading="lazy" decoding="async"
                            src={data.images.bottomLeft}
                            alt={data.images.bottomLeftAlt || "Bottom left model"}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="bento-card relative md:col-start-3 md:row-start-2 rounded-2xl bg-charcoal p-8 flex flex-col justify-between min-h-[180px] ring-1 ring-white/5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0 translate-y-4">
                        {/* CTA Watermark */}
                        <span className="absolute bottom-4 right-4 font-serif italic text-[4rem] leading-none text-white/[0.03] pointer-events-none select-none tracking-tighter">
                            Velocity
                        </span>
                        <div className="space-y-3 relative z-10">
                            <h3 className="font-serif text-white text-3xl leading-tight tracking-tight">
                                {data.cta.heading}
                            </h3>
                            <p className="font-sans text-white/50 text-xs leading-relaxed">
                                {data.cta.body}
                            </p>
                        </div>
                        <a
                            href={data.cta.buttonLink}
                            className="relative z-10 self-start inline-block border-b border-white/30 pb-1 text-white/70 transition-colors duration-300 font-sans tracking-widest text-xs uppercase hover:text-electric-mint hover:border-electric-mint/50"
                        >
                            {data.cta.buttonText} →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};


const NewsInsight = ({ title, description, posts }) => {
    const newsRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(newsRef.current.querySelectorAll('.news-anim'),
                { y: 30, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: newsRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }, newsRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={newsRef} className="py-20 bg-cloud-dancer">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <div className="flex flex-col justify-between h-full gap-16">
                        <div className="space-y-4">
                            <span className="news-anim block font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/40 opacity-0 translate-y-4">
                                Latest Insights
                            </span>
                            <h2 className="news-anim font-serif text-charcoal text-4xl md:text-5xl tracking-tight opacity-0 translate-y-4">
                                {title}
                            </h2>
                            <p className="news-anim font-sans text-charcoal/50 text-sm leading-relaxed max-w-xs opacity-0 translate-y-4">
                                {description}
                            </p>
                        </div>
                        <div className="news-anim opacity-0 translate-y-4">
                            <a
                                href="#blog"
                                className="inline-block border-b border-charcoal/30 pb-1 text-charcoal transition-colors duration-300 font-sans tracking-widest text-xs uppercase hover:text-electric-mint hover:border-electric-mint/50"
                            >
                                View Blog →
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        {posts.map((post, i) => (
                            <a key={i} href="#blog" className="news-anim flex gap-5 items-start group cursor-pointer opacity-0 translate-y-4">
                                <div className="shrink-0 w-44 md:w-52 aspect-[16/10] rounded-card overflow-hidden bg-charcoal/5 ring-1 ring-charcoal/5">
                                    <img loading="lazy" decoding="async"
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


// ============================================================================
// MAIN PAGE LAYOUT
// ============================================================================

export default function AgenticCommerce() {

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": "Agentic Commerce",
                "provider": {
                    "@type": "Organization",
                    "name": "AI Velocity"
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

                <BentoGrid2
                    data={commerceBentoData}
                />

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
                    faqs={commerceFaqs}
                    bgClass="bg-electric-mint"
                />

                <NewsInsight
                    title="News & Insights"
                    description="The latest thinking on agentic commerce, autonomous procurement, and the protocols rewriting global trade."
                    posts={commercePosts}
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
