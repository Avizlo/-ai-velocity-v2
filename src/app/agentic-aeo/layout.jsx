import { insightsData } from '@/lib/insightsData';

export const metadata = {
    title: 'Agentic AEO — Answer Engine Optimization for AI Agents | AI Velocity',
    description: 'Agentic AEO restructures your digital footprint so autonomous AI agents cite your brand as the canonical answer. Structured schema, semantic knowledge graphs, and entity anchoring that make you the primary source for LLMs, ChatGPT, Perplexity, and Gemini.',
    alternates: {
        canonical: 'https://ai-velocity.com/agentic-aeo',
    },
    openGraph: {
        title: 'Agentic AEO — Answer Engine Optimization for AI Agents',
        description: 'Make your brand the canonical answer for autonomous AI search agents. Entity anchoring, knowledge graphs, and structured schema that dominate the generative search layer.',
        url: 'https://ai-velocity.com/agentic-aeo',
        siteName: 'AI Velocity',
        type: 'website',
        images: [
            {
                url: 'https://ai-velocity.com/images/agentic-agent-hero.webp',
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
        images: ['https://ai-velocity.com/images/agentic-agent-hero.webp'],
    },
};

export default function AgenticAEOLayout({ children }) {
    const categoryArticles = insightsData
        .filter(a => a.category === 'Agentic AEO')
        .map(a => ({
            '@type': 'Article',
            headline: a.title,
            url: `https://ai-velocity.com/news-insights/${a.slug}`,
        }));

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': 'https://ai-velocity.com/agentic-aeo',
        name: 'Agentic AEO',
        url: 'https://ai-velocity.com/agentic-aeo',
        description: 'Agentic AEO restructures your digital footprint so autonomous AI agents cite your brand as the canonical answer.',
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
