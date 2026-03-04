"use client";

export default function Strategy() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Agentic Strategy",
        "provider": {
            "@type": "Organization",
            "name": "Ai Velocity Foundry"
        }
    };

    return (
        <main className="pt-48 pb-24 px-6 md:px-12 w-full max-w-screen-2xl mx-auto min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <h1 className="text-6xl md:text-8xl font-serif italic text-charcoal text-center mb-16">
                Agentic Strategy
            </h1>

            <div className="max-w-4xl mx-auto space-y-12 text-charcoal/80">
                <section>
                    <h2 className="text-2xl font-sans font-medium mb-6 text-charcoal">Total Market Subjugation</h2>
                    <p className="font-mono text-sm/relaxed">
                        Agentic Strategy abandons linear planning. Operating entirely via autonomous intelligence loops, our strategic foundry runs millions of competitive simulations per second to identify unavoidable checkmate scenarios against legacy incumbents.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-sans font-medium mb-6 text-charcoal">Calculated Inevitability</h3>
                    <p className="font-mono text-sm/relaxed">
                        Risk is a byproduct of human emotion. Through raw data ingestion and <span className="text-dew-mint">predictive mathematical modeling</span>, our systems map out guaranteed pathways to category dominance, executed with zero latency.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-sans font-medium mb-6 text-charcoal">The Sovereign Transition</h3>
                    <p className="font-mono text-sm/relaxed">
                        We don't consult; we restructure reality. Managing the transition from human-burdened legacy operations to a fully sovereign, vaporized management class requires uncompromising, frictionless intelligence engineering.
                    </p>
                </section>
            </div>
        </main>
    );
};
