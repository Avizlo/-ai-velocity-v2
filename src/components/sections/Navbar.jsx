"use client";

import { useRef, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MagneticButton } from '@/components/ui/MagneticButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export const Navbar = () => {
    const pathname = usePathname();
    const navRef = useRef(null);
    const dropdownRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [navTheme, setNavTheme] = useState('dark'); // 'dark' = light text on dark bg, 'light' = dark text on light bg
    const lastScrollY = useRef(0);

    useLayoutEffect(() => {
        if (activeDropdown) {
            gsap.killTweensOf(dropdownRef.current);
            gsap.set(dropdownRef.current, { display: 'block' });
            gsap.fromTo(dropdownRef.current,
                { height: 0, opacity: 0 },
                { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' }
            );
        } else if (dropdownRef.current) {
            gsap.killTweensOf(dropdownRef.current);
            gsap.to(dropdownRef.current, {
                height: 0, opacity: 0, duration: 0.4, ease: 'power2.out',
                onComplete: () => {
                    if (dropdownRef.current) gsap.set(dropdownRef.current, { display: 'none' });
                }
            });
        }
    }, [activeDropdown]);

    const handleMouseEnter = (name) => {
        if (name === 'Agentic Commerce' || name === 'Marketing' || name === 'Strategy') {
            setActiveDropdown(name);
        } else {
            setActiveDropdown(null);
        }
    };

    useLayoutEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Toggle Glassmorphism past 10px
            if (currentScrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Scroll Direction Logic
            if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
                // Scrolling down -> Hide (unless mobile menu is open)
                if (!isMobileMenuOpen) setIsVisible(false);
            } else if (currentScrollY < lastScrollY.current) {
                // Scrolling up -> Show
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobileMenuOpen]);

    // IntersectionObserver — detect which section is at the top and switch nav theme
    useLayoutEffect(() => {
        const themedSections = document.querySelectorAll('[data-nav-theme]');
        if (!themedSections.length) return;

        // Set initial theme from first tagged element immediately
        const firstThemed = themedSections[0];
        if (firstThemed) setNavTheme(firstThemed.dataset.navTheme);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setNavTheme(entry.target.dataset.navTheme);
                    }
                });
            },
            {
                // Fire when section crosses the navbar (top ~80px)
                rootMargin: '-80px 0px -80% 0px',
                threshold: 0,
            }
        );

        themedSections.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [pathname]);

    const categories = [
        { name: 'Agentic Commerce', path: '/agentic-commerce' },
        { name: 'Marketing', path: '/agentic-marketing' },
        { name: 'Payments', path: '/agentic-payments' },
        { name: 'AEO', path: '/agentic-aeo' },
        { name: 'Strategy', path: '/agentic-strategy' }
    ];

    return (
        <>
            <nav
                ref={navRef}
                onMouseLeave={() => setActiveDropdown(null)}
                className={`fixed top-0 left-0 right-0 z-50 px-6 py-6 flex flex-col items-center transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] font-sans ${isVisible ? 'translate-y-0' : '-translate-y-full'
                    } ${isScrolled || isMobileMenuOpen || activeDropdown
                        ? 'bg-white backdrop-blur-md border-b border-charcoal/10 text-charcoal/75'
                        : pathname === '/'
                            ? 'bg-transparent border-b border-transparent text-white'
                            : 'bg-white border-b border-charcoal/10 text-charcoal/80'
                    }`}
            >
                <div className="flex items-center justify-between w-full max-w-screen-2xl px-6 md:px-12 relative">

                    {/* Left Group: Logo + Desktop Links */}
                    <div className="flex items-center justify-start gap-16">
                        {/* Logo / Brand - Using Serif for emotion/branding */}
                        <Link href="/" className="flex items-center gap-3 group relative z-50">
                            <span className="font-serif italic text-2xl tracking-wide opacity-90">
                                AI VELOCITY
                            </span>
                        </Link>

                        {/* Desktop Links - Using Sans for structure */}
                        <div className="hidden lg:flex items-center gap-8 text-sm font-medium opacity-90 tracking-widest">
                            {categories.map((cat) => (
                                <MagneticButton key={cat.name} className="cursor-pointer group relative">
                                    <Link
                                        href={cat.path}
                                        className="block transition-colors duration-300 nav-link-text"
                                        onMouseEnter={() => handleMouseEnter(cat.name)}
                                    >
                                        {cat.name}
                                        {/* Center-out underline */}
                                        <span className="absolute -bottom-1 left-1/2 h-[1px] w-0 bg-current -translate-x-1/2 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </MagneticButton>
                            ))}
                        </div>
                    </div>

                    {/* Desktop CTA & Mobile Menu Toggle */}
                    <div className="flex items-center gap-4 relative z-50">
                        <div className="hidden lg:block">
                            <MagneticButton>
                                <button className="bg-charcoal text-white px-6 py-2 rounded-full font-mono text-sm font-bold tracking-wide hover:bg-dew-mint hover:text-charcoal transition-colors duration-300">
                                    Initialize
                                </button>
                            </MagneticButton>
                        </div>

                        <button
                            className={`lg:hidden transition-colors ${isScrolled || isMobileMenuOpen || activeDropdown
                                ? 'text-charcoal/80 hover:text-charcoal'
                                : navTheme === 'light'
                                    ? 'text-charcoal/80 hover:text-charcoal'
                                    : 'text-white/80 hover:text-white'
                                }`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                </div>

                {/* Mega Menu Container */}
                <div
                    ref={dropdownRef}
                    className={`absolute top-full left-0 w-full backdrop-blur-md border-b overflow-hidden hidden shadow-2xl transition-colors duration-300 ${activeDropdown === 'Marketing'
                        ? 'bg-white border-black/10'
                        : 'bg-white border-charcoal/10'
                        }`}
                >
                    <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-16">
                        {activeDropdown === 'Agentic Commerce' && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-charcoal/80">
                                <div>
                                    <h4 className="text-charcoal font-sans font-medium mb-3 text-lg">Visual Search</h4>
                                    <p className="font-mono text-xs leading-relaxed opacity-70">Pioneering image-first discovery models that bypass text inputs and predict consumer intent at the pixel level.</p>
                                </div>
                                <div>
                                    <h4 className="text-charcoal font-sans font-medium mb-3 text-lg">Predictive Inventory</h4>
                                    <p className="font-mono text-xs leading-relaxed opacity-70">Autonomous staging and allocation run entirely by sovereign AI, yielding absolute margin maximization.</p>
                                </div>
                                <div>
                                    <h4 className="text-charcoal font-sans font-medium mb-3 text-lg">Zero-Friction Checkout</h4>
                                    <p className="font-mono text-xs leading-relaxed opacity-70">Sub-second financial routing and biometric validation protocols that eliminate behavioral drop-off.</p>
                                </div>
                            </div>
                        )}
                        {activeDropdown === 'Marketing' && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-charcoal/80">
                                <div>
                                    <h4 className="text-charcoal font-sans font-medium mb-3 text-lg">Influence</h4>
                                    <div className="flex flex-col gap-3 font-mono text-xs opacity-90">
                                        <span className="opacity-60 cursor-default">Virtual Influencers</span>
                                        <span className="opacity-60 cursor-default">Social Agents</span>
                                        <span className="opacity-60 cursor-default">Persona Engineering</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-charcoal font-sans font-medium mb-3 text-lg">Studio</h4>
                                    <div className="flex flex-col gap-3 font-mono text-xs opacity-90">
                                        <Link href="/agentic-photoshoots" className="text-dew-mint font-bold hover:text-dew-mint-hover transition-colors duration-300">Agentic AI Photoshoots</Link>
                                        <span className="opacity-60 cursor-default">Digital Lookbooks</span>
                                        <span className="opacity-60 cursor-default">AI Studio Production</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-charcoal font-sans font-medium mb-3 text-lg">Strategy</h4>
                                    <div className="flex flex-col gap-3 font-mono text-xs opacity-90">
                                        <span className="opacity-60 cursor-default">AEO Strategy</span>
                                        <span className="opacity-60 cursor-default">Content Engines</span>
                                        <span className="opacity-60 cursor-default">Market Capture</span>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeDropdown === 'Strategy' && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-charcoal/80">
                                <div>
                                    <h4 className="text-charcoal font-sans font-medium mb-3 text-lg">War Gaming</h4>
                                    <p className="font-mono text-xs leading-relaxed opacity-70">Live-simulation market defense grids. Running millions of deterministic models to secure category dominance.</p>
                                </div>
                                <div>
                                    <h4 className="text-charcoal font-sans font-medium mb-3 text-lg">Entity Structuring</h4>
                                    <p className="font-mono text-xs leading-relaxed opacity-70">Cryptographic anchoring of your brand across all unified LLM knowledge graphs.</p>
                                </div>
                                <div>
                                    <h4 className="text-charcoal font-sans font-medium mb-3 text-lg">Capital Allocation</h4>
                                    <p className="font-mono text-xs leading-relaxed opacity-70">Machine-to-machine financial routing and algorithmic yield maximization directly embedded in supply lines.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* Mobile Full-Screen Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-cloud-dancer flex flex-col justify-center items-center transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                <div className="flex flex-col items-center gap-8 text-xl font-medium tracking-widest text-charcoal/90">
                    {categories.map((cat) => (
                        <Link key={cat.name} href={cat.path} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-dew-mint transition-colors duration-300">
                            {cat.name}
                        </Link>
                    ))}
                    <button className="mt-8 bg-charcoal text-white px-8 py-3 rounded-full font-mono text-base font-bold tracking-wide hover:bg-dew-mint hover:text-charcoal transition-colors duration-300">
                        Initialize
                    </button>
                </div>
            </div>
        </>
    );
};
