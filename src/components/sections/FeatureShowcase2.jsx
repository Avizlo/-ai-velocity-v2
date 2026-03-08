import Image from 'next/image';

export const FeatureShowcase2 = () => {
    return (
        <section className="py-12 bg-cloud-dancer">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                {/*
                  Flat 4-col × 2-row grid — left panel spans both rows,
                  all cells in the same row share height automatically.
                */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.1fr_1.1fr_0.65fr] gap-4">
                    {/* ── Col 1: Text panel ── */}
                    <div className="rounded-2xl bg-charcoal p-10 flex flex-col justify-between lg:row-span-2">
                        <div className="space-y-6">
                            <span className="inline-block font-sans text-xs text-white/50 border border-white/20 rounded-full px-3 py-1">
                                Campaigns
                            </span>
                            <h2 className="font-sans font-bold text-white text-3xl md:text-4xl leading-tight tracking-tight">
                                Content that converts, created at machine speed.
                            </h2>
                            <p className="font-sans text-white/50 text-sm leading-relaxed max-w-xs">
                                From visual identity to campaign execution, our agentic systems produce brand-aligned creative at a scale no human team can match.
                            </p>
                        </div>
                        <a
                            href="#contact"
                            className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-card bg-white text-charcoal text-sm font-sans font-medium hover:bg-electric-mint hover:text-charcoal transition-all duration-300 group"
                        >
                            Start Creating
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </a>
                    </div>

                    {/* ── Item 2 ── */}
                    <div className="group rounded-2xl overflow-hidden min-h-[240px] relative">
                        <Image
                            src="/images/ai-model-5.webp"
                            alt="AI influencer model"
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* ── Item 3 ── */}
                    <div className="group rounded-2xl overflow-hidden min-h-[240px] relative">
                        <Image
                            src="/images/antesta-ai-model.jpg"
                            alt="Antesta AI model"
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* ── Item 4 ── */}
                    <div className="rounded-2xl bg-electric-mint p-8 flex flex-col justify-between min-h-[240px]">
                        <h3 className="font-sans font-bold text-charcoal text-3xl leading-tight tracking-tight">
                            Always On
                        </h3>
                        <p className="font-sans text-charcoal/60 text-sm leading-relaxed">
                            24/7 autonomous execution.
                        </p>
                    </div>

                    {/* ── Item 5 ── */}
                    <div className="group relative rounded-2xl overflow-hidden min-h-[240px]">
                        <Image
                            src="/images/good-univerce-ai.webp"
                            alt="Good Universe AI campaign"
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                        <div className="absolute bottom-5 left-5 space-y-1">
                            <p className="font-sans font-bold text-white text-xl tracking-tight">Brand Campaigns</p>
                            <p className="font-sans text-white/70 text-xs">Precision. Scale. Results.</p>
                        </div>
                    </div>

                    {/* ── Item 6 ── */}
                    <div className="group rounded-2xl overflow-hidden min-h-[240px] relative">
                        <Image
                            src="/images/ai-model-3.webp"
                            alt="AI model"
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* ── Item 7 ── */}
                    <div className="group rounded-2xl overflow-hidden min-h-[240px] relative">
                        <Image
                            src="/images/agentic-agent-hero.webp"
                            alt="Agentic AI hero"
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};
