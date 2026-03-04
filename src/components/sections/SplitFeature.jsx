export const SplitFeature = ({
    image = "/images/ai-model-1.webp",
    title,
    text1 = "Our agentic systems combine sovereign AI intelligence with creative precision to bring exceptional growth velocity to every brand we activate. Specialising in autonomous content generation, digital identity design, and AI-powered campaign execution — we build infrastructure that performs without limits.",
    text2 = "We are dedicated to achieving exceptional revenue outcomes, while maintaining full brand integrity and strategic alignment for our clients and their audiences.",
    ctaText = "Discover",
    ctaLink = "#contact",
    reverse = false
}) => {
    return (
        <section className="py-20 bg-cloud-dancer">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left/Right: Image */}
                    <div className={`group rounded-card overflow-hidden aspect-[4/5] w-full max-w-md ${reverse ? 'md:order-last md:justify-self-end' : ''}`}>
                        <img
                            src={image}
                            alt="Agentic AI model"
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Left/Right: Text + CTA */}
                    <div className={`flex flex-col justify-between h-full gap-16 ${reverse ? 'md:order-first' : ''}`}>
                        <div>
                            {title && (
                                <h2 className="text-4xl md:text-5xl font-sans font-bold text-charcoal tracking-tight mb-8">
                                    {title}
                                </h2>
                            )}
                            {text1 && (
                                <p className="font-sans text-charcoal text-lg leading-relaxed">
                                    {text1}
                                </p>
                            )}
                            {text2 && (
                                <p className="font-sans text-charcoal text-lg leading-relaxed mt-4">
                                    {text2}
                                </p>
                            )}
                        </div>

                        <div>
                            <a
                                href={ctaLink}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-card border border-charcoal/30 text-charcoal text-sm font-sans font-medium hover:bg-charcoal hover:text-white transition-all duration-300 group"
                            >
                                {ctaText}
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
