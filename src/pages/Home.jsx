import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/sections/Hero';

export const Home = () => {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "name": "Ai Velocity Foundry",
                "url": "https://aivelocity.com/"
            },
            {
                "@type": "Organization",
                "name": "Ai Velocity Foundry",
                "url": "https://aivelocity.com/",
                "description": "Master the shift to Agentic Commerce and Marketing with Ai Velocity. We provide the high-fidelity visual intelligence and autonomous growth systems required to vaporize legacy management."
            }
        ]
    };

    return (
        <main>
            <Helmet>
                <title>Ai Velocity Foundry | Leading the Era of Agentic Commerce</title>
                <meta name="description" content="Master the shift to Agentic Commerce and Marketing with Ai Velocity. We provide the high-fidelity visual intelligence and autonomous growth systems required to vaporize legacy management." />
                <meta name="keywords" content="Agentic Commerce, Agentic Marketing, Sovereign Visual Intelligence, Autonomous Growth" />
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>
            <Hero />

            {/* Spacer for scroll testing */}
            <section className="h-screen flex items-center justify-center border-t border-white/5">
                <p className="font-mono text-charcoal/30 text-sm">Scroll Area 1: Slide Up Navbar</p>
            </section>

            <section className="h-screen flex items-center justify-center bg-cloud-dancer-light/20">
                <p className="font-mono text-charcoal/30 text-sm">Scroll Area 2: Slide Down Navbar</p>
            </section>

            <section className="h-screen flex items-center justify-center">
                <p className="font-mono text-charcoal/30 text-sm">Scroll Area 3: Glassmorphism Test</p>
            </section>
        </main>
    );
};
