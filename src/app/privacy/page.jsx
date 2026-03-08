import Link from 'next/link';

const sections = [
    {
        number: '01',
        title: 'Data We Collect',
        content: `AI Velocity does not require user accounts, login credentials, or personal information to access this website. The data we collect is limited to:

**Automatically Collected Data** — When you visit our site, our hosting provider (Vercel) may collect standard server log data including your IP address, browser type, operating system, referring URL, pages visited, and timestamps. This data is used solely for security monitoring and performance optimisation.

**Analytics Data** — We may use privacy-respecting analytics tools to understand aggregate traffic patterns. This data is anonymised and cannot be used to identify individual visitors.

**Contact Form Submissions** — If you voluntarily submit information through a contact form or email, we collect only what you provide (name, email, message content). This information is used exclusively to respond to your enquiry.`,
    },
    {
        number: '02',
        title: 'Cookies & Tracking',
        content: `This website uses only essential cookies required for basic site functionality. We do not use advertising cookies, social media tracking pixels, or third-party marketing trackers.

**Essential Cookies** — These are strictly necessary for the website to function and cannot be disabled. They include session management and security tokens.

**Third-Party Services** — Our site is hosted on Vercel, which may set its own essential cookies for performance and security. No third-party advertising or remarketing services are integrated into this website.

You can control cookie behaviour through your browser settings at any time.`,
    },
    {
        number: '03',
        title: 'How We Use Your Data',
        content: `Any data collected is used for the following purposes only:

— To maintain and secure the website infrastructure
— To analyse aggregate traffic patterns and improve site performance
— To respond to direct enquiries submitted through contact channels
— To comply with applicable legal obligations

**We do not sell, rent, share, or trade your personal data with any third party.** We do not use your data for automated decision-making, profiling, or targeted advertising.`,
    },
    {
        number: '04',
        title: 'Data Retention',
        content: `Server logs are retained for a maximum of 30 days before automatic deletion. Contact form submissions are retained only for the duration necessary to address your enquiry, after which they are deleted.

We do not maintain long-term databases of visitor information. Anonymised analytics data may be retained indefinitely as it cannot be linked to any individual.`,
    },
    {
        number: '05',
        title: 'Your Rights',
        content: `Depending on your jurisdiction, you may have the following rights regarding your personal data:

**Under GDPR (EU/UK)** — Right of access, rectification, erasure, restriction of processing, data portability, and the right to object to processing.

**Under CCPA (California)** — Right to know what personal information is collected, the right to request deletion, and the right to opt-out of the sale of personal information. As noted above, we do not sell personal information.

To exercise any of these rights, contact us at the address listed below. We will respond to verified requests within 30 days.`,
    },
    {
        number: '06',
        title: 'Third-Party Services',
        content: `This website relies on the following third-party services, each with their own privacy policies:

— **Vercel** (Hosting & CDN) — [vercel.com/legal/privacy-policy](https://vercel.com/legal/privacy-policy)

We evaluate all third-party services for privacy compliance before integration. No third-party service is granted access to personal data beyond what is technically necessary for the website to function.`,
    },
    {
        number: '07',
        title: 'Changes to This Policy',
        content: `We may update this privacy policy to reflect changes in our practices or for legal and regulatory reasons. Any material changes will be reflected on this page with an updated effective date. We encourage you to review this policy periodically.`,
    },
    {
        number: '08',
        title: 'Contact',
        content: `For privacy-related enquiries, data requests, or questions about this policy, reach out to us on [X / Twitter](https://x.com/aivelocitydev) or via the contact channels on our website.

**AI Velocity**
The Agentic Network · Everywhere. Always on.`,
    },
];

export default function PrivacyPage() {
    return (
        <main className="bg-charcoal text-white min-h-screen">
            {/* Hero */}
            <section className="pt-40 pb-20 md:pt-48 md:pb-28 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 select-none">
                    <span className="font-serif italic text-[14vw] leading-none whitespace-nowrap block tracking-tighter opacity-[0.03] text-white">
                        PROTOCOL
                    </span>
                </div>
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
                    <span className="block font-mono text-[10px] tracking-[0.25em] uppercase mb-4 text-electric-mint">
                        Legal · Last Updated March 2026
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white/95 tracking-tight leading-[1.05]">
                        Privacy Policy
                    </h1>
                    <p className="font-sans text-white/50 text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
                        How AI Velocity collects, uses, and protects your data. We believe in transparency, minimal data collection, and respecting your digital sovereignty.
                    </p>
                </div>
            </section>

            {/* Sections */}
            <section className="pb-24 md:pb-32">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                    <div className="max-w-3xl">
                        {sections.map((section, i) => (
                            <div
                                key={section.number}
                                className={`py-12 ${i < sections.length - 1 ? 'border-b border-white/10' : ''}`}
                            >
                                <div className="flex items-start gap-6">
                                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-electric-mint shrink-0 pt-1.5">
                                        {section.number}
                                    </span>
                                    <div>
                                        <h2 className="font-serif text-2xl md:text-3xl text-white/90 tracking-tight mb-6">
                                            {section.title}
                                        </h2>
                                        <div className="font-sans text-white/50 text-[15px] leading-[1.8] space-y-4 [&_strong]:text-white/80 [&_strong]:font-medium [&_a]:text-electric-mint [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-white">
                                            {section.content.split('\n\n').map((paragraph, j) => (
                                                <p key={j} dangerouslySetInnerHTML={{
                                                    __html: paragraph
                                                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                                        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
                                                        .replace(/\n— /g, '<br/>— ')
                                                        .replace(/^— /g, '— ')
                                                }} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Back Link */}
            <section className="pb-20">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                    <Link
                        href="/"
                        className="inline-block border-b border-electric-mint/50 pb-1 text-electric-mint hover:text-white hover:border-white/50 transition-colors duration-300 font-sans tracking-widest text-xs uppercase"
                    >
                        ← Return to Homepage
                    </Link>
                </div>
            </section>
        </main>
    );
}
