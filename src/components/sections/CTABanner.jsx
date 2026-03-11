export const CTABanner = ({
    title = "Stay current. The future is moving fast.",
    subtitle = "FOLLOW US",
    buttonText = "Follow us on X",
    buttonLink = "https://x.com/aivelocitydev"
}) => {
    return (
        <section className="w-full bg-[#212121] py-24">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
                {/* Left: editorial heading */}
                <div className="flex flex-col gap-4">
                    <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/60">
                        {subtitle}
                    </span>
                    <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-white/95 tracking-tight leading-[1.1] max-w-2xl">
                        {title}
                    </h2>
                </div>

                {/* Right: electric green link */}
                <a
                    href={buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start md:self-end w-fit border-b border-electric-mint/50 pb-1 text-electric-mint hover:text-white hover:border-white/50 transition-colors duration-300 font-sans tracking-widest text-xs uppercase whitespace-nowrap"
                >
                    {buttonText} →
                </a>
            </div>
        </section>
    );
};

