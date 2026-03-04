"use client";

import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const InfluencerCarousel = () => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 bg-[#F5F5F5]" data-nav-theme="light">

            {/* Header */}
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <h2 className="text-5xl md:text-6xl leading-[1.1] font-serif italic text-charcoal max-w-2xl tracking-tight">
                        Agentic influencers working to grow your brand 24/7.
                    </h2>
                    <div className="flex gap-4 shrink-0">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-cloud-dancer transition-colors"
                            aria-label="Scroll left"
                        >
                            <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-cloud-dancer transition-colors"
                            aria-label="Scroll right"
                        >
                            <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Full-Width Image Carousel — left-pad matches constrained container, bleeds off right edge */}
            <div
                ref={scrollContainerRef}
                className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                style={{ paddingLeft: 'max(1.5rem, calc((100vw - 1536px) / 2 + 3rem))' }}
            >
                {/* Image 1 */}
                <div className="relative aspect-[4/3] w-[85vw] md:w-[45vw] lg:w-[28vw] shrink-0 snap-start rounded-card overflow-hidden bg-charcoal/5">
                    <img loading="lazy" decoding="async"
                        src="/images/ai-model-1.webp"
                        alt="AI Influencer Model 1"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
                    />
                </div>
                {/* Image 2 */}
                <div className="relative aspect-[4/3] w-[85vw] md:w-[45vw] lg:w-[28vw] shrink-0 snap-start rounded-card overflow-hidden bg-charcoal/5">
                    <img loading="lazy" decoding="async"
                        src="/images/ai-model-2.webp"
                        alt="AI Influencer Model 2"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
                    />
                </div>
                {/* Image 3 */}
                <div className="relative aspect-[4/3] w-[85vw] md:w-[45vw] lg:w-[28vw] shrink-0 snap-start rounded-card overflow-hidden bg-charcoal/5">
                    <img loading="lazy" decoding="async"
                        src="/images/ai-model-3.webp"
                        alt="AI Influencer Model 3"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
                    />
                </div>
                {/* Image 4 */}
                <div className="relative aspect-[4/3] w-[85vw] md:w-[45vw] lg:w-[28vw] shrink-0 snap-start rounded-card overflow-hidden bg-charcoal/5">
                    <img loading="lazy" decoding="async"
                        src="/images/ai-model-4.webp"
                        alt="AI Influencer Model 4"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
                    />
                </div>
                {/* Image 5 */}
                <div className="relative aspect-[4/3] w-[85vw] md:w-[45vw] lg:w-[28vw] shrink-0 snap-start rounded-card overflow-hidden bg-charcoal/5">
                    <img loading="lazy" decoding="async"
                        src="/images/ai-model-5.webp"
                        alt="AI Influencer Model 5"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
                    />
                </div>
                {/* Trailing spacer */}
                <div className="shrink-0 w-6 md:w-12"></div>
            </div>

        </section>
    );
};
