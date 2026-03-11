const SITE_URL = 'https://aivelocity.dev';
const SITE_NAME = 'AI Velocity';
const TWITTER_HANDLE = '@aivelocitydev';

/**
 * Creates a complete Next.js metadata object with OpenGraph, Twitter, and canonical.
 *
 * @param {Object} options
 * @param {string} options.title        - OG / Twitter title (shorter, no "| AI Velocity" suffix)
 * @param {string} options.pageTitle    - Full <title> tag (with "| AI Velocity" suffix)
 * @param {string} options.description  - Meta + OG description
 * @param {string} options.path         - URL path, e.g. '/agentic-commerce' (omit for root)
 * @param {string} options.ogSubtitle   - Subtitle for OG image route, e.g. 'Service Page'
 * @param {string} [options.ogDescription] - Separate shorter OG description (defaults to description)
 * @param {string} [options.twitterDescription] - Separate Twitter description (defaults to ogDescription)
 * @param {string} [options.type]       - OG type, defaults to 'website'
 * @param {string} [options.imageAlt]   - Alt text for OG image
 * @param {string} [options.keywords]   - Meta keywords string
 * @param {Object} [options.extra]      - Any additional metadata fields to merge in
 * @returns {Object} Next.js metadata object
 */
export function createMetadata({
    title,
    pageTitle,
    description,
    path = '',
    ogSubtitle = SITE_NAME,
    ogDescription,
    twitterDescription,
    type = 'website',
    imageAlt,
    keywords,
    extra = {},
}) {
    const url = `${SITE_URL}${path}`;
    const ogTitle = title || pageTitle;
    const ogDesc = ogDescription || description;
    const twDesc = twitterDescription || ogDesc;
    const alt = imageAlt || `${SITE_NAME} ${ogTitle}`;

    // Build OG image URL from the /og route
    const ogImageParams = new URLSearchParams({
        title: ogSubtitle === SITE_NAME
            ? ogTitle.split('|')[0].trim()
            : ogTitle.split(',')[0].trim().split('|')[0].trim(),
        subtitle: ogSubtitle,
    });
    const ogImageUrl = `${SITE_URL}/og?${ogImageParams.toString()}`;

    return {
        title: pageTitle || title,
        description,
        ...(keywords && { keywords }),
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: ogTitle,
            description: ogDesc,
            url,
            siteName: SITE_NAME,
            type,
            locale: 'en_GB',
            images: [
                {
                    url: ogImageUrl,
                    width: 1200,
                    height: 630,
                    alt,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            site: TWITTER_HANDLE,
            creator: TWITTER_HANDLE,
            title: ogTitle,
            description: twDesc,
            images: [ogImageUrl],
        },
        ...extra,
    };
}
