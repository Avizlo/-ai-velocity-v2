"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { insightsData } from '@/lib/insightsData';
import StickyFilterBar from '@/components/ui/StickyFilterBar';
import { useState, useEffect, useRef, useCallback, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Default Data fallback ---
const defaultPosts = [...insightsData].sort((a, b) => new Date(b.date) - new Date(a.date));

// Fixed category list aligned with service page keywords for SEO
const getCategories = () => {
    return ['All', 'Agentic Commerce', 'Agentic Marketing', 'Agentic Payments', 'Agentic AEO', 'News'];
};

// Calculate how many items fill exactly N visual rows in the 3-column grid,
// accounting for large (2-col spanning) items at index 0 and 5.
function getItemCountForRows(numRows, colCount = 3) {
    let items = 0;
    let colsFilled = 0;
    let rowsFilled = 0;
    while (rowsFilled < numRows) {
        const span = (items === 0 || items === 5) ? 2 : 1;
        colsFilled += span;
        items++;
        if (colsFilled >= colCount) {
            rowsFilled++;
            colsFilled = 0;
        }
    }
    return items;
}

function NewsInsightsContent() {
    const categories = getCategories();
    const searchParams = useSearchParams();
    const router = useRouter();
    const [activeCategory, setActiveCategory] = useState('All');
    const [filteredPosts, setFilteredPosts] = useState(defaultPosts);
    const [showMore, setShowMore] = useState(false);

    const INITIAL_COUNT = getItemCountForRows(2); // Items to fill exactly 2 visual rows
    const PAGE_COUNT = getItemCountForRows(4);     // Items to fill exactly 4 visual rows

    // Read page from URL query params
    const pageParam = parseInt(searchParams.get('page') || '1', 10);
    const currentPage = isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;

    // Navigate to a specific page via URL
    const goToPage = useCallback((page) => {
        const params = new URLSearchParams(searchParams.toString());
        if (page <= 1) {
            params.delete('page');
        } else {
            params.set('page', String(page));
        }
        const query = params.toString();
        router.push(`/news-insights${query ? `?${query}` : ''}`, { scroll: false });
        window.scrollTo({ top: 400, behavior: 'smooth' });
    }, [searchParams, router]);



    // Read category from URL query params (e.g. ?category=agentic-payments)
    useEffect(() => {
        const categoryParam = searchParams.get('category');
        if (categoryParam) {
            // Map URL-friendly slug back to display name (e.g. "agentic-payments" → "Agentic Payments")
            const normalized = categoryParam.replace(/-/g, ' ').toLowerCase();
            const matched = categories.find(cat => cat.toLowerCase() === normalized);
            if (matched) {
                setActiveCategory(matched);
            }
        }
    }, []);

    // Handle filtering logic
    useEffect(() => {
        if (activeCategory === 'All') {
            setFilteredPosts(defaultPosts);
        } else {
            setFilteredPosts(defaultPosts.filter(post => post.category === activeCategory));
        }
        setShowMore(false);
        // Reset to page 1 on category change
        if (currentPage !== 1) {
            router.push('/news-insights', { scroll: false });
        }
    }, [activeCategory]);

    const heroArticle = filteredPosts.length > 0 ? filteredPosts[0] : null;
    const allGridArticles = filteredPosts;

    // Pagination logic:
    // Phase 1: Initial load shows 6 articles (2 rows)
    // Phase 2: After Load More, shows 12 articles (4 rows)
    // Phase 3: If >12 articles, show pagination with ?page=N
    const totalGridArticles = allGridArticles.length;
    const totalPages = Math.ceil(totalGridArticles / PAGE_COUNT);
    let visibleArticles;

    if (!showMore && currentPage <= 1) {
        // Phase 1: initial load — show exactly 2 visual rows
        visibleArticles = allGridArticles.slice(0, INITIAL_COUNT);
    } else {
        // Phase 2/3: show exactly 4 visual rows per page
        const start = (currentPage - 1) * PAGE_COUNT;
        visibleArticles = allGridArticles.slice(start, start + PAGE_COUNT);
    }

    const hasMoreToLoad = !showMore && currentPage <= 1 && totalGridArticles > INITIAL_COUNT;
    const showPagination = (showMore || currentPage > 1) && totalPages > 1;

    return (
        <main className="min-h-screen bg-charcoal selection:bg-electric-mint selection:text-charcoal pb-24">

            {/* The Hero Spotlight (Full-Bleed Forensic Visual) */}
            {heroArticle && (
                <section className="relative w-full h-[70vh] md:h-[70vh] overflow-hidden group border-b border-white/5">
                    <Link href={`/news-insights/${heroArticle.slug}`} className="absolute inset-0 z-10 block">
                        <span className="sr-only">Access {heroArticle.title}</span>
                    </Link>

                    {/* The Image Physics - Forensic Visual Overlay & Subtle Scale */}
                    <motion.div
                        initial={{ scale: 1.05, filter: 'brightness(0.7)' }}
                        animate={{ scale: 1, filter: 'brightness(0.7)' }}
                        whileHover={{ scale: 1.05, filter: 'brightness(0.85)' }}
                        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={heroArticle.image}
                            alt={heroArticle.title}
                            fill
                            className="object-cover object-top"
                            priority
                            sizes="100vw"
                        />
                    </motion.div>

                    {/* Dark gradient mapping to ensure text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent pointer-events-none"></div>

                    {/* Content Container locked to gutters */}
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

                {/* Minimalist Native-Feel Filter Bar */}
                <StickyFilterBar activeCategory={activeCategory} label="News & Insights" />

                {/* The Asymmetrical Bento Box Grid */}
                <section className="min-h-[50vh]">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                        >
                            {visibleArticles.map((article, index) => {
                                // Determine grid span logic:
                                // To create a 'Human Cadence', make every 4th item large, or specifically if marked as 'priority'.
                                // Here we create a rhythm where some indices span multiple columns.
                                const isLarge = index === 0 || index === 5;

                                const isLast = index === visibleArticles.length - 1;
                                let colsUsed = 0;
                                for (let i = 0; i <= index; i++) {
                                    colsUsed += (i === 0 || i === 5) ? 2 : 1;
                                }
                                const colsInLastRow = colsUsed % 3;
                                const remainingCols = colsInLastRow === 0 ? 0 : 3 - colsInLastRow;
                                const shouldExpand = isLast && remainingCols > 0 && !isLarge;

                                return (
                                    <motion.article
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                                        key={article.id}
                                        className={`group relative rounded-card overflow-hidden bg-charcoal border border-white/5 shadow-2xl h-[450px] ${isLarge ? 'md:col-span-2 lg:col-span-2' : shouldExpand ? (remainingCols >= 2 ? 'md:col-span-2 lg:col-span-3' : 'md:col-span-2 lg:col-span-2') : 'col-span-1'}`}
                                    >
                                        <Link href={`/news-insights/${article.slug}`} className="absolute inset-0 z-10 block">

                                            {/* Full-bleed image background */}
                                            <div className="absolute inset-0 transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105">
                                                <Image
                                                    src={article.image}
                                                    alt={article.title}
                                                    fill
                                                    sizes={isLarge ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                                                    className="object-cover object-center"
                                                    {...(index < 2 ? { priority: true } : {})}
                                                />
                                            </div>
                                            {/* Glassmorphism gradient mapping */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent"></div>

                                            {/* Metadata Overlay */}
                                            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span className={`font-mono text-[10px] uppercase tracking-widest text-electric-mint`}>
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
                                    </motion.article>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>
                </section>

                {/* Load More / Pagination Controls */}
                {hasMoreToLoad && (
                    <div className="flex justify-center mt-16">
                        <button
                            onClick={() => setShowMore(true)}
                            className="font-mono text-xs uppercase tracking-widest text-electric-mint border-b border-electric-mint/50 pb-1 hover:text-white hover:border-white transition-all duration-300 cursor-pointer flex items-center gap-2"
                        >
                            Load More News & Insights
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                )}

                {showPagination && (
                    <nav className="flex justify-center items-center gap-3 mt-16" aria-label="Pagination">
                        <button
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="font-mono text-xs uppercase tracking-widest text-white/50 hover:text-electric-mint disabled:opacity-30 disabled:cursor-not-allowed px-4 py-2 transition-colors cursor-pointer"
                        >
                            ← Prev
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => goToPage(page)}
                                className={`font-mono text-sm w-10 h-10 rounded-card transition-all duration-300 cursor-pointer ${currentPage === page
                                    ? 'bg-electric-mint text-charcoal shadow-[0_0_15px_rgba(133,216,172,0.3)]'
                                    : 'text-white/50 border border-white/10 hover:border-electric-mint/40 hover:text-electric-mint'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="font-mono text-xs uppercase tracking-widest text-white/50 hover:text-electric-mint disabled:opacity-30 disabled:cursor-not-allowed px-4 py-2 transition-colors cursor-pointer"
                        >
                            Next →
                        </button>
                    </nav>
                )}
            </div>

        </main>
    );
}

export default function NewsInsightsGallery() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-charcoal" />}>
            <NewsInsightsContent />
        </Suspense>
    );
}
