import { Hero } from '@/components/sections/Hero';
import { insightsData } from '@/lib/insightsData';
import { HomeAnimatedSections } from '@/components/sections/HomeAnimatedSections';

// ============================================================================
// METADATA & SEO
// ============================================================================

export const metadata = {
    title: 'Agentic Commerce Infrastructure | AI Velocity',
    description: 'AI Velocity builds agentic commerce infrastructure. Autonomous systems for marketing, payments, and discovery, engineered for AI agents that negotiate, transact, and settle at protocol speed.',
    alternates: {
        canonical: 'https://ai-velocity.com',
    },
    openGraph: {
        title: 'Agentic Commerce Infrastructure | AI Velocity',
        description: 'AI Velocity builds agentic commerce infrastructure. Autonomous systems for marketing, payments, and discovery, engineered for AI agents.',
        url: 'https://ai-velocity.com',
        siteName: 'AI Velocity',
        type: 'website',
        images: [
            {
                url: 'https://ai-velocity.com/images/agentic-agent-hero.webp',
                width: 1200,
                height: 630,
                alt: 'AI Velocity, agentic commerce infrastructure for the autonomous economy',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Agentic Commerce Infrastructure | AI Velocity',
        description: 'AI Velocity builds agentic commerce infrastructure. Autonomous systems for marketing, payments, and discovery.',
        images: ['https://ai-velocity.com/images/agentic-agent-hero.webp'],
    },
};

// ============================================================================
// JSON-LD SCHEMA
// ============================================================================

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": "https://ai-velocity.com/#website",
            "name": "AI Velocity",
            "url": "https://ai-velocity.com"
        },
        {
            "@type": "Organization",
            "@id": "https://ai-velocity.com/#organization",
            "name": "AI Velocity",
            "url": "https://ai-velocity.com",
            "description": "AI Velocity builds agentic commerce infrastructure. Autonomous systems for marketing, payments, and discovery, engineered for AI agents that negotiate, transact, and settle at protocol speed.",
            "knowsAbout": [
                "agentic commerce",
                "autonomous AI agents",
                "agentic marketing",
                "agentic payments",
                "answer engine optimization",
                "machine-to-machine settlement",
                "structured data",
                "knowledge graphs"
            ],
            "sameAs": [
                "https://www.linkedin.com/company/ai-velocity"
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://ai-velocity.com/#webpage",
            "url": "https://ai-velocity.com",
            "name": "Agentic Commerce Infrastructure | AI Velocity",
            "description": "AI Velocity builds agentic commerce infrastructure for the autonomous economy. Commerce, marketing, payments, and discovery systems engineered for AI agents.",
            "isPartOf": { "@id": "https://ai-velocity.com/#website" },
            "about": { "@id": "https://ai-velocity.com/#organization" },
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", ".thesis-text"]
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
                }
            ]
        },
        {
            "@type": "SiteNavigationElement",
            "name": "Main Navigation",
            "hasPart": [
                {
                    "@type": "WebPage",
                    "name": "Agentic Commerce",
                    "url": "https://ai-velocity.com/agentic-commerce"
                },
                {
                    "@type": "WebPage",
                    "name": "Agentic Marketing",
                    "url": "https://ai-velocity.com/agentic-marketing"
                },
                {
                    "@type": "WebPage",
                    "name": "Agentic Payments",
                    "url": "https://ai-velocity.com/agentic-payments"
                },
                {
                    "@type": "WebPage",
                    "name": "Agentic AEO",
                    "url": "https://ai-velocity.com/agentic-aeo"
                },
                {
                    "@type": "WebPage",
                    "name": "News & Insights",
                    "url": "https://ai-velocity.com/news-insights"
                }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is an AI agent?",
                    "acceptedAnswer": { "@type": "Answer", "text": "An AI agent is an autonomous software program capable of executing complex multi-step tasks on behalf of a user. It operates independently by reasoning through problems and making decisions to achieve a specific goal." }
                },
                {
                    "@type": "Question",
                    "name": "How does autonomous commerce function?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Autonomous commerce functions by allowing AI agents to negotiate and execute transactions directly with merchant servers. The agent evaluates the user intent, queries the merchant database, and settles the payment programmatically without human intervention." }
                },
                {
                    "@type": "Question",
                    "name": "Why are legacy e-commerce platforms struggling?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Legacy platforms were built for human visual browsing rather than machine-readable logic. They rely on fractured systems that require manual data entry and slow page loads, creating friction that autonomous systems cannot navigate efficiently." }
                },
                {
                    "@type": "Question",
                    "name": "What is a machine-readable catalog?",
                    "acceptedAnswer": { "@type": "Answer", "text": "A machine-readable catalog is a structured database designed specifically for AI agents to comprehend. It uses standardized data formats to clearly define product attributes like price and availability." }
                },
                {
                    "@type": "Question",
                    "name": "How does structured data impact search visibility?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Structured data directly impacts search visibility by giving algorithms the precise context they need to rank content. It translates human-readable text into a format that machines can instantly process." }
                },
                {
                    "@type": "Question",
                    "name": "What is headless architecture?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Headless architecture is the decoupling of the visual frontend of a website from the transactional backend. This separation allows AI agents to interact directly with the commerce engine via APIs." }
                },
                {
                    "@type": "Question",
                    "name": "How do digital proxies handle payments?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Digital proxies handle payments through secure programmatic handshakes at the protocol level. They use cryptographic signatures to authorize funds instantly without requiring a human to type in credit card details." }
                },
                {
                    "@type": "Question",
                    "name": "What role does semantic search play in this transition?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Semantic search plays a critical role by understanding the contextual meaning behind a query rather than just matching keywords. It allows agents to process highly complex natural language requests." }
                },
                {
                    "@type": "Question",
                    "name": "Are agent-to-agent transactions secure?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Agent-to-agent transactions are highly secure due to their reliance on verifiable cryptographic protocols. Every request is mathematically signed and audited in real time to prevent fraud." }
                },
                {
                    "@type": "Question",
                    "name": "When will this technological shift become standard?",
                    "acceptedAnswer": { "@type": "Answer", "text": "The shift is occurring rapidly as major technology and financial institutions deploy agent-ready infrastructure. The transition from human browsing to autonomous settlement is expected to be the dominant form of commerce within the next few years." }
                }
            ]
        }
    ]
};

