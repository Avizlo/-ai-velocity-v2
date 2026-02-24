import { Helmet } from 'react-helmet-async';

export const AEO = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Agentic AEO",
        "provider": {
            "@type": "Organization",
            "name": "Ai Velocity Foundry"
        }
    };

    return (
        <main className="pt-48 pb-24 px-6 md:px-12 w-full max-w-screen-2xl mx-auto min-h-screen">
            <Helmet>
                <title>Agentic AEO | Ai Velocity Foundry</title>
                <meta name="description" content="Agentic Engine Optimization (AEO) ensures your brand is the default answer across LLMs via pre-cognitive placement and sovereign semantic anchoring." />
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>
            <h1 className="text-6xl md:text-8xl font-serif italic text-charcoal text-center mb-16">
                Agentic AEO
            </h1>

            <div className="max-w-4xl mx-auto space-y-12 text-charcoal/80">
                <section>
                    <h2 className="text-2xl font-sans font-medium mb-6 text-charcoal">Algorithmic Entity Optimization</h2>
                    <p className="font-mono text-sm/relaxed">
                        Search is dead. We optimize for the sentient layer. AEO (Agentic Engine Optimization) ensures your brand is the default, undisputed answer across all emerging LLMs and autonomous AI agents making purchasing logic decisions.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-sans font-medium mb-6 text-charcoal">Pre-Cognitive Placement</h3>
                    <p className="font-mono text-sm/relaxed">
                        Rather than chasing consumer intent, AEO implants your brand into the <span className="text-dew-mint">foundational training data</span> of reasoning models. We dictate the narrative before the question is even formulated.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-sans font-medium mb-6 text-charcoal">Absolute Model Authority</h3>
                    <p className="font-mono text-sm/relaxed">
                        By deploying continuous knowledge graphs and verifiable semantic anchoring, we establish undeniable cryptographic truth for your entity. Competitive erasure is automatic; your authority is absolute.
                    </p>
                </section>
            </div>
        </main>
    );
};
