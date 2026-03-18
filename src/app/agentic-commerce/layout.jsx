// Server Component for Agentic Commerce SEO Metadata
import { insightsData } from '@/lib/insightsData';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
    pageTitle: 'What Is Agentic Commerce? AI-Driven Shopping Revolution | AI Velocity',
    title: 'What Is Agentic Commerce? AI-Driven Shopping Revolution',
    description: 'Agentic commerce is the shift from human-driven online shopping to autonomous AI agents that find, negotiate, and settle transactions at protocol speed. Here is how it works.',
    ogDescription: 'Agentic commerce is the shift from human-driven online shopping to autonomous AI agents that find, negotiate, and settle transactions at protocol speed. Here is how it works.',
    path: '/agentic-commerce',
    ogSubtitle: 'Service Page',
});

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
        description: 'Agentic commerce is the shift from human-driven online shopping to autonomous AI agents that find, negotiate, and settle transactions at protocol speed. Here is how it works.',
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
