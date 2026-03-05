"use client";

import { useEffect, useRef } from 'react';

export const LiquidCanvas = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        // Handle Resize
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // set initial mouse to center
            if (mouseRef.current.targetX === 0) {
                mouseRef.current.x = canvas.width / 2;
                mouseRef.current.y = canvas.height / 2;
                mouseRef.current.targetX = canvas.width / 2;
                mouseRef.current.targetY = canvas.height / 2;
            }
        };
        resize();
        window.addEventListener('resize', resize);

        // Mouse Move
        const onMouseMove = (e) => {
            mouseRef.current.targetX = e.clientX;
            mouseRef.current.targetY = e.clientY;
        };
        window.addEventListener('mousemove', onMouseMove);

        let animationFrameId;
        let time = 0;

        const render = () => {
            time += 0.005;

            // Ease mouse position for smooth trailing effect
            mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
            mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

            // Clear canvas with dark charcoal background
            ctx.fillStyle = '#111111';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Create Liquid Metal Spotlight Effect
            const outerRadius = Math.max(canvas.width, canvas.height) * 0.7;
            const innerRadius = 0;

            // Subtle breathing effect on spotlight radius
            const dynamicOuterRadius = outerRadius + Math.sin(time * 2) * 50;

            const gradient = ctx.createRadialGradient(
                mouseRef.current.x, mouseRef.current.y, innerRadius,
                mouseRef.current.x, mouseRef.current.y, dynamicOuterRadius
            );

            // Metallic gradient stops
            gradient.addColorStop(0, 'rgba(133, 216, 172, 0.15)'); // Dew Mint glow center
            gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.05)'); // Silver reflection
            gradient.addColorStop(0.5, 'rgba(26, 26, 26, 0.8)'); // Transition to charcoal
            gradient.addColorStop(1, 'rgba(17, 17, 17, 1)'); // Deep charcoal edges

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Add subtle animated noise or grain
            // Simplified noise approach for performance: draw a few low-opacity large moving arcs
            ctx.globalCompositeOperation = 'screen';
            ctx.beginPath();
            ctx.arc(
                canvas.width / 2 + Math.cos(time) * 200,
                canvas.height / 2 + Math.sin(time * 1.5) * 200,
                canvas.width * 0.4,
                0, Math.PI * 2
            );
            ctx.fillStyle = 'rgba(255,255,255,0.01)';
            ctx.fill();

            // Reset composite operation
            ctx.globalCompositeOperation = 'source-over';

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
            style={{ zIndex: 0 }}
        />
    );
};
