
/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {},
    experimental: {
        inlineCss: true, // Inline all CSS into <style> tags — eliminates render-blocking CSS chain
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 31536000, // 1 year — optimized images cached aggressively
        remotePatterns: [],
    },
    async headers() {
        return [
            {
                // All static pages & assets — browser caches 24h, CDN caches 24h, stale OK for 24h
                source: '/((?!api).*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=86400, s-maxage=2592000, stale-while-revalidate=2592000',
                    },
                ],
            },
            {
                // Font files — cache for 1 year (immutable, never changes)
                // Listed AFTER catch-all so this takes precedence for /fonts/ paths
                source: '/fonts/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                // Static images — cache for 1 year (content doesn't change)
                source: '/images/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;