// src/components/CinematicParticles.tsx
// Cinematic floating particles background animation with performance optimizations

"use client";

import { useEffect, useRef } from "react";

export default function CinematicParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      baseSize: number;
      depth: number;
      speedX: number;
      speedY: number;
      baseOpacity: number;
      phase: number;
      twinkleSpeed: number;
      twinklePhase: number;
    }> = [];

    // Check if economy mode or reduced motion is enabled
    const isEconomy = () => {
      if (typeof window === "undefined") return true;
      return localStorage.getItem("economyMode") === "true" ||
             window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    };

    // Initialize particles: Dense starfield with mobile +10% density
    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);

      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Base density calculation
      const baseCount = Math.min(230, Math.floor(width / 7));
      // +10% more particles on mobile devices (<768px)
      const mobileMultiplier = width < 768 ? 1.1 : 1.0;
      // -5% then -15% particle count reduction for performance tuning (cumulative: ~19.25% less)
      const count = Math.floor(baseCount * mobileMultiplier * 0.95 * 0.85);
      
      particles = [];
      
      for (let i = 0; i < count; i++) {
        // Uniform depth distribution: 0.2 to 1.0
        const depth = Math.random() * 0.8 + 0.2;
        
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          // +10% size for more prominent dust grains
          baseSize: (Math.random() * 0.8 + 0.4) * 1.1,
          depth,
          // -10% then -10% speed reduction for smoother animation (cumulative: ~19% slower)
          speedX: (Math.random() - 0.5) * 0.18 * 0.9 * 0.9 * depth,
          speedY: (Math.random() - 0.5) * 0.18 * 0.9 * 0.9 * depth - 0.03 * 0.9 * 0.9 * depth,
          // +10% base brightness, scaled by depth
          baseOpacity: (Math.random() * 0.44 + 0.11) * depth,
          phase: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.9 + 0.4,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    // Main draw loop
    const draw = () => {
      if (isEconomy()) {
        cancelAnimationFrame(animationFrameId);
        return;
      }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      const time = Date.now() * 0.001;
      
      particles.forEach((p) => {
        // Gentle organic drift - cumulative -19% speed adjustment on X-axis wobble
        p.x += p.speedX + Math.sin(time + p.phase) * 0.1 * 0.9 * 0.9 * p.depth;
        p.y += p.speedY;

        // Seamless wrapping
        const width = window.innerWidth;
        const height = window.innerHeight;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        // Scale size with depth, twinkle opacity
        const size = p.baseSize * (1.0 + p.depth * 0.4);
        const twinkleFactor = 0.6 + 0.4 * Math.sin(time * p.twinkleSpeed + p.twinklePhase);
        const currentOpacity = p.baseOpacity * twinkleFactor;

        // Render particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 170, 255, ${currentOpacity})`;
        ctx.fill();

        // Glow for mid/foreground particles (+10% intensity)
        if (p.depth > 0.6) {
          ctx.shadowBlur = 5 * p.depth;
          ctx.shadowColor = `rgba(139, 92, 246, ${currentOpacity * 0.44})`;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    init();
    draw();

    const handleResize = () => init();
    window.addEventListener("resize", handleResize);
    window.addEventListener("storage", () => { if (!isEconomy()) draw(); });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Skip rendering if economy mode or reduced motion is active on load
  if (typeof window !== "undefined" && 
     (localStorage.getItem("economyMode") === "true" || window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
      aria-hidden="true"
    />
  );
}
