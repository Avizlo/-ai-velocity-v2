import Link from 'next/link';
import Image from 'next/image';
import { insightsData } from '@/lib/insightsData';

export const metadata = {
    title: 'Page Not Found | AI Velocity',
    description: 'The page you are looking for does not exist. Explore our agentic commerce services, latest insights, and more.',
};

const services = [
    { label: 'Commerce', title: 'Agentic Commerce', href: '/agentic-commerce' },
    { label: 'Marketing', title: 'Agentic Marketing', href: '/agentic-marketing' },
    { label: 'Payments', title: 'Agentic Payments', href: '/agentic-payments' },
    { label: 'Discovery', title: 'Agentic AEO', href: '/agentic-aeo' },
];

const latestInsights = insightsData
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

export default function NotFound() {
    return (
        <main className="bg-charcoal min-h-screen" data-nav-theme="dark">
            {/* Hero / 404 Message */}
            <section className="pt-40 pb-20 md:pt-48 md:pb-24">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                    <span className="block font-mono text-sm md:text-base tracking-[0.25em] uppercase mb-6 text-white">
                        404 / Page Not Found
                    </span>
                    <h1 className="font-serif italic text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.1] mb-8">
                        Nothing here yet.
                    </h1>
                    <p className="text-white/50 font-sans text-base md:text-lg leading-relaxed max-w-lg mb-10">
                        The page you&apos;re looking for doesn&apos;t exist, but there&apos;s plenty to explore.
                    </p>
                    <Link
                        href="/"
                        className="inline-block border-b border-white/30 pb-1 text-white/60 font-sans tracking-widest text-xs uppercase hover:text-electric-mint hover:border-electric-mint/50 transition-colors duration-200"
                    >
                        Return to homepage →
                    </Link>
                </div>
            </section>

            {/* Service Quick Links */}
            <section className="pb-20">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                    <span className="block font-mono text-[10px] tracking-[0.25em] uppercase mb-8 text-white/30">
                        Explore Our Services
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {services.map((service) => (
                            <Link
                                key={service.href}
                                href={service.href}
                                className="group rounded-2xl border border-white/10 p-6 md:p-8 hover:border-electric-mint/30 hover:bg-white/[0.02] transition-all duration-300"
                            >
                                <span className="block font-mono text-[10px] tracking-[0.25em] uppercase text-white/30 mb-3">
                                    {service.label}
                                </span>
                                <h3 className="font-serif text-white text-xl md:text-2xl tracking-tight group-hover:text-electric-mint transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <span className="block mt-4 font-mono text-xs text-white/60 tracking-widest uppercase group-hover:text-electric-mint/60 transition-colors duration-200">
                                    Explore →
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest Insights */}
            <section className="pb-24 md:pb-32">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <span className="block font-mono text-[10px] tracking-[0.25em] uppercase mb-3 text-white/30">
                                Intelligence
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight">
                                Latest Insights
                            </h2>
                        </div>
                        <Link
                            href="/news-insights"
                            className="inline-block border-b border-white/10 pb-1 text-white/60 font-sans tracking-widest text-xs uppercase hover:text-electric-mint hover:border-electric-mint/50 transition-colors duration-200"
                        >
                            View All Insights →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {latestInsights.map((article) => (
                            <Link
                                key={article.id}
                                href={`/news-insights/${article.slug}`}
                                className="group relative rounded-2xl overflow-hidden min-h-[380px] ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-1 block"
                            >
                                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover object-center"
                                    />
                                </div>
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

            {/* Bottom spacer */}
            <div className="pb-16 md:pb-24" />
        </main>
    );
}
