import { insightsData } from '@/lib/insightsData';

export const metadata = {
    title: 'Agentic Payments | Autonomous Settlement Infrastructure | AI Velocity',
    description: 'Agentic payments orchestrate instant, machine-to-machine settlements via autonomous software delegates. Explore the v402 handshake, sovereign settlement protocols, and the financial infrastructure powering agent-to-agent commerce.',
    alternates: {
        canonical: 'https://ai-velocity.com/agentic-payments',
    },
    openGraph: {
        title: 'Agentic Payments — Autonomous Settlement Infrastructure',
        description: 'Instant machine-to-machine settlements via autonomous AI delegates. The v402 handshake protocol enables sovereign, cryptographically verified settlement at global scale.',
        url: 'https://ai-velocity.com/agentic-payments',
        siteName: 'AI Velocity',
        type: 'website',
        images: [
            {
                url: 'https://ai-velocity.com/images/agentic-agent-hero.webp',
                width: 1200,
                height: 630,
                alt: 'AI Velocity Agentic Payments — Autonomous settlement infrastructure',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Agentic Payments — Autonomous Settlement Infrastructure',
        description: 'Instant machine-to-machine settlements via autonomous AI delegates. The financial infrastructure powering agent-to-agent commerce.',
        images: ['https://ai-velocity.com/images/agentic-agent-hero.webp'],
    },
};

export default function AgenticPaymentsLayout({ children }) {
    const categoryArticles = insightsData
        .filter(a => a.category === 'Agentic Payments')
        .map(a => ({
            '@type': 'Article',
            headline: a.title,
            url: `https://ai-velocity.com/news-insights/${a.slug}`,
        }));

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': 'https://ai-velocity.com/agentic-payments',
        name: 'Agentic Payments',
        url: 'https://ai-velocity.com/agentic-payments',
        description: 'Agentic payments orchestrate instant, machine-to-machine settlements via autonomous software delegates.',
        isPartOf: { '@id': 'https://ai-velocity.com/#website' },
        about: { '@id': 'https://ai-velocity.com/#organization' },
        hasPart: categoryArticles,
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
