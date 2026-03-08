'use client';

import Link from 'next/link';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ── Shared scroll-trigger animation hook ────────────────────────────────────
const useScrollReveal = (ref) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.fromTo(ref.current.querySelectorAll('.bento-anim'),
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none reverse' }
                }
            );
        }, ref);
        return () => ctx.revert();
    }, []);
};


// ═══════════════════════════════════════════════════════════════════════════════
// 1. COMMERCE — Large image LEFT spanning 2 rows
//    Stat card top-right · CTA card bottom-right
// ═══════════════════════════════════════════════════════════════════════════════
const CommerceGrid = () => {
    const ref = useRef(null);
    useScrollReveal(ref);

    return (
        <section ref={ref} className="relative py-20 bg-cloud-dancer overflow-hidden">
            <div className="absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-[1] select-none">
                <span className="font-serif italic text-[12vw] leading-none whitespace-nowrap block tracking-tighter opacity-[0.04] text-charcoal">
                    COMMERCE
                </span>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-12">
                    <span className="block font-mono text-[10px] tracking-[0.25em] uppercase mb-3 text-electric-mint">
                        Autonomous Procurement
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-charcoal tracking-tight">
                        Agentic Intelligence
                    </h2>
                </div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridTemplateRows: 'auto auto' }}>
                    {/* Large image — LEFT col, spans 2 rows */}
                    <div className="bento-anim group md:row-span-2 rounded-2xl overflow-hidden min-h-[560px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl opacity-0">
                        <img loading="lazy" decoding="async"
                            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                            alt="Modern e-commerce logistics with autonomous systems"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Stat Card — top middle */}
                    <div className="bento-anim rounded-2xl bg-electric-mint p-8 flex flex-col justify-between min-h-[270px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0">
                        <div className="flex items-center gap-3">
                            <div className="relative w-14 h-14">
                                <svg className="w-full h-full -rotate-90" viewBox="0 0 56 56">
                                    <circle cx="28" cy="28" r="24" fill="none" stroke="#1A1A1A22" strokeWidth="3" />
                                    <circle cx="28" cy="28" r="24" fill="none" stroke="#1A1A1A" strokeWidth="3"
                                        strokeDasharray={`${2 * Math.PI * 24 * 0.92} ${2 * Math.PI * 24 * 0.08}`}
                                        strokeLinecap="round" />
                                </svg>
                                <span className="absolute inset-0 flex items-center justify-center text-charcoal font-serif italic text-sm">92%</span>
                            </div>
                        </div>
                        <div className="mt-6 space-y-3">
                            <h3 className="font-sans font-normal text-charcoal/70 text-sm">Agent Transaction Rate</h3>
                            <p className="font-sans text-charcoal/60 text-sm leading-relaxed">Autonomous procurement agents closing transactions without human intervention across 14 verticals.</p>
                            <span className="inline-block font-sans text-charcoal text-xs tracking-widest uppercase border-b border-charcoal/30 pb-1 cursor-pointer hover:text-charcoal/60 transition-colors duration-200">
                                View Data →
                            </span>
                        </div>
                    </div>

                    {/* Image — top right */}
                    <div className="bento-anim group rounded-2xl overflow-hidden min-h-[270px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0">
                        <img loading="lazy" decoding="async"
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80"
                            alt="Automated warehouse shelf-picking robots"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Image — bottom middle */}
                    <div className="bento-anim group rounded-2xl overflow-hidden min-h-[270px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0">
                        <img loading="lazy" decoding="async"
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                            alt="Digital commerce analytics dashboard"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* CTA Card — bottom right */}
                    <div className="bento-anim relative rounded-2xl bg-charcoal p-8 flex flex-col justify-between min-h-[270px] ring-1 ring-white/5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0">
                        <span className="absolute bottom-4 right-4 font-serif italic text-[4rem] leading-none text-white/[0.03] pointer-events-none select-none tracking-tighter">
                            Velocity
                        </span>
                        <div className="space-y-3 relative z-10">
                            <h3 className="font-serif italic text-white text-2xl leading-tight tracking-tight">
                                Zero-friction procurement at machine speed.
                            </h3>
                            <p className="font-sans text-white/50 text-sm leading-relaxed">
                                Autonomous agents negotiate, compare, and settle transactions without human oversight.
                            </p>
                        </div>
                        <a href="#contact" className="relative z-10 self-start inline-block border-b border-white/30 pb-1 text-white/70 transition-colors duration-300 font-sans tracking-widest text-xs uppercase hover:text-electric-mint hover:border-electric-mint/50">
                            Deploy Agents →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};


