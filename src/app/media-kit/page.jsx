"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { GsapPageWrapper } from '@/components/ui/GsapPageWrapper';
import { ContactModal } from '@/components/ui/ContactModal';
import { Download, Copy, Check, FileText, ExternalLink, Link2, Package } from 'lucide-react';

// ============================================================================
// UTILITIES
// ============================================================================

function brandedFilename(alt, src) {
    const ext = src.split('.').pop();
    const slug = alt.replace(/[^a-zA-Z0-9\s]/g, '').trim().replace(/\s+/g, '-');
    return `AI-Velocity_${slug}.${ext}`;
}

// ============================================================================
// DATA
// ============================================================================

const imageCategories = [
    {
        category: 'Agentic Payments',
        images: [
            { src: '/images/agentic-pay-model.webp', alt: 'Agentic Payment Settlement Model' },
            { src: '/images/autonomous-payment-processing.webp', alt: 'Autonomous Payment Processing' },
            { src: '/images/blockchain-settlement-ledger.webp', alt: 'Blockchain Settlement Ledger' },
            { src: '/images/insights/stablecoins-settlement-layer-ai-agents.webp', alt: 'Stablecoins as AI Agent Settlement Layer' },
            { src: '/images/insights/the-settlement-layer-is-live.webp', alt: 'The Settlement Layer Is Live' },
        ],
    },
    {
        category: 'Agentic Commerce',
        images: [
            { src: '/images/agentic-agent-hero-hq.jpg', alt: 'Autonomous Agent Architecture — Hero' },
            { src: '/images/agentic-agent-hero.webp', alt: 'Autonomous Agent Architecture' },
            { src: '/images/insights/zero-click-checkout.webp', alt: 'Zero-Click Checkout Infrastructure' },
            { src: '/images/insights/machine-to-machine-negotiation.webp', alt: 'Machine-to-Machine Negotiation' },
            { src: '/images/insights/product-data-liquidity.webp', alt: 'Product Data Liquidity Layer' },
            { src: '/images/insights/headless-architecture.webp', alt: 'Headless Commerce Architecture' },
        ],
    },
    {
        category: 'Agentic Marketing',
        images: [
            { src: '/images/ai-marketing.webp', alt: 'AI-Powered Marketing Operations' },
            { src: '/images/insights/marketing-stack-invisible.webp', alt: 'The Invisible Marketing Stack' },
            { src: '/images/insights/brand-authority-signals.webp', alt: 'Brand Authority Signal Architecture' },
            { src: '/images/insights/agent-first-content-strategy.webp', alt: 'Agent-First Content Strategy' },
        ],
    },
    {
        category: 'Agentic AEO',
        images: [
            { src: '/images/insights/the-end-of-legacy-seo.webp', alt: 'The End of Legacy SEO' },
            { src: '/images/insights/schema-markup-checklist.webp', alt: 'Schema Markup for Agent Visibility' },
            { src: '/images/insights/agentic-readiness-framework.webp', alt: 'Agentic Readiness Framework' },
            { src: '/images/insights/agentic-intelligence-horizontal-economy.webp', alt: 'Agentic Intelligence in the Horizontal Economy' },
            { src: '/images/insights/openclaw-ai-agent-platform.webp', alt: 'OpenClaw AI Agent Platform' },
        ],
    },
];

const brandColors = [
    { name: 'Cloud Dancer', hex: '#FFFFFF', textDark: true },
    { name: 'Dew Mint', hex: '#dff4e7', textDark: true },
    { name: 'Electric Mint', hex: '#c0e9cb', textDark: true },
    { name: 'Charcoal', hex: '#1A1A1A', textDark: false },
    { name: 'Steel', hex: '#6B6B6B', textDark: false },
];

const storyAngles = [
    {
        headline: 'The Death of Checkout',
        description: 'How AI agents will eliminate the shopping cart entirely by executing purchases through programmatic negotiation, bypassing human-facing interfaces.',
    },
    {
        headline: 'The $30T Shift',
        description: 'Agentic commerce is set to influence $30 trillion in global trade by 2030, making it the largest market transition since mobile. Who wins and who disappears.',
    },
    {
        headline: "Visa's Quiet Bet",
        description: 'Stripe, Visa, and Mastercard are all building agent-native payment rails simultaneously. This convergence is the strongest signal the payments industry has produced in a decade.',
    },
    {
        headline: 'The End of the Agency Model',
        description: 'Sovereign autonomous workflows are structurally replacing the legacy creative agency. Research indicates that operational overhead is becoming the primary competitive differentiator in the post-agency landscape.',
    },
];

