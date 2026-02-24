import { Helmet } from 'react-helmet-async';

export const Payments = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Agentic Payments",
        "provider": {
            "@type": "Organization",
            "name": "Ai Velocity Foundry"
        }
    };

    return (
        <main className="pt-48 pb-24 px-6 md:px-12 w-full max-w-screen-2xl mx-auto min-h-screen">
            <Helmet>
                <title>Agentic Payments | Ai Velocity Foundry</title>
                <meta name="description" content="Agentic Payments facilitate invisible, zero-latency transactions instantly verified by sovereign visual intelligence and predictive security fabrics." />
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>
            <h1 className="text-6xl md:text-8xl font-serif italic text-charcoal text-center mb-16">
                Agentic Payments
            </h1>

            <div className="max-w-4xl mx-auto space-y-12 text-charcoal/80">
                <section>
                    <h2 className="text-2xl font-sans font-medium mb-6 text-charcoal">Frictionless Value Transfer</h2>
                    <p className="font-mono text-sm/relaxed">
                        The legacy notion of a "checkout process" is obsolete. Agentic Payments integrate directly into the visual supply chain, facilitating invisible, zero-latency transactions the moment intent is verified by our autonomous systems.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-sans font-medium mb-6 text-charcoal">Sovereign Financial Routing</h3>
                    <p className="font-mono text-sm/relaxed">
                        Capital must move freely and optimally. Our <span className="text-dew-mint">machine-to-machine</span> financial routing dynamically selects the lowest-friction pathways, instantly bypassing legacy banking blockades while maximizing cross-border yield.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-sans font-medium mb-6 text-charcoal">Absolute Risk Elimination</h3>
                    <p className="font-mono text-sm/relaxed">
                        Fraud models are antiquated. Our predictive security fabric validates intent at the behavioral level milliseconds before a transaction is attempted, creating a mathematically impenetrable financial environment.
                    </p>
                </section>
            </div>
        </main>
    );
};