// ═══════════════════════════════════════════════════════════════════════════════
// 2. MARKETING — Large image CENTER spanning 2 rows
//    Stat card top-left · Image bottom-left · CTA card top-right · Image bottom-right
// ═══════════════════════════════════════════════════════════════════════════════
const MarketingGrid = () => {
    const ref = useRef(null);
    useScrollReveal(ref);

    return (
        <section ref={ref} className="relative py-20 bg-cloud-dancer overflow-hidden">
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-[1] select-none">
                <span className="font-serif italic text-[12vw] leading-none whitespace-nowrap block tracking-tighter opacity-[0.04] text-charcoal">
                    MARKETING
                </span>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-12">
                    <span className="block font-mono text-[10px] tracking-[0.25em] uppercase mb-3 text-electric-mint">
                        Campaign Intelligence
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-charcoal tracking-tight">
                        Autonomous Creative
                    </h2>
                </div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridTemplateRows: 'auto auto' }}>
                    {/* Stat card — top left */}
                    <div className="bento-anim rounded-2xl bg-electric-mint p-8 flex flex-col justify-between min-h-[270px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0">
                        <div>
                            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/40 block mb-4">Performance</span>
                            <p className="font-serif italic text-3xl text-charcoal tracking-tight">4.2×</p>
                        </div>
                        <div className="space-y-3 mt-6">
                            <h3 className="font-sans font-normal text-charcoal/70 text-sm">Content Output Multiplier</h3>
                            <p className="font-sans text-charcoal/60 text-sm leading-relaxed">Agentic content engines generate brand-aligned assets at 4.2× the velocity of traditional creative teams.</p>
                            <span className="inline-block font-sans text-charcoal text-xs tracking-widest uppercase border-b border-charcoal/30 pb-1 cursor-pointer hover:text-charcoal/60 transition-colors duration-200">
                                Case Study →
                            </span>
                        </div>
                    </div>

                    {/* Large hero image — CENTER, spans 2 rows */}
                    <div className="bento-anim group md:row-span-2 rounded-2xl overflow-hidden min-h-[560px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl opacity-0">
                        <img loading="lazy" decoding="async"
                            src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80"
                            alt="Creative studio with digital marketing campaign production"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* CTA card — top right */}
                    <div className="bento-anim relative rounded-2xl bg-charcoal p-8 flex flex-col justify-between min-h-[270px] ring-1 ring-white/5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0">
                        <span className="absolute -bottom-2 -right-2 font-serif italic text-[5rem] leading-none text-white/[0.03] pointer-events-none select-none tracking-tighter">
                            Create
                        </span>
                        <div className="space-y-4 relative z-10">
                            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/30 block">Agentic Studio</span>
                            <h3 className="font-serif italic text-white text-2xl leading-tight tracking-tight">
                                Brand-aligned creative at a scale no human team can match.
                            </h3>
                            <p className="font-sans text-white/50 text-sm leading-relaxed">
                                AI-driven content engines that understand brand voice, audience segmentation, and conversion psychology.
                            </p>
                        </div>
                        <a href="#contact" className="relative z-10 self-start inline-block border-b border-white/30 pb-1 text-white/70 transition-colors duration-300 font-sans tracking-widest text-xs uppercase hover:text-electric-mint hover:border-electric-mint/50">
                            Start Creating →
                        </a>
                    </div>

                    {/* Image — bottom left */}
                    <div className="bento-anim group rounded-2xl overflow-hidden min-h-[270px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0">
                        <img loading="lazy" decoding="async"
                            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80"
                            alt="Social media content creation tools"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Image — bottom right */}
                    <div className="bento-anim group rounded-2xl overflow-hidden min-h-[270px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0">
                        <img loading="lazy" decoding="async"
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                            alt="Marketing team collaborating on campaign strategy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


