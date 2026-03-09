
/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {},
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 31536000, // 1 year — optimized images cached aggressively
        remotePatterns: [],
    },
    async headers() {
        return [
            {
                // All static pages — cache at CDN for 1 hour, serve stale while revalidating
                source: '/((?!api).*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, s-maxage=3600, stale-while-revalidate=86400',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;