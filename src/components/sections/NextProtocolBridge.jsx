import Link from 'next/link';
import Image from 'next/image';
import { insightsData } from '@/lib/insightsData';

export const NextProtocolBridge = ({ currentSlug }) => {
    // Find the current article to get its category
    const currentArticle = insightsData.find(a => a.slug === currentSlug);
    if (!currentArticle) return null;

    const allOthers = [...insightsData]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .filter(a => a.slug !== currentSlug);

    // Related: same category, max 3
    const relatedArticles = allOthers
        .filter(a => a.category === currentArticle.category)
        .slice(0, 3);

    // Explore: different categories, max 3, prefer variety
    const seenCategories = new Set();
    const exploreArticles = [];
    for (const article of allOthers) {
        if (article.category === currentArticle.category) continue;
        if (exploreArticles.length >= 3) break;
        // Prefer one per category for variety, then fill
        if (!seenCategories.has(article.category) || exploreArticles.length < 3) {
            seenCategories.add(article.category);
            exploreArticles.push(article);
        }
    }

    // Category label for the heading
    const categoryLabel = currentArticle.category;

    return (
        <section className="bg-charcoal text-white pt-24 pb-12 mt-12 relative z-10 border-t border-white/10">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

                {/* Section 1: Related Insights (same category) */}
                {relatedArticles.length > 0 && (
                    <div className="mb-20">
                        <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-white/10 pb-6 mb-12 gap-6">
                            <div>
                                <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-electric-mint mb-3 block">
                                    Related Reading
                                </span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight">
                                    More on {categoryLabel}
                                </h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                            {relatedArticles.map(article => (
                                <ArticleCard key={article.id} article={article} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Section 2: Explore Other Topics */}
                {exploreArticles.length > 0 && (
                    <div>
                        <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-white/10 pb-6 mb-12 gap-6">
                            <div>
                                <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-white/60 mb-3 block">
                                    Explore
                                </span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight">
                                    Other Topics
                                </h2>
                            </div>
                            <Link href="/news-insights" className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-electric-mint/60 rounded-card text-electric-mint font-sans text-sm tracking-wide hover:bg-electric-mint hover:text-charcoal transition-all duration-300 group shrink-0">
                                View All Insights
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-300 group-hover:translate-x-0.5">
                                    <path d="M6 3L11 8L6 13" />
                                </svg>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                            {exploreArticles.map(article => (
                                <ArticleCard key={article.id} article={article} />
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};

// Shared card component used by both sections
const ArticleCard = ({ article }) => (
    <Link
        href={`/news-insights/${article.slug}`}
        className="group block relative rounded-card overflow-hidden bg-charcoal border border-white/5 shadow-2xl"
    >
        {/* Image */}
        <div className="relative w-full overflow-hidden aspect-[16/10]">
            <div
                className="absolute inset-0 transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
            >
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center opacity-70 group-hover:opacity-100 transition-opacity duration-[1.5s]"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent"></div>
        </div>

        {/* Metadata & Title */}
        <div className="absolute bottom-0 left-0 w-full p-5 md:p-6 flex flex-col justify-end pointer-events-none">
            <div className="flex gap-3 font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-white/50 mb-3">
                <span className="text-electric-mint">{article.category}</span>
                <span>·</span>
                <span>{article.readTime}</span>
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-serif text-white/90 group-hover:text-electric-mint transition-colors duration-300 leading-tight drop-shadow-xl">
                {article.title}
            </h3>
        </div>
    </Link>
);
