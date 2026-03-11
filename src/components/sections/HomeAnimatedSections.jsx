'use client';

import Link from 'next/link';
import { GsapPageWrapper } from '@/components/ui/GsapPageWrapper';
import { InfluencerCarousel } from '@/components/sections/InfluencerCarousel';
import { FAQ } from '@/components/sections/FAQ';
import { CTABanner } from '@/components/sections/CTABanner';

export const HomeAnimatedSections = ({ services, stats, latestInsights, faqs }) => {
    return (
        <GsapPageWrapper className="gap-16 lg:gap-24">
            {/* Intro Statement */}
            <section data-no-anim className="py-12 md:py-16 bg-cloud-dancer">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 text-center">
                    <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-charcoal tracking-tight leading-[1.15] mb-8">
                        The world of commerce is changing.
                    </h2>
                    <p className="font-sans text-charcoal/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                        AI agents will soon find, compare, and buy products without human input. Brands that embrace agentic commerce, sales and marketing will win.
                    </p>
                </div>
            </section>

            {/* 2. Thesis Statement */}
            <section className="relative py-24 md:py-28 bg-charcoal overflow-hidden">
                {/* Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 select-none">
                    <span className="font-serif italic text-[14vw] leading-none whitespace-nowrap block tracking-tighter opacity-[0.03] text-white">
                        FOUNDRY
                    </span>
                </div>

                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
                    <div className="mb-14 text-left">
                        <span className="block font-sans text-xs font-bold text-white/60 tracking-[0.2em] uppercase mb-6">
                            THE AGENTIC ECONOMY
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_28rem] gap-12 lg:gap-20 items-end">
                        <p className="thesis-text font-serif italic text-[1.5rem] md:text-[2rem] lg:text-[2.2rem] text-white/80 leading-[1.3] tracking-tight lg:-mr-[125px] relative z-10">
                            The global commercial infrastructure is suffocating under structurally fractured systems. The market is demanding a clinical transition toward agentic commerce, a mathematical framework of execution powered by agentic intelligence. It replaces the slow bloat of traditional marketing with relentless programmatic precision.
                        </p>
                        <div className="w-full flex items-center justify-center md:justify-end">
                            <span className="text-electric-mint font-sans tracking-widest text-xs uppercase border-b border-electric-mint/50 pb-1">
                                Are you ready?
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Service Ecosystem */}
            <section id="services" className="py-20 bg-cloud-dancer">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                    <span className="block font-mono text-[10px] tracking-[0.25em] uppercase mb-3 text-charcoal/40">
                        Infrastructure
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-charcoal tracking-tight mb-12">
                        The Agentic Commerce Stack
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map((service) => (
                            <Link
                                key={service.href}
                                href={service.href}
                                className="group relative rounded-2xl overflow-hidden min-h-[320px] ring-1 ring-charcoal/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${service.image})`, backgroundPosition: service.bgPosition || 'center' }}
                                />
                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />

                                {/* Content */}
                                <div className="relative z-10 p-8 md:p-10 flex flex-col justify-end h-full">
                                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 block mb-3">
                                        {service.label}
                                    </span>
                                    <h3 className="font-serif italic text-white text-2xl md:text-3xl leading-tight tracking-tight">
                                        {service.title}
                                    </h3>
                                    <p className="font-sans text-white/60 text-sm leading-relaxed mt-3 max-w-md">
                                        {service.body}
                                    </p>
                                    <span className="self-start inline-block border-b border-white/10 pb-1 text-white/60 font-sans tracking-widest text-xs uppercase mt-6 group-hover:text-electric-mint group-hover:border-electric-mint/50 transition-colors duration-200">
                                        Explore →
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Authority Stats */}
            <section className="py-16 bg-charcoal border-y border-white/5">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                        {stats.map((stat) => (
                            <div key={stat.value} className="text-center md:text-left">
                                <p className="font-serif italic text-4xl md:text-5xl text-electric-mint tracking-tight mb-2">
                                    {stat.value}
                                </p>
                                <p className="font-sans text-white/50 text-xs md:text-sm leading-relaxed tracking-wide">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Manifesto: The Architecture of Agentic Intelligence */}
            <section className="py-24 bg-cloud-dancer" data-nav-theme="light">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                    <span className="block font-mono text-[10px] tracking-[0.25em] uppercase mb-4 text-charcoal/40">
                        The Architecture
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-charcoal tracking-tight mb-16 max-w-3xl">
                        The Architecture of Agentic Commerce
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                        <div>
                            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/30 block mb-4">01 / Infrastructure</span>
                            <p className="font-sans text-charcoal/70 text-[15px] leading-[1.8]">
                                The way people buy things is changing. AI assistants will soon find, compare, and purchase products on behalf of consumers without ever opening a browser. For this to work, your product data needs to be structured so that machines can read it as easily as humans can. This is the foundation, making your business visible to AI.
                            </p>
                        </div>
                        <div>
                            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/30 block mb-4">02 / Execution</span>
                            <p className="font-sans text-charcoal/70 text-[15px] leading-[1.8]">
                                Once your data is machine-readable, AI agents need real-time access to it. That means live pricing, live inventory, and live product details available through secure connections. When an AI assistant asks "is this in stock and what does it cost?", your systems need to answer instantly and accurately.
                            </p>
                        </div>
                        <div>
                            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/30 block mb-4">03 / Settlement</span>
                            <p className="font-sans text-charcoal/70 text-[15px] leading-[1.8]">
                                The final piece is payment. AI agents need to complete purchases securely without a human typing in card details. New payment protocols allow machines to verify, authorise, and settle transactions instantly, across borders, in any currency, with full transparency and zero friction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Latest Insights */}
            <section className="py-20 bg-cloud-dancer" data-nav-theme="light">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <span className="block font-mono text-[10px] tracking-[0.25em] uppercase mb-3 text-charcoal/40">
                                Intelligence
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif text-charcoal tracking-tight">
                                Latest Insights
                            </h2>
                        </div>
                        <Link
                            href="/news-insights"
                            className="inline-block border-b border-charcoal/20 pb-1 text-charcoal/50 font-sans tracking-widest text-xs uppercase hover:text-electric-mint hover:border-electric-mint/50 transition-colors duration-200"
                        >
                            View All Insights →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {latestInsights.map((article) => (
                            <Link
                                key={article.id}
                                href={`/news-insights/${article.slug}`}
                                className="group relative rounded-2xl overflow-hidden min-h-[380px] ring-1 ring-charcoal/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${article.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
                                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="font-mono text-[10px] uppercase tracking-widest text-electric-mint">
                                            {article.category}
                                        </span>
                                        <span className="w-1 h-1 rounded-full bg-white/20" />
                                        <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest">
                                            {article.readTime}
                                        </span>
                                    </div>
                                    <h3 className="font-serif text-white/90 group-hover:text-electric-mint transition-colors duration-300 leading-tight text-xl md:text-2xl line-clamp-3 mb-4">
                                        {article.title}
                                    </h3>
                                    <span className="inline-flex w-auto self-start items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-electric-mint border border-electric-mint/40 rounded-xl px-5 py-2 group-hover:bg-electric-mint group-hover:text-charcoal transition-all duration-300">
                                        Read Article →
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Influencer Carousel */}
            <InfluencerCarousel />

            {/* 8. FAQ */}
            <FAQ
                title="Agentic Query Matrix"
                label="Intelligence"
                faqs={faqs}
                bgClass="bg-electric-mint"
            />

            {/* 9. CTA Banner */}
            <CTABanner />
        </GsapPageWrapper>
    );
};
