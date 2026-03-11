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
    imageAlt: "Digital representation of an autonomous Agentic Commerce software delegate",
    label: "Autonomous Procurement",
    watermark: "payments",
    title: "The Future of Payments",
    text1: "Agentic commerce represents the transition from a human-mediated web to a horizontal ecosystem of autonomous intelligence. We are moving past the structural fractures of traditional retail where success was defined by clicks and attention. In this new era, the digital proxy becomes the primary consumer. These agents do not browse landing pages. They negotiate at the protocol level to secure the fastest, most reliable outcome for the human they represent.",
    text2: "By 2030, this shift will orchestrate trillions in global revenue as discovery and settlement converge into a single, frictionless flow."
};

const statementSection = {
    title: "Agentic Payments",
    subtitle: "PHASE-IN: AUTONOMOUS SETTLEMENT",
    statement: `The world of finance is shifting from "Human-to-Human" to "Agent-to-Agent," and the old playbooks are being vaporized. Agentic payments is a transformative form of digital settlement where autonomous AI agents act on behalf of customers to authorize, execute, and verify transactions independently.`,
    actionText: "Are you ready?"
};



const secondaryFeature = {
    image: "/images/ai-model-9.webp",
    imageAlt: "Visualization of the v402 autonomous machine-readable settlement handshake",
    label: "Financial Infrastructure",
    watermark: "Protocols",
    title: "Autonomous Settlement Protocols",
    text1: "The 2026 signal for agentic payments is already appearing in the way global financial infrastructure is being restructured for machine-to-machine commerce. At the heart of this transition is the v402 handshake, a secure autonomous settlement protocol designed to facilitate instant value transfers between AI agents without human oversight. This decentralized settlement layer allows digital delegates to validate cryptographic signatures directly with merchant databases, preventing fraud in a way that legacy credit card networks simply cannot match.",
    text2: "By utilizing structured data formats like JSON-LD, this infrastructure provides semantic clarity to every agent-initiated transaction, ensuring the buyer's intent perfectly aligns with the seller's offer. This level of machine-readable legibility enables frictionless cross-border execution and a total reduction in operational overhead. Businesses that optimize their technical architecture for algorithmic negotiation and programmatic revenue will dominate the next era of global, human-free trade."
};

const paymentsFaqs = [
    {
        question: "How do autonomous payments differ from traditional online checkouts?",
        answer: "Traditional checkouts require a human to manually enter data and approve each stage of the transaction through a visual interface. Autonomous payments use secure protocols to allow software agents to initiate and settle transactions programmatically, moving the focus from the user interface to machine-readable logic."
    },
    {
        question: "What is an AI agent in the context of commerce?",
        answer: "An AI agent is an autonomous software program designed to perform multi-step tasks and make decisions on behalf of a human user. In commerce, these agents navigate digital marketplaces to find products, compare options, and execute purchases without requiring manual input for every step of the process."
    },
    {
        question: "What is a machine-readable product catalog?",
        answer: "A machine-readable catalog is a database of products formatted so that AI agents can easily understand and reason about the information. This usually involves using standardized schemas like JSON-LD to ensure that prices, availability, and specifications are legible to autonomous systems."
    },
    {
        question: "Are agent-initiated transactions secure?",
        answer: "Yes, agentic transactions rely on protocol-level security and cryptographic signatures rather than traditional passwords or behavioral checks. This ensures that every action taken by an agent is authorized by the user and can be audited through a secure digital ledger."
    },
    {
        question: "What is the role of natural language in agentic commerce?",
        answer: "Natural language allows users to give complex instructions to their agents, such as \"find me the best price for these shoes with two-day shipping.\" The agent then translates this human intent into technical queries that can be understood by merchant systems."
    },
    {
        question: "How do agents handle international duties and taxes?",
        answer: "Advanced commerce agents can perform real-time lookups of local tax laws and shipping regulations to calculate the total landed cost of a product upfront. This ensures that the final settlement includes all necessary fees, preventing any surprises for the end consumer."
    },
    {
        question: "Why is the legacy e-commerce model considered to be in a state of stagnation?",
        answer: "The legacy model has relied on the same basic \"cart and checkout\" structure for over twenty-five years, which is poorly suited for the speed of modern AI. This creates friction and high overhead costs that are increasingly out of step with the capabilities of autonomous technology."
    },
    {
        question: "Can AI agents negotiate prices with merchants?",
        answer: "Yes, in an agent-to-agent ecosystem, a personal shopping agent can communicate directly with a merchant's sales agent to negotiate discounts or bundle deals. This allows for a dynamic pricing model that responds to individual customer intent and market conditions."
    },
    {
        question: "What is a headless architecture?",
        answer: "Headless architecture is a way of building websites where the backend logic is separated from the visual frontend. This is essential for agentic commerce because it allows AI agents to interact directly with the transactional systems without needing to load a visual page."
    },
    {
        question: "When will agentic payments become the industry standard?",
        answer: "The shift is already underway with major financial institutions and technology providers launching agent-ready protocols in 2025 and 2026. Adoption is expected to accelerate rapidly as the efficiency gains of autonomous settlement become undeniable for global brands."
    }
];


