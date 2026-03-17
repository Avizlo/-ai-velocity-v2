import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
    pageTitle: 'Media Kit | AI Velocity',
    title: 'AI Velocity Media Kit',
    description: 'Press assets, brand guidelines, and pre-written editorials for media coverage of AI Velocity and the agentic commerce ecosystem.',
    ogSubtitle: 'Media Kit',
    path: '/media-kit',
    extra: {
        robots: {
            index: false,
            follow: false,
        },
    },
});

export default function MediaKitLayout({ children }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': 'https://aivelocity.dev/media-kit',
        name: 'AI Velocity Media Kit',
        url: 'https://aivelocity.dev/media-kit',
        description: 'Press assets, brand guidelines, and pre-written editorials for media coverage of AI Velocity.',
        isPartOf: { '@id': 'https://aivelocity.dev/#website' },
        about: { '@id': 'https://aivelocity.dev/#organization' },
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
