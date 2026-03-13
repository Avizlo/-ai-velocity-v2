'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { insightsData } from '@/lib/insightsData';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ── Helpers ─────────────────────────────────────────────────────────────────
const getArticlesByCategory = (category, count = 99) => {
    const filtered = category
        ? insightsData.filter(a => a.category === category)
        : insightsData;
    return filtered
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, count);
};

const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-GB', {
        day: '2-digit', month: '2-digit', year: 'numeric',
    }).replace(/\//g, '.');
};


// ── RelatedInsights (Design D) ──────────────────────────────────────────────
export const RelatedInsights = ({
    category,
    title = "News & Insights",
    description,
}) => {
    const ref = useRef(null);
    const posts = getArticlesByCategory(category, 2);

    useEffect(() => {
        let ctx;
        const frameId = requestAnimationFrame(() => {
            ctx = gsap.context(() => {
                gsap.fromTo(ref.current.querySelectorAll('.ri-anim'),
                    { y: 20, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
                        scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none reverse' }
                    }
                );
            }, ref);
        });
        return () => {
            cancelAnimationFrame(frameId);
            ctx?.revert();
        };
    }, []);

    if (posts.length === 0) return null;

    return (
        <section ref={ref} className="py-20 bg-cloud-dancer">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left — Title, description, CTA */}
                    <div className="flex flex-col justify-between h-full gap-16">
                        <div className="space-y-4">
                            <span className="ri-anim block font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/40 opacity-0">
                                Latest Insights
                            </span>
                            <h2 className="ri-anim font-serif text-charcoal text-4xl md:text-5xl tracking-tight opacity-0">
                                {title}
                            </h2>
                            <p className="ri-anim font-sans text-charcoal/50 text-sm leading-relaxed max-w-xs opacity-0">
                                {description}
                            </p>
                        </div>
                        <div className="ri-anim opacity-0">
                            <Link
                                href={category ? `/news-insights/${category.toLowerCase().replace(/\s+/g, '-')}` : '/news-insights'}
                                className="inline-block border-b border-charcoal/30 pb-1 text-charcoal transition-colors duration-300 font-sans tracking-widest text-xs uppercase hover:text-charcoal/60 hover:border-charcoal/60"
                            >
                                {category ? `More ${category} Articles` : 'More Articles'} →
                            </Link>
                        </div>
                    </div>

                    {/* Right — Article rows */}
                    <div className="flex flex-col gap-6">
                        {posts.map((post) => (
                            <Link key={post.id} href={`/news-insights/${post.slug}`} className="ri-anim opacity-0">
                                <article className="flex gap-5 items-start group cursor-pointer">
                                    <div className="shrink-0 w-44 md:w-52 aspect-[16/10] rounded-card overflow-hidden bg-charcoal/5 ring-1 ring-charcoal/5 relative">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            sizes="(max-width: 768px) 176px, 208px"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex-1 space-y-2 pt-1">
                                        <div className="flex items-center gap-3">
                                            <p className="font-sans text-xs text-charcoal/40 tracking-wide">{formatDate(post.date)}</p>
                                        </div>
                                        <p className="font-sans text-charcoal text-base font-medium leading-snug group-hover:text-steel transition-colors duration-200">
                                            {post.title}
                                        </p>
                                        <span className="inline-flex items-center gap-1.5 font-sans text-xs text-charcoal/40 tracking-wide pt-1 group-hover:text-charcoal transition-colors duration-200">
                                            Read Article <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                                        </span>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
