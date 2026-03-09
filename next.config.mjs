
/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {},
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [],
    },
};

export default nextConfig;