import { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Plus, X } from 'lucide-react';

// ============================================================================
// PAGE CONTENT VARIABLES
// Edit these variables to update the text and images across the page components
// ============================================================================

const heroFeature = {
    image: "/images/agentic-agent-hero.webp",
    title: "Agentic Commerce",
    text1: "Agentic commerce represents the fundamental shift from consumers manually scrolling through storefronts to autonomous software delegates executing complex procurement tasks with zero human friction. This is a total replacement of the traditional retail front end with specialized machine-to-machine negotiation rails that bypass the Document Object Model entirely. These digital agents do not care about sleek marketing copy or the psychological tricks used by legacy retail giants to manipulate human desire.",
    text2: "They parse raw data schemas and real-time inventory levels to identify the most efficient purchase route based on a user's pre-defined budget. Every critical product attribute must be instantly readable and verifiable to ensure the autonomous buyer can execute trade with surgical precision."
};

const statementSection = {
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
    image: "/images/ai-model-1.webp",
    title: "Agentic Agents",
    text1: "Agentic commerce represents the fundamental shift from consumers manually scrolling through storefronts to autonomous software delegates executing complex procurement tasks with zero human friction. This is a total replacement of the traditional retail front end with specialized machine-to-machine negotiation rails that bypass the Document Object Model entirely. These digital agents do not care about sleek marketing copy or the psychological tricks used by legacy retail giants to manipulate human desire.",
    text2: "They parse raw data schemas and real-time inventory levels to identify the most efficient purchase route based on a user's pre-defined budget. Every critical product attribute must be instantly readable and verifiable to ensure the autonomous buyer can execute trade with surgical precision."
};

