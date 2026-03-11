// Server Component for Homepage SEO Metadata
import { insightsData } from '@/lib/insightsData';

export const metadata = {
    title: 'Agentic Commerce Infrastructure | AI Velocity',
    description: 'AI Velocity builds agentic commerce infrastructure. Autonomous systems for marketing, payments, and discovery, engineered for AI agents that negotiate, transact, and settle at protocol speed.',
    alternates: {
        canonical: 'https://aivelocity.dev',
    },
    openGraph: {
        title: 'Agentic Commerce Infrastructure | AI Velocity',
        description: 'AI Velocity builds agentic commerce infrastructure. Autonomous systems for marketing, payments, and discovery, engineered for AI agents.',
        url: 'https://aivelocity.dev',
        siteName: 'AI Velocity',
        type: 'website',
        images: [
            {
                url: 'https://aivelocity.dev/og?title=Agentic%20Commerce%20Infrastructure&subtitle=AI%20Velocity',
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
        images: ['https://aivelocity.dev/og?title=Agentic%20Commerce%20Infrastructure&subtitle=AI%20Velocity'],
    },
};

export default function HomeLayout({ children }) {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": "https://aivelocity.dev/#website",
                "name": "AI Velocity",
                "url": "https://aivelocity.dev"
            },
            {
                "@type": "Organization",
                "@id": "https://aivelocity.dev/#organization",
                "name": "AI Velocity",
                "url": "https://aivelocity.dev",
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
                "@id": "https://aivelocity.dev/#webpage",
                "url": "https://aivelocity.dev",
                "name": "Agentic Commerce Infrastructure | AI Velocity",
                "description": "AI Velocity builds agentic commerce infrastructure for the autonomous economy. Commerce, marketing, payments, and discovery systems engineered for AI agents.",
                "isPartOf": { "@id": "https://aivelocity.dev/#website" },
                "about": { "@id": "https://aivelocity.dev/#organization" },
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
                        "item": "https://aivelocity.dev"
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
                        "url": "https://aivelocity.dev/agentic-commerce"
                    },
                    {
                        "@type": "WebPage",
                        "name": "Agentic Marketing",
                        "url": "https://aivelocity.dev/agentic-marketing"
                    },
                    {
                        "@type": "WebPage",
                        "name": "Agentic Payments",
                        "url": "https://aivelocity.dev/agentic-payments"
                    },
                    {
                        "@type": "WebPage",
                        "name": "Agentic AEO",
                        "url": "https://aivelocity.dev/agentic-aeo"
                    },
                    {
                        "@type": "WebPage",
                        "name": "News & Insights",
                        "url": "https://aivelocity.dev/news-insights"
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

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            {children}
        </>
    );
}