// ═══════════════════════════════════════════════════════════════════════════════
// 3. PAYMENTS — Same layout as V1, now on light background
//    KPI panel LEFT spanning 2 rows · Image CENTER spanning 2 rows · Cards RIGHT
// ═══════════════════════════════════════════════════════════════════════════════
const PaymentsGrid = () => {
    const ref = useRef(null);
    useScrollReveal(ref);

    return (
        <section ref={ref} className="relative py-20 bg-cloud-dancer overflow-hidden">
            <div className="absolute top-[22%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-[1] select-none">
                <span className="font-serif italic text-[12vw] leading-none whitespace-nowrap block tracking-tighter opacity-[0.04] text-charcoal">
                    PAYMENTS
                </span>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-12">
                    <span className="block font-mono text-[10px] tracking-[0.25em] uppercase mb-3 text-electric-mint">
                        Settlement Infrastructure
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-charcoal tracking-tight">
                        Autonomous Settlement
                    </h2>
                </div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridTemplateRows: 'auto auto' }}>
                    {/* Tall KPI Panel — left, spans 2 rows */}
                    <div className="bento-anim relative md:row-span-2 rounded-2xl bg-charcoal p-8 flex flex-col min-h-[560px] ring-1 ring-charcoal/5 overflow-hidden transition-all duration-300 hover:-translate-y-1 opacity-0">
                        {/* Watermark */}
                        <span className="absolute bottom-4 right-4 font-serif italic text-[4.5rem] leading-none text-white/[0.03] pointer-events-none select-none tracking-tighter">
                            Protocol
                        </span>
                        {/* Title + Facts grouped together */}
                        <div className="relative z-10">
                            <span className="font-serif italic text-2xl text-electric-mint block mb-6">Why Autonomous Payments</span>
                            <div className="space-y-4">
                                <div className="border-b border-white/[0.10] pb-3">
                                    <p className="font-serif italic text-3xl text-white tracking-tight">90%</p>
                                    <p className="font-sans font-normal text-white/70 text-sm mt-1">Faster Reconciliation vs Traditional Rails</p>
                                </div>
                                <div className="border-b border-white/[0.10] pb-3">
                                    <p className="font-serif italic text-3xl text-white tracking-tight">130+</p>
                                    <p className="font-sans font-normal text-white/70 text-sm mt-1">Markets With Instant Settlement</p>
                                </div>
                                <div className="border-b border-white/[0.10] pb-3">
                                    <p className="font-serif italic text-3xl text-white tracking-tight">Zero‑trust</p>
                                    <p className="font-sans font-normal text-white/70 text-sm mt-1">Non-custodial Architecture</p>
                                </div>
                                <div>
                                    <p className="font-serif italic text-3xl text-white tracking-tight">99%</p>
                                    <p className="font-sans font-normal text-white/70 text-sm mt-1">Lower Fees vs Traditional Payment Rails</p>
                                </div>
                            </div>
                        </div>
                        <a href="/news-insights?category=agentic-payments" className="relative z-10 mt-auto self-start inline font-sans text-white/40 text-xs tracking-widest uppercase border-b border-white/10 pb-1 hover:text-electric-mint hover:border-electric-mint/50 transition-colors duration-200">
                            Explore Payments Insights →
                        </a>
                    </div>

                    {/* Large center image — spans 2 rows */}
                    <div className="bento-anim group md:row-span-2 rounded-2xl overflow-hidden min-h-[560px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 opacity-0">
                        <img loading="lazy" decoding="async"
                            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
                            alt="Secure autonomous payment processing"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Glassmorphic overlay card — top right */}
                    <Link href="/news-insights/v402-handshake-how-machine-to-machine-negotiation-works" className="bento-anim relative group rounded-2xl overflow-hidden min-h-[270px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 opacity-0 block">
                        <img loading="lazy" decoding="async"
                            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80"
                            alt="Blockchain distributed ledger visualization"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent flex items-end p-6">
                            <div>
                                <p className="font-sans font-bold text-white text-sm">The v402 Handshake</p>
                                <p className="font-sans text-white/50 text-xs mt-1">How machine-to-machine negotiation actually works.</p>
                                <span className="inline-block font-sans text-white/70 text-xs tracking-widest uppercase border-b border-white/30 pb-1 mt-3 group-hover:text-electric-mint group-hover:border-electric-mint/50 transition-colors duration-200">
                                    Read Article →
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* CTA card — bottom right (mint) */}
                    <Link href="/news-insights/autonomous-payment-settlement-what-cfos-need-to-know" className="bento-anim relative rounded-2xl bg-electric-mint p-8 flex flex-col justify-between min-h-[270px] ring-1 ring-charcoal/5 overflow-hidden transition-all duration-300 hover:-translate-y-1 opacity-0 block">
                        <span className="absolute bottom-3 right-4 font-serif italic text-[3.5rem] leading-none text-charcoal/[0.06] pointer-events-none select-none tracking-tighter">
                            Settle
                        </span>
                        <div className="space-y-3 relative z-10">
                            <h3 className="font-serif italic text-charcoal text-2xl leading-tight tracking-tight">
                                Autonomous Payment Settlement: What CFOs Need to Know in 2026
                            </h3>
                            <p className="font-sans text-charcoal/50 text-sm leading-relaxed">
                                Agent-initiated transactions now represent 8% of B2B settlement volume. Your payment infrastructure was not built for this.
                            </p>
                        </div>
                        <span className="relative z-10 self-start inline-block border-b border-charcoal/30 pb-1 text-charcoal transition-colors duration-300 font-sans tracking-widest text-xs uppercase group-hover:text-charcoal/60">
                            Read Article →
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};


