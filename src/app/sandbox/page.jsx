"use client";

import { useRef } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Sandbox() {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <main className="min-h-screen bg-[#F5F5F5] font-sans text-charcoal selection:bg-dew-mint selection:text-charcoal relative">

            {/* Use the existing Navbar so we can test the hover states against the new background */}
            <Navbar />

            {/* Sandbox Container - Padding to account for Navbar */}
            <div className="pt-32 pb-32" data-nav-theme="light">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

                    {/* Top Section: Carousel Header */}
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
                    className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-12 mb-20 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    style={{ paddingLeft: 'max(1.5rem, calc((100vw - 1536px) / 2 + 3rem))' }}
                >
                    {/* Image 1 */}
                    <div className="relative aspect-[4/3] w-[85vw] md:w-[45vw] lg:w-[28vw] shrink-0 snap-start rounded-card overflow-hidden bg-charcoal/5">
                        <img loading="lazy" decoding="async"
                            src="/images/ai-model-1.webp"
                            alt="Laboratory equipment interface"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
                        />
                    </div>
                    {/* Image 2 */}
                    <div className="relative aspect-[4/3] w-[85vw] md:w-[45vw] lg:w-[28vw] shrink-0 snap-start rounded-card overflow-hidden bg-charcoal/5">
                        <img loading="lazy" decoding="async"
                            src="/images/ai-model-2.webp"
                            alt="Automated testing environment"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
                        />
                    </div>
                    {/* Image 3 */}
                    <div className="relative aspect-[4/3] w-[85vw] md:w-[45vw] lg:w-[28vw] shrink-0 snap-start rounded-card overflow-hidden bg-charcoal/5">
                        <img loading="lazy" decoding="async"
                            src="/images/ai-model-3.webp"
                            alt="Scientist analyzing data"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
                        />
                    </div>
                    {/* Image 4 */}
                    <div className="relative aspect-[4/3] w-[85vw] md:w-[45vw] lg:w-[28vw] shrink-0 snap-start rounded-card overflow-hidden bg-charcoal/5">
                        <img loading="lazy" decoding="async"
                            src="/images/ai-model-4.webp"
                            alt="Microscopic analysis"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
                        />
                    </div>
                    {/* Image 5 */}
                    <div className="relative aspect-[4/3] w-[85vw] md:w-[45vw] lg:w-[28vw] shrink-0 snap-start rounded-card overflow-hidden bg-charcoal/5">
                        <img loading="lazy" decoding="async"
                            src="/images/ai-model-5.webp"
                            alt="Studio photography"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
                        />
                    </div>
                    {/* trailing spacer so last card has breathing room */}
                    <div className="shrink-0 w-6 md:w-12"></div>
                </div>

                <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                    {/* Bottom Section: Typography & List */}
                    <div className="flex flex-col">

                        {/* Left Side: Large Statement */}
                        <div className="flex flex-col lg:col-span-12">
                            <h2 className="text-[2.75rem] md:text-[3.5rem] leading-[1.05] font-sans tracking-[-0.03em] font-medium text-charcoal max-w-xl">
                                Agentic influencers working to grow your brand 24/7.
                            </h2>
                        </div>

                        {/* Right Side: Numbered Features */}
                        <div className="flex flex-col w-full lg:col-span-12 mt-16 lg:mt-24">

                            {/* List Item 01 */}
                            <div className="flex flex-col md:flex-row gap-6 md:gap-8 py-10 border-t border-charcoal/10 first:border-transparent">
                                <span className="text-2xl font-sans tracking-tight w-12 shrink-0">01</span>
                                <h3 className="text-2xl font-sans tracking-tight w-full md:w-[280px] shrink-0 font-normal">Always-On Content Generation</h3>
                                <p className="text-charcoal/60 leading-relaxed text-lg right-align-fix w-full">
                                    Agentic influencers never sleep, creating an endless pipeline of on-brand content tailored to your exact specifications around the clock.
                                </p>
                            </div>

                            {/* List Item 02 */}
                            <div className="flex flex-col md:flex-row gap-6 md:gap-8 py-10 border-t border-charcoal/10">
                                <span className="text-2xl font-sans tracking-tight w-12 shrink-0">02</span>
                                <h3 className="text-2xl font-sans tracking-tight w-full md:w-[280px] shrink-0 font-normal">Infinite Scalability & Localization</h3>
                                <p className="text-charcoal/60 leading-relaxed text-lg right-align-fix w-full">
                                    Deploy your virtual ambassadors globally with native fluency in any language, instantly adapting campaigns for diverse enterprise markets without logistical overhead.
                                </p>
                            </div>

                            {/* List Item 03 */}
                            <div className="flex flex-col md:flex-row gap-6 md:gap-8 py-10 border-t border-charcoal/10">
                                <span className="text-2xl font-sans tracking-tight w-12 shrink-0">03</span>
                                <h3 className="text-2xl font-sans tracking-tight w-full md:w-[280px] shrink-0 font-normal">Data-Driven Performance Tuning</h3>
                                <p className="text-charcoal/60 leading-relaxed text-lg right-align-fix w-full">
                                    Unlike human talent, agentic models analyze real-time engagement metrics to autonomously optimize their messaging, appearance, and delivery for maximum conversion.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
