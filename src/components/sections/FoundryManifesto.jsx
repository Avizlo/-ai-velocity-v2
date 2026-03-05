"use client";

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const defaultTitle = "The x402 Sovereign Settlement Architecture";

const defaultLeadIn = [
    "The global trade landscape is currently undergoing a structural fracture that renders traditional retail models completely obsolete in the face of autonomous shifts. For three decades, our operations have survived the horizontal rain of the North Sea and the relentless grit of the Team Ramen era at Mt. Hood[cite: 66, 1092]. We have successfully scaled logistics to ship physical artifacts to sixty different countries every month by intentionally ignoring the bloated bureaucracy of the managerial class[cite: 1092].",
    "Agentic commerce represents the fundamental shift from consumers manually scrolling through storefronts to autonomous software delegates executing complex procurement tasks with zero human friction[cite: 338]. This is a total replacement of the traditional retail front end with specialized machine-to-machine negotiation rails that bypass the Document Object Model entirely[cite: 1097]."
];

const defaultSections = [
    {
        title: "The Physics of the v402 Autonomous Handshake",
        content: "True agentic commerce functions by completely bypassing the human-centric browser interface to feed raw JSON data directly to the agent's internal reasoning engine[cite: 1097]. We utilize the v402 autonomous handshake to establish a standardized, high-trust settlement protocol between the merchant's underlying database and the autonomous buyer's logic[cite: 271, 1104]. When an agent encounters a payment-gated resource, it reads the 402 Payment Required status and signs a USDC transaction to unlock access in approximately half a second[cite: 271]."
    },
    {
        title: "Vibe Trading and Cross-Chain Intent Execution",
        content: "Vibe Trading utilizes the deBridge Model Context Protocol to translate natural language user intent into verifiable cross-chain settlement paths without requiring manual technical input[cite: 1095, 504]. This allows a digital delegate to negotiate value and execute trade based on the perceived intent of the user while maintaining a secure, non-custodial posture[cite: 505]. The agent calculates the necessary fees and builds the transaction payload while the master wallet retains the final cryptographic signature[cite: 505]."
    },
    {
        title: "The Empty Wallet Solution via MoonPay Agents",
        content: "We utilize MoonPay Agents to solve the Empty Wallet Solution by allowing digital delegates to accept card payments and instantly convert them to sovereign stablecoins[cite: 366, 1096]. This specific non-custodial infrastructure layer enables an agent to generate a payment link that bridges fiat directly into USDC held locally by the agent[cite: 366]. By integrating these fiat-to-crypto bridges, we eliminate the primary friction point for traditional customers entering the autonomous economy[cite: 366]."
    },
    {
        title: "The 2026 Shift Toward Sovereign Marketplaces",
        content: "The recent February 2026 integration of the Tether Wallet Development Kit into the Whop marketplace confirms that the new internet economy is already standardizing[cite: 370, 1094]. This move toward a sovereign marketplace utilized a $200M investment to integrate the WDK directly into the platform for frictionless USDT settlement[cite: 370]. We are moving past the AI-assisted era and into a reality where machines manage the entire creative, optimization, and settlement layers[cite: 337]."
    }
];

export const FoundryManifesto = ({ title = defaultTitle, leadIn = defaultLeadIn, sections = defaultSections }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const vaultRef = useRef(null);
    const btnRef = useRef(null);

    const handleToggle = () => {
        if (isOpen && vaultRef.current && btnRef.current) {
            // Measure the button's position before collapse
            const btnRect = btnRef.current.getBoundingClientRect();
            const vaultHeight = vaultRef.current.scrollHeight;

            setIsOpen(false);

            // After state update, compensate scroll so button stays in view
            requestAnimationFrame(() => {
                window.scrollBy({ top: -vaultHeight, behavior: 'instant' });
            });
        } else {
            setIsOpen(true);
        }
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });

            tl.fromTo(contentRef.current.children,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="agentic-foundry-manifesto" aria-labelledby="manifesto-title" className="py-24 bg-cloud-dancer">
            <div ref={contentRef} className="max-w-4xl mx-auto px-6 md:px-12">

                <header className="mb-10 opacity-0 translate-y-4">
                    <h2 id="manifesto-title" className="text-3xl md:text-5xl font-serif tracking-tight text-charcoal">
                        {title}
                    </h2>
                </header>

                {/* Always Visible Lead-in Text */}
                <div className="space-y-6 font-sans text-charcoal/80 mb-8 opacity-0 translate-y-4">
                    {leadIn.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                {/* Hidden Vault Content - Always in the DOM for SEO, toggled visually via CSS Grid */}
                <div
                    id="foundry-vault-content"
                    ref={vaultRef}
                    aria-hidden={!isOpen}
                    className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-10' : 'grid-rows-[0fr] opacity-0'}`}
                >
                    <div className="overflow-hidden space-y-10 font-sans text-charcoal/80">
                        {sections.map((section, idx) => (
                            <div key={idx} className={idx === 0 ? "pt-4" : ""}>
                                <h3 className="text-xl font-bold text-charcoal mb-3">{section.title}</h3>
                                <p>{section.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action Toggle Button */}
                <div className="pt-6 border-t border-charcoal/10 opacity-0 translate-y-4 w-full">
                    <button
                        id="vault-toggle-btn"
                        ref={btnRef}
                        onClick={handleToggle}
                        aria-expanded={isOpen}
                        aria-controls="foundry-vault-content"
                        className="inline-block border-b border-charcoal/30 pb-1 text-charcoal hover:text-electric-mint hover:border-electric-mint/50 transition-colors duration-300 font-sans tracking-widest text-xs uppercase cursor-pointer"
                    >
                        {isOpen ? 'Read Less' : 'Read More'} →
                    </button>
                </div>

            </div>
        </section>
    );
};
