import { insightsData } from '@/lib/insightsData';

export const metadata = {
    title: 'Agentic AEO — Answer Engine Optimization for AI Agents | AI Velocity',
    description: 'Agentic AEO restructures your digital footprint so autonomous AI agents cite your brand as the canonical answer. Structured schema, semantic knowledge graphs, and entity anchoring that make you the primary source for LLMs, ChatGPT, Perplexity, and Gemini.',
    alternates: {
        canonical: 'https://aivelocity.dev/agentic-aeo',
    },
    openGraph: {
        title: 'Agentic AEO — Answer Engine Optimization for AI Agents',
        description: 'Make your brand the canonical answer for autonomous AI search agents. Entity anchoring, knowledge graphs, and structured schema that dominate the generative search layer.',
        url: 'https://aivelocity.dev/agentic-aeo',
        siteName: 'AI Velocity',
        type: 'website',
        images: [
            {
                url: 'https://aivelocity.dev/og?title=Agentic%20AEO&subtitle=Service%20Page',
                width: 1200,
                height: 630,
                alt: 'AI Velocity Agentic AEO — Answer Engine Optimization for AI agents',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Agentic AEO — Answer Engine Optimization for AI Agents',
        description: 'Make your brand the canonical answer for autonomous AI search agents. Entity anchoring, knowledge graphs, and structured schema.',
        images: ['https://aivelocity.dev/og?title=Agentic%20AEO&subtitle=Service%20Page'],
    },
};

export default function AgenticAEOLayout({ children }) {
    const categoryArticles = insightsData
        .filter(a => a.category === 'Agentic AEO')
        .map(a => ({
            '@type': 'Article',
            headline: a.title,
            url: `https://aivelocity.dev/news-insights/${a.slug}`,
        }));

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': 'https://aivelocity.dev/agentic-aeo',
        name: 'Agentic AEO',
        url: 'https://aivelocity.dev/agentic-aeo',
        description: 'Agentic AEO restructures your digital footprint so autonomous AI agents cite your brand as the canonical answer.',
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
