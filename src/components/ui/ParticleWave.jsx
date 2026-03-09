"use client";

import { useEffect, useRef } from 'react';

// ── Simplex-style noise (lightweight, no dependencies) ──────────────────────
const permutation = [];
for (let i = 0; i < 256; i++) permutation[i] = i;
for (let i = 255; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [permutation[i], permutation[j]] = [permutation[j], permutation[i]];
}
const perm = [...permutation, ...permutation];

function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
function lerp(a, b, t) { return a + t * (b - a); }
function grad(hash, x, y) {
    const h = hash & 3;
    const u = h < 2 ? x : y;
    const v = h < 2 ? y : x;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
}

function noise2D(x, y) {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);
    const u = fade(x);
    const v = fade(y);
    const A = perm[X] + Y;
    const B = perm[X + 1] + Y;
    return lerp(
        lerp(grad(perm[A], x, y), grad(perm[B], x - 1, y), u),
        lerp(grad(perm[A + 1], x, y - 1), grad(perm[B + 1], x - 1, y - 1), u),
        v
    );
}

// ── Particle Wave Component ─────────────────────────────────────────────────
export const ParticleWave = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let width, height;
        let cols, rows;
        const isMobile = () => window.innerWidth < 768;
        const getSpacing = () => isMobile() ? 28 : 18;
        let spacing = getSpacing();
        const dotBase = 1.4;

        const resize = () => {
            const mobile = isMobile();
            const dpr = mobile ? 1 : Math.min(window.devicePixelRatio || 1, 2);
            spacing = getSpacing();
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            cols = Math.ceil(width / spacing) + 1;
            rows = Math.ceil(height / spacing) + 1;
        };
        resize();
        window.addEventListener('resize', resize);

        // Only track mouse on non-touch devices
        const onMouseMove = (e) => {
            mouseRef.current.targetX = e.clientX / width;
            mouseRef.current.targetY = e.clientY / height;
        };
        const isTouch = window.matchMedia('(pointer: coarse)').matches;
        if (!isTouch) {
            window.addEventListener('mousemove', onMouseMove);
        }

        let time = 0;
        let raf;

        const render = () => {
            time += 0.004;

            // Smooth mouse interpolation
            const m = mouseRef.current;
            m.x += (m.targetX - m.x) * 0.03;
            m.y += (m.targetY - m.y) * 0.03;

            // Clear
            ctx.fillStyle = '#111111';
            ctx.fillRect(0, 0, width, height);

            // Mouse position in pixel space
            const mx = m.x * width;
            const my = m.y * height;
            const cursorRadius = Math.max(width, height) * 0.25;

            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    const baseX = col * spacing;
                    const baseY = row * spacing;

                    // Noise-based wave displacement
                    const noiseVal = noise2D(
                        col * 0.06 + time * 0.8,
                        row * 0.06 + time * 0.5
                    );
                    const wave = noiseVal * 28;

                    // Secondary finer noise layer
                    const noiseVal2 = noise2D(
                        col * 0.15 + time * 1.2,
                        row * 0.15 - time * 0.3
                    );
                    const wave2 = noiseVal2 * 10;

                    // Cursor gravity well — pull particles toward cursor
                    const dx = baseX - mx;
                    const dy = baseY - my;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const cursorInfluence = Math.max(0, 1 - dist / cursorRadius);
                    const cursorPush = cursorInfluence * cursorInfluence * 35;

                    // Final displaced position
                    const x = baseX + (wave + wave2) * 0.5;
                    const y = baseY + wave + cursorPush * (dy / (dist || 1)) * -0.5;

                    // Dot brightness based on wave height and cursor proximity
                    const heightBrightness = (noiseVal + 1) * 0.5; // 0..1
                    const cursorGlow = cursorInfluence * cursorInfluence;

                    // Color: electric-mint (#85D8AC) with varying intensity
                    const mintR = 133, mintG = 216, mintB = 172;
                    const baseAlpha = 0.12 + heightBrightness * 0.35;
                    const alpha = Math.min(1, baseAlpha + cursorGlow * 0.5);

                    // Dot size: larger near cursor, breathing with wave
                    const size = dotBase + heightBrightness * 0.8 + cursorGlow * 2.5;

                    ctx.beginPath();
                    ctx.arc(x, y, size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${mintR}, ${mintG}, ${mintB}, ${alpha})`;
                    ctx.fill();

                    // Add white highlight on peaks near cursor for "glow" effect
                    if (cursorGlow > 0.3 && heightBrightness > 0.6) {
                        ctx.beginPath();
                        ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(255, 255, 255, ${cursorGlow * 0.3})`;
                        ctx.fill();
                    }
                }
            }

            // Vignette overlay for depth
            const vGrad = ctx.createRadialGradient(
                width * 0.5, height * 0.5, width * 0.15,
                width * 0.5, height * 0.5, width * 0.75
            );
            vGrad.addColorStop(0, 'rgba(17,17,17,0)');
            vGrad.addColorStop(1, 'rgba(17,17,17,0.6)');
            ctx.fillStyle = vGrad;
            ctx.fillRect(0, 0, width, height);

            raf = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
        />
    );
};
