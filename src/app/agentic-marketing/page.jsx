"use client";

import { useState, useRef, useEffect } from 'react';
import { Plus, X, ArrowLeft, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { CTABanner } from '@/components/sections/CTABanner';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// ============================================================================
// PAGE CONTENT VARIABLES
// Edit these variables to update the text and images across the page components
// ============================================================================

const heroFeature = {
    image: "/images/ai-model-marketing.webp",
    title: "The Future of Marketing",
    text1: "Marketing as we knew it is being replaced by a sophisticated model of vibe trading where brand resonance is measured by machine-readable trust scores. A practical example of this shift is a consumer asking a digital assistant to find a high-performance running shoe that aligns with their specific biomechanics and ethical sustainability preferences without ever seeing an ad. This requires a level of intelligence that moves beyond simple automation and into the realm of true agency. The 2026 signal for autonomous settlement is already appearing in the way global payments are being restructured for machine-to-machine interaction. We are no longer designing for human eyes but for algorithms that demand verifiable logic and instant execution.",
    text2: "Brands that rely on slow human approval cycles are finding their market share eroded by entities capable of sub-second decision making. The transition is moving toward a model where the brand is a living data layer rather than a series of static images."
};

const statementSection = {
    title: "Agentic Marketing",
    subtitle: "We are witnessing the end of an era where manual campaign management and static demographic targeting defined the industry.",
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

const SplitFeature = ({
    image,
    title,
    text1,
    text2,
    ctaText = "Discover",
    ctaLink = "#contact",
    reverse = false,
    bgClass = "bg-cloud-dancer"
}) => {
    return (
        <section className={`py-20 ${bgClass}`}>
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left/Right: Image */}
                    <div className={`group rounded-card overflow-hidden aspect-[4/5] w-full max-w-md ${reverse ? 'md:order-last md:justify-self-end' : ''}`}>
                        <img
                            src={image}
                            alt="Agentic AI model"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    {/* Left/Right: Text + CTA */}
                    <div className={`flex flex-col justify-between h-full gap-16 ${reverse ? 'md:order-first' : ''}`}>
                        <div>
                            {title && (
                                <h1 className="text-4xl md:text-5xl font-serif text-charcoal tracking-tight mb-8">
                                    {title}
                                </h1>
                            )}
                            {text1 && (
                                <p className="font-sans text-charcoal text-lg leading-relaxed">
                                    {text1}
                                </p>
                            )}
                            {text2 && (
                                <p className="font-sans text-charcoal text-lg leading-relaxed mt-4">
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

const StatementAction = ({ title, subtitle, statement, actionText }) => {
    return (
        <section className="py-20 bg-cloud-dancer">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                {(title || subtitle) && (
                    <div className="mb-10 text-left">
                        {title && (
                            <h1 className="text-4xl md:text-5xl font-serif text-charcoal tracking-tight mb-4">
                                {title}
                            </h1>
                        )}
                        {subtitle && (
                            <p className="font-sans text-xs font-bold text-charcoal tracking-wide">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_28rem] gap-12 lg:gap-20 items-center">
                    <p className="font-serif text-[1.5rem] md:text-[2rem] lg:text-[2.2rem] text-charcoal leading-[1.3] tracking-tight lg:-mr-[125px] relative z-10">
                        {statement}
                    </p>
                    <div className="w-full flex items-center justify-center">
                        <p className="font-sans text-base md:text-lg text-charcoal font-bold tracking-tight text-center whitespace-nowrap">
                            {actionText}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const StatCard2 = ({ pct, dashPct, heading, body, link }) => (
    <div className="rounded-2xl bg-electric-mint p-8 flex flex-col justify-between min-h-[280px]">
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
    return (
        <section className="py-12 bg-cloud-dancer">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridTemplateRows: 'auto' }}>
                    <div className="md:col-start-1 md:row-start-1">
                        <StatCard2
                            pct={data.statLine.pct}
                            dashPct={data.statLine.dashPct}
                            heading={data.statLine.heading}
                            body={data.statLine.body}
                            link={data.statLine.link}
                        />
                    </div>
                    <div className="group md:col-start-2 md:row-start-1 md:row-span-2 rounded-2xl overflow-hidden min-h-[580px]">
                        <img
                            src={data.images.center}
                            alt="Center featured"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="group md:col-start-3 md:row-start-1 rounded-2xl overflow-hidden min-h-[200px]">
                        <img
                            src={data.images.brand}
                            alt="Brand campaign"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="group md:col-start-1 md:row-start-2 rounded-2xl overflow-hidden min-h-[280px]">
                        <img
                            src={data.images.bottomLeft}
                            alt="Bottom left model"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="md:col-start-3 md:row-start-2 rounded-2xl bg-charcoal p-8 flex flex-col justify-between min-h-[180px]">
                        <div className="space-y-3">
                            <h3 className="font-serif text-white text-3xl leading-tight tracking-tight">
                                {data.cta.heading}
                            </h3>
                            <p className="font-sans text-white/50 text-xs leading-relaxed">
                                {data.cta.body}
                            </p>
                        </div>
                        <a
                            href={data.cta.buttonLink}
                            className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-card bg-white text-charcoal text-sm font-sans font-medium hover:bg-electric-mint transition-all duration-300 group"
                        >
                            {data.cta.buttonText}
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FAQItem = ({ faq, isOpen, onToggle, index }) => {
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
                    className="font-sans text-2xl font-medium tracking-tight transition-colors duration-300 text-black"
                >
                    {faq.question}
                </span>
                <span
                    className="shrink-0 flex items-center justify-center transition-all duration-300 text-black"
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
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <p className="pb-8 text-black font-sans text-lg leading-relaxed max-w-2xl">
                        {faq.answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

const FAQ = ({ title, faqs, bgClass = "bg-cloud-dancer" }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <section className={`py-24 ${bgClass}`}>
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 lg:gap-24">
                    <div className="lg:pt-2 flex items-start">
                        <h2 className="text-5xl md:text-6xl font-serif text-black tracking-tight">
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
                            <h2 className="font-serif text-charcoal text-4xl md:text-5xl tracking-tight">
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
                <div className="max-w-4xl mx-auto">
                    <header className="mb-10 text-left">
                        <h2 id="manifesto-title" className="text-3xl md:text-5xl font-serif tracking-tight text-charcoal">
                            {title}
                        </h2>
                    </header>
                    <div className="space-y-6 font-sans text-lg text-charcoal/80 leading-relaxed mb-8 text-left">
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
                        <div className="overflow-hidden space-y-10 font-sans text-lg text-charcoal/80 text-left">
                            {sections.map((section, idx) => (
                                <div key={idx} className={idx === 0 ? "pt-4" : ""}>
                                    <h3 className="text-3xl font-serif text-charcoal mb-3">{section.title}</h3>
                                    <p className="leading-relaxed">{section.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            className="group flex items-center gap-3 px-6 py-3 rounded-full border border-charcoal text-charcoal font-sans text-sm font-medium tracking-wide hover:bg-charcoal hover:text-white transition-all duration-300"
                        >
                            {isOpen ? 'Close' : 'Read More'}
                            <span
                                className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                            >
                                ↓
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const InfluencerCarousel = () => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 bg-cloud-dancer">

            {/* Header */}
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <h2 className="text-5xl md:text-6xl leading-[1.1] font-serif italic text-charcoal max-w-2xl tracking-tight">
                        Agentic influencers working to grow your brand 24/7.
                    </h2>
                    <div className="flex gap-4 shrink-0">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-cloud-dancer transition-colors"
                            aria-label="Scroll left"
                        >
                            <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-cloud-dancer transition-colors"
                            aria-label="Scroll right"
                        >
                            <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Full-Width Image Carousel — left-pad matches constrained container, bleeds off right edge */}
            <div
                ref={scrollContainerRef}
                className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                style={{ paddingLeft: 'max(1.5rem, calc((100vw - 1536px) / 2 + 3rem))' }}
            >
                {/* Image 1 */}
                <div className="relative aspect-[4/3] w-[85vw] md:w-[45vw] lg:w-[28vw] shrink-0 snap-start rounded-card overflow-hidden bg-charcoal/5">
                    <img
                        src="/images/ai-model-1.webp"
                        alt="AI Influencer Model 1"
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
                    />
                </div>
                {/* Image 2 */}
                <div className="relative aspect-[4/3] w-[85vw] md:w-[45vw] lg:w-[28vw] shrink-0 snap-start rounded-card overflow-hidden bg-charcoal/5">
                    <img
                        src="/images/ai-model-2.webp"
                        alt="AI Influencer Model 2"
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
                    />
                </div>
                {/* Image 3 */}
                <div className="relative aspect-[4/3] w-[85vw] md:w-[45vw] lg:w-[28vw] shrink-0 snap-start rounded-card overflow-hidden bg-charcoal/5">
                    <img
                        src="/images/ai-model-3.webp"
                        alt="AI Influencer Model 3"
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
                    />
                </div>
                {/* Image 4 */}
                <div className="relative aspect-[4/3] w-[85vw] md:w-[45vw] lg:w-[28vw] shrink-0 snap-start rounded-card overflow-hidden bg-charcoal/5">
                    <img
                        src="/images/ai-model-4.webp"
                        alt="AI Influencer Model 4"
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
                    />
                </div>
                {/* Image 5 */}
                <div className="relative aspect-[4/3] w-[85vw] md:w-[45vw] lg:w-[28vw] shrink-0 snap-start rounded-card overflow-hidden bg-charcoal/5">
                    <img
                        src="/images/ai-model-5.webp"
                        alt="AI Influencer Model 5"
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
                    />
                </div>
                {/* Trailing spacer */}
                <div className="shrink-0 w-6 md:w-12"></div>
            </div>

        </section>
    );
};

// ============================================================================
// MAIN PAGE LAYOUT
// ============================================================================

export default function Marketing() {
    const container = useRef(null);

    useGSAP(() => {
        const sections = gsap.utils.toArray(container.current.children);

        sections.forEach((sec) => {
            gsap.fromTo(sec,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sec,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, { scope: container });

    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Agentic Marketing",
        "provider": {
            "@type": "Organization",
            "name": "AI Velocity"
        }
    };

    return (
        <main data-nav-theme="light" className="pt-32 pb-24 w-full min-h-screen bg-cloud-dancer">
            {/* Inject JSON-LD Schema directly into the head */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <div ref={container} className="flex flex-col gap-16 lg:gap-24 overflow-hidden">
                <StatementAction
                    title={statementSection.title}
                    subtitle={statementSection.subtitle}
                    statement={statementSection.statement}
                    actionText={statementSection.actionText}
                />

                <SplitFeature
                    reverse
                    bgClass="bg-electric-mint"
                    image={heroFeature.image}
                    title={heroFeature.title}
                    text1={heroFeature.text1}
                    text2={heroFeature.text2}
                />

                <InfluencerCarousel />

                <SplitFeature
                    image={secondaryFeature.image}
                    title={secondaryFeature.title}
                    text1={secondaryFeature.text1}
                    text2={secondaryFeature.text2}
                />

                <FAQ
                    title="FAQ's"
                    faqs={commerceFaqs}
                    bgClass="bg-electric-mint"
                />

                <FoundryManifesto
                    title={manifestoTitle}
                    leadIn={manifestoLeadIn}
                    sections={manifestoSections}
                />

                <CTABanner />
            </div>
        </main>
    );
};