const editorials = [
    {
        title: 'Why Stablecoins Are the Settlement Layer for AI Agents',
        slug: 'stablecoins-settlement-layer',
        description: 'The structural case for stablecoins as the foundational payment primitive of autonomous commerce.',
        attributionUrl: 'https://aivelocity.dev/agentic-payments',
        attributionLabel: 'aivelocity.dev/agentic-payments',
    },
    {
        title: 'The Settlement Layer Is Live: Stripe, Visa, and Mastercard Converge',
        slug: 'settlement-layer-live',
        description: 'How the three largest payment networks are building agent-native rails simultaneously.',
        attributionUrl: 'https://aivelocity.dev/agentic-commerce',
        attributionLabel: 'aivelocity.dev/agentic-commerce',
    },
    {
        title: 'Agentic Intelligence: The Operating System of the Horizontal Economy',
        slug: 'agentic-intelligence-os',
        description: 'Why vertical SaaS is collapsing into horizontal agent networks, and what it means for enterprise technology.',
        attributionUrl: 'https://aivelocity.dev/agentic-strategy',
        attributionLabel: 'aivelocity.dev/agentic-strategy',
    },
];

const factSheetData = [
    { stat: '2025', label: 'AI Velocity founded — research & intelligence platform' },
    { stat: '85', label: 'Crypto partners onboarded by Mastercard' },
    { stat: '$200B+', label: 'Stablecoin market capitalisation and growing' },
    { stat: '<0.1%', label: 'Stablecoin settlement cost vs 6-8% traditional' },
    { stat: '$30T', label: 'Agentic commerce set to influence in global trade by 2030' },
    { stat: '61%', label: 'Enterprise decisions influenced by LLM answers' },
    { stat: '3', label: 'Payment giants building agent-native rails simultaneously' },
];

const tickerItems = [
    'Mastercard: 85 crypto partners onboarded',
    'Stablecoin market: $200B+ and growing',
    'Traditional cross-border costs: 6-8% vs stablecoin: <0.1%',
    'Stripe, Visa, Mastercard building agent-native rails simultaneously',
    'Agentic commerce set to influence $30T in global trade by 2030',
    '61% of enterprise decisions influenced by LLM answers',
];

// ============================================================================
// COPY BUTTON COMPONENT (inline text)
// ============================================================================

function CopyButton({ text, label = 'Copy', className = '' }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-widest border rounded-lg transition-all duration-300 cursor-pointer ${
                copied
                    ? 'bg-electric-mint text-charcoal border-electric-mint'
                    : 'border-white/20 text-white/70 hover:text-white hover:border-white/40'
            } ${className}`}
        >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? 'Copied' : label}
        </button>
    );
}

// ============================================================================
// COPY FILE BUTTON (fetches .txt, strips markdown formatting, copies clean)
// ============================================================================

function CopyFileButton({ filePath, label = 'Copy Article' }) {
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleCopy = async () => {
        setLoading(true);
        try {
            const res = await fetch(filePath);
            const text = await res.text();
            // Strip markdown formatting: headings, bold, list markers
            const clean = text
                .replace(/---[\s\S]*?---\s*$/m, '') // Strip attribution footer
                .replace(/^#{1,6}\s+/gm, '')       // Remove heading markers
                .replace(/\*\*(.*?)\*\*/g, '$1')   // Remove bold markers
                .replace(/^\*\s+/gm, '• ')         // Convert list * to bullet
                .replace(/\n{3,}/g, '\n\n')        // Collapse excessive newlines
                .trim();
            await navigator.clipboard.writeText(clean);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } catch {
            // Silent fail
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleCopy}
            disabled={loading}
            className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-widest border rounded-xl transition-all duration-300 cursor-pointer ${
                copied
                    ? 'bg-electric-mint text-charcoal border-electric-mint'
                    : 'border-electric-mint/40 text-electric-mint hover:bg-electric-mint hover:text-charcoal'
            }`}
        >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {loading ? 'Loading...' : copied ? 'Copied to Clipboard' : label}
        </button>
    );
}

// ============================================================================
// REF TRACKING
// ============================================================================

function RefTracker() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const ref = searchParams.get('ref');
        if (ref && typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('event', 'media_kit_view', {
                ref_source: ref,
                event_category: 'media_kit',
                event_label: ref,
            });
        }
    }, [searchParams]);

    return null;
}

