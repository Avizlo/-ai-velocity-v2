import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata = {
    title: 'Ai Velocity Foundry | Leading the Era of Agentic Commerce',
    description: 'Master the shift to Agentic Commerce and Marketing with Ai Velocity. We provide the tools for the next generation of commerce.',
    keywords: 'Agentic Commerce, Agentic Marketing, Sovereign Visual Intelligence, Autonomous Growth',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable}`}>
            <head>
                <link rel="preload" href="/fonts/times-italic.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
            </head>
            <body className="font-sans antialiased bg-charcoal" suppressHydrationWarning>
                <div className="relative w-full min-h-screen bg-[#F0F0EC] text-[#1A1A1A] z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <Navbar />
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
