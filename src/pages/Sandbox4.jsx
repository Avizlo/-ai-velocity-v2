import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/sections/Navbar';
import { FAQ } from '../components/sections/FAQ';
import { CTABanner } from '../components/sections/CTABanner';
import { StatementText } from '../components/sections/StatementText';
import { StatementAction } from '../components/sections/StatementAction';
import { BentoGrid } from '../components/sections/BentoGrid';
import { SplitFeature } from '../components/sections/SplitFeature';
import { ImageStrip } from '../components/sections/ImageStrip';
import { NewsInsight } from '../components/sections/NewsInsight';
import { FeatureShowcase } from '../components/sections/FeatureShowcase';
import { FeatureShowcase2 } from '../components/sections/FeatureShowcase2';
import { BentoGrid2 } from '../components/sections/BentoGrid2';
import { FoundryManifesto } from '../components/sections/FoundryManifesto';

const agenticStatement = `The world of commerce is shifting from "Human-to-Human" to "Agent-to-Agent," and the old playbooks are being vaporized. Agentic commerce is a transformative form of online shopping where autonomous AI agents act on behalf of customers to find, compare, and execute purchases independently.`;

export default function Sandbox4() {
    return (
        <main className="min-h-screen bg-cloud-dancer font-sans text-charcoal selection:bg-dew-mint selection:text-charcoal relative">
            <Helmet>
                <title>Dev Sandbox 4 | AI Velocity</title>
                <meta name="robots" content="noindex,nofollow" />
            </Helmet>

            <Navbar />

            <div className="pt-32" data-nav-theme="light">
                <FAQ />
                <CTABanner />
                <StatementText statement={agenticStatement} />
                <BentoGrid />
                <FeatureShowcase />
                <SplitFeature
                    image="/images/good-univerce-ai.jpg"
                    title="Agentic Commerce (Image Left)"
                    text1="Agentic commerce represents the fundamental shift from consumers manually scrolling through storefronts to autonomous software delegates executing complex procurement tasks with zero human friction. This is a total replacement of the traditional retail front end with specialized machine-to-machine negotiation rails that bypass the Document Object Model entirely. These digital agents do not care about sleek marketing copy or the psychological tricks used by legacy retail giants to manipulate human desire."
                    text2="They parse raw data schemas and real-time inventory levels to identify the most efficient purchase route based on a user's pre-defined budget. Every critical product attribute must be instantly readable and verifiable to ensure the autonomous buyer can execute trade with surgical precision."
                />
                <SplitFeature
                    reverse
                    image="/images/good-univerce-ai.jpg"
                    title="Agentic Commerce"
                    text1="Agentic commerce represents the fundamental shift from consumers manually scrolling through storefronts to autonomous software delegates executing complex procurement tasks with zero human friction. This is a total replacement of the traditional retail front end with specialized machine-to-machine negotiation rails that bypass the Document Object Model entirely. These digital agents do not care about sleek marketing copy or the psychological tricks used by legacy retail giants to manipulate human desire."
                    text2="They parse raw data schemas and real-time inventory levels to identify the most efficient purchase route based on a user's pre-defined budget. Every critical product attribute must be instantly readable and verifiable to ensure the autonomous buyer can execute trade with surgical precision."
                />
                <StatementAction
                    statement={agenticStatement}
                    actionText="Are you ready?"
                />
                <ImageStrip />
                <NewsInsight />
                <FeatureShowcase2 />
                <BentoGrid2 />
                <FoundryManifesto />
            </div>
        </main>
    );
}
