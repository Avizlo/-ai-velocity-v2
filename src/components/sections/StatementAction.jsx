export const StatementAction = ({
    statement = "The world of commerce is shifting from \"Human-to-Human\" to \"Agent-to-Agent,\" and the old playbooks are being vaporized.",
    actionText = "Are you ready?",
}) => {
    return (
        <section className="py-20 bg-cloud-dancer">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(auto,280px)] gap-10 lg:gap-20 items-center">

                    {/* Left: large statement */}
                    <p className="font-sans text-[1.5rem] md:text-[2rem] lg:text-[2.2rem] text-charcoal leading-[1.3] tracking-tight">
                        {statement}
                    </p>

                    {/* Right: bold label */}
                    <p className="font-sans text-base md:text-lg text-charcoal font-bold tracking-tight flex items-center lg:justify-end">
                        {actionText}
                    </p>

                </div>
            </div>
        </section>
    );
};