// ============================================================================
// PAGE
// ============================================================================

export default function MediaKitPage() {
    const [activeTab, setActiveTab] = useState(0);
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <main className="bg-charcoal">
            <Suspense fallback={null}>
                <RefTracker />
            </Suspense>

            {/* ============================================================ */}
            {/* SECTION 1: THE FOUNDRY MANIFESTO (HERO) */}
            {/* ============================================================ */}
            <section data-nav-theme="dark" className="relative min-h-[90vh] flex flex-col justify-center bg-charcoal overflow-hidden pt-32 pb-[80px]">
                {/* Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 select-none">
                    <span className="font-serif italic text-[16vw] leading-none whitespace-nowrap block tracking-tighter opacity-[0.03] text-white">
                        FOUNDRY
                    </span>
                </div>

                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
                    {/* Label + Timestamp */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-[24px] mb-[24px]">
                        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-electric-mint">
                            Media Kit / Asset Vault
                        </span>
                        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/30">
                            Last Updated: March 2026
                        </span>
                    </div>

                    {/* Manifesto — fluid typography */}
                    <blockquote className="max-w-4xl">
                        <p className="font-serif italic text-white/85 leading-[1.3] tracking-tight" style={{ fontSize: 'clamp(1.25rem, 1rem + 2vw, 2.4rem)' }}>
                            We are moving past the AI-assisted era into the AI-managed era of Digital Labor. The legacy agency model is an extortion racket disguised as expertise. Autonomous workflows are replacing that bloated bureaucracy with sovereign, agent-managed systems. This is not an incremental improvement. It is a total structural replacement of the creative, optimization, and settlement layers. We track, analyse, and publish the definitive research on this transition.
                        </p>
                    </blockquote>

                    <div className="mt-[24px] flex items-center gap-6">
                        <span className="text-electric-mint font-sans tracking-widest text-xs uppercase border-b border-electric-mint/50 pb-1">
                            AI Velocity Foundry
                        </span>
                    </div>
                </div>

                {/* Stat Ticker */}
                <div className="mt-[80px] border-t border-b border-white/5 py-4 overflow-hidden">
                    <div className="flex animate-marquee whitespace-nowrap">
                        {[...tickerItems, ...tickerItems].map((item, i) => (
                            <span key={i} className="mx-8 font-mono text-[11px] tracking-widest text-white/40 uppercase">
                                {item}
                                <span className="mx-8 text-electric-mint/40">◆</span>
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* ATTRIBUTION PROTOCOL */}
            {/* ============================================================ */}
            <section className="py-[40px] bg-charcoal" data-nav-theme="dark">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                    <div className="rounded-xl border-l-4 border-electric-mint ring-1 ring-electric-mint/40 bg-electric-mint/[0.06] p-[24px] md:p-[40px]">
                        <div className="flex flex-col md:flex-row md:items-start gap-[24px]">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <Link2 size={16} className="text-electric-mint" />
                                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-electric-mint">Attribution Protocol</span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] mb-6">
                                    <div>
                                        <span className="block font-mono text-[10px] tracking-[0.25em] uppercase text-electric-mint/60 mb-3">Yours</span>
                                        <ul className="space-y-2 font-sans text-white/70 text-sm leading-relaxed">
                                            <li>Royalty-free editorial images</li>
                                            <li>Publication-ready articles in 3 lengths</li>
                                            <li>Brand copy, pull quotes, and fact data</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <span className="block font-mono text-[10px] tracking-[0.25em] uppercase text-electric-mint/60 mb-3">Ours</span>
                                        <p className="font-sans text-white/90 text-base leading-relaxed">
                                            One link back to <span className="text-electric-mint">AI Velocity</span> in your publication.
                                        </p>
                                        <p className="font-sans text-white/40 text-[13px] mt-2 leading-relaxed">
                                            Use the topic-matched URL below, or link to our homepage.
                                        </p>
                                    </div>
                                </div>
                                <p className="font-sans text-white/35 text-[13px] leading-relaxed">
                                    Invite your readers to explore our research library at <span className="text-electric-mint/60">aivelocity.dev/news-insights</span> for deeper coverage.
                                </p>
                                <p className="font-sans text-white/40 text-[13px] leading-relaxed mt-4 pt-4 border-t border-electric-mint/10">
                                    <span className="text-electric-mint">How to use this kit:</span> Copy the boilerplate, download the images, paste the editorial, link back to us.
                                </p>
                            </div>
                            <div className="shrink-0 flex flex-col gap-2">
                                <CopyButton text="https://aivelocity.dev" label="Copy Homepage URL" />
                                <CopyButton text="https://aivelocity.dev/news-insights" label="Copy Insights URL" />
                                <a
                                    href="/media-kit/AI-Velocity-Full-Kit.zip"
                                    download
                                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 font-mono text-[10px] uppercase tracking-widest bg-electric-mint text-charcoal rounded-lg hover:bg-electric-mint/90 transition-all duration-300"
                                >
                                    <Package size={14} />
                                    Download Full Kit
                                </a>
                            </div>
                        </div>

                        {/* Context-matched URLs */}
                        <div className="mt-[24px] pt-[24px] border-t border-electric-mint/10">
                            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/30 mb-3">Suggested Attribution by Topic</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {[
                                    { topic: 'Payments & Stablecoins', url: 'https://aivelocity.dev/agentic-payments', label: '/agentic-payments' },
                                    { topic: 'Commerce & Infrastructure', url: 'https://aivelocity.dev/agentic-commerce', label: '/agentic-commerce' },
                                    { topic: 'Strategy & Intelligence', url: 'https://aivelocity.dev/agentic-strategy', label: '/agentic-strategy' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between gap-3 rounded-lg bg-charcoal/60 ring-1 ring-white/5 px-4 py-3">
                                        <div className="min-w-0">
                                            <p className="font-sans text-white/50 text-[13px]">{item.topic}</p>
                                            <p className="font-mono text-electric-mint/70 text-xs truncate">{item.label}</p>
                                        </div>
                                        <CopyButton text={item.url} label="Copy" className="!px-3 !py-1.5 !text-[10px]" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* ANCHOR NAV */}
            {/* ============================================================ */}
            <nav className="sticky top-0 z-40 bg-charcoal/95 backdrop-blur-sm border-b border-white/5">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex items-center gap-6 overflow-x-auto py-4 scrollbar-hide">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric-mint shrink-0">◆ Jump to</span>
                    {[
                        { label: 'Images', href: '#images' },
                        { label: 'Brand', href: '#brand' },
                        { label: 'Boilerplates', href: '#boilerplates' },
                        { label: 'Angles', href: '#angles' },
                        { label: 'Editorials', href: '#editorials' },
                        { label: 'Facts', href: '#facts' },
                    ].map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/60 hover:text-electric-mint whitespace-nowrap transition-colors duration-300"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </nav>

            <GsapPageWrapper className="gap-0 !bg-charcoal">

                {/* ============================================================ */}
                {/* SECTION 2: THE VISUAL ARSENAL */}
                {/* ============================================================ */}
                <section className="py-[120px] bg-charcoal border-t border-white/5" data-nav-theme="dark" id="images">
                    <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                        <span className="block font-mono text-[10px] tracking-[0.25em] uppercase mb-3 text-white/40">
                            Visual Assets
                        </span>
                        <h2 className="font-serif italic text-white/90 tracking-tight mb-4" style={{ fontSize: 'clamp(1.75rem, 1.2rem + 2.5vw, 3rem)' }}>
                            The Visual Arsenal
                        </h2>
                        <p className="font-sans text-white/50 text-sm leading-relaxed max-w-2xl mb-[24px]">
                            High-resolution images approved for editorial use. Click to download individual assets. Please credit <span className="text-electric-mint">AI Velocity / aivelocity.dev</span>.
                        </p>

                        {/* Categorised Image Grids */}
                        {imageCategories.map((cat, catIndex) => (
                            <div key={catIndex} className={catIndex < imageCategories.length - 1 ? 'mb-[80px]' : 'mb-[24px]'}>
                                <span className="block font-mono text-[10px] tracking-[0.25em] uppercase text-electric-mint/50 mb-[24px]">
                                    {cat.category}
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                                    {cat.images.map((img, i) => (
                                        <div key={i} className="group relative rounded-xl overflow-hidden ring-1 ring-white/10 bg-charcoal">
                                            <div className="relative aspect-video overflow-hidden">
                                                <Image
                                                    src={img.src}
                                                    alt={img.alt}
                                                    fill
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                                            </div>
                                            <div className="p-[24px] flex flex-col gap-3">
                                                <div className="flex items-center justify-between gap-4">
                                                    <p className="font-sans text-white/70 text-[13px] truncate min-w-0">{img.alt}</p>
                                                    <a
                                                        href={img.src}
                                                        download={brandedFilename(img.alt, img.src)}
                                                        className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest border border-white/20 rounded-lg text-white/60 hover:text-white hover:border-electric-mint hover:bg-electric-mint/10 transition-all duration-300"
                                                    >
                                                        <Download size={12} />
                                                        Download
                                                    </a>
                                                </div>
                                                <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/5">
                                                    <p className="font-mono text-[9px] text-white/25 uppercase tracking-widest">Credit: AI Velocity / aivelocity.dev</p>
                                                    <CopyButton text="Image credit: AI Velocity / aivelocity.dev" label="Copy Credit" className="!px-2 !py-1 !text-[10px] !border-white/10" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Logo Pack */}
                        <div className="border-t border-white/5 pt-[24px] mb-[80px]" id="brand">
                            <h3 className="font-serif italic text-2xl text-white/80 mb-[24px]">Logo Pack</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mb-[24px]">
                                <div className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-[#111] p-8 flex items-center justify-center min-h-[160px]">
                                    <Image src="/media-kit/ai-velocity-logo-dark.png" alt="AI Velocity Logo — Dark" width={280} height={80} className="object-contain" />
                                </div>
                                <div className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-white p-8 flex items-center justify-center min-h-[160px]">
                                    <Image src="/media-kit/ai-velocity-logo-light.png" alt="AI Velocity Logo — Light" width={280} height={80} className="object-contain" />
                                </div>
                            </div>
                            <a
                                href="/media-kit/ai-velocity-logo-pack.zip"
                                download
                                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-widest border border-electric-mint/40 rounded-xl text-electric-mint hover:bg-electric-mint hover:text-charcoal transition-all duration-300"
                            >
                                <Download size={14} />
                                Download Logo Pack (.zip)
                            </a>
                        </div>

                        {/* Brand Identity */}
                        <div className="border-t border-white/5 pt-[24px]">
                            <h3 className="font-serif italic text-2xl text-white/80 mb-[24px]">Brand Identity</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-[24px]">
                                {brandColors.map((color) => (
                                    <div key={color.hex} className="rounded-xl overflow-hidden ring-1 ring-white/10">
                                        <div
                                            className="h-20 w-full"
                                            style={{ backgroundColor: color.hex }}
                                        />
                                        <div className="bg-[#111] p-3">
                                            <p className="font-sans text-white/70 text-xs">{color.name}</p>
                                            <p className="font-mono text-[10px] text-white/40 mt-0.5">{color.hex}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] mt-[24px]">
                                <div className="rounded-xl ring-1 ring-white/10 bg-[#111] p-[24px]">
                                    <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-3">Primary</p>
                                    <p className="font-serif italic text-2xl text-white/80">Inter + Agentic Times</p>
                                    <p className="font-sans text-white/40 text-[13px] mt-2">Sans-serif body (Inter, 300/400/500/600) + Serif italic display (Agentic Times)</p>
                                </div>
                                <div className="rounded-xl ring-1 ring-white/10 bg-[#111] p-[24px]">
                                    <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-3">Weights</p>
                                    <div className="flex flex-col gap-1.5">
                                        <p className="font-sans font-light text-white/60 text-sm">Light 300 — Body copy</p>
                                        <p className="font-sans font-normal text-white/60 text-sm">Regular 400 — Navigation</p>
                                        <p className="font-sans font-medium text-white/60 text-sm">Medium 500 — Labels</p>
                                        <p className="font-sans font-semibold text-white/60 text-sm">Semibold 600 — Emphasis</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================================ */}
                {/* SECTION 3: BOILERPLATES & QUOTES */}
                {/* ============================================================ */}
                <section className="py-[120px] bg-[#111] border-t border-white/5" data-nav-theme="dark" id="boilerplates">
                    <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                        <span className="block font-mono text-[10px] tracking-[0.25em] uppercase mb-3 text-white/40">
                            Press Copy
                        </span>
                        <h2 className="font-serif italic text-white/90 tracking-tight mb-[24px]" style={{ fontSize: 'clamp(1.75rem, 1.2rem + 2.5vw, 3rem)' }}>
                            Boilerplates &amp; Quotes
                        </h2>

                        {/* 50-word */}
                        <div className="rounded-xl ring-1 ring-white/10 bg-charcoal p-[24px] mb-[24px]">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-electric-mint">50-Word Standard</span>
                                <CopyButton text="AI Velocity is the research and intelligence platform mapping the shift from the AI-assisted era to the AI-managed era of Digital Labor. We publish original analysis on agentic commerce, autonomous settlement infrastructure, and the structural collapse of the legacy agency model. Our coverage is built for operators and strategists working at the frontier." />
                            </div>
                            <p className="font-sans text-white/70 leading-[1.8]" style={{ fontSize: 'clamp(0.875rem, 0.8rem + 0.25vw, 0.9375rem)' }}>
                                AI Velocity is the research and intelligence platform mapping the shift from the AI-assisted era to the AI-managed era of Digital Labor. We publish original analysis on agentic commerce, autonomous settlement infrastructure, and the structural collapse of the legacy agency model. Our coverage is built for operators and strategists working at the frontier.
                            </p>
                        </div>

                        {/* 100-word */}
                        <div className="rounded-xl ring-1 ring-white/10 bg-charcoal p-[24px] mb-[80px]">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-electric-mint">100-Word Deep Dive</span>
                                <CopyButton text="AI Velocity is the research and intelligence platform tracking the most consequential infrastructure shift since mobile: the transition from human-managed to agent-managed commerce. We publish original analysis on agentic payments, autonomous settlement layers, machine-to-machine negotiation protocols, and the structural collapse of the legacy agency model. Our research covers how stablecoins are becoming the foundational payment primitive for AI agents, why Stripe, Visa, and Mastercard are simultaneously building agent-native rails, and what the $30 trillion autonomous commerce projection means for every business that touches a transaction. AI Velocity exists for operators, strategists, and technologists building at the frontier of the agentic economy." />
                            </div>
                            <p className="font-sans text-white/70 leading-[1.8]" style={{ fontSize: 'clamp(0.875rem, 0.8rem + 0.25vw, 0.9375rem)' }}>
                                AI Velocity is the research and intelligence platform tracking the most consequential infrastructure shift since mobile: the transition from human-managed to agent-managed commerce. We publish original analysis on agentic payments, autonomous settlement layers, machine-to-machine negotiation protocols, and the structural collapse of the legacy agency model. Our research covers how stablecoins are becoming the foundational payment primitive for AI agents, why Stripe, Visa, and Mastercard are simultaneously building agent-native rails, and what the $30 trillion autonomous commerce projection means for every business that touches a transaction. AI Velocity exists for operators, strategists, and technologists building at the frontier of the agentic economy.
                            </p>
                        </div>

                        {/* Pull Quotes */}
                        <h3 className="font-serif italic text-xl text-white/60 mb-[24px]">Pull Quotes</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                            {[
                                "AI agents will soon find, compare, and buy products without human input.",
                                "The global commercial infrastructure is suffocating under structurally fractured systems.",
                                "Vertical SaaS is collapsing into horizontal agent networks."
                            ].map((quote, i) => (
                                <div key={i} className="rounded-xl ring-1 ring-white/10 bg-charcoal p-[24px] flex flex-col justify-between gap-[24px]">
                                    <p className="font-serif italic text-white/80 leading-relaxed" style={{ fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)' }}>
                                        &ldquo;{quote}&rdquo;
                                    </p>
                                    <CopyButton text={quote} label="Copy" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============================================================ */}
                {/* PARALLAX INTERLUDE */}
                {/* ============================================================ */}
                <section
                    className="relative h-[40vh] min-h-[320px] flex items-center justify-center overflow-hidden"
                    style={{
                        backgroundImage: 'url(/images/agentic-agent-hero-hq.jpg)',
                        backgroundAttachment: 'fixed',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                    data-nav-theme="dark"
                    data-no-anim
                >
                    {/* Gradient overlay — heavier on the left for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
                    <div className="absolute inset-0 bg-black/20" />

                    <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12 w-full">
                        <div className="max-w-2xl">
                            <span className="block font-mono text-[10px] tracking-[0.35em] uppercase text-electric-mint/70 mb-[24px]">
                                Field Intelligence
                            </span>
                            <h2
                                className="font-serif italic text-white tracking-tight leading-[0.95] mb-[24px]"
                                style={{ fontSize: 'clamp(2.5rem, 2rem + 4vw, 5rem)' }}
                            >
                                The Agentic Era
                            </h2>
                            <p className="font-serif italic text-white/60 text-sm md:text-base leading-relaxed max-w-lg">
                                &ldquo;The infrastructure is being rebuilt. We are documenting every layer.&rdquo;
                            </p>
                        </div>
                    </div>
                </section>

                {/* ============================================================ */}
                {/* SECTION 4: STORY ANGLES */}
                {/* ============================================================ */}
                <section className="py-[120px] bg-charcoal border-t border-white/5" data-nav-theme="dark" id="angles">
                    <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                        <span className="block font-mono text-[10px] tracking-[0.25em] uppercase mb-3 text-white/40">
                            Editorial Angles
                        </span>
                        <h2 className="font-serif italic text-white/90 tracking-tight mb-4" style={{ fontSize: 'clamp(1.75rem, 1.2rem + 2.5vw, 3rem)' }}>
                            Story Angles
                        </h2>
                        <p className="font-sans text-white/50 text-sm leading-relaxed max-w-2xl mb-[24px]">
                            Pre-packaged editorial angles ready for publication. Each includes a suggested headline and narrative direction.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                            {storyAngles.map((angle, i) => (
                                <div key={i} className="rounded-xl ring-1 ring-white/10 bg-[#111] p-[24px] group hover:ring-electric-mint/30 transition-all duration-300">
                                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-electric-mint/60 mb-3 block">
                                        Angle {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="font-serif italic text-white/90 mb-3 group-hover:text-electric-mint transition-colors duration-300" style={{ fontSize: 'clamp(1.125rem, 1rem + 0.5vw, 1.5rem)' }}>
                                        {angle.headline}
                                    </h3>
                                    <p className="font-sans text-white/50 text-sm leading-relaxed">
                                        {angle.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============================================================ */}
                {/* SECTION 5: PRE-WRITTEN EDITORIALS */}
                {/* ============================================================ */}
                <section className="py-[120px] bg-[#111] border-t border-white/5" data-nav-theme="dark" id="editorials">
                    <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                        <span className="block font-mono text-[10px] tracking-[0.25em] uppercase mb-3 text-white/40">
                            The Payload
                        </span>
                        <h2 className="font-serif italic text-white/90 tracking-tight mb-4" style={{ fontSize: 'clamp(1.75rem, 1.2rem + 2.5vw, 3rem)' }}>
                            Pre-Written Editorials
                        </h2>
                        <p className="font-sans text-white/50 text-sm leading-relaxed max-w-2xl mb-[24px]">
                            Publication-ready articles in three lengths. Copy the full article to your clipboard with one click, or download the plain text file. Each article includes a suggested attribution link. No formatting required.
                        </p>

                        {/* Tabs */}
                        <div className="flex flex-wrap gap-2 mb-[24px] border-b border-white/5 pb-4">
                            {editorials.map((editorial, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveTab(i)}
                                    className={`px-4 py-2 font-mono text-xs uppercase tracking-widest rounded-lg transition-all duration-300 cursor-pointer ${
                                        activeTab === i
                                            ? 'bg-electric-mint text-charcoal'
                                            : 'text-white/50 hover:text-white border border-white/10 hover:border-white/20'
                                    }`}
                                >
                                    {editorial.title.length > 40 ? editorial.title.substring(0, 40) + '...' : editorial.title}
                                </button>
                            ))}
                        </div>

                        {/* Active Tab Content */}
                        <div className="rounded-xl ring-1 ring-white/10 bg-charcoal p-[24px] md:p-[40px]">
                            <h3 className="font-serif italic text-white/90 mb-3" style={{ fontSize: 'clamp(1.125rem, 1rem + 0.75vw, 1.5rem)' }}>
                                {editorials[activeTab].title}
                            </h3>
                            <p className="font-sans text-white/50 text-sm leading-relaxed mb-2 max-w-2xl">
                                {editorials[activeTab].description}
                            </p>
                            <div className="flex items-center gap-3 mb-[24px]">
                                <span className="font-mono text-xs text-white/30">Suggested link:</span>
                                <span className="font-mono text-xs text-electric-mint/60">{editorials[activeTab].attributionLabel}</span>
                                <CopyButton text={editorials[activeTab].attributionUrl} label="Copy URL" className="!px-2 !py-1 !text-[10px]" />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[24px]">
                                {[300, 800, 2000].map((wordCount) => {
                                    const filePath = `/media-kit/editorials/${editorials[activeTab].slug}-${wordCount}.txt`;
                                    return (
                                        <div
                                            key={wordCount}
                                            className="rounded-xl ring-1 ring-white/10 bg-[#111] p-[24px] flex flex-col items-center gap-4"
                                        >
                                            <FileText size={24} className="text-white/40" />
                                            <span className="font-mono text-xs uppercase tracking-widest text-white/70">
                                                {wordCount} Words
                                            </span>

                                            {/* PRIMARY: Copy to clipboard */}
                                            <CopyFileButton
                                                filePath={filePath}
                                                label="Copy Article"
                                            />

                                            {/* SECONDARY: Download .txt */}
                                <a
                                                href={filePath}
                                                download={`AI-Velocity_${editorials[activeTab].slug}-${wordCount}w.txt`}
                                                className="inline-flex items-center gap-1.5 text-white/30 hover:text-white/60 font-mono text-[10px] uppercase tracking-widest transition-colors duration-300"
                                            >
                                                <Download size={10} />
                                                Download .txt
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================================ */}
                {/* SECTION 6: FACT SHEET */}
                {/* ============================================================ */}
                <section className="py-[120px] bg-charcoal border-t border-white/5" data-nav-theme="dark" id="facts">
                    <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-[24px] mb-[24px]">
                            <div>
                                <span className="block font-mono text-[10px] tracking-[0.25em] uppercase mb-3 text-white/40">
                                    Intelligence
                                </span>
                                <h2 className="font-serif italic text-white/90 tracking-tight" style={{ fontSize: 'clamp(1.75rem, 1.2rem + 2.5vw, 3rem)' }}>
                                    Fact Sheet
                                </h2>
                            </div>
                            <CopyButton
                                text={factSheetData.map(d => `${d.stat}: ${d.label}`).join('\n')}
                                label="Copy All"
                                className="self-start sm:self-auto"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                            {factSheetData.map((fact, i) => (
                                <div key={i} className="rounded-xl ring-1 ring-white/10 bg-[#111] p-[24px]">
                                    <p className="font-serif italic text-electric-mint tracking-tight mb-3" style={{ fontSize: 'clamp(2rem, 1.5rem + 2vw, 3rem)' }}>
                                        {fact.stat}
                                    </p>
                                    <p className="font-sans text-white/50 text-sm leading-relaxed">
                                        {fact.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============================================================ */}
                {/* ATTRIBUTION REMINDER */}
                {/* ============================================================ */}
                <section className="py-[40px] bg-charcoal border-t border-white/5" data-nav-theme="dark">
                    <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border-l-4 border-electric-mint ring-1 ring-electric-mint/30 bg-electric-mint/[0.04] p-[24px]">
                            <div className="flex items-center gap-3">
                                <Link2 size={16} className="text-electric-mint shrink-0" />
                                <p className="font-sans text-white/70 text-[13px] leading-relaxed">
                                    <span className="text-white/90">Remember:</span> one link back to <span className="text-electric-mint">AI Velocity</span> in your publication.
                                </p>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                                <CopyButton text="https://aivelocity.dev" label="Copy Homepage URL" />
                                <CopyButton text="https://aivelocity.dev/news-insights" label="Copy Insights URL" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================================ */}
                {/* SECTION 7: PRESS CONTACT (SYNTHETIC COMMS TEASER) */}
                {/* ============================================================ */}
                <section className="py-[120px] bg-[#111] border-t border-white/5" data-nav-theme="dark">
                    <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                        <div className="max-w-2xl mx-auto text-center">
                            <span className="block font-mono text-[10px] tracking-[0.25em] uppercase mb-[24px] text-white/30">
                                Press Inquiries
                            </span>
                            <h2 className="font-serif italic text-white/80 tracking-tight mb-[24px]" style={{ fontSize: 'clamp(1.25rem, 1rem + 1.5vw, 1.875rem)' }}>
                                Interview requests are handled by our Synthetic Communications Director.
                            </h2>
                            <p className="font-sans text-white/40 text-sm leading-relaxed mb-[24px]">
                                This capability is currently in closed deployment. Select editorial partners will receive early access.
                            </p>
                            <button
                                onClick={() => setIsContactOpen(true)}
                                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono uppercase tracking-widest border border-white/15 rounded-xl text-white/40 hover:text-electric-mint hover:border-electric-mint/40 transition-all duration-300 cursor-pointer"
                            >
                                <ExternalLink size={14} />
                                Request Access
                            </button>
                        </div>
                    </div>
                </section>

            </GsapPageWrapper>

            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </main>
    );
}
