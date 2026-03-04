export const metadata = {
    title: 'Agentic AEO | Ai Velocity Foundry',
    description: 'Agentic Engine Optimization (AEO) ensures your brand is the default answer across LLMs via pre-cognitive placement and sovereign semantic anchoring.',
};

const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Agentic AEO",
    "provider": {
        "@type": "Organization",
        "name": "Ai Velocity Foundry"
    }
};

export default function Layout({ children }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            {children}
        </>
    );
}
