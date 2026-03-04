import { Hero } from '@/components/sections/Hero';
import { InfluencerCarousel } from '@/components/sections/InfluencerCarousel';

// Moved metadata from Helmet to Next.js metadata export
export const metadata = {
    title: 'Ai Velocity Foundry | Leading the Era of Agentic Commerce',
    description: 'Master the shift to Agentic Commerce and Marketing with Ai Velocity. We provide the high-fidelity visual intelligence and autonomous growth systems required to vaporize legacy management.',
    keywords: 'Agentic Commerce, Agentic Marketing, Sovereign Visual Intelligence, Autonomous Growth',
};

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

export default function Home() {
    return (
        <main>
            {/* Inject JSON-LD Schema directly into the head */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Hero />
            <InfluencerCarousel />
        </main>
    );
}
