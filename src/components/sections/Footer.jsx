import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="bg-charcoal text-white pt-24 pb-8 font-sans">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

                {/* Main 4-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">

                    {/* Column 1: Get Started */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-white/90 text-lg font-medium tracking-wide">Get Started</h4>
                        <a href="mailto:hello@studio.com" className="text-white/60 hover:text-white transition-colors duration-300">
                            hello@studio.com
                        </a>
                    </div>

                    {/* Column 2: Navigate */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-white/90 text-lg font-medium tracking-wide">Navigate</h4>
                        <div className="flex flex-col gap-3">
                            <Link href="/" className="text-white/60 hover:text-white transition-colors duration-300 w-fit">Home</Link>
                            <Link href="/agentic-commerce" className="text-white/60 hover:text-white transition-colors duration-300 w-fit">About</Link>
                            <Link href="/portfolio" className="text-white/60 hover:text-white transition-colors duration-300 w-fit">Portfolio</Link>
                            <Link href="#contact" className="text-white/60 hover:text-white transition-colors duration-300 w-fit">Contact</Link>
                        </div>
                    </div>

                    {/* Column 3: Follow */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-white/90 text-lg font-medium tracking-wide">Follow</h4>
                        <div className="flex flex-col gap-3">
                            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 w-fit">Instagram</a>
                            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 w-fit">Behance</a>
                            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 w-fit">TikTok</a>
                            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 w-fit">Facebook</a>
                            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 w-fit">Dribbble</a>
                        </div>
                    </div>

                    {/* Column 4: Headquarter */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-white/90 text-lg font-medium tracking-wide">Headquarter</h4>
                        <div className="flex flex-col gap-3 text-white/60">
                            <p>4872 Mark Columbus Blvd</p>
                            <p>New York, 10035</p>
                            <p className="mt-2">(212) 555-123456</p>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-white/40 tracking-wide">
                    <p>©2026</p>
                    <p>All Rights Reserved</p>
                    <Link href="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
};
