import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Hero = () => {
    const containerRef = useRef(null);
    const headingRef = useRef(null);
    const subRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });
            tl.fromTo(headingRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1 })
                .fromTo(subRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, "-=1");
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} data-nav-theme="dark" className="relative min-h-[100svh] w-full flex flex-col justify-end pb-32 md:pb-52 overflow-hidden bg-charcoal">
            <img
                src="images/agentic-agent-hero.jpg"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
            />

            <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-12">
                <div className="max-w-4xl text-left space-y-6 md:space-y-8">
                    <div ref={headingRef} className="flex flex-col text-left">
                        <span className="text-xl md:text-2xl font-sans italic uppercase tracking-widest text-electric-mint block mb-2">The Era of</span>
                        <h1 className="inline-block text-5xl md:text-8xl lg:text-[7.5rem] font-serif italic font-bold text-[#85d8ac] leading-[1] tracking-normal whitespace-nowrap">
                            Agentic Commerce.
                        </h1>
                    </div>
                    <p ref={subRef} className="text-lg md:text-xl text-gray-300 font-mono max-w-2xl border-l-2 border-dew-mint/30 pl-6 leading-relaxed">
                        A sovereign visual intelligence foundry designed to vaporize the legacy management class by providing high-fidelity visual supply chains and autonomous growth systems.
                    </p>

                </div>
            </div>
        </section>
    );
};