const manifestoTitle = "The Velocity of Agentic Payments in a Horizontal Economy";

const manifestoLeadIn = [
    "Consider a practical example within the emerging landscape of global logistics to ground these technical concepts in reality. A professional traveler requires a non-stop flight and a specific room type in a high-density urban environment during a peak booking window. In the legacy model, this individual would spend hours comparing multiple tabs and manually entering sensitive financial data into various fractured systems. In the agentic era, a digital proxy handles the negotiation and settlement instantly by communicating directly with the merchant's backend. The agent identifies the optimal inventory and utilizes the x402 Sentinel to verify the integrity and provenance of the vendor before any capital is committed. It then executes the purchase without human intervention, ensuring that the transaction is finalized before the specific inventory evaporates. This is the functional bridge between complex human intent and high-speed commercial execution.",
    "The technical physics of this movement rely on deep integration with the Model Context Protocol to facilitate high-fidelity communication between disparate systems. By exposing product and pricing data through machine-readable formats like JSON-LD, brands can finally become legible to the autonomous workforce. This is not about a simple API call; it is about creating a semantic environment where agents can reason about context and availability in real-time. Headless architecture serves as the foundation for this legibility, allowing the transactional logic to exist independently of a visual storefront. When the settlement layer is decoupled from the user interface, the potential for global velocity is truly unlocked for the first time. We are building the infrastructure for a world where every digital interaction is a potential point of sale that requires no manual oversight."
];

