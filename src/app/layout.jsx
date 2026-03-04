import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Inter, Instrument_Serif, Instrument_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
});

const instrumentSerif = Instrument_Serif({
    weight: ['400'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    variable: '--font-instrument-serif',
    display: 'swap'
});

const instrumentSans = Instrument_Sans({
    subsets: ['latin'],
    variable: '--font-instrument-sans',
    display: 'swap'
});

const agenticTimes = localFont({
    src: [
        {
            path: '../../public/fonts/times-italic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../public/fonts/times-italic.ttf',
            weight: '700',
            style: 'italic',
        }
    ],
    variable: '--font-agentic-times',
    display: 'swap',
});

export const metadata = {
    title: 'Ai Velocity Foundry | Leading the Era of Agentic Commerce',
    description: 'Master the shift to Agentic Commerce and Marketing with Ai Velocity. We provide the tools for the next generation of commerce.',
    keywords: 'Agentic Commerce, Agentic Marketing, Sovereign Visual Intelligence, Autonomous Growth',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} ${instrumentSans.variable} ${agenticTimes.variable}`}>
            <body>
                <div className="relative w-full min-h-screen bg-[#F0F0EC] text-[#1A1A1A]">
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
