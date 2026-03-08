import { insightsData } from '@/lib/insightsData';

const BASE_URL = 'https://ai-velocity.com';

export default function sitemap() {
    // Static pages
    const staticPages = [
        {
            url: BASE_URL,
            lastModified: new Date('2026-03-08'),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/agentic-commerce`,
            lastModified: new Date('2026-03-08'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/agentic-marketing`,
            lastModified: new Date('2026-03-08'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/agentic-payments`,
            lastModified: new Date('2026-03-08'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/agentic-aeo`,
            lastModified: new Date('2026-03-08'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/agentic-strategy`,
            lastModified: new Date('2026-03-01'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/agentic-photoshoots`,
            lastModified: new Date('2026-03-01'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/business-payments`,
            lastModified: new Date('2026-03-01'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/strategy`,
            lastModified: new Date('2026-03-01'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/aeo`,
            lastModified: new Date('2026-03-01'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/news-insights`,
            lastModified: new Date('2026-03-08'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ];

    // Dynamic blog article pages
    const articlePages = insightsData.map(article => ({
        url: `${BASE_URL}/news-insights/${article.slug}`,
        lastModified: new Date(article.date),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [...staticPages, ...articlePages];
}
