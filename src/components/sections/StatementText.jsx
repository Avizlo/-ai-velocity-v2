export const StatementText = ({
    label = "What We Do",
    statement = "Every campaign is meticulously tailored, combining analytical rigor with creative flair, to not just meet but exceed the unique needs and aspirations of your brand.",
}) => {
    return (
        <section className="py-20 bg-cloud-dancer">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-24 items-start">

                    {/* Left: small label */}
                    <p className="font-sans text-sm text-charcoal/50 tracking-wide pt-2">
                        {label}
                    </p>

                    {/* Right: large statement */}
                    <p className="font-sans text-3xl md:text-4xl lg:text-[2.6rem] text-charcoal leading-[2] tracking-tight">
                        {statement}
                    </p>

                </div>
            </div>
        </section>
    );
};
