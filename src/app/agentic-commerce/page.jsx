'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    watermark: "Commerce",
    title: "The Future of Commerce",
    text1: "Agentic commerce represents the fundamental shift to autonomous software delegates executing complex procurement tasks with zero human friction. This is a total replacement of the traditional retail front end with specialized machine-to-machine negotiation rails that bypass the Document Object Model entirely. These digital agents do not care about sleek marketing copy or the psychological tricks used by legacy retail giants to manipulate human desire.",
    text2: "They parse raw data schemas and real-time inventory levels to identify the most efficient purchase route based on a user's pre-defined budget. Every critical product attribute must be instantly readable and verifiable to ensure the autonomous buyer can execute trade with surgical precision."
};

const statementSection = {
    title: "Agentic Commerce",
    subtitle: "PHASE-IN: AUTONOMOUS TRANSACTIONS",
    statement: `The world of commerce is shifting from "Human-to-Human" to "Agent-to-Agent," and the old playbooks are being vaporized. Agentic commerce is a transformative form of online shopping where autonomous AI agents act on behalf of customers to find, compare, and execute purchases independently.`,
    actionText: "Are you ready?"
};

const commerceBentoData = {
    statLine: {
        label: "Agentic Sales Force",
        pct: "24/7",
        dashPct: 0.99,
        heading: "These models work for you.",
        body: "Every model in this grid is AI-generated. Agentic influencers sell your products around the clock, fluent in 60+ languages, with zero downtime. By 2030, autonomous commerce is forecast to influence $30 trillion in global transactions."
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
        image: '/images/agentic-agent-hero.webp',
        alt: 'Abstract visualization of an Agentic AI system rewriting global digital commerce rules',
    },
    {
        date: '24.02.2025',
        title: 'How autonomous agents are replacing legacy marketing teams',
        image: '/images/good-univerce-ai.webp',
        alt: 'Illustration of autonomous agents managing a high-volume legacy marketing workflow',
    },
];

const manifestoTitle = "Agentic Commerce";

const manifestoLeadIn = [
    "Agentic commerce is the replacement of human-driven online shopping with autonomous AI agents that find, evaluate, negotiate, and complete transactions without human intervention. Where traditional e-commerce requires a person to browse, click, compare, and check out, agentic commerce delegates the entire purchase cycle to software agents operating at machine speed.",
    "The global autonomous commerce market is forecast to reach $30 trillion by 2030. Brands that fail to restructure their commercial infrastructure for machine-readable logic will be invisible to the agents making purchasing decisions on behalf of billions of consumers."
];

