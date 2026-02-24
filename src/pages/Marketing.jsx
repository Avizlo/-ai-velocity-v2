import { Helmet } from 'react-helmet-async';

export const Marketing = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Agentic Marketing",
        "provider": {
            "@type": "Organization",
            "name": "Ai Velocity Foundry"
        }
    };

    return (
        <main className="pt-48 pb-24 px-6 md:px-12 w-full max-w-screen-2xl mx-auto min-h-screen">
            <Helmet>
                <title>Agentic Marketing | Ai Velocity Foundry</title>
                <meta name="description" content="Agentic Marketing bypasses traditional testing paradigms by deploying synthetic modeling and real-time multivariant generation for perfect audience resonance." />
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>
            <h1 className="text-6xl md:text-8xl font-serif italic text-charcoal text-center mb-16">
                Agentic Marketing
            </h1>

            <div className="max-w-4xl mx-auto space-y-12 text-charcoal/80">
                <section>
                    <h2 className="text-2xl font-sans font-medium mb-6 text-charcoal">Algorithmic Resonance</h2>
                    <p className="font-mono text-sm/relaxed">
                        Agentic Marketing completely bypasses traditional A/B testing paradigms. By deploying synthetic user modeling and real-time multivariant generation, our systems achieve perfect audience resonance without the delays of human guesswork.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-sans font-medium mb-6 text-charcoal">Self-Optimizing Campaigns</h3>
                    <p className="font-mono text-sm/relaxed">
                        Campaigns are no longer built; they are <span className="text-dew-mint">grown</span>. The intelligence engine dynamically re-allocates capital based on sub-second conversion velocity, ensuring maximum yield across every global digital surface simultaneously.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-sans font-medium mb-6 text-charcoal">Total Narrative Control</h3>
                    <p className="font-mono text-sm/relaxed">
                        The visual intelligence foundry creates hyper-personalized creative assets at infinite scale. Every consumer interaction is surgically tailored to their exact psychological profile, locking them into the sovereign ecosystem.
                    </p>
                </section>
            </div>
        </main>
    );
};
