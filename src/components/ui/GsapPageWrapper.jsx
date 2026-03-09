"use client";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export const GsapPageWrapper = ({ children, className }) => {
    const container = useRef(null);

    useGSAP(() => {
        const sections = gsap.utils.toArray(container.current.children);

        sections.forEach((sec) => {
            if (sec.hasAttribute('data-no-anim')) return;
            gsap.fromTo(sec,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sec,
                        start: "top 95%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, { scope: container });

    return (
        <div ref={container} className={`flex flex-col overflow-hidden ${className || ''}`}>
            {children}
        </div>
    );
};
