// Server Component for Agentic Commerce SEO Metadata
import { insightsData } from '@/lib/insightsData';

export const metadata = {
    title: 'Agentic Commerce — Autonomous AI Agents for Procurement & Settlement | AI Velocity',
    description: 'Agentic commerce replaces manual storefronts with autonomous AI agents that discover, negotiate, and settle purchases on behalf of your customers — 24/7, in 60+ languages. Learn how AI Velocity builds this infrastructure.',
    alternates: {
        canonical: 'https://aivelocity.dev/agentic-commerce',
    },
    openGraph: {
        title: 'Agentic Commerce — Autonomous AI Procurement & Settlement',
        description: 'Autonomous AI agents that discover, negotiate, and settle purchases on behalf of your customers — 24/7, in 60+ languages. The future of commerce is agent-to-agent.',
        url: 'https://aivelocity.dev/agentic-commerce',
        siteName: 'AI Velocity',
        type: 'website',
        images: [
            {
                url: 'https://aivelocity.dev/og?title=Agentic%20Commerce&subtitle=Service%20Page',
                width: 1200,
                height: 630,
                alt: 'AI Velocity Agentic Commerce — Autonomous AI procurement and settlement',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Agentic Commerce — Autonomous AI Procurement & Settlement',
        description: 'Autonomous AI agents that discover, negotiate, and settle purchases on behalf of your customers — 24/7, in 60+ languages.',
        images: ['https://aivelocity.dev/og?title=Agentic%20Commerce&subtitle=Service%20Page'],
    },
};

export default function Layout({ children }) {
    const categoryArticles = insightsData
        .filter(a => a.category === 'Agentic Commerce')
        .map(a => ({
            '@type': 'Article',
            headline: a.title,
            url: `https://aivelocity.dev/news-insights/${a.slug}`,
        }));

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': 'https://aivelocity.dev/agentic-commerce',
        name: 'Agentic Commerce',
        url: 'https://aivelocity.dev/agentic-commerce',
        description: 'Agentic commerce replaces manual storefronts with autonomous AI agents that discover, negotiate, and settle purchases on behalf of your customers.',
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
