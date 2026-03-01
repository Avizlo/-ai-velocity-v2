const defaultPosts = [
    {
        date: '26.02.2025',
        title: 'Agentic AI is rewriting the rules of digital commerce',
        image: '/images/agentic-agent-hero.jpg',
        alt: 'Agentic AI hero',
    },
    {
        date: '24.02.2025',
        title: 'How autonomous agents are replacing legacy marketing teams',
        image: '/images/good-univerce-ai.jpg',
        alt: 'AI universe',
    },
];

export const NewsInsight = ({
    title = "News & Insight",
    description = "We share the latest breakthroughs, innovations, and updates from the world of agentic commerce.",
    posts = defaultPosts
}) => {
    return (
        <section className="py-20 bg-cloud-dancer">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left: heading, sub, CTA */}
                    <div className="flex flex-col justify-between h-full gap-16">
                        <div className="space-y-4">
                            <h2 className="font-sans font-bold text-charcoal text-4xl md:text-5xl tracking-tight">
                                {title}
                            </h2>
                            <p className="font-sans text-charcoal/50 text-sm leading-relaxed max-w-xs">
                                {description}
                            </p>
                        </div>

                        <a
                            href="#blog"
                            className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-card border border-charcoal/30 text-charcoal text-sm font-sans font-medium hover:bg-charcoal hover:text-white transition-all duration-300 group"
                        >
                            View Blog
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </a>
                    </div>

                    {/* Right: post list */}
                    <div className="flex flex-col gap-5">
                        {posts.map((post, i) => (
                            <a
                                key={i}
                                href="#blog"
                                className="flex gap-5 items-start group cursor-pointer"
                            >
                                {/* Thumbnail */}
                                <div className="shrink-0 w-44 md:w-52 aspect-[16/10] rounded-card overflow-hidden bg-charcoal/5">
                                    <img
                                        src={post.image}
                                        alt={post.alt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Meta */}
                                <div className="space-y-2 pt-1">
                                    <p className="font-sans text-xs text-charcoal/40 tracking-wide">{post.date}</p>
                                    <p className="font-sans text-charcoal text-base font-medium leading-snug group-hover:text-steel transition-colors duration-200">
                                        {post.title}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};
