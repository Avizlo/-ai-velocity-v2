// Server Component for Agentic Commerce SEO Metadata
import { insightsData } from '@/lib/insightsData';

export const metadata = {
    title: 'Agentic Commerce — Autonomous AI Agents for Procurement & Settlement | AI Velocity',
    description: 'Agentic commerce replaces manual storefronts with autonomous AI agents that discover, negotiate, and settle purchases on behalf of your customers — 24/7, in 60+ languages. Learn how AI Velocity builds this infrastructure.',
    alternates: {
        canonical: 'https://ai-velocity.com/agentic-commerce',
    },
    openGraph: {
        title: 'Agentic Commerce — Autonomous AI Procurement & Settlement',
        description: 'Autonomous AI agents that discover, negotiate, and settle purchases on behalf of your customers — 24/7, in 60+ languages. The future of commerce is agent-to-agent.',
        url: 'https://ai-velocity.com/agentic-commerce',
        siteName: 'AI Velocity',
        type: 'website',
        images: [
            {
                url: 'https://ai-velocity.com/images/agentic-agent-hero.webp',
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
        images: ['https://ai-velocity.com/images/agentic-agent-hero.webp'],
    },
};

export default function Layout({ children }) {
    const categoryArticles = insightsData
        .filter(a => a.category === 'Agentic Commerce')
        .map(a => ({
            '@type': 'Article',
            headline: a.title,
            url: `https://ai-velocity.com/news-insights/${a.slug}`,
        }));

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': 'https://ai-velocity.com/agentic-commerce',
        name: 'Agentic Commerce',
        url: 'https://ai-velocity.com/agentic-commerce',
        description: 'Agentic commerce replaces manual storefronts with autonomous AI agents that discover, negotiate, and settle purchases on behalf of your customers.',
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
