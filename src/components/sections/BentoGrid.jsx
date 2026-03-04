const StatCard = ({ pct, dashPct, heading, body, link }) => (
    <div className="rounded-2xl bg-charcoal p-8 flex flex-col justify-between min-h-[280px]">
        <div className="flex items-center gap-3">
            <div className="relative w-14 h-14">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 56 56">
                    <circle cx="28" cy="28" r="24" fill="none" stroke="#97d5ae22" strokeWidth="3" />
                    <circle
                        cx="28" cy="28" r="24" fill="none"
                        stroke="#97d5ae" strokeWidth="3"
                        strokeDasharray={`${2 * Math.PI * 24 * dashPct} ${2 * Math.PI * 24 * (1 - dashPct)}`}
                        strokeLinecap="round"
                    />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-electric-mint text-xs font-sans font-bold">
                    {pct}
                </span>
            </div>
        </div>
        <div className="mt-6 space-y-3">
            <h3 className="font-sans font-bold text-white text-xl leading-tight">{heading}</h3>
            <p className="font-sans text-white/50 text-sm leading-relaxed">{body}</p>
            <span className="inline-block font-sans text-electric-mint text-sm border-b border-electric-mint/40 cursor-pointer hover:border-electric-mint transition-colors duration-200">
                {link}
            </span>
        </div>
    </div>
);

export const BentoGrid = () => {
    return (
        <section className="py-12 bg-cloud-dancer">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridTemplateRows: 'auto' }}>

                    {/* ── [col1, row1] Dark stat card ── */}
                    <div className="md:col-start-1 md:row-start-1">
                        <StatCard
                            pct="94%"
                            dashPct={0.94}
                            heading="Autonomous AI-Driven Commerce"
                            body="Powered by decades of machine learning research and agentic architecture innovation."
                            link="Our Technology"
                        />
                    </div>

                    {/* ── [col2, rows 1-2] Tall hero image ── */}
                    <div className="group md:col-start-2 md:row-start-1 md:row-span-2 rounded-2xl overflow-hidden min-h-[580px]">
                        <img loading="lazy" decoding="async"
                            src="/images/agentic-agent-hero.jpg"
                            alt="Agentic AI systems"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* ── [col3, row1] Mint quote card ── */}
                    <div className="md:col-start-3 md:row-start-1 rounded-2xl bg-electric-mint p-8 flex flex-col justify-between min-h-[200px]">
                        <span className="inline-block self-start font-sans text-xs text-charcoal/60 border border-charcoal/20 rounded-full px-3 py-1">
                            Clients
                        </span>
                        <p className="font-sans text-charcoal text-lg font-medium leading-snug mt-4">
                            "Focused on autonomous growth goals and agentic marketing practices aligned with our long-term revenue vision."
                        </p>
                    </div>

                    {/* ── [col1, row2] AI model image ── */}
                    <div className="group md:col-start-1 md:row-start-2 rounded-2xl overflow-hidden min-h-[280px]">
                        <img loading="lazy" decoding="async"
                            src="/images/ai-model-1.webp"
                            alt="AI model campaign"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* ── [col3, row2] Landscape image ── */}
                    <div className="group md:col-start-3 md:row-start-2 rounded-2xl overflow-hidden min-h-[180px]">
                        <img loading="lazy" decoding="async"
                            src="/images/good-univerce-ai.jpg"
                            alt="AI universe"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>


                    {/* ── [col2, row3] Dew-mint capabilities card ── */}
                    <div className="md:col-start-1 md:row-start-3 rounded-2xl bg-dew-mint p-8 min-h-[220px]">
                        <span className="inline-block font-sans text-xs text-charcoal/60 border border-charcoal/20 rounded-full px-3 py-1 mb-5">
                            Capabilities
                        </span>
                        <h3 className="font-sans font-semibold text-charcoal text-xl mb-6">
                            Agentic Intelligence Suite
                        </h3>
                        <div className="space-y-4">
                            {[
                                { label: 'Autonomous campaign execution', pct: 92 },
                                { label: 'AI visual content generation', pct: 87 },
                                { label: 'Real-time optimisation signals', pct: 79 },
                            ].map(({ label, pct }) => (
                                <div key={label}>
                                    <p className="font-sans text-xs text-charcoal/60 mb-1">{label}</p>
                                    <div className="w-full h-1.5 bg-charcoal/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-charcoal rounded-full" style={{ width: `${pct}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── [col3, row3] Team avatar card ── */}
                    <div className="md:col-start-2 md:row-start-3 rounded-2xl bg-charcoal p-8 flex flex-col justify-between min-h-[220px]">
                        <div className="flex -space-x-3">
                            {[
                                '/images/ai-model-2.webp',
                                '/images/ai-model-3.webp',
                                '/images/ai-model-4.webp',
                                '/images/ai-model-5.webp',
                            ].map((src, i) => (
                                <img loading="lazy" decoding="async"
                                    key={i}
                                    src={src}
                                    alt="Team member"
                                    className="w-10 h-10 rounded-full object-cover border-2 border-charcoal"
                                />
                            ))}
                        </div>
                        <div className="mt-6 space-y-3">
                            <p className="font-sans text-white font-medium leading-snug">
                                We deploy AI talent that's eager to scale your brand without limits.
                            </p>
                            <span className="inline-block font-sans text-electric-mint text-sm border-b border-electric-mint/40 cursor-pointer hover:border-electric-mint transition-colors duration-200">
                                Activate Your Agent
                            </span>
                        </div>
                    </div>

                    {/* ── [col3, row4] NEW dark stat card — same as top-left ── */}
                    <div className="md:col-start-3 md:row-start-3">
                        <StatCard
                            pct="78%"
                            dashPct={0.78}
                            heading="Conversion Velocity Index"
                            body="Agentic campaigns consistently outperform human-managed media by measurable margins."
                            link="View Results"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};
