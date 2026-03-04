"use client";

import { Navbar } from '@/components/sections/Navbar';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ArrowRight, BarChart3, Globe2, ScanFace } from 'lucide-react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(useGSAP);
}

export default function Sandbox2() {
    const heroRef = useRef();
    const lifestyleScrollRef = useRef();

    const scrollLifestyle = (dir) => {
        if (lifestyleScrollRef.current) {
            const card = lifestyleScrollRef.current.querySelector('[data-lifestyle-card]');
            const gap = 32;
            const step = (card ? card.offsetWidth : 600) + gap;
            lifestyleScrollRef.current.scrollBy({ left: dir * step, behavior: 'smooth' });
        }
    };

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } });

        // Stagger in the floating UI modules
        tl.fromTo('.ui-module',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.15, delay: 0.5 }
        );

        // Add a gentle continuous float to the main graphic
        gsap.to('.hero-graphic', {
            y: -15,
            duration: 4,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1
        });
    }, { scope: heroRef });

    return (
        <main className="min-h-screen bg-[#F9FBF9] text-charcoal relative overflow-hidden font-sans">

            <Navbar />

            {/* Subtle background bloom */}
            <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vh] bg-[#A1E8AF] blur-[150px] rounded-full pointer-events-none -z-10 opacity-20"></div>

            <section ref={heroRef} className="pt-40 pb-32">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                        {/* Left: Copy & CTA */}
                        <div className="max-w-xl z-20">
                            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-serif italic text-charcoal tracking-[-0.02em] mb-8">
                                Commerce in your control.
                            </h1>
                            <p className="text-xl md:text-2xl opacity-75 mb-10 leading-relaxed font-light text-charcoal/80">
                                One system to power global trade, virtual influencers, storefronts, and compliance—<span className="italic font-serif">intelligently.</span>
                            </p>
                            <MagneticButton>
                                <button className="bg-[#A1E8AF] text-charcoal px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-[#8CD89A] transition-colors shadow-sm">
                                    Explore the OS <ArrowRight className="w-5 h-5 ml-1" />
                                </button>
                            </MagneticButton>
                        </div>

                        {/* Right: Abstract UI Graphic Representation */}
                        <div className="relative h-[500px] lg:h-[650px] hero-graphic w-full bg-[#EAECE6] rounded-[24px] border border-white shadow-sm overflow-hidden flex items-center justify-center">

                            {/* Abstract Base Interface */}
                            <div className="absolute inset-6 border border-white/60 shadow-sm rounded-card bg-[#F9FBF9]/80 overflow-hidden">
                                {/* Simulated Toolbar */}
                                <div className="h-12 border-b border-white flex items-center px-4 gap-2 bg-white/50 backdrop-blur-sm">
                                    <div className="w-3 h-3 rounded-full bg-charcoal/10"></div>
                                    <div className="w-3 h-3 rounded-full bg-charcoal/10"></div>
                                    <div className="w-3 h-3 rounded-full bg-charcoal/10"></div>
                                </div>

                                {/* Inner Grid Background */}
                                <div className="absolute inset-0 top-12 opacity-[0.03]"
                                    style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                                </div>
                            </div>

                            {/* Floating UI Module 1 (Graph) */}
                            <div className="ui-module absolute top-16 right-10 w-64 bg-white rounded-card shadow-xl border border-charcoal/5 p-5 z-20">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-[#A1E8AF]/20 flex items-center justify-center text-[#A1E8AF]">
                                        <BarChart3 className="w-5 h-5 text-charcoal" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest">Global Revenue</div>
                                        <div className="text-xl font-serif italic text-charcoal leading-none mt-1">+24.8%</div>
                                    </div>
                                </div>
                                <div className="h-20 w-full flex items-end gap-1.5 opacity-80">
                                    {[30, 50, 40, 70, 50, 80, 60, 100].map((h, i) => (
                                        <div key={i} className={`flex-1 rounded-sm ${i === 7 ? 'bg-[#A1E8AF]' : 'bg-charcoal/10'}`} style={{ height: `${h}%` }}></div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating UI Module 2 (Map/Globe) */}
                            <div className="ui-module absolute bottom-16 left-12 w-72 bg-white rounded-card shadow-xl border border-charcoal/5 p-6 z-30">
                                <div className="flex justify-between items-start mb-6 pb-4 border-b border-charcoal/5">
                                    <div className="flex items-center gap-2">
                                        <Globe2 className="w-5 h-5 opacity-40" />
                                        <span className="font-medium text-sm">Active Regions</span>
                                    </div>
                                    <span className="text-[10px] uppercase tracking-wider font-bold bg-[#A1E8AF]/20 text-charcoal px-2 py-1 rounded">Live</span>
                                </div>
                                <div className="space-y-4">
                                    {['North America', 'EMEA', 'APAC'].map((region, i) => (
                                        <div key={i} className="flex justify-between items-center text-sm">
                                            <span className="opacity-60">{region}</span>
                                            <span className="font-serif italic font-medium">{[142, 86, 45][i]} nodes</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating UI Module 3 (Agentic Profile) */}
                            <div className="ui-module absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 bg-white/95 backdrop-blur-md rounded-card shadow-2xl border border-white p-4 z-40 transform hover:scale-105 transition-transform duration-500 cursor-pointer">
                                <div className="aspect-square rounded-card overflow-hidden mb-4 relative bg-charcoal/5">
                                    <img loading="lazy" decoding="async" src="/images/ai-model-2.webp" alt="Agent Profile" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#A1E8AF] shadow-[0_0_12px_rgba(161,232,175,1)]"></div>
                                </div>
                                <div className="flex items-center gap-2 mb-1.5">
                                    <ScanFace className="w-4 h-4 opacity-40 text-charcoal" />
                                    <span className="text-sm font-bold tracking-tight">Persona 08</span>
                                </div>
                                <div className="text-xs opacity-50 mt-1 leading-relaxed">Running 24/7 engagement loop across EU regions</div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* Logo Wall Section */}
            <section className="py-20 border-t border-charcoal/5 bg-white">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                    <p className="text-center text-sm font-bold tracking-widest text-charcoal/40 uppercase mb-12">
                        Powering sovereign intelligence for
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-40 grayscale">
                        {/* Placeholder abstract logos matching the 5-column Swap grid */}
                        <div className="text-xl font-serif italic font-bold">Vera Wang</div>
                        <div className="text-2xl font-sans font-black tracking-tighter">ERDEM</div>
                        <div className="text-xl font-serif tracking-widest">PatBO</div>
                        <div className="text-lg font-sans font-bold tracking-widest uppercase">Pangaia</div>
                        <div className="text-xl font-serif italic">Nili Lotan</div>
                    </div>
                </div>
            </section>

            {/* Intro Grid Section */}
            <section className="py-32 bg-[#F9FBF9] border-t border-charcoal/5">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

                    <div className="max-w-3xl mb-16">
                        <h2 className="text-4xl md:text-6xl font-serif italic text-charcoal mb-6 tracking-tight">
                            Go global. Stay in control.
                        </h2>
                        <p className="text-xl text-charcoal/70 font-light leading-relaxed">
                            Swap lets brands expand internationally without giving up ownership of the customer experience, pricing logic, or operational data.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Grid Card 1 */}
                        <div className="bg-white rounded-card shadow-sm border border-charcoal/5 p-8 flex flex-col h-[400px]">
                            <div className="w-12 h-12 rounded-full bg-[#A1E8AF]/20 flex items-center justify-center text-[#A1E8AF] mb-8">
                                <Globe2 className="w-5 h-5 text-charcoal" />
                            </div>
                            <h3 className="text-2xl font-serif italic text-charcoal mb-4">Unified Operations</h3>
                            <p className="text-charcoal/60 leading-relaxed font-light mt-auto">
                                Centralize global inventory, routing, and returns into a single unfragmented dashboard.
                            </p>
                        </div>

                        {/* Grid Card 2 */}
                        <div className="bg-white rounded-card shadow-sm border border-charcoal/5 p-8 flex flex-col h-[400px]">
                            <div className="w-12 h-12 rounded-full bg-[#A1E8AF]/20 flex items-center justify-center text-[#A1E8AF] mb-8">
                                <BarChart3 className="w-5 h-5 text-charcoal" />
                            </div>
                            <h3 className="text-2xl font-serif italic text-charcoal mb-4">Intelligent Routing</h3>
                            <p className="text-charcoal/60 leading-relaxed font-light mt-auto">
                                Automatically calculate the most profitable fulfillment paths across borders in real-time.
                            </p>
                        </div>

                        {/* Grid Card 3 */}
                        <div className="bg-white rounded-card shadow-sm border border-charcoal/5 p-8 flex flex-col h-[400px]">
                            <div className="w-12 h-12 rounded-full bg-[#A1E8AF]/20 flex items-center justify-center text-[#A1E8AF] mb-8">
                                <ScanFace className="w-5 h-5 text-charcoal" />
                            </div>
                            <h3 className="text-2xl font-serif italic text-charcoal mb-4">Sovereign Compliance</h3>
                            <p className="text-charcoal/60 leading-relaxed font-light mt-auto">
                                Navigate complex international customs, tax, and duty regulations autonomously.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Brand Showcase Marquee (700+ Brands) */}
            <section className="py-24 bg-white overflow-hidden border-t border-charcoal/5">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif italic text-charcoal tracking-tight">
                        700+ brands count on Swap.
                    </h2>
                </div>

                {/* Marquee Wrapper */}
                <div className="relative w-full overflow-hidden flex whitespace-nowrap opacity-60 grayscale">
                    {/* First Track */}
                    <div className="animate-marquee flex items-center gap-16 md:gap-24 px-8 md:px-12">
                        <span className="text-2xl md:text-4xl font-serif italic font-bold">Vera Wang</span>
                        <span className="text-3xl md:text-5xl font-sans font-black tracking-tighter">ERDEM</span>
                        <span className="text-2xl md:text-4xl font-serif tracking-widest">PatBO</span>
                        <span className="text-2xl md:text-3xl font-sans font-bold tracking-widest uppercase">Pangaia</span>
                        <span className="text-2xl md:text-4xl font-serif italic">Nili Lotan</span>
                        <span className="text-2xl md:text-4xl font-serif">Ed Hardy</span>
                        <span className="text-3xl md:text-5xl font-sans font-bold tracking-tight">Drake's</span>
                        <span className="text-2xl md:text-4xl font-serif italic lowercase">youswim</span>
                    </div>
                    {/* Second Track (Duplicate for infinite seamless loop) */}
                    <div className="animate-marquee flex items-center gap-16 md:gap-24 px-8 md:px-12 absolute top-0 left-full">
                        <span className="text-2xl md:text-4xl font-serif italic font-bold">Vera Wang</span>
                        <span className="text-3xl md:text-5xl font-sans font-black tracking-tighter">ERDEM</span>
                        <span className="text-2xl md:text-4xl font-serif tracking-widest">PatBO</span>
                        <span className="text-2xl md:text-3xl font-sans font-bold tracking-widest uppercase">Pangaia</span>
                        <span className="text-2xl md:text-4xl font-serif italic">Nili Lotan</span>
                        <span className="text-2xl md:text-4xl font-serif">Ed Hardy</span>
                        <span className="text-3xl md:text-5xl font-sans font-bold tracking-tight">Drake's</span>
                        <span className="text-2xl md:text-4xl font-serif italic lowercase">youswim</span>
                    </div>
                </div>
            </section>

            {/* Stats Area */}
            <section className="py-32 bg-white">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-4xl md:text-6xl font-serif italic text-charcoal mb-20 tracking-tight max-w-3xl mx-auto">
                        Designed to compound advantage.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        <div className="flex flex-col items-center">
                            <div className="text-6xl md:text-8xl font-serif italic text-[#A1E8AF] leading-none mb-4 tracking-tighter">8<span className="text-4xl">%</span></div>
                            <h3 className="text-lg font-bold text-charcoal mb-2 uppercase tracking-wide">Avg revenue boost</h3>
                            <p className="text-charcoal/60 text-sm max-w-[200px]">From optimized cross-border pricing and routing.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-6xl md:text-8xl font-serif italic text-[#A1E8AF] leading-none mb-4 tracking-tighter">30<span className="text-4xl">%</span></div>
                            <h3 className="text-lg font-bold text-charcoal mb-2 uppercase tracking-wide">Avg savings</h3>
                            <p className="text-charcoal/60 text-sm max-w-[200px]">On international fulfillment and duty compliance duties.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-6xl md:text-8xl font-serif italic text-[#A1E8AF] leading-none mb-4 tracking-tighter">98<span className="text-4xl">%</span></div>
                            <h3 className="text-lg font-bold text-charcoal mb-2 uppercase tracking-wide">Retention</h3>
                            <p className="text-charcoal/60 text-sm max-w-[200px]">Enterprise brands scaling their operations on Swap.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Large Format Lifestyle Carousel */}
            <section className="py-24 bg-cloud-dancer">
                {/* Header row with arrows */}
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-12 flex items-end justify-between">
                    <h2 className="text-4xl md:text-6xl font-serif italic text-charcoal tracking-tight">
                        Swap businesses scale smarter.
                    </h2>
                    {/* Prev / Next arrows */}
                    <div className="flex items-center gap-3 shrink-0 mb-2">
                        <button
                            onClick={() => scrollLifestyle(-1)}
                            className="w-12 h-12 rounded-full border-2 border-charcoal/20 hover:border-charcoal flex items-center justify-center transition-all duration-200 hover:bg-charcoal hover:text-white group"
                            aria-label="Previous"
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-180">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            onClick={() => scrollLifestyle(1)}
                            className="w-12 h-12 rounded-full border-2 border-charcoal/20 hover:border-charcoal flex items-center justify-center transition-all duration-200 hover:bg-charcoal hover:text-white"
                            aria-label="Next"
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Scroll Track — no snap-mandatory so dragging feels free */}
                <div
                    ref={lifestyleScrollRef}
                    className="flex overflow-x-auto gap-6 pl-6 md:pl-12 pr-6 md:pr-12 pb-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollSnapType: 'x mandatory' }}
                >
                    {/* Card 1 */}
                    <div
                        data-lifestyle-card
                        className="shrink-0 w-[55vw] md:w-[38vw] lg:w-[30vw] rounded-card overflow-hidden relative group cursor-pointer"
                        style={{ scrollSnapAlign: 'start', height: '65vh', minHeight: '400px', maxHeight: '680px' }}
                    >
                        <img
                            src="/images/ai-model-1.webp"
                            alt="Brand story 1"
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Gradient overlay with quote */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end p-8">
                            <p className="text-white font-serif italic text-xl md:text-2xl leading-snug mb-3">
                                "An unfair advantage in every market."
                            </p>
                            <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Sarah Jenkins — Ed Hardy</span>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div
                        data-lifestyle-card
                        className="shrink-0 w-[55vw] md:w-[38vw] lg:w-[30vw] rounded-card overflow-hidden relative group cursor-pointer"
                        style={{ scrollSnapAlign: 'start', height: '65vh', minHeight: '400px', maxHeight: '680px' }}
                    >
                        <img
                            src="/images/ai-model-2.webp"
                            alt="Brand story 2"
                            className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end p-8">
                            <p className="text-white font-serif italic text-xl md:text-2xl leading-snug mb-3">
                                "Finally, one OS for every border."
                            </p>
                            <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Ann McNulty — Drake's</span>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div
                        data-lifestyle-card
                        className="shrink-0 w-[55vw] md:w-[38vw] lg:w-[30vw] rounded-card overflow-hidden relative group cursor-pointer"
                        style={{ scrollSnapAlign: 'start', height: '65vh', minHeight: '400px', maxHeight: '680px' }}
                    >
                        <img
                            src="/images/ai-model-3.webp"
                            alt="Brand story 3"
                            className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end p-8">
                            <p className="text-white font-serif italic text-xl md:text-2xl leading-snug mb-3">
                                "Compliance on autopilot. Growth on full send."
                            </p>
                            <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Sophie Kennett — Pangaia</span>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div
                        data-lifestyle-card
                        className="shrink-0 w-[55vw] md:w-[38vw] lg:w-[30vw] rounded-card overflow-hidden relative group cursor-pointer"
                        style={{ scrollSnapAlign: 'start', height: '65vh', minHeight: '400px', maxHeight: '680px' }}
                    >
                        <img
                            src="/images/ai-model-4.webp"
                            alt="Brand story 4"
                            className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end p-8">
                            <p className="text-white font-serif italic text-xl md:text-2xl leading-snug mb-3">
                                "The returns experience became our brand differentiator."
                            </p>
                            <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Marcus Reid — Nili Lotan</span>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div
                        data-lifestyle-card
                        className="shrink-0 w-[55vw] md:w-[38vw] lg:w-[30vw] rounded-card overflow-hidden relative group cursor-pointer"
                        style={{ scrollSnapAlign: 'start', height: '65vh', minHeight: '400px', maxHeight: '680px' }}
                    >
                        <img
                            src="/images/ai-model-5.webp"
                            alt="Brand story 5"
                            className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end p-8">
                            <p className="text-white font-serif italic text-xl md:text-2xl leading-snug mb-3">
                                "Global reach, zero headaches."
                            </p>
                            <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Yuki Tanaka — ERDEM</span>
                        </div>
                    </div>

                    {/* Trailing spacer */}
                    <div className="shrink-0 w-6"></div>
                </div>
            </section>

            {/* Built for operators Carousel */}
            <section className="py-24 bg-[#EAECE6] overflow-hidden">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-12">
                    <h2 className="text-3xl md:text-5xl font-serif italic text-charcoal tracking-tight">
                        Built for operators.
                    </h2>
                </div>

                {/* Horizontal CSS Scroll Snap Container */}
                <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 px-6 md:px-12 gap-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

                    {/* Testimonial 1 */}
                    <div className="snap-start shrink-0 w-[85vw] md:w-[60vw] lg:w-[40vw] bg-white rounded-card shadow-lg p-10 md:p-12 border border-white flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500">
                        <div>
                            <div className="text-[#A1E8AF] mb-8">
                                <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor">
                                    <path d="M12.9231 0C5.77457 0 0 5.67283 0 12.6562C0 19.6397 5.77457 25.3125 12.9231 25.3125C13.5202 25.3125 14.1029 25.2673 14.673 25.1852C13.562 28.0906 10.7431 30 7.39064 30V30C15.8208 30 22.1538 23.0039 22.1538 14.7656V0H12.9231ZM30.7692 0C23.6207 0 17.8462 5.67283 17.8462 12.6562C17.8462 19.6397 23.6207 25.3125 30.7692 25.3125C31.3664 25.3125 31.949 25.2673 32.5192 25.1852C31.4082 28.0906 28.5892 30 25.2368 30V30C33.667 30 40 23.0039 40 14.7656V0H30.7692Z" />
                                </svg>
                            </div>
                            <p className="text-xl md:text-2xl text-charcoal leading-relaxed font-light mb-10">
                                "Swap has fundamentally transformed how we approach international expansion. It consolidated five disparate systems into one intelligent OS."
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-charcoal/10 overflow-hidden">
                                <img loading="lazy" decoding="async" src="/images/ai-model-1.webp" alt="Chris" className="w-full h-full object-cover grayscale" />
                            </div>
                            <div>
                                <div className="font-bold text-charcoal">Chris Forscutt</div>
                                <div className="text-sm text-charcoal/60">Director of Operations, Vera Wang</div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="snap-start shrink-0 w-[85vw] md:w-[60vw] lg:w-[40vw] bg-white rounded-card shadow-lg p-10 md:p-12 border border-white flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500">
                        <div>
                            <div className="text-[#A1E8AF] mb-8">
                                <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor">
                                    <path d="M12.9231 0C5.77457 0 0 5.67283 0 12.6562C0 19.6397 5.77457 25.3125 12.9231 25.3125C13.5202 25.3125 14.1029 25.2673 14.673 25.1852C13.562 28.0906 10.7431 30 7.39064 30V30C15.8208 30 22.1538 23.0039 22.1538 14.7656V0H12.9231ZM30.7692 0C23.6207 0 17.8462 5.67283 17.8462 12.6562C17.8462 19.6397 23.6207 25.3125 30.7692 25.3125C31.3664 25.3125 31.949 25.2673 32.5192 25.1852C31.4082 28.0906 28.5892 30 25.2368 30V30C33.667 30 40 23.0039 40 14.7656V0H30.7692Z" />
                                </svg>
                            </div>
                            <p className="text-xl md:text-2xl text-charcoal leading-relaxed font-light mb-10">
                                "The agentic capabilities mean we don't just react to market changes, the system proactively adjusts pricing and routing for us."
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-charcoal/10 overflow-hidden">
                                <img loading="lazy" decoding="async" src="/images/ai-model-3.webp" alt="Sophie" className="w-full h-full object-cover grayscale" />
                            </div>
                            <div>
                                <div className="font-bold text-charcoal">Sophie Kennett</div>
                                <div className="text-sm text-charcoal/60">Head of Ecommerce, Pangaia</div>
                            </div>
                        </div>
                    </div>

                    {/* Empty spacing block */}
                    <div className="snap-start shrink-0 w-6 bg-transparent"></div>

                </div>
            </section>
            {/* Interactive Feature Grid */}
            <section className="py-32 bg-white">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-6xl font-serif italic text-charcoal mb-6 tracking-tight">
                            Every market. Every customer.<br />One source of truth.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Feature Card 1 */}
                        <div className="group rounded-card bg-[#F9FBF9] border border-charcoal/5 overflow-hidden flex flex-col cursor-pointer pb-8">
                            <div className="h-[300px] w-full p-8 flex items-end justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-[#A1E8AF]/10 to-transparent"></div>
                                <div className="w-[80%] h-[80%] bg-white rounded-t-xl shadow-2xl border border-charcoal/5 p-6 transform transition-transform duration-700 group-hover:scale-105 translate-y-4 group-hover:translate-y-2">
                                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-charcoal/5">
                                        <span className="font-bold text-sm">Top Markets</span>
                                        <span className="text-xs text-[#A1E8AF] font-bold tracking-wider uppercase">Live Data</span>
                                    </div>
                                    <div className="space-y-4">
                                        {['United States', 'United Kingdom', 'Germany'].map((country, i) => (
                                            <div key={i} className="flex justify-between items-center text-sm">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-6 h-4 bg-charcoal/10 rounded-sm"></div>
                                                    <span className="opacity-80">{country}</span>
                                                </div>
                                                <span className="font-bold">${[12.4, 8.2, 5.1][i]}M</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="px-10 pt-6">
                                <h3 className="text-2xl font-serif italic text-charcoal mb-3">Consolidate every detail</h3>
                                <p className="text-charcoal/60 leading-relaxed font-light mb-6">Unify your disparate regional stores into a single, omni-channel global engine.</p>
                                <div className="flex items-center gap-2 text-[#A1E8AF] font-bold text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                                    Explore <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>

                        {/* Feature Card 2 */}
                        <div className="group rounded-card bg-[#F9FBF9] border border-charcoal/5 overflow-hidden flex flex-col cursor-pointer pb-8">
                            <div className="h-[300px] w-full p-8 flex items-end justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/5 to-transparent"></div>
                                <div className="w-[80%] h-[80%] bg-white rounded-t-xl shadow-2xl border border-charcoal/5 p-6 transform transition-transform duration-700 group-hover:scale-105 translate-y-4 group-hover:translate-y-2 flex flex-col justify-center items-center text-center">
                                    <div className="text-4xl font-serif italic text-[#A1E8AF] mb-2">€84.00</div>
                                    <div className="text-sm font-bold opacity-40 uppercase tracking-widest mb-4">EU Price Point</div>
                                    <div className="bg-charcoal text-white text-xs px-4 py-2 rounded-full font-medium">Auto-Adjusting for VAT</div>
                                </div>
                            </div>
                            <div className="px-10 pt-6">
                                <h3 className="text-2xl font-serif italic text-charcoal mb-3">Sovereign Pricing</h3>
                                <p className="text-charcoal/60 leading-relaxed font-light mb-6">Automatically calculate and display duties, taxes, and shipping at checkout.</p>
                                <div className="flex items-center gap-2 text-[#A1E8AF] font-bold text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                                    Explore <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA / Demo Form */}
            <section className="py-32 bg-[#F9FBF9] border-t border-charcoal/5">
                <div className="max-w-screen-xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="max-w-xl">
                            <h2 className="text-5xl md:text-7xl font-serif italic text-charcoal mb-6 tracking-tight leading-[1.1]">
                                Ready to scale globally?
                            </h2>
                            <p className="text-xl text-charcoal/70 font-light leading-relaxed mb-10">
                                Book a free, 15-minute demo to see your operations streamlined by the power of Swap.
                            </p>
                        </div>

                        {/* Form Container */}
                        <div className="bg-white rounded-card shadow-2xl border border-charcoal/5 p-8 md:p-12">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-charcoal/60 uppercase tracking-wider">First Name</label>
                                        <input type="text" className="w-full bg-[#F9FBF9] border border-charcoal/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#A1E8AF] transition-colors" placeholder="Jane" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-charcoal/60 uppercase tracking-wider">Last Name</label>
                                        <input type="text" className="w-full bg-[#F9FBF9] border border-charcoal/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#A1E8AF] transition-colors" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-charcoal/60 uppercase tracking-wider">Work Email</label>
                                    <input type="email" className="w-full bg-[#F9FBF9] border border-charcoal/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#A1E8AF] transition-colors" placeholder="jane@company.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-charcoal/60 uppercase tracking-wider">Company Website</label>
                                    <input type="url" className="w-full bg-[#F9FBF9] border border-charcoal/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#A1E8AF] transition-colors" placeholder="https://company.com" />
                                </div>
                                <button className="w-full bg-[#A1E8AF] text-charcoal py-4 rounded-lg font-bold text-lg hover:bg-[#8CD89A] transition-colors mt-4">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* Knowledge Base / Resources Grid */}
            <section className="py-24 bg-[#EAECE6] border-t border-charcoal/5">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                    <div className="flex justify-between items-end mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif italic text-charcoal tracking-tight max-w-xl">
                            Knowledge for the next era of commerce.
                        </h2>
                        <button className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#A1E8AF] hover:-translate-y-1 transition-transform">
                            View All <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Resource 1 */}
                        <div className="group rounded-card bg-white overflow-hidden shadow-sm border border-charcoal/5 cursor-pointer flex flex-col h-full">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-transparent transition-colors z-10"></div>
                                <img loading="lazy" decoding="async" src="/images/ai-model-1.webp" alt="Article" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="text-xs font-bold text-[#A1E8AF] uppercase tracking-widest mb-4">Insights</div>
                                <h3 className="text-xl font-serif italic text-charcoal mb-4 group-hover:text-[#A1E8AF] transition-colors leading-snug">What Is Conversational Commerce?</h3>
                                <p className="text-sm text-charcoal/60 leading-relaxed mb-6 mt-auto">How AI models are changing the way users research products.</p>
                                <div className="text-xs font-bold text-charcoal/40 uppercase tracking-widest">Read Article →</div>
                            </div>
                        </div>

                        {/* Resource 2 */}
                        <div className="group rounded-card bg-white overflow-hidden shadow-sm border border-charcoal/5 cursor-pointer flex flex-col h-full">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-transparent transition-colors z-10"></div>
                                <img loading="lazy" decoding="async" src="/images/ai-model-2.webp" alt="Article" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="text-xs font-bold text-[#A1E8AF] uppercase tracking-widest mb-4">Playbook</div>
                                <h3 className="text-xl font-serif italic text-charcoal mb-4 group-hover:text-[#A1E8AF] transition-colors leading-snug">7 Challenges Enterprise Brands Face</h3>
                                <p className="text-sm text-charcoal/60 leading-relaxed mb-6 mt-auto">Navigating cross-border friction points effectively.</p>
                                <div className="text-xs font-bold text-charcoal/40 uppercase tracking-widest">Read Article →</div>
                            </div>
                        </div>

                        {/* Resource 3 */}
                        <div className="group rounded-card bg-white overflow-hidden shadow-sm border border-charcoal/5 cursor-pointer flex flex-col h-full">
                            <div className="h-48 overflow-hidden relative bg-charcoal flex items-center justify-center">
                                <div className="text-[#A1E8AF] p-8 text-center font-serif italic text-2xl">Agentic UI</div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="text-xs font-bold text-[#A1E8AF] uppercase tracking-widest mb-4">Engineering</div>
                                <h3 className="text-xl font-serif italic text-charcoal mb-4 group-hover:text-[#A1E8AF] transition-colors leading-snug">How Agentic AI is giving commerce a new MO</h3>
                                <p className="text-sm text-charcoal/60 leading-relaxed mb-6 mt-auto">A deep dive into Sovereign routing models.</p>
                                <div className="text-xs font-bold text-charcoal/40 uppercase tracking-widest">Read Article →</div>
                            </div>
                        </div>

                        {/* Resource 4 */}
                        <div className="group rounded-card bg-white overflow-hidden shadow-sm border border-charcoal/5 cursor-pointer flex flex-col h-full">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-transparent transition-colors z-10"></div>
                                <img loading="lazy" decoding="async" src="/images/ai-model-3.webp" alt="Article" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="text-xs font-bold text-[#A1E8AF] uppercase tracking-widest mb-4">Report</div>
                                <h3 className="text-xl font-serif italic text-charcoal mb-4 group-hover:text-[#A1E8AF] transition-colors leading-snug">ROI: The key to unlock retail investment</h3>
                                <p className="text-sm text-charcoal/60 leading-relaxed mb-6 mt-auto">Download the Q4 economic breakdown for 2026.</p>
                                <div className="text-xs font-bold text-charcoal/40 uppercase tracking-widest">Download →</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Multi-Column Footer Grid */}
            <footer className="bg-[#F0F0EC] pt-24 pb-12 border-t border-charcoal/10 relative overflow-hidden">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">

                    {/* Top Call To Action */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 pb-16 border-b border-charcoal/10 gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-5xl md:text-7xl font-serif italic text-charcoal mb-6 tracking-tight leading-[1.1]">
                                Ready to scale globally?
                            </h2>
                            <p className="text-xl text-charcoal/70 font-light">
                                Take the OS for a test flight.
                            </p>
                        </div>
                        <div className="w-full md:w-auto">
                            <div className="bg-white rounded-full p-2 flex items-center shadow-sm border border-charcoal/5 w-full md:w-[400px]">
                                <input type="email" placeholder="Work Email" className="bg-transparent border-none flex-grow px-6 focus:outline-none text-charcoal placeholder-charcoal/40" />
                                <button className="bg-[#A1E8AF] hover:bg-[#8CD89A] text-charcoal px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-colors whitespace-nowrap">
                                    Book Demo
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Matrix */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-16 mb-64">
                        {/* Col 1 */}
                        <div>
                            <h4 className="font-bold text-sm text-charcoal mb-6">Products</h4>
                            <ul className="space-y-4 text-sm text-charcoal/70 font-light">
                                <li className="hover:text-charcoal cursor-pointer">Global</li>
                                <li className="hover:text-charcoal cursor-pointer">Compliance</li>
                                <li className="hover:text-charcoal cursor-pointer">Returns</li>
                                <li className="hover:text-charcoal cursor-pointer">Inventory</li>
                                <li className="hover:text-charcoal cursor-pointer">Clear by Swap</li>
                            </ul>
                        </div>
                        {/* Col 2 */}
                        <div>
                            <h4 className="font-bold text-sm text-charcoal mb-6">Platform</h4>
                            <ul className="space-y-4 text-sm text-charcoal/70 font-light">
                                <li className="hover:text-charcoal cursor-pointer">Agentic Storefront</li>
                                <li className="hover:text-charcoal cursor-pointer">Industries</li>
                                <li className="hover:text-charcoal cursor-pointer">Ecommerce</li>
                                <li className="hover:text-charcoal cursor-pointer">Enterprise</li>
                            </ul>
                        </div>
                        {/* Col 3 */}
                        <div>
                            <h4 className="font-bold text-sm text-charcoal mb-6">Tools</h4>
                            <ul className="space-y-4 text-sm text-charcoal/70 font-light">
                                <li className="hover:text-charcoal cursor-pointer">ROI Calculator</li>
                                <li className="hover:text-charcoal cursor-pointer">Compare Us</li>
                            </ul>
                            <h4 className="font-bold text-sm text-charcoal mt-8 mb-6">Learn</h4>
                            <ul className="space-y-4 text-sm text-charcoal/70 font-light">
                                <li className="hover:text-charcoal cursor-pointer">Tax & Tariffs</li>
                                <li className="hover:text-charcoal cursor-pointer">Customer Stories</li>
                            </ul>
                        </div>
                        {/* Col 4 */}
                        <div>
                            <h4 className="font-bold text-sm text-charcoal mb-6">Reports</h4>
                            <ul className="space-y-4 text-sm text-charcoal/70 font-light">
                                <li className="hover:text-charcoal cursor-pointer">Tariff Turmoil</li>
                                <li className="hover:text-charcoal cursor-pointer">Unified Commerce</li>
                                <li className="hover:text-charcoal cursor-pointer">AI & Ecommerce</li>
                                <li className="hover:text-charcoal cursor-pointer">US Sales Tax Guide</li>
                            </ul>
                        </div>
                        {/* Col 5 */}
                        <div>
                            <h4 className="font-bold text-sm text-charcoal mb-6">Company</h4>
                            <ul className="space-y-4 text-sm text-charcoal/70 font-light">
                                <li className="hover:text-charcoal cursor-pointer">Careers</li>
                                <li className="hover:text-charcoal cursor-pointer">Blog</li>
                                <li className="hover:text-charcoal cursor-pointer">FAQ's</li>
                            </ul>
                        </div>
                        {/* Col 6 */}
                        <div>
                            <h4 className="font-bold text-sm text-charcoal mb-6">Socials</h4>
                            <ul className="space-y-4 text-sm text-charcoal/70 font-light">
                                <li className="hover:text-charcoal cursor-pointer">Instagram</li>
                                <li className="hover:text-charcoal cursor-pointer">Linkedin</li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Legal bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center text-xs text-charcoal/50 border-t border-charcoal/10 pt-8 mt-16 relative z-10">
                        <div className="text-2xl font-serif italic font-bold text-charcoal mb-4 md:mb-0">Agentic Commerce</div>
                        <div className="flex gap-6">
                            <span className="hover:text-charcoal cursor-pointer transition-colors">Privacy Policy</span>
                            <span className="hover:text-charcoal cursor-pointer transition-colors">Cookies Policy</span>
                        </div>
                    </div>
                </div>

                {/* Simulated Hand-drawn Illustration / Decorative SVG overlay at the absolute bottom */}
                <div className="absolute bottom-0 left-0 w-full h-[250px] pointer-events-none opacity-20 flex justify-between items-end px-12 z-0">
                    <svg width="200" height="200" viewBox="0 0 100 100" className="text-charcoal fill-current">
                        <path d="M10,90 L10,50 L50,20 L90,50 L90,90 Z" opacity="0.5" />
                        <path d="M30,90 L30,60 L50,60 L50,90 Z" />
                    </svg>
                    <svg width="400" height="150" viewBox="0 0 200 100" className="text-charcoal fill-current">
                        <circle cx="50" cy="50" r="30" opacity="0.3" />
                        <rect x="120" y="30" width="40" height="70" opacity="0.6" />
                    </svg>
                    <svg width="150" height="150" viewBox="0 0 100 100" className="text-charcoal fill-current hidden md:block">
                        <polygon points="50,10 90,90 10,90" opacity="0.4" />
                    </svg>
                </div>
            </footer>
        </main>
    );
}
