'use client';

import Link from 'next/link';
import { insightsData } from '@/lib/insightsData';
import { categoryToSlug } from '@/lib/categoryRegistry';
import { useNavVisibility } from '@/context/NavVisibilityContext';

const ALL_CATEGORIES = ['All', 'Agentic Commerce', 'Agentic Marketing', 'Agentic Payments', 'Agentic AEO', 'News'];

export default function StickyFilterBar({ activeCategory, label = 'News & Insights' }) {
    const { navVisible, navHeight } = useNavVisibility();

    return (
        <section
            className="mb-16 border-b border-white/10 pb-6 flex flex-col md:flex-row justify-between md:items-end gap-6 sticky z-30 bg-charcoal pt-6 transition-all duration-300 ease-out"
            style={{ top: navVisible ? `${navHeight}px` : '0px' }}
        >
            <h2 className="font-mono text-xs uppercase tracking-widest text-electric-mint mb-2 md:mb-0">
                {label}
            </h2>

            <div className="flex flex-wrap items-center gap-2 md:gap-4">
                {ALL_CATEGORIES.map(cat => {
                    const isAll = cat === 'All';
                    const slug = isAll ? null : categoryToSlug(cat);
                    const href = isAll ? '/news-insights' : `/news-insights/${slug}`;
                    const isActive = cat === activeCategory;
                    const count = isAll
                        ? insightsData.length
                        : insightsData.filter(p => p.category === cat).length;

                    return (
                        <Link
                            key={cat}
                            href={href}
                            className={`font-mono text-[10px] md:text-xs uppercase tracking-widest px-4 py-2 rounded-card transition-all duration-300 ${isActive
                                ? 'bg-electric-mint text-charcoal shadow-[0_0_15px_rgba(133,216,172,0.3)]'
                                : 'bg-transparent text-white/50 hover:bg-white/5 hover:text-white border border-white/5'
                                }`}
                        >
                            {cat} ({count})
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
