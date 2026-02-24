import { Helmet } from 'react-helmet-async';

export const AgenticCommerce = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Agentic Commerce",
        "provider": {
            "@type": "Organization",
            "name": "Ai Velocity Foundry"
        }
    };

    return (
        <main className="pt-48 pb-24 px-6 md:px-12 w-full max-w-screen-2xl mx-auto min-h-screen">
            <Helmet>
                <title>Agentic Commerce | Ai Velocity Foundry</title>
                <meta name="description" content="Agentic Commerce fundamentally shifts traditional manual storefront operations into autonomous predictive intelligence ecosystems via Sovereign AI visual streams." />
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>
            <h1 className="text-6xl md:text-8xl font-serif italic text-charcoal text-center mb-16 px-4">
                Agentic Commerce
            </h1>

            <div className="max-w-4xl mx-auto space-y-12 text-charcoal/80">
                <section>
                    <h2 className="text-2xl font-sans font-medium mb-6 text-charcoal">The Autonomous Paradigm</h2>
                    <p className="font-mono text-sm/relaxed">
                        Agentic Commerce represents the fundamental shift from static, reactive storefronts to dynamic, predictive intelligence ecosystems. By leveraging continuous visual data and autonomous action models, we vaporize the friction of traditional multi-channel management.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-sans font-medium mb-6 text-charcoal">Sovereign Supply Chains</h3>
                    <p className="font-mono text-sm/relaxed">
                        The legacy management class is no longer required. Our <span className="text-dew-mint">high-fidelity visual supply chains</span> operate with zero human latency. They analyze, procure, and fulfill with absolute algorithmic certainty, ensuring peak operational bandwidth at all times.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-sans font-medium mb-6 text-charcoal">Infinite Margin Expansion</h3>
                    <p className="font-mono text-sm/relaxed">
                        When systems operate autonomously, margin expansion is infinite. Free from the constraints of meat-space bureaucracy, the foundry optimizes pricing, inventory, and lifecycle marketing in real-time, locking in absolute dominance across all unified channels.
                    </p>
                </section>
            </div>
        </main>
    );
};
