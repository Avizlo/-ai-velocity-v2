import Link from 'next/link';
import Image from 'next/image';
import { insightsData } from '@/lib/insightsData';
import { CATEGORY_SLUGS, CATEGORY_META } from '@/lib/categoryRegistry';
import StickyFilterBar from '@/components/ui/StickyFilterBar';

const SITE_URL = 'https://ai-velocity.com';

// ── CategoryPage — server-rendered filtered blog listing ────────────────────
export default function CategoryPage({ categorySlug }) {
    const categoryName = CATEGORY_SLUGS[categorySlug];
    const allPosts = [...insightsData]
        .filter(post => post.category === categoryName)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    const heroArticle = allPosts.length > 0 ? allPosts[0] : null;

    // All categories for the filter bar
    const categories = ['All', ...Object.values(CATEGORY_SLUGS)];

    // BreadcrumbList JSON-LD
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: SITE_URL,
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'News & Insights',
                item: `${SITE_URL}/news-insights`,
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: categoryName,
                item: `${SITE_URL}/news-insights/${categorySlug}`,
            },
        ],
    };

    // CollectionPage JSON-LD for category
    const categoryMeta = CATEGORY_META[categorySlug];
    const collectionJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: `${categoryName} — News & Insights`,
        description: categoryMeta?.description || `${categoryName} articles and insights from AI Velocity.`,
        url: `${SITE_URL}/news-insights/${categorySlug}`,
        isPartOf: {
            '@type': 'WebPage',
            '@id': `${SITE_URL}/news-insights`,
            name: 'News & Insights',
        },
        publisher: {
            '@type': 'Organization',
            name: 'AI Velocity',
            url: SITE_URL,
        },
        hasPart: allPosts.map(article => ({
            '@type': article.category === 'News' ? 'NewsArticle' : 'Article',
            headline: article.title,
            url: `${SITE_URL}/news-insights/${article.slug}`,
            datePublished: article.date,
            description: article.excerpt,
            author: {
                '@type': 'Organization',
                name: article.author,
            },
        })),
    };

    // ItemList JSON-LD — ordered list of articles for LLM extraction
    const itemListJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: `${categoryName} Articles`,
        numberOfItems: allPosts.length,
        itemListElement: allPosts.map((article, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `${SITE_URL}/news-insights/${article.slug}`,
            name: article.title,
        })),
    };

    return (
        <main className="min-h-screen bg-charcoal selection:bg-electric-mint selection:text-charcoal pb-24">
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
            />

            {/* Hero Spotlight */}
            {heroArticle && (
                <section className="relative w-full h-[70vh] md:h-[70vh] overflow-hidden group border-b border-white/5">
                    <Link href={`/news-insights/${heroArticle.slug}`} className="absolute inset-0 z-10 block">
                        <span className="sr-only">Access {heroArticle.title}</span>
                    </Link>

                    <div className="absolute inset-0">
                        <Image
                            src={heroArticle.image}
                            alt={heroArticle.title}
                            fill
                            className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                            style={{ filter: 'brightness(0.7)' }}
                            priority
                            sizes="100vw"
                        />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent pointer-events-none"></div>

                    <div className="absolute inset-0 px-6 md:px-12 mx-auto max-w-screen-2xl flex flex-col justify-end pb-16 md:pb-24 pointer-events-none z-20">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="font-mono text-electric-mint text-[10px] md:text-xs uppercase tracking-widest px-3 py-1.5 border border-electric-mint/30 rounded-card bg-charcoal/80 backdrop-blur-md">
                                Featured • {heroArticle.category}
                            </span>
                            <time dateTime={heroArticle.date} className="font-mono text-white/50 text-[10px] md:text-xs tracking-widest uppercase">
                                {new Date(heroArticle.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })}
                            </time>
                            <span className="font-mono text-white/30 text-[10px] uppercase tracking-widest hidden sm:inline-block">
                                {heroArticle.readTime}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight leading-[1.05] max-w-5xl mb-6 drop-shadow-2xl">
                            {heroArticle.title}
                        </h1>

                        <p className="text-lg md:text-xl text-white/80 font-sans max-w-3xl leading-relaxed hidden md:block mb-8 border-l-2 border-electric-mint/50 pl-6">
                            {heroArticle.excerpt}
                        </p>

                        <div className="flex items-center gap-3 text-white/70 font-mono text-xs uppercase tracking-widest mt-4">
                            Read Article
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </div>
                    </div>
                </section>
            )}

            {/* Container for Filters and Grid */}
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full mt-16 md:mt-24">

                {/* Filter Bar — shared sticky component */}
                <StickyFilterBar activeCategory={categoryName} label={`${categoryName} Insights`} />

                {/* Article Grid */}
                <section className="min-h-[50vh]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {allPosts.map((article, index) => {
                            const isLarge = index === 0 || index === 5;

                            const isLast = index === allPosts.length - 1;
                            let colsUsed = 0;
                            for (let i = 0; i <= index; i++) {
                                colsUsed += (i === 0 || i === 5) ? 2 : 1;
                            }
                            const colsInLastRow = colsUsed % 3;
                            const remainingCols = colsInLastRow === 0 ? 0 : 3 - colsInLastRow;
                            const shouldExpand = isLast && remainingCols > 0 && !isLarge;

                            return (
                                <article
                                    key={article.id}
                                    className={`group relative rounded-card overflow-hidden bg-charcoal border border-white/5 shadow-2xl h-[450px] ${isLarge ? 'md:col-span-2 lg:col-span-2' : shouldExpand ? (remainingCols >= 2 ? 'md:col-span-2 lg:col-span-3' : 'md:col-span-2 lg:col-span-2') : 'col-span-1'}`}
                                >
                                    <Link href={`/news-insights/${article.slug}`} className="absolute inset-0 z-10 block">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                                            style={{ backgroundImage: `url(${article.image})` }}
                                        ></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent"></div>

                                        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="font-mono text-[10px] uppercase tracking-widest text-electric-mint">
                                                    {article.category}
                                                </span>
                                                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                                                <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest">
                                                    {article.readTime}
                                                </span>
                                            </div>

                                            <h3 className={`font-serif text-white/90 group-hover:text-electric-mint transition-colors duration-300 leading-tight mb-2 text-2xl md:text-3xl ${isLarge ? 'max-w-2xl' : 'line-clamp-3'}`}>
                                                {article.title}
                                            </h3>

                                            {(isLarge || shouldExpand) && (
                                                <p className="text-white/60 font-sans text-sm leading-relaxed mb-4 max-w-xl line-clamp-2">
                                                    {article.excerpt}
                                                </p>
                                            )}

                                            <span className="inline-flex w-auto self-start items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-electric-mint border border-electric-mint/40 rounded-card px-5 py-2 mt-3 group-hover:bg-electric-mint group-hover:text-charcoal transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(133,216,172,0.3)]">
                                                Read Article
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                            </span>
                                        </div>
                                    </Link>
                                </article>
                            );
                        })}
                    </div>
                </section>

                {/* Back to all insights */}
                <div className="flex justify-center mt-16">
                    <Link
                        href="/news-insights"
                        className="font-mono text-xs uppercase tracking-widest text-electric-mint border-b border-electric-mint/50 pb-1 hover:text-white hover:border-white transition-all duration-300 flex items-center gap-2"
                    >
                        View All News & Insights
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                </div>
            </div>
        </main>
    );
}