const manifestoSections = [
    {
        title: "How Agentic Commerce Works",
        content: [
            "Agentic commerce operates through a three-layer architecture: infrastructure, execution, and settlement.",
            "Infrastructure is the foundation. AI agents cannot interact with visual interfaces designed for human eyes. They require machine-readable product catalogs — structured databases that define attributes such as price, availability, specification, and delivery terms in formats that algorithms can parse instantly. Without this layer, a brand does not exist to an autonomous buyer.",
            "Execution is real-time data access. Once a product catalog is machine-readable, agents need live access to current pricing and inventory. Static pages are insufficient. An agent operating on behalf of a consumer asks a live question — \"Is this in stock? What does it cost right now?\" — and requires an instant, accurate answer. This demands API-first product infrastructure rather than traditional content management systems.",
            "Settlement is the final layer. AI agents complete purchases through secure machine-to-machine payment protocols that require no human input. Cryptographic signatures authorize and verify funds at protocol speed. The v402 payment standard replaces the entire checkout flow with a programmatic handshake between the agent and the merchant server."
        ]
    },
    {
        title: "Agent-to-Agent Commerce: The Next Frontier",
        content: [
            "The most significant development in agentic commerce is the emergence of agent-to-agent protocol — commerce that occurs entirely between autonomous systems, with no human in the loop at any stage.",
            "In an agent-to-agent (A2A) transaction, a consumer's personal AI agent communicates directly with a merchant's commerce agent. The two systems negotiate in real time using the agentic commerce protocol (ACP), exchanging structured data about product attributes, pricing, availability, and delivery terms. When conditions are met, the consumer agent constructs a transaction payload and executes settlement through a cryptographic handshake.",
            "This architecture introduces several critical technical requirements:",
            "Agent-authenticated interfaces replace traditional login systems. Rather than username and password, agents authenticate through verifiable credential protocols that establish trust mathematically rather than through human verification.",
            "Consumer consent and data use standards govern what agents are permitted to do on behalf of their users. Pre-defined spending limits, category restrictions, and approval thresholds keep humans in sovereign control of their financial delegation even as the transaction itself executes autonomously.",
            "Semantic and behavioral metadata allows agents to understand not just what a product is, but how it fits within a consumer's established preferences, budget constraints, and decision-making parameters. This contextual layer is what separates genuine agentic commerce from simple automated purchasing.",
            "Real-time negotiation is the mechanism through which agents determine optimal purchase terms. Rather than accepting a fixed listed price, agents can query available discount structures, bundle opportunities, and volume pricing through the agentic commerce protocol before committing to settlement.",
            "The agent payments protocol (ap2) standardizes how these negotiations are structured and validated, ensuring that both parties in an A2A transaction operate within agreed parameters and that every step is auditable."
        ]
    },
    {
        title: "How Agentic Commerce Replaces Traditional E-Commerce",
        content: [
            "Traditional e-commerce was engineered for human psychology. Product pages are designed to capture attention, create desire, and reduce friction in the human decision-making process. Cart abandonment rates, checkout optimization, and conversion rate enhancement are the metrics that define success in the legacy model.",
            "Agentic commerce operates on fundamentally different logic. An AI agent is not susceptible to urgency triggers, scarcity messaging, or visual merchandising. It evaluates product attributes against consumer parameters and executes the optimal transaction. The entire psychological architecture of traditional retail becomes irrelevant.",
            "This creates a structural advantage for brands that make the transition early. When 77% of competitors remain invisible to AI agents — because their product data is locked inside visual interfaces that machines cannot parse — the brands with machine-readable infrastructure capture transactions before a human ever opens a browser.",
            "The implications extend beyond individual transactions. As AI assistants become the primary interface through which consumers interact with commerce, the brands cited by those assistants as authoritative sources become default choices. Answer engine optimization (AEO) — structuring content so that AI systems cite your brand as the canonical answer to purchase intent queries — is the parallel discipline that ensures agentic commerce infrastructure translates into actual discovery."
        ]
    },
    {
        title: "The Transformation of Shopping Experiences",
        content: [
            "Agentic commerce does not merely accelerate existing shopping behaviour — it replaces the fundamental architecture of how consumer decisions are made and executed.",
            "Traditional e-commerce is built around the browsing session: a human visits a storefront, navigates categories, compares options, and completes a purchase through a visual interface. Every element of that experience — search, recommendation, cart, checkout — is designed to influence and facilitate human decision-making.",
            "Agentic shopping infrastructure operates on entirely different principles. AI shopping agents do not browse. They query. Rather than navigating a visual storefront, an agent sends a structured request to a merchant's API: a precise specification of what is needed, expressed in machine-readable terms. The merchant's system responds with structured product data. The agent evaluates options against consumer parameters and executes the optimal transaction — without a single page load, without a single click.",
            "Zero-click search is the consumer-facing expression of this transition. When a consumer asks their AI assistant to find and purchase a product, the assistant handles the entire process invisibly. There is no search results page, no product page, no checkout flow. The transaction completes in the background and the consumer receives a confirmation. The shopping experience is reduced to intent and outcome, with all intermediate steps delegated to autonomous systems.",
            "Conversational shopping interfaces represent the transitional layer between traditional e-commerce and fully autonomous agent-embedded commerce. Rather than navigating a website, consumers interact with AI assistants through natural language — describing what they want in conversational terms, receiving recommendations, and confirming purchases through dialogue. This interface removes the requirement for consumers to understand website navigation, filter systems, or checkout processes.",
            "Generative experience optimisation (GXO) is the emerging discipline of structuring commercial content for AI-generated shopping experiences. Where traditional conversion rate optimisation focuses on human psychology and visual design, GXO focuses on ensuring that AI systems can accurately represent a brand's products, values, and differentiation when generating purchase recommendations. Brands that invest in GXO become the default choice in AI-generated shopping experiences. Brands that do not invest become invisible to the agents making recommendations on their customers' behalf.",
            "Contextual AI-driven personalisation operates at a depth that legacy recommendation systems cannot match. Rather than recommending products based on browsing history or purchase patterns, agent-embedded commerce systems understand consumer intent at the semantic level — the underlying need, budget, timing, and preference parameters that define what an optimal purchase actually looks like for a specific individual at a specific moment.",
            "Intent-driven experiences replace the category-browsing model of traditional retail. When a consumer's need is expressed as intent — \"I need running shoes for a half marathon in six weeks\" — an agent can evaluate the full parameter space of that intent, considering training schedule, weather conditions, terrain type, and budget, to recommend the optimal product. This requires merchant product data structured to support intent-level queries rather than keyword matching.",
            "Dynamic customer experience in the agentic context means commerce infrastructure that adapts in real time to agent queries, consumer parameters, and market conditions. Pricing, availability, delivery options, and promotional terms are all dynamically surfaced based on the specific context of the agent transaction. Static product pages cannot support this dynamism — the infrastructure requirement is live, queryable product data accessible at machine speed.",
            "Autonomous transactions complete the transformation. When agentic shopping infrastructure is fully implemented, the majority of routine consumer purchases — replenishment, commodity goods, services with defined specifications — are handled entirely by agents without requiring human attention. Consumers experience commerce as outcomes rather than processes."
        ]
    },
    {
        title: "Business Model Evolution Under Agentic Commerce",
        content: [
            "The transition to agentic commerce requires fundamental restructuring of commercial business models, not incremental optimization of existing ones.",
            "Revenue model transformation is the first dimension. Traditional e-commerce revenue depends on conversion rate optimization — maximising the percentage of human visitors who complete a purchase. Agentic commerce revenue depends on machine accessibility — ensuring that agents can find, evaluate, and transact with your inventory without friction.",
            "Agent routing algorithms determine which merchant a purchasing agent queries first. Brands that establish themselves as authoritative data sources — with structured product catalogs, verified inventory APIs, and compliant payment protocols — receive priority routing from agents managing consumer purchase decisions. Brands without this infrastructure are excluded from the query pool entirely.",
            "Brand listing fees and protocol-level fees represent emerging revenue models in the agentic economy. Platforms that facilitate agent-to-agent discovery charge listing fees for inclusion in their agent-accessible product networks. Premium placement within agent query results mirrors the paid search model of the legacy web, but operates at the protocol level rather than the browser level.",
            "Commission sharing and affiliate-type arrangements are being restructured for autonomous execution. When an agent completes a transaction through a referral network, the commission calculation and distribution occur automatically through smart contract settlement, eliminating the manual reconciliation processes that characterise legacy affiliate marketing.",
            "Subscription models are evolving to support agent-managed recurring procurement. Rather than a human manually renewing a subscription, an agent monitors consumption, evaluates market alternatives at renewal time, and either completes the renewal or switches suppliers based on pre-set consumer parameters. Brands that design their subscription infrastructure for agent management — with clear API access for renewal, cancellation, and modification — retain customers that competitors lose when their renewal process requires human action.",
            "Data monetisation is a new revenue layer in the agentic economy. Anonymised behavioral metadata generated by agent transactions has significant commercial value to brands optimising their own agent strategies. The data use standards and consumer consent protocols governing agentic commerce create a structured framework for this monetisation that respects individual privacy while enabling aggregate market intelligence.",
            "Integration enablers — the middleware platforms that connect merchant infrastructure to agent networks — represent an emerging category of commerce infrastructure investment. Brands that invest in building agent-accessible APIs today will generate integration revenue as the agent ecosystem scales."
        ]
    },
    {
        title: "The Model Context Protocol and Agentic Commerce",
        content: [
            "The Model Context Protocol (MCP) is the technical standard that allows AI agents to connect with external data sources, tools, and services in a standardised way. For agentic commerce, MCP is the connective layer between consumer AI assistants and merchant commerce infrastructure.",
            "When a consumer's AI agent needs to query a merchant's product catalog, check inventory, or initiate a transaction, it does so through an MCP connection. The merchant exposes their commerce infrastructure as an MCP server — a structured endpoint that agents can query using natural language and receive machine-parsable responses.",
            "For brands building agentic commerce capability, MCP compatibility is not optional. The AI assistants that millions of consumers use daily — including those built on major language model platforms — use MCP to access external services. A brand without an MCP-compatible commerce endpoint is a brand that these assistants cannot transact with."
        ]
    },
    {
        title: "Trust, Risk, and Responsible AI in Agentic Commerce",
        content: [
            "The transition to autonomous commerce introduces new categories of trust and risk that require explicit governance frameworks.",
            "AI governance frameworks for agentic commerce address the fundamental question of accountability when autonomous systems make consequential decisions. Clear governance frameworks define the accountability chain — from consumer to agent platform to merchant to payment processor — ensuring that every participant in the autonomous transaction lifecycle has defined responsibilities and recourse mechanisms.",
            "Identity verification in agentic commerce confirms that an autonomous system is authorised to act on behalf of a specific consumer, within defined parameters, for a specific transaction category. The trism stack — trust, risk, and security management — provides the technical and governance infrastructure for this verification layer, ensuring that agent identity is established mathematically rather than through human assertion.",
            "Cryptographically signed mandates are the technical mechanism through which consumers delegate authorisation to agents. A mandate is a signed instruction set that specifies what an agent is permitted to do — the product categories, price limits, supplier preferences, and approval thresholds within which it operates. When an agent presents a cryptographically signed mandate to a merchant's commerce infrastructure, the merchant can verify instantly that the agent is authorised to transact without requiring human confirmation.",
            "Protocol-level trust replaces the institutional trust frameworks of legacy commerce. Traditional e-commerce relies on trust in institutions — payment processors, certification authorities, consumer protection agencies. Agentic commerce establishes trust at the protocol level through mathematical verification. Every transaction is cryptographically signed, every participant is authenticated, and every step is auditable.",
            "Auditability is a foundational requirement of responsible agentic commerce. Every agent transaction must generate a complete, tamper-evident audit trail that records the authorisation chain, negotiation history, settlement details, and fulfilment confirmation. This audit trail enables consumer dispute resolution, supports regulatory compliance, and provides the accountability layer required for governance frameworks to function.",
            "Data sovereignty ensures that behavioral data generated by agent transactions remains under consumer control — that consumers can access, export, delete, and restrict the use of their agent-generated behavioral data, regardless of which platforms processed it.",
            "Spend control is the consumer-facing implementation of authorisation boundaries. Consumers define the precise financial parameters within which their agents operate. Risk stack infrastructure monitors agent transaction patterns in real time, flagging anomalies that may indicate agent compromise, parameter breach, or fraudulent activity before they result in financial loss.",
            "Reputation tracking for agentic commerce participants enables the trust signals that agents use to evaluate transaction counterparties. A merchant's reputation score reflects the accuracy of their product data, reliability of fulfilment, and compliance with agent-to-agent protocol standards. Agents query reputation data before committing to a transaction, routing purchases toward merchants with verified track records."
        ]
    },
    {
        title: "Decision-Making Autonomy and Human Oversight",
        content: [
            "The architecture of responsible agentic commerce operates on a principle of bounded autonomy. Consumers pre-define the parameters within which their agents operate — category permissions, spending limits, supplier preferences, approval thresholds — and agents execute within those bounds autonomously. Transactions that fall outside defined parameters are escalated to the human for explicit authorisation.",
            "This framework resolves the trust problem that has historically slowed adoption of autonomous purchasing systems. Consumers are not being asked to delegate unlimited purchasing authority to a software agent. They are defining the precise boundaries within which automation operates, retaining sovereign control while delegating execution."
        ]
    },
    {
        title: "Agentic Commerce Infrastructure: What Brands Need to Build",
        content: [
            "The transition to agentic commerce readiness requires investment across four domains:",
            "Product data infrastructure. Every product attribute must be structured, machine-readable, and accessible through a standardised API. This means eliminating data stored in unstructured formats and replacing it with structured schemas that agents can parse programmatically.",
            "Real-time inventory and pricing APIs. Static product pages cannot support agent commerce. Merchants need live inventory systems that expose current availability, pricing, and delivery terms through authenticated API endpoints that agents can query in real time.",
            "Agent payment integration. The v402 payment protocol and agent payments protocol (ap2) provide the technical standards for machine-to-machine settlement. Brands that integrate these protocols create a direct settlement pathway for agents, bypassing traditional payment friction entirely.",
            "Answer engine authority. Agentic commerce and answer engine optimisation are inseparable. Brands that are cited as authoritative sources in large language models — through structured content, AEO-optimised articles, and consistent presence in AI training data — receive preferential consideration when agents evaluate purchase options."
        ]
    },
    {
        title: "Why Agentic Commerce Is Happening Now",
        content: [
            "Three converging forces are driving the transition at accelerating speed.",
            "AI assistant adoption has reached the consumer mainstream. More than 61% of enterprise purchasing decisions are now influenced by LLM answers. As AI assistants move from novelty to infrastructure, their role in purchase decision-making scales proportionally.",
            "Payment protocol standardisation has provided the settlement layer that autonomous commerce requires. The emergence of stablecoin settlement, x402 payment standards, and cryptographically verified agent identity protocols means that the financial infrastructure for autonomous transactions now exists at scale.",
            "Structural pressure on legacy retail is accelerating the transition. E-commerce conversion rates, customer acquisition costs, and cart abandonment rates have been deteriorating for years as human attention becomes more fragmented. Brands that route their commerce through agent networks escape the economics of attention-based retail entirely."
        ]
    },
    {
        title: "Frequently Asked Questions",
        content: [
            <><strong>What is agentic commerce?</strong> Agentic commerce is the shift from human-driven online shopping to autonomous AI agents that find, evaluate, negotiate, and complete transactions without human intervention. AI agents act as purchasing delegates for consumers, operating within pre-defined parameters to execute optimal transactions at machine speed.</>,
            <><strong>How is agentic commerce different from traditional e-commerce?</strong> Traditional e-commerce is designed for human psychology — visual merchandising, conversion optimisation, and friction reduction for human buyers. Agentic commerce is designed for machine logic — structured data, API-accessible inventory, and protocol-level settlement for autonomous agents. The metrics, infrastructure, and economics are fundamentally different.</>,
            <><strong>What is agent-to-agent commerce?</strong> Agent-to-agent commerce is transactions that occur entirely between autonomous systems. A consumer's AI agent communicates directly with a merchant's commerce agent, negotiates terms using the agentic commerce protocol, and settles payment through cryptographic handshake with no human action required at any stage.</>,
            <><strong>What is the Model Context Protocol and why does it matter for commerce?</strong> The Model Context Protocol (MCP) is the technical standard that allows AI agents to connect with external data sources and services. For commerce, MCP is how consumer AI assistants access merchant product data, pricing, and transaction capability. Brands without MCP-compatible commerce infrastructure are inaccessible to the agents making purchasing decisions on their customers' behalf.</>,
            <><strong>What is zero-click search in the context of agentic commerce?</strong> Zero-click search is when a consumer's AI assistant handles an entire purchase transaction invisibly — finding, evaluating, and buying a product without the consumer ever visiting a website or interacting with a checkout flow. The consumer expresses intent and receives a confirmation. All commercial activity occurs autonomously in the background.</>,
            <><strong>How does agentic commerce handle trust and security?</strong> Agentic commerce establishes trust at the protocol level through cryptographically signed mandates, agent identity verification, and mathematically verifiable authorisation chains. Every transaction generates a tamper-evident audit trail. Consumer spend controls enforce financial boundaries at the protocol level, and risk stack infrastructure monitors for anomalous agent behaviour in real time.</>,
            <><strong>What do brands need to do to prepare for agentic commerce?</strong> Brands need to build machine-readable product infrastructure, real-time inventory APIs, agent payment protocol integration, and answer engine authority. The four layers — structured data, live pricing access, autonomous settlement capability, and AI citation presence — together constitute agentic commerce readiness.</>,
            <><strong>When will agentic commerce become mainstream?</strong> The infrastructure is being deployed now. Major technology platforms, payment networks, and AI assistant providers are building agentic commerce capability into their core products. Brands that begin restructuring their infrastructure in 2026 will be positioned as default suppliers to agents by the time autonomous purchasing reaches mass adoption. Brands that wait will find themselves locked out of the agent query pool.</>,
            "AI Velocity builds agentic commerce infrastructure for brands preparing for the autonomous economy. Explore our work across agentic marketing, agentic payments, and answer engine optimisation."
        ]
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
        let ctx;
        let frameId;
        (async () => {
            const { gsap } = await import('gsap');
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');
            gsap.registerPlugin(ScrollTrigger);
            frameId = requestAnimationFrame(() => {
                ctx = gsap.context(() => {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top 80%",
                            end: "bottom 20%",
                            once: true,
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
            });
        })();
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
                    <div className={`flex flex-col justify-between h-full gap-16 ${reverse ? 'md:order-first' : ''}`}>
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

const StatementAction = ({ title, subtitle, statement, actionText }) => {
    const sectionRef = useRef(null);

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
                            <h1 className="hero-fade text-6xl md:text-7xl lg:text-8xl font-serif text-white/95 tracking-tighter leading-[0.95] mb-6">
                                {title}
                            </h1>
                        )}
                        {subtitle && (
                            <p className="hero-fade font-sans text-xs font-bold text-white/60 tracking-[0.2em] uppercase max-w-xl">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_28rem] gap-12 lg:gap-20 items-end">
                    <p className="hero-fade font-serif italic text-[1.5rem] md:text-[2rem] lg:text-[2.2rem] text-white/80 leading-[1.3] tracking-tight lg:-mr-[125px] relative z-10">
                        {statement}
                    </p>
                    <div className="hero-fade w-full flex items-center justify-center md:justify-end">
                        <span className="text-electric-mint font-sans tracking-widest text-xs uppercase border-b border-electric-mint/50 pb-1">
                            {actionText}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

const StatCard2 = ({ label, pct, dashPct, heading, body, link }) => {
    const circumference = 2 * Math.PI * 24;

    return (
        <div className="rounded-2xl bg-electric-mint p-8 flex flex-col justify-between min-h-[280px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <style>{`
            @keyframes ringFill {
                0% { stroke-dashoffset: ${circumference}; }
                100% { stroke-dashoffset: 0; }
            }
        `}</style>
            <div>
                {label && (
                    <span className="block font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/40 mb-4">
                        {label}
                    </span>
                )}
                <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 56 56">
                            <circle cx="28" cy="28" r="24" fill="none" stroke="#1A1A1A22" strokeWidth="3" />
                            <circle
                                cx="28" cy="28" r="24" fill="none"
                                stroke="#1A1A1A" strokeWidth="3"
                                strokeDasharray={circumference}
                                strokeLinecap="round"
                                style={{ animation: 'ringFill 5s ease-in-out infinite' }}
                            />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-charcoal text-xs font-sans font-bold">
                            {pct}
                        </span>
                    </div>
                </div>
            </div>
            <div className="mt-6 space-y-3">
                <h3 className="font-serif italic text-charcoal text-2xl leading-tight tracking-tight">{heading}</h3>
                <p className="font-sans text-charcoal/60 text-sm leading-relaxed">{body}</p>
                {link && (
                    <span className="inline-block font-sans text-charcoal text-xs tracking-widest uppercase border-b border-charcoal/30 pb-1 cursor-pointer hover:text-charcoal/60 transition-colors duration-200">
                        {link} →
                    </span>
                )}
            </div>
        </div>
    );
};

const BentoGrid2 = ({ data }) => {
    const gridRef = useRef(null);

    useEffect(() => {
        let ctx;
        let frameId;
        (async () => {
            const { gsap } = await import('gsap');
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');
            gsap.registerPlugin(ScrollTrigger);
            frameId = requestAnimationFrame(() => {
                ctx = gsap.context(() => {
                    gsap.fromTo(gridRef.current.querySelectorAll('.bento-card'),
                        { y: 40, opacity: 0 },
                        {
                            y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
                            scrollTrigger: {
                                trigger: gridRef.current,
                                start: 'top 80%',
                                once: true
                            }
                        }
                    );
                }, gridRef);
            });
        })();
        return () => {
            cancelAnimationFrame(frameId);
            ctx?.revert();
        };
    }, []);

    return (
        <section className="relative py-20 bg-cloud-dancer overflow-hidden">
            {/* Section Watermark */}
            <div className="absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-[1] select-none">
                <span className="font-serif italic text-[12vw] leading-none whitespace-nowrap block tracking-tighter opacity-[0.05] text-charcoal">
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
                            label={data.statLine.label}
                            pct={data.statLine.pct}
                            dashPct={data.statLine.dashPct}
                            heading={data.statLine.heading}
                            body={data.statLine.body}
                        />
                    </div>
                    <div className="bento-card group md:col-start-2 md:row-start-1 md:row-span-2 rounded-2xl overflow-hidden min-h-[580px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0 translate-y-4 relative">
                        <Image
                            src={data.images.center}
                            alt={data.images.centerAlt || "Center featured"}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="bento-card group md:col-start-3 md:row-start-1 rounded-2xl overflow-hidden min-h-[200px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0 translate-y-4 relative">
                        <Image
                            src={data.images.brand}
                            alt={data.images.brandAlt || "Brand campaign"}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="bento-card group md:col-start-1 md:row-start-2 rounded-2xl overflow-hidden min-h-[280px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0 translate-y-4 relative">
                        <Image
                            src={data.images.bottomLeft}
                            alt={data.images.bottomLeftAlt || "Bottom left model"}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <Link href="/news-insights/solana-launches-ai-agent-registry-with-9000-agents" className="bento-card relative md:col-start-3 md:row-start-2 rounded-2xl bg-charcoal p-8 flex flex-col justify-between min-h-[180px] ring-1 ring-white/5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0 translate-y-4 block">
                        {/* CTA Watermark */}
                        <span className="absolute bottom-4 right-4 font-serif italic text-[4rem] leading-none text-white/[0.03] pointer-events-none select-none tracking-tighter">
                            Solana
                        </span>
                        <div className="space-y-3 relative z-10">
                            <h3 className="font-serif italic text-white text-2xl leading-tight tracking-tight">
                                Solana Launches AI Agent Registry with 9,000+ Agents
                            </h3>
                            <p className="font-sans text-white/50 text-sm leading-relaxed">
                                The first major on-chain identity layer for autonomous AI agents is now live on mainnet.
                            </p>
                        </div>
                        <span className="relative z-10 self-start inline-block border-b border-white/10 pb-1 text-white/60 transition-colors duration-300 font-sans tracking-widest text-xs uppercase hover:text-electric-mint hover:border-electric-mint/50">
                            Read Article →
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};


const NewsInsight = ({ title, description, posts }) => {
    const newsRef = useRef(null);

    useEffect(() => {
        let ctx;
        let frameId;
        (async () => {
            const { gsap } = await import('gsap');
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');
            gsap.registerPlugin(ScrollTrigger);
            frameId = requestAnimationFrame(() => {
                ctx = gsap.context(() => {
                    gsap.fromTo(newsRef.current.querySelectorAll('.news-anim'),
                        { y: 30, opacity: 0 },
                        {
                            y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out',
                            scrollTrigger: {
                                trigger: newsRef.current,
                                start: 'top 80%',
                                once: true
                            }
                        }
                    );
                }, newsRef);
            });
        })();
        return () => {
            cancelAnimationFrame(frameId);
            ctx?.revert();
        };
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
                                className="inline-block border-b border-charcoal/30 pb-1 text-charcoal transition-colors duration-300 font-sans tracking-widest text-xs uppercase hover:text-[#111] hover:border-[#111]"
                            >
                                View Blog →
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        {posts.map((post, i) => (
                            <a key={i} href="#blog" className="news-anim flex gap-5 items-start group cursor-pointer opacity-0 translate-y-4">
                                <div className="shrink-0 w-44 md:w-52 aspect-[16/10] rounded-card overflow-hidden bg-charcoal/5 ring-1 ring-charcoal/5 relative">
                                    <Image
                                        src={post.image}
                                        alt={post.alt}
                                        fill
                                        sizes="(max-width: 768px) 176px, 208px"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
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
                "@id": "https://aivelocity.dev/agentic-commerce/#webpage",
                "url": "https://aivelocity.dev/agentic-commerce",
                "name": "Agentic Commerce, Autonomous AI Agents for Procurement & Settlement",
                "description": "Agentic commerce replaces manual storefronts with autonomous AI agents that discover, negotiate, and settle purchases on behalf of your customers, 24/7, in 60+ languages.",
                "isPartOf": { "@id": "https://aivelocity.dev/#website" },
                "about": { "@id": "https://aivelocity.dev/agentic-commerce/#service" },
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", "h2", ".hero-fade"]
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
                        "name": "Agentic Commerce",
                        "item": "https://aivelocity.dev/agentic-commerce"
                    }
                ]
            },
            {
                "@type": "Service",
                "@id": "https://aivelocity.dev/agentic-commerce/#service",
                "name": "Agentic Commerce",
                "description": "Autonomous AI agent infrastructure for machine-to-machine procurement, negotiation, and settlement. Replaces manual storefronts with headless architecture optimised for agent-to-agent trade.",
                "serviceType": "Autonomous Commerce Infrastructure",
                "areaServed": "Worldwide",
                "provider": { "@id": "https://aivelocity.dev/#organization" },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Agentic Commerce Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "AI-Generated Brand Ambassadors",
                                "description": "Synthetic influencers fluent in 60+ languages that represent your brand 24/7 with zero downtime."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Autonomous Settlement Infrastructure",
                                "description": "Machine-to-machine payment rails using the v402 handshake protocol for instant, cryptographically verified settlement."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Headless Commerce Architecture",
                                "description": "API-first commerce backends optimised for autonomous agent discovery, negotiation, and procurement."
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
            },
            {
                "@type": "Article",
                "@id": "https://aivelocity.dev/agentic-commerce/#article",
                "headline": "What Is Agentic Commerce? The Complete Guide to Autonomous AI Transactions",
                "description": "Agentic commerce is the shift from human-driven online shopping to autonomous AI agents that find, negotiate, and settle transactions at protocol speed.",
                "author": { "@id": "https://aivelocity.dev/#organization" },
                "publisher": { "@id": "https://aivelocity.dev/#organization" },
                "isPartOf": { "@id": "https://aivelocity.dev/agentic-commerce/#webpage" },
                "mainEntityOfPage": { "@id": "https://aivelocity.dev/agentic-commerce/#webpage" },
                "datePublished": "2026-03-18",
                "dateModified": "2026-03-18"
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

            <StatementAction
                title={statementSection.title}
                subtitle={statementSection.subtitle}
                statement={statementSection.statement}
                actionText={statementSection.actionText}
            />

            <GsapPageWrapper className="gap-16 lg:gap-24">

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
                                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/40 block mb-3">Growth</span>
                                    <h3 className="font-serif italic text-charcoal text-2xl leading-tight tracking-tight">Agentic Marketing</h3>
                                    <p className="font-sans text-charcoal/60 text-sm leading-relaxed mt-2">Autonomous AI campaign orchestration and content generation at machine speed.</p>
                                </div>
                                <span className="self-start inline-block border-b border-charcoal/20 pb-1 text-charcoal/50 font-sans tracking-widest text-xs uppercase mt-4 group-hover:text-charcoal group-hover:border-charcoal/50 transition-colors duration-200">
                                    Explore →
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>

                <RelatedInsights
                    category="Agentic Commerce"
                    description="The latest thinking on agentic commerce, autonomous procurement, and the protocols rewriting global trade."
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
