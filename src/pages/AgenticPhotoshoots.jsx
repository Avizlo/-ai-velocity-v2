import { Helmet } from 'react-helmet-async';

export const AgenticPhotoshoots = () => {
    return (
        <main className="min-h-screen bg-cloud-dancer text-charcoal pt-32 pb-24 relative overflow-hidden">
            <Helmet>
                <title>The Synthetic Field Team | Ai Velocity Foundry</title>
                <meta name="description" content="Pioneering image-first discovery models and Agentic AI studio production." />
            </Helmet>

            {/* The Biological Pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-dew-mint blur-[120px] rounded-full animate-breathe-mint pointer-events-none -z-10"></div>

            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-6xl md:text-8xl font-serif italic text-charcoal text-center mb-16">
                        Agentic Photoshoots
                    </h1>
                    <p className="font-mono text-sm leading-relaxed max-w-2xl opacity-80">
                        The intersection of sovereign visual intelligence and high-fidelity studio production.
                        Zero-friction deployment across global markets.
                    </p>
                </div>

                {/* Image Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <img src="/images/m2.jpg" alt="Synthetic Agent" className="w-full aspect-[4/5] object-cover rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer" />
                    <img src="/images/avz-3.jpg" alt="Synthetic Agent" className="w-full aspect-[4/5] object-cover rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer" />
                    <img src="/images/pro.jpg" alt="Synthetic Agent" className="w-full aspect-[4/5] object-cover rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer" />
                </div>
            </div>
        </main>
    );
};
