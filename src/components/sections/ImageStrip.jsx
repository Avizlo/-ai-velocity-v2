import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const images = [
    { src: '/images/ai-model-1.webp', alt: 'AI Model 1' },
    { src: '/images/ai-model-2.webp', alt: 'AI Model 2' },
    { src: '/images/ai-model-3.webp', alt: 'AI Model 3' },
    { src: '/images/ai-model-4.webp', alt: 'AI Model 4' },
    { src: '/images/ai-model-5.webp', alt: 'AI Model 5' },
    { src: '/images/antesta-ai-model.jpg', alt: 'AI Model 6' },
    { src: '/images/good-univerce-ai.jpg', alt: 'AI Model 7' },
];

export const ImageStrip = () => {
    const trackRef = useRef(null);

    const scroll = (dir) => {
        if (trackRef.current) {
            trackRef.current.scrollBy({ left: dir === 'left' ? -420 : 420, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-16 bg-cloud-dancer relative overflow-hidden">

            {/* Arrow — Left */}
            <button
                onClick={() => scroll('left')}
                aria-label="Scroll left"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-charcoal/10 flex items-center justify-center text-charcoal shadow-sm hover:bg-charcoal hover:text-white transition-all duration-200"
            >
                <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            </button>

            {/* Arrow — Right */}
            <button
                onClick={() => scroll('right')}
                aria-label="Scroll right"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-charcoal/10 flex items-center justify-center text-charcoal shadow-sm hover:bg-charcoal hover:text-white transition-all duration-200"
            >
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>

            {/* Scrollable image track — bleeds off both edges */}
            <div
                ref={trackRef}
                className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                style={{ paddingLeft: 'max(1rem, calc((100vw - 1536px) / 2 + 1.5rem))', paddingRight: 'max(1rem, calc((100vw - 1536px) / 2 + 1.5rem))' }}
            >
                {images.map((img, i) => (
                    <div
                        key={i}
                        className="relative shrink-0 snap-start rounded-card overflow-hidden bg-charcoal/5"
                        style={{ width: 'clamp(220px, 24vw, 340px)', aspectRatio: '3/4' }}
                    >
                        <img loading="lazy" decoding="async"
                            src={img.src}
                            alt={img.alt}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                ))}
            </div>

        </section>
    );
};