// ============================================================================
// CONTENT VARIABLES
// ============================================================================

const agenticFaqs = [
    {
        question: "What is an AI agent?",
        answer: "An AI agent is an autonomous software program capable of executing complex multi-step tasks on behalf of a user. It operates independently by reasoning through problems and making decisions to achieve a specific goal. This replaces the need for humans to manually click through web interfaces."
    },
    {
        question: "How does autonomous commerce function?",
        answer: "Autonomous commerce functions by allowing AI agents to negotiate and execute transactions directly with merchant servers. The agent evaluates the user intent and queries the merchant database to find the optimal product. It then settles the payment programmatically without human intervention."
    },
    {
        question: "Why are legacy e-commerce platforms struggling?",
        answer: "Legacy platforms are struggling because they were built for human visual browsing rather than machine-readable logic. They rely on fractured systems that require manual data entry and slow page loads. This architecture creates friction that autonomous systems cannot navigate efficiently."
    },
    {
        question: "What is a machine-readable catalog?",
        answer: "A machine-readable catalog is a structured database designed specifically for AI agents to comprehend. It uses standardized data formats to clearly define product attributes like price and availability. This ensures that an answer engine can accurately cite the product."
    },
    {
        question: "How does structured data impact search visibility?",
        answer: "Structured data directly impacts search visibility by giving algorithms the precise context they need to rank content. It translates human-readable text into a format that machines can instantly process. Without it a brand remains invisible to modern generative search engines."
    },
    {
        question: "What is headless architecture?",
        answer: "Headless architecture is the decoupling of the visual frontend of a website from the transactional backend. This separation allows AI agents to interact directly with the commerce engine via APIs. It results in exponentially faster transaction speeds by bypassing the graphical interface."
    },
    {
        question: "How do digital proxies handle payments?",
        answer: "Digital proxies handle payments through secure programmatic handshakes at the protocol level. They use cryptographic signatures to authorize funds instantly without requiring a human to type in credit card details. This process reduces chargeback risks and eliminates checkout abandonment."
    },
    {
        question: "What role does semantic search play in this transition?",
        answer: "Semantic search plays a critical role by understanding the contextual meaning behind a query rather than just matching keywords. It allows agents to process highly complex natural language requests. This intelligence ensures that the consumer receives exactly what they intended to find."
    },
    {
        question: "Are agent-to-agent transactions secure?",
        answer: "Agent-to-agent transactions are highly secure due to their reliance on verifiable cryptographic protocols. Every request is mathematically signed and audited in real time to prevent fraud. This creates a system of trust based on code rather than human verification."
    },
    {
        question: "When will this technological shift become standard?",
        answer: "The shift is occurring rapidly as major technology and financial institutions deploy agent-ready infrastructure. The transition from human browsing to autonomous settlement is expected to be the dominant form of commerce within the next few years. Brands must adapt their technical foundations now to remain competitive."
    }
];

const services = [
    {
        label: "Commerce",
        title: "Agentic Commerce",
        body: "Your products, negotiated and settled by autonomous agents. No cart, no checkout, no friction.",
        href: "/agentic-commerce",
        image: "/images/news-1.webp",
        bgPosition: "top",
    },
    {
        label: "Marketing",
        title: "Agentic Marketing",
        body: "AI-generated campaigns that execute themselves. From content creation to budget allocation, no human bottleneck.",
        href: "/agentic-marketing",
        image: "/images/ai-marketing.webp",
        bgPosition: "top",
    },
    {
        label: "Settlement",
        title: "Agentic Payments",
        body: "Cryptographically verified, machine-to-machine settlements. The v402 handshake replaces the entire checkout flow.",
        href: "/agentic-payments",
        image: "/images/agentic-agent-hero.webp",
        bgPosition: "top",
    },
    {
        label: "Discovery",
        title: "Agentic AEO",
        body: "Search is dead. Answer engines cite sources, not links. We make your brand the canonical answer.",
        href: "/agentic-aeo",
        image: "/images/insights/product-data-liquidity.webp",
        bgPosition: "center",
    },
];

const stats = [
    { value: "$30T", label: "Autonomous commerce market by 2030" },
    { value: "24/7", label: "Agent availability across 60+ languages" },
    { value: "61%", label: "Enterprise decisions influenced by LLM answers" },
    { value: "77%", label: "Competitors invisible to AI agents" },
];

// Get the 3 most recent articles
const latestInsights = [...insightsData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

// ============================================================================
// PAGE
// ============================================================================

export default function Home() {
    return (
        <main className="bg-cloud-dancer flex flex-col gap-16 lg:gap-24">
            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            {/* 1. Hero */}
            <Hero />

            {/* 2–9. All Animated Sections */}
            <HomeAnimatedSections
                services={services}
                stats={stats}
                latestInsights={latestInsights}
                faqs={agenticFaqs}
            />
        </main>
    );
}
