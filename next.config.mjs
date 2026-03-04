
/** @type {import('next').NextConfig} */
const nextConfig = {
    // Force Webpack with slower polling to prevent scratchpad hangs
    webpack: (config, { dev, isServer }) => {
        if (dev && !isServer) {
            config.watchOptions = {
                poll: 1000,
                aggregateTimeout: 300,
            };
        }
        return config;
    },
};

export default nextConfig;