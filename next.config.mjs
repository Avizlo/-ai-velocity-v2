
/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {},
    experimental: {
        browsersListForSwc: true, // Use our package.json browserslist — drops legacy polyfills
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 31536000, // 1 year — optimized images cached aggressively
        remotePatterns: [],
    },
    async headers() {
        return [
            {
                // Font files — cache for 1 year (immutable, never changes)
                source: '/fonts/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                // All static pages & assets — browser caches 24h, CDN caches 24h, stale OK for 24h
                source: '/((?!api).*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;