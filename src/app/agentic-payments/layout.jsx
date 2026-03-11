import { insightsData } from '@/lib/insightsData';

export const metadata = {
    title: 'Agentic Payments | Autonomous Settlement Infrastructure | AI Velocity',
    description: 'Agentic payments orchestrate instant, machine-to-machine settlements via autonomous software delegates. Explore the v402 handshake, sovereign settlement protocols, and the financial infrastructure powering agent-to-agent commerce.',
    alternates: {
        canonical: 'https://aivelocity.dev/agentic-payments',
    },
    openGraph: {
        title: 'Agentic Payments — Autonomous Settlement Infrastructure',
        description: 'Instant machine-to-machine settlements via autonomous AI delegates. The v402 handshake protocol enables sovereign, cryptographically verified settlement at global scale.',
        url: 'https://aivelocity.dev/agentic-payments',
        siteName: 'AI Velocity',
        type: 'website',
        images: [
            {
                url: 'https://aivelocity.dev/og?title=Agentic%20Payments&subtitle=Service%20Page',
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
        images: ['https://aivelocity.dev/og?title=Agentic%20Payments&subtitle=Service%20Page'],
    },
};

export default function AgenticPaymentsLayout({ children }) {
    const categoryArticles = insightsData
        .filter(a => a.category === 'Agentic Payments')
        .map(a => ({
            '@type': 'Article',
            headline: a.title,
            url: `https://aivelocity.dev/news-insights/${a.slug}`,
        }));

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': 'https://aivelocity.dev/agentic-payments',
        name: 'Agentic Payments',
        url: 'https://aivelocity.dev/agentic-payments',
        description: 'Agentic payments orchestrate instant, machine-to-machine settlements via autonomous software delegates.',
        isPartOf: { '@id': 'https://aivelocity.dev/#website' },
        about: { '@id': 'https://aivelocity.dev/#organization' },
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
