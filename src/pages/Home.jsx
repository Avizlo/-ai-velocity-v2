import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/sections/Hero';
import { InfluencerCarousel } from '../components/sections/InfluencerCarousel';

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
            <InfluencerCarousel />
        </main>
    );
};
