const StatCard2 = ({ pct, dashPct, heading, body, link }) => (
    <div className="rounded-2xl bg-electric-mint p-8 flex flex-col justify-between min-h-[280px]">
        <div className="flex items-center gap-3">
            <div className="relative w-14 h-14">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 56 56">
                    <circle cx="28" cy="28" r="24" fill="none" stroke="#1A1A1A22" strokeWidth="3" />
                    <circle
                        cx="28" cy="28" r="24" fill="none"
                        stroke="#1A1A1A" strokeWidth="3"
                        strokeDasharray={`${2 * Math.PI * 24 * dashPct} ${2 * Math.PI * 24 * (1 - dashPct)}`}
                        strokeLinecap="round"
                    />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-charcoal text-xs font-sans font-bold">
                    {pct}
                </span>
            </div>
        </div>
        <div className="mt-6 space-y-3">
            <h3 className="font-sans font-bold text-charcoal text-xl leading-tight">{heading}</h3>
            <p className="font-sans text-charcoal/60 text-sm leading-relaxed">{body}</p>
            <span className="inline-block font-sans text-charcoal text-sm border-b border-charcoal/40 cursor-pointer hover:border-charcoal transition-colors duration-200">
                {link}
            </span>
        </div>
    </div>
);

const defaultBentoData = {
    statLine: {
        pct: "87%",
        dashPct: 0.87,
        heading: "Campaign Performance Rate",
        body: "Agentic content consistently outperforms traditional creative in both engagement and conversion metrics.",
        link: "View Research"
    },
    images: {
        center: "/images/ai-model-1.webp",
        brand: "/images/antesta-ai-model.jpg",
        bottomLeft: "/images/ai-model-5.webp"
    },
    cta: {
        heading: "Content that converts, at machine speed.",
        body: "Brand-aligned creative at a scale no human team can match.",
        buttonText: "Start Creating",
        buttonLink: "#contact"
    }
};

export const BentoGrid2 = ({ data = defaultBentoData }) => {
    return (
        <section className="py-12 bg-cloud-dancer">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridTemplateRows: 'auto' }}>

                    {/* ── [col1, row1] Dark stat card ── */}
                    <div className="md:col-start-1 md:row-start-1">
                        <StatCard2
                            pct={data.statLine.pct}
                            dashPct={data.statLine.dashPct}
                            heading={data.statLine.heading}
                            body={data.statLine.body}
                            link={data.statLine.link}
                        />
                    </div>

                    {/* ── [col2, rows 1-2] Tall centre image ── */}
                    <div className="group md:col-start-2 md:row-start-1 md:row-span-2 rounded-2xl overflow-hidden min-h-[580px]">
                        <img
                            src={data.images.center}
                            alt="Center featured"
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* ── [col3, row1] Brand image ── */}
                    <div className="group md:col-start-3 md:row-start-1 rounded-2xl overflow-hidden min-h-[200px]">
                        <img
                            src={data.images.brand}
                            alt="Brand campaign"
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* ── [col1, row2] AI model image ── */}
                    <div className="group md:col-start-1 md:row-start-2 rounded-2xl overflow-hidden min-h-[280px]">
                        <img
                            src={data.images.bottomLeft}
                            alt="Bottom left model"
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* ── [col3, row2] CTA text card ── */}
                    <div className="md:col-start-3 md:row-start-2 rounded-2xl bg-charcoal p-8 flex flex-col justify-between min-h-[180px]">
                        <div className="space-y-3">
                            <h3 className="font-sans font-bold text-white text-2xl leading-tight tracking-tight">
                                {data.cta.heading}
                            </h3>
                            <p className="font-sans text-white/50 text-xs leading-relaxed">
                                {data.cta.body}
                            </p>
                        </div>
                        <a
                            href={data.cta.buttonLink}
                            className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-card bg-white text-charcoal text-sm font-sans font-medium hover:bg-electric-mint transition-all duration-300 group"
                        >
                            {data.cta.buttonText}
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </a>
                    </div>

                </div>

            </div>
        </section>

    );
};