const manifestoSections = [
    {
        title: "The 2026 Shift Toward Sovereign Settlement",
        content: "The 2026 shift toward autonomous settlement is already being signaled by the arrival of specialized tools like MoonPay Agents. These entities are designed to bridge the gap between traditional fiat environments and the high-velocity world of decentralized finance through secure, programmatic handshakes. By utilizing the Whop x Tether WDK, these agents can settle transactions in stablecoins across borders without the friction of a 60-country logistical nightmare. This represents the death of the traditional waiting period and the birth of a new commercial organism that prioritizes liquidity. When value can move instantly through a sovereign rail, the very concept of a clearing house becomes a legacy relic of a slower era. We are witnessing the emergence of a horizontal economy where the speed of settlement matches the speed of discovery."
    },
    {
        content: "Security in the agentic era is managed through protocol-level trust rather than the behavioral heuristics of the past. The x402 Sentinel acts as the primary firewall for these autonomous transactions, ensuring that every request is cryptographically signed and perfectly auditable. Unlike traditional fraud detection systems that rely on guessing human intent based on historical patterns, this architecture uses cold, mathematical verification to approve trades. This allows for a massive reduction in false positives and the total vaporization of chargeback risk for the merchant. When the system can verify the agent's mandate through a secure, encrypted protocol, the need for manual review vanishes entirely. This is the clinical precision required to manage a global brand at scale in an increasingly volatile digital landscape."
    },
    {
        title: "The v402 Handshake and Total Data Integrity",
        content: "The integration of the v402 handshake provides the final layer of reconciliation for the modern commercial foundry. This protocol allows for the seamless exchange of value and metadata in a single, atomic event that ensures total data integrity. It ensures that the payment is not just a transfer of funds but a transfer of complete commercial context including fulfillment requirements and tax compliance. When an agent executes a trade, the v402 handshake locks in the duties, taxes, and shipping requirements upfront to prevent any downstream friction. This eliminates the delivery shock that has plagued global retail for decades and establishes a new standard for customer transparency. It is the ultimate expression of structural integrity in a horizontal economy where every participant is a sovereign actor."
    },
    {
        content: "The inevitability of this transition is driven by the sheer efficiency of the agentic workforce compared to legacy management structures. Traditional agencies often fail because they are built on a foundation of billable hours and manual labor that cannot scale with the speed of the modern web. The agentic model replaces this overhead with relentless, programmatic execution that operates without fatigue or distraction. These digital ambassadors work twenty-four hours a day to hunt for intent and settle trades across the global timeline. They do not require management or creative briefs because they are hard-coded to the brand's primary objectives. The competitive advantage for brands that adopt this early is insurmountable as they bypass the high costs of the legacy retainer model."
    },
    {
        title: "A New Commercial Reality",
        content: "We are standing at the threshold of a new commercial reality where the structural fractures of the past are being repaired by a new generation of protocols. Agentic payments are the fuel for this transformation, providing the liquidity and trust required for a truly global, autonomous economy. This is not a distant future we are waiting for; it is a physical reality we are currently building in the foundry. Those who understand the physics of this shift will define the next century of commerce and secure their position as the primary authorities of the new era. The rest will be relegated to the history of the legacy web, stuck in a world of clicks while the agents move the world."
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
                            quality={60}
                            sizes="(max-width: 768px) 100vw, 448px"
                            className="object-cover will-change-transform transition-transform duration-700 group-hover:scale-105"
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
                        <span className="text-electric-mint font-sans tracking-widest text-xs uppercase border-b border-electric-mint/50 pb-1">
                            {actionText}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

const PaymentsSettlementGrid = () => {
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
            <div className="absolute top-[22%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-[1] select-none">
                <span className="font-serif italic text-[12vw] leading-none whitespace-nowrap block tracking-tighter opacity-[0.04] text-charcoal">
                    PAYMENTS
                </span>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-12">
                    <span className="block font-mono text-[10px] tracking-[0.25em] uppercase mb-3 text-electric-mint">
                        Settlement Infrastructure
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-charcoal tracking-tight">
                        Autonomous Settlement
                    </h2>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridTemplateRows: 'auto auto' }}>
                    {/* Tall KPI Panel — left, spans 2 rows */}
                    <div className="bento-anim relative md:row-span-2 rounded-2xl bg-charcoal p-8 flex flex-col min-h-[560px] ring-1 ring-charcoal/5 overflow-hidden transition-all duration-300 hover:-translate-y-1 opacity-0">
                        {/* Watermark */}
                        <span className="absolute bottom-4 right-4 font-serif italic text-[4.5rem] leading-none text-white/[0.03] pointer-events-none select-none tracking-tighter">
                            Protocol
                        </span>
                        {/* Title + Facts grouped together */}
                        <div className="relative z-10">
                            <span className="font-serif italic text-2xl text-electric-mint block mb-6">Why Autonomous Payments</span>
                            <div className="space-y-4">
                                <div className="border-b border-white/[0.10] pb-3">
                                    <p className="font-serif italic text-3xl text-white tracking-tight">90%</p>
                                    <p className="font-sans font-normal text-white/70 text-sm mt-1">Faster Reconciliation vs Traditional Rails</p>
                                </div>
                                <div className="border-b border-white/[0.10] pb-3">
                                    <p className="font-serif italic text-3xl text-white tracking-tight">130+</p>
                                    <p className="font-sans font-normal text-white/70 text-sm mt-1">Markets With Instant Settlement</p>
                                </div>
                                <div className="border-b border-white/[0.10] pb-3">
                                    <p className="font-serif italic text-3xl text-white tracking-tight">Zero‑trust</p>
                                    <p className="font-sans font-normal text-white/70 text-sm mt-1">Non-custodial Architecture</p>
                                </div>
                                <div>
                                    <p className="font-serif italic text-3xl text-white tracking-tight">99%</p>
                                    <p className="font-sans font-normal text-white/70 text-sm mt-1">Lower Fees vs Traditional Payment Rails</p>
                                </div>
                            </div>
                        </div>
                        <Link href="/news-insights?category=agentic-payments" className="relative z-10 mt-auto self-start inline font-sans text-white/40 text-xs tracking-widest uppercase border-b border-white/10 pb-1 hover:text-electric-mint hover:border-electric-mint/50 transition-colors duration-200">
                            Explore Payments Insights →
                        </Link>
                    </div>

                    {/* Large center image — spans 2 rows */}
                    <div className="bento-anim group md:row-span-2 rounded-2xl overflow-hidden min-h-[560px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 opacity-0 relative">
                        <Image
                            src="/images/autonomous-payment-processing.webp"
                            alt="Secure autonomous payment processing"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Glassmorphic overlay card — top right */}
                    <Link href="/news-insights/v402-handshake-how-machine-to-machine-negotiation-works" className="bento-anim relative group rounded-2xl overflow-hidden min-h-[270px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 opacity-0 block">
                        <Image
                            src="/images/blockchain-settlement-ledger.webp"
                            alt="Blockchain distributed ledger visualization"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent flex items-end p-6">
                            <div>
                                <p className="font-sans font-bold text-white text-sm">The v402 Handshake</p>
                                <p className="font-sans text-white/50 text-xs mt-1">How machine-to-machine negotiation actually works.</p>
                                <span className="inline-block font-sans text-white/70 text-xs tracking-widest uppercase border-b border-white/30 pb-1 mt-3 group-hover:text-electric-mint group-hover:border-electric-mint/50 transition-colors duration-200">
                                    Read Article →
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* CTA card — bottom right (mint) */}
                    <Link href="/news-insights/autonomous-payment-settlement-what-cfos-need-to-know" className="bento-anim relative rounded-2xl bg-electric-mint p-8 flex flex-col justify-between min-h-[270px] ring-1 ring-charcoal/5 overflow-hidden transition-all duration-300 hover:-translate-y-1 opacity-0 block">
                        <span className="absolute bottom-3 right-4 font-serif italic text-[3.5rem] leading-none text-charcoal/[0.06] pointer-events-none select-none tracking-tighter">
                            Settle
                        </span>
                        <div className="space-y-3 relative z-10">
                            <h3 className="font-serif italic text-charcoal text-2xl leading-tight tracking-tight">
                                Autonomous Payment Settlement: What CFOs Need to Know in 2026
                            </h3>
                            <p className="font-sans text-charcoal/50 text-sm leading-relaxed">
                                Agent-initiated transactions now represent 8% of B2B settlement volume. Your payment infrastructure was not built for this.
                            </p>
                        </div>
                        <span className="relative z-10 self-start inline-block border-b border-charcoal/30 pb-1 text-charcoal transition-colors duration-300 font-sans tracking-widest text-xs uppercase">
                            Read Article →
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};