const commerceFaqs = [
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

const manifestoTitle = "The x402 Sovereign Settlement Architecture";

const manifestoLeadIn = [
    "The global trade landscape is currently undergoing a structural fracture that renders traditional retail models completely obsolete in the face of autonomous shifts. For three decades, our operations have survived the horizontal rain of the North Sea and the relentless grit of the Team Ramen era at Mt. Hood[cite: 66, 1092]. We have successfully scaled logistics to ship physical artifacts to sixty different countries every month by intentionally ignoring the bloated bureaucracy of the managerial class[cite: 1092].",
    "Agentic commerce represents the fundamental shift from consumers manually scrolling through storefronts to autonomous software delegates executing complex procurement tasks with zero human friction[cite: 338]. This is a total replacement of the traditional retail front end with specialized machine-to-machine negotiation rails that bypass the Document Object Model entirely[cite: 1097]."
];

const manifestoSections = [
    {
        title: "The Physics of the v402 Autonomous Handshake",
        content: "True agentic commerce functions by completely bypassing the human-centric browser interface to feed raw JSON data directly to the agent's internal reasoning engine[cite: 1097]. We utilize the v402 autonomous handshake to establish a standardized, high-trust settlement protocol between the merchant's underlying database and the autonomous buyer's logic[cite: 271, 1104]. When an agent encounters a payment-gated resource, it reads the 402 Payment Required status and signs a USDC transaction to unlock access in approximately half a second[cite: 271]."
    },
    {
        title: "Vibe Trading and Cross-Chain Intent Execution",
        content: "Vibe Trading utilizes the deBridge Model Context Protocol to translate natural language user intent into verifiable cross-chain settlement paths without requiring manual technical input[cite: 1095, 504]. This allows a digital delegate to negotiate value and execute trade based on the perceived intent of the user while maintaining a secure, non-custodial posture[cite: 505]. The agent calculates the necessary fees and builds the transaction payload while the master wallet retains the final cryptographic signature[cite: 505]."
    },
    {
        title: "The Empty Wallet Solution via MoonPay Agents",
        content: "We utilize MoonPay Agents to solve the Empty Wallet Solution by allowing digital delegates to accept card payments and instantly convert them to sovereign stablecoins[cite: 366, 1096]. This specific non-custodial infrastructure layer enables an agent to generate a payment link that bridges fiat directly into USDC held locally by the agent[cite: 366]. By integrating these fiat-to-crypto bridges, we eliminate the primary friction point for traditional customers entering the autonomous economy[cite: 366]."
    },
    {
        title: "The 2026 Shift Toward Sovereign Marketplaces",
        content: "The recent February 2026 integration of the Tether Wallet Development Kit into the Whop marketplace confirms that the new internet economy is already standardizing[cite: 370, 1094]. This move toward a sovereign marketplace utilized a $200M investment to integrate the WDK directly into the platform for frictionless USDT settlement[cite: 370]. We are moving past the AI-assisted era and into a reality where machines manage the entire creative, optimization, and settlement layers[cite: 337]."
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
    reverse = false
}) => {
    return (
        <section className="py-20 bg-cloud-dancer">
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
                                <h1 className="text-4xl md:text-5xl font-sans font-bold text-charcoal tracking-tight mb-8">
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
                        <div>
                            <a
                                href={ctaLink}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-card border border-charcoal/30 text-charcoal text-sm font-sans font-medium hover:bg-charcoal hover:text-white transition-all duration-300 group"
                            >
                                {ctaText}
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const StatementAction = ({ statement, actionText }) => {
    return (
        <section className="py-20 bg-cloud-dancer">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(auto,280px)] gap-10 lg:gap-20 items-center">
                    <p className="font-sans text-[1.5rem] md:text-[2rem] lg:text-[2.2rem] text-charcoal leading-[1.3] tracking-tight">
                        {statement}
                    </p>
                    <p className="font-sans text-base md:text-lg text-charcoal font-bold tracking-tight flex items-center lg:justify-end">
                        {actionText}
                    </p>
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
                            <h3 className="font-sans font-bold text-white text-2xl leading-tight tracking-tight">
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
                <div className="max-w-4xl mx-auto">
                    <header className="mb-10 text-left">
                        <h2 id="manifesto-title" className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-charcoal">
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
                        <div className="overflow-hidden space-y-10 font-sans text-charcoal/80 text-left">
                            {sections.map((section, idx) => (
                                <div key={idx} className={idx === 0 ? "pt-4" : ""}>
                                    <h3 className="text-xl font-bold text-charcoal mb-3">{section.title}</h3>
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
                            {isOpen ? 'Close Transmission' : 'Read Full Architectures'}
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

// ============================================================================
// MAIN PAGE LAYOUT
// ============================================================================

export const AgenticCommerce = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Agentic Commerce",
        "provider": {
            "@type": "Organization",
            "name": "AI Velocity"
        }
    };

    return (
        <main className="pt-32 pb-24 w-full min-h-screen bg-cloud-dancer">
            <Helmet>
                <title>Agentic Commerce | AI Velocity</title>
                <meta name="description" content="Agentic Commerce fundamentally shifts traditional manual storefront operations into autonomous predictive intelligence ecosystems via Sovereign AI visual streams." />
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>

            <div className="flex flex-col gap-16 lg:gap-24">
                <SplitFeature
                    reverse
                    image={heroFeature.image}
                    title={heroFeature.title}
                    text1={heroFeature.text1}
                    text2={heroFeature.text2}
                />

                <StatementAction
                    statement={statementSection.statement}
                    actionText={statementSection.actionText}
                />

                <BentoGrid2
                    data={commerceBentoData}
                />

                <SplitFeature
                    image={secondaryFeature.image}
                    title={secondaryFeature.title}
                    text1={secondaryFeature.text1}
                    text2={secondaryFeature.text2}
                />

                <FAQ
                    title="FAQ's"
                    faqs={commerceFaqs}
                />

                <NewsInsight
                    title="News & Insight"
                    description="We share the latest breakthroughs, innovations, and updates from the world of agentic commerce."
                    posts={commercePosts}
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