// ═══════════════════════════════════════════════════════════════════════════════
// 4. AEO — Large image RIGHT spanning 2 rows
//    Stat card top-left · Content card top-middle · Image bottom-left · CTA bottom-middle
// ═══════════════════════════════════════════════════════════════════════════════
const AeoGrid = () => {
    const ref = useRef(null);
    useScrollReveal(ref);

    return (
        <section ref={ref} className="relative py-20 bg-cloud-dancer overflow-hidden">
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-[1] select-none">
                <span className="font-serif italic text-[12vw] leading-none whitespace-nowrap block tracking-tighter opacity-[0.04] text-charcoal">
                    SCHEMA
                </span>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-12">
                    <span className="block font-mono text-[10px] tracking-[0.25em] uppercase mb-3 text-electric-mint">
                        Answer Engine Optimization
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-charcoal tracking-tight">
                        Beyond Search
                    </h2>
                </div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridTemplateRows: 'auto auto' }}>
                    {/* Tall KPI Panel — left, spans 2 rows */}
                    <div className="bento-anim relative md:row-span-2 rounded-2xl bg-charcoal p-8 flex flex-col min-h-[560px] ring-1 ring-charcoal/5 overflow-hidden transition-all duration-300 hover:-translate-y-1 opacity-0">
                        {/* Watermark */}
                        <span className="absolute bottom-4 right-4 font-serif italic text-[4.5rem] leading-none text-white/[0.03] pointer-events-none select-none tracking-tighter">
                            Search
                        </span>
                        {/* Title + Facts */}
                        <div className="relative z-10">
                            <span className="font-serif italic text-2xl text-electric-mint block mb-6">The Future of Search</span>
                            <div className="space-y-4">
                                <div className="border-b border-white/[0.10] pb-3">
                                    <p className="font-serif italic text-3xl text-white tracking-tight">61%</p>
                                    <p className="font-sans font-normal text-white/70 text-sm mt-1">Enterprise Purchase Decisions Influenced by LLM Answers</p>
                                </div>
                                <div className="border-b border-white/[0.10] pb-3">
                                    <p className="font-serif italic text-3xl text-white tracking-tight">40%</p>
                                    <p className="font-sans font-normal text-white/70 text-sm mt-1">Product Discovery via AI Agents by 2027</p>
                                </div>
                                <div className="border-b border-white/[0.10] pb-3">
                                    <p className="font-serif italic text-3xl text-white tracking-tight">77%</p>
                                    <p className="font-sans font-normal text-white/70 text-sm mt-1">Competitors Structurally Invisible to Agents</p>
                                </div>
                                <div>
                                    <p className="font-serif italic text-3xl text-white tracking-tight">34%</p>
                                    <p className="font-sans font-normal text-white/70 text-sm mt-1">Correlation Between SEO Rankings and AI Citations</p>
                                </div>
                            </div>
                        </div>
                        <Link href="/news-insights?category=agentic-aeo" className="relative z-10 mt-auto self-start inline font-sans text-white/40 text-xs tracking-widest uppercase border-b border-white/10 pb-1 hover:text-electric-mint hover:border-electric-mint/50 transition-colors duration-200">
                            Explore AEO Insights →
                        </Link>
                    </div>

                    {/* Content/entity card — top middle (mint) */}
                    <div className="bento-anim relative rounded-2xl bg-electric-mint p-8 flex flex-col justify-between min-h-[270px] ring-1 ring-charcoal/5 overflow-hidden transition-all duration-300 hover:-translate-y-1 opacity-0">
                        <span className="absolute -bottom-1 -right-1 font-serif italic text-[4rem] leading-none text-charcoal/[0.06] pointer-events-none select-none tracking-tighter">
                            Entity
                        </span>
                        <div className="space-y-4 relative z-10">
                            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/40 block">Entity Anchoring</span>
                            <h3 className="font-serif italic text-charcoal text-2xl leading-tight tracking-tight">
                                Embed your brand into the knowledge graph.
                            </h3>
                            <p className="font-sans text-charcoal/50 text-sm leading-relaxed">
                                Structured schema, semantic metadata, and verifiable provenance that make your entity the canonical answer.
                            </p>
                        </div>
                        <a href="#contact" className="relative z-10 self-start inline-block border-b border-charcoal/30 pb-1 text-charcoal transition-colors duration-300 font-sans tracking-widest text-xs uppercase hover:text-charcoal/60">
                            Start Optimization →
                        </a>
                    </div>

                    {/* Large image — RIGHT col, spans 2 rows, links to blog */}
                    <Link href="/news-insights/the-end-of-legacy-seo" className="bento-anim group md:row-span-2 rounded-2xl overflow-hidden min-h-[560px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 opacity-0 block relative">
                        <img loading="lazy" decoding="async"
                            src="/images/insights/the-end-of-legacy-seo.webp"
                            alt="The End of Legacy SEO - Transitioning to Agentic AEO"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent flex items-end p-6">
                            <div>
                                <p className="font-sans font-bold text-white text-sm">The End of Legacy SEO</p>
                                <p className="font-sans text-white/50 text-xs mt-1">Transitioning to Agentic AEO.</p>
                                <span className="inline-block font-sans text-white/70 text-xs tracking-widest uppercase border-b border-white/30 pb-1 mt-3 group-hover:text-electric-mint group-hover:border-electric-mint/50 transition-colors duration-200">
                                    Read Article →
                                </span>
                            </div>
                        </div>
                    </Link>


                    {/* Blog article card — bottom middle, links to blog */}
                    <Link href="/news-insights/schema-markup-is-not-optional-the-aeo-technical-checklist" className="bento-anim relative group rounded-2xl overflow-hidden min-h-[270px] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 opacity-0 block">
                        <img loading="lazy" decoding="async"
                            src="/images/insights/schema-markup-checklist.webp"
                            alt="Schema Markup is Not Optional - The AEO Technical Checklist"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent flex items-end p-6">
                            <div>
                                <p className="font-sans font-bold text-white text-sm">Schema Markup is Not Optional</p>
                                <p className="font-sans text-white/50 text-xs mt-1">The AEO Technical Checklist.</p>
                                <span className="inline-block font-sans text-white/70 text-xs tracking-widest uppercase border-b border-white/30 pb-1 mt-3 group-hover:text-electric-mint group-hover:border-electric-mint/50 transition-colors duration-200">
                                    Read Article →
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};


