// Server Component for Agentic Marketing SEO Metadata
import { insightsData } from '@/lib/insightsData';

export const metadata = {
    title: 'Agentic Marketing — Autonomous AI Campaign Orchestration | AI Velocity',
    description: 'Agentic marketing deploys autonomous AI agents to execute campaign orchestration, content generation, and performance optimisation at machine speed — replacing legacy agency models with goal-driven digital labor.',
    alternates: {
        canonical: 'https://aivelocity.dev/agentic-marketing',
    },
    openGraph: {
        title: 'Agentic Marketing — Autonomous AI Campaign Orchestration',
        description: 'Autonomous AI agents that execute campaign orchestration, content generation, and performance marketing at machine speed. The future of brand growth is agent-to-agent.',
        url: 'https://aivelocity.dev/agentic-marketing',
        siteName: 'AI Velocity',
        type: 'website',
        images: [
            {
                url: 'https://aivelocity.dev/og?title=Agentic%20Marketing&subtitle=Service%20Page',
                width: 1200,
                height: 630,
                alt: 'AI Velocity Agentic Marketing — Autonomous AI campaign orchestration',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Agentic Marketing — Autonomous AI Campaign Orchestration',
        description: 'Autonomous AI agents that execute campaign orchestration, content generation, and performance marketing at machine speed.',
        images: ['https://aivelocity.dev/og?title=Agentic%20Marketing&subtitle=Service%20Page'],
    },
};

export default function Layout({ children }) {
    const categoryArticles = insightsData
        .filter(a => a.category === 'Agentic Marketing')
        .map(a => ({
            '@type': 'Article',
            headline: a.title,
            url: `https://aivelocity.dev/news-insights/${a.slug}`,
        }));

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': 'https://aivelocity.dev/agentic-marketing',
        name: 'Agentic Marketing',
        url: 'https://aivelocity.dev/agentic-marketing',
        description: 'Agentic marketing deploys autonomous AI agents to execute campaign orchestration, content generation, and performance optimisation at machine speed.',
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
