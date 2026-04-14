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
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      phase: number;
    }> = [];

    const isEconomy = () => {
      if (typeof window === "undefined") return true;
      return localStorage.getItem("economyMode") === "true" ||
             window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    };

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Particle density: scales with screen width, capped at 150
      const count = Math.min(150, Math.floor(window.innerWidth / 12));
      particles = [];
      
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          // Balanced speed: smooth but perceptible motion
          speedX: (Math.random() - 0.5) * 0.32,
          speedY: (Math.random() - 0.5) * 0.32 - 0.12,
          // Subtle opacity variation for depth
          opacity: Math.random() * 0.4 + 0.05,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const draw = () => {
      if (isEconomy()) {
        cancelAnimationFrame(animationFrameId);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Pure space background — no light beam overlay

      const time = Date.now() * 0.001;
      
      particles.forEach((p) => {
        // Organic floating with gentle sine oscillation
        p.x += p.speedX + Math.sin(time + p.phase) * 0.25;
        p.y += p.speedY;

        // Seamless wrapping for infinite space effect
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        // Render particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        // Soft purple-tinted white for brand consistency
        ctx.fillStyle = `rgba(180, 170, 255, ${p.opacity})`;
        ctx.fill();

        // Depth-of-field glow for larger particles
        if (p.size > 1.2) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = "rgba(139, 92, 246, 0.5)";
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    init();
    draw();

    window.addEventListener("resize", init);
    window.addEventListener("storage", () => {
      if (!isEconomy()) draw();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", init);
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