// ═══════════════════════════════════════════════════════════════════════════════
// SANDBOX PAGE — All 4 designs stacked for comparison
// ═══════════════════════════════════════════════════════════════════════════════
const designs = [
    { label: 'Agentic Commerce', sublabel: 'Large Image Left', Component: CommerceGrid },
    { label: 'Marketing', sublabel: 'Large Image Center', Component: MarketingGrid },
    { label: 'Payments', sublabel: 'Dashboard Grid (Original)', Component: PaymentsGrid },
    { label: 'AEO', sublabel: 'Large Image Right', Component: AeoGrid },
];

export default function Sandbox3() {
    return (
        <main className="w-full" data-nav-theme="light">
            {/* Page Header */}
            <section className="pt-40 pb-16 bg-cloud-dancer">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                    <span className="block font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/40 mb-4">
                        Bento Grid V2 — All Light Backgrounds
                    </span>
                    <h1 className="font-serif italic text-charcoal text-5xl md:text-7xl tracking-tight mb-4">
                        Grid Designs
                    </h1>
                    <p className="font-sans text-charcoal/50 text-lg max-w-xl">
                        Four bento grid layouts, all on light backgrounds. Each features one column with a large image spanning two rows. Scroll to compare.
                    </p>
                </div>
            </section>

            {designs.map(({ label, sublabel, Component }) => (
                <div key={label}>
                    <div className="border-t-4 border-electric-mint">
                        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-6 bg-electric-mint/5">
                            <span className="font-mono text-xs tracking-[0.3em] uppercase text-charcoal/60 font-bold">
                                {label}
                            </span>
                            <span className="font-sans text-xs text-charcoal/30 ml-4">
                                — {sublabel}
                            </span>
                        </div>
                    </div>
                    <Component />
                </div>
            ))}
        </main>
    );
}
