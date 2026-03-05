"use client";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const MagneticButton = ({ children, className = '' }) => {
    const magneticRef = useRef(null);

    useEffect(() => {
        const magnetic = magneticRef.current;
        if (!magnetic) return;

        const onMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = magnetic.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;

            const x = (clientX - centerX) * 0.3;
            const y = (clientY - centerY) * 0.3;

            gsap.to(magnetic, {
                x,
                y,
                duration: 1,
                ease: 'power3.out',
            });
        };

        const onMouseLeave = () => {
            gsap.to(magnetic, {
                x: 0,
                y: 0,
                duration: 1,
                ease: 'elastic.out(1, 0.3)',
            });
        };

        magnetic.addEventListener('mousemove', onMouseMove);
        magnetic.addEventListener('mouseleave', onMouseLeave);

        return () => {
            magnetic.removeEventListener('mousemove', onMouseMove);
            magnetic.removeEventListener('mouseleave', onMouseLeave);
        };
    }, []);

    return (
        <div ref={magneticRef} className={`inline-block w-fit cursor-pointer ${className}`}>
            {children}
        </div>
    );
};