// ============================================================================
// MAIN PAGE LAYOUT
// ============================================================================

export default function AgenticPayments() {

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
                "@id": "https://aivelocity.dev/agentic-payments/#webpage",
                "url": "https://aivelocity.dev/agentic-payments",
                "name": "Agentic Payments, Autonomous Settlement Infrastructure",
                "description": "Agentic payments orchestrate instant, machine-to-machine settlements via autonomous software delegates. The v402 handshake protocol enables sovereign, cryptographically verified settlement.",
                "isPartOf": { "@id": "https://aivelocity.dev/#website" },
                "about": { "@id": "https://aivelocity.dev/agentic-payments/#service" },
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
                        "name": "Agentic Payments",
                        "item": "https://aivelocity.dev/agentic-payments"
                    }
                ]
            },
            {
                "@type": "Service",
                "@id": "https://aivelocity.dev/agentic-payments/#service",
                "name": "Agentic Payments",
                "description": "Autonomous AI agent infrastructure for machine-to-machine settlement, sovereign financial rails, and cryptographically verified transactions at global scale.",
                "serviceType": "Autonomous Settlement Infrastructure",
                "areaServed": "Worldwide",
                "provider": { "@id": "https://aivelocity.dev/#organization" },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Agentic Payment Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "v402 Settlement Protocol",
                                "description": "Secure machine-to-machine handshake protocol for instant, cryptographically verified value transfers between autonomous agents."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Sovereign Treasury Management",
                                "description": "Non-custodial wallet infrastructure with pre-defined spending limits and cryptographic signing for autonomous agent transactions."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Cross-Border Settlement",
                                "description": "Real-time international settlement with automated duty, tax, and compliance calculations across multiple jurisdictions."
                            }
                        }
                    ]
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": paymentsFaqs.map(faq => ({
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

                <PaymentsSettlementGrid />

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
                    faqs={paymentsFaqs}
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
                                    <p className="font-sans text-charcoal/60 text-sm leading-relaxed mt-2">Autonomous procurement and negotiation for machine-to-machine trade.</p>
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
                        </div>
                    </div>
                </section>

                <RelatedInsights
                    category="Agentic Payments"
                    description="The infrastructure layer enabling autonomous transactions, sovereign settlement, and real-time treasury operations."
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
