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
      
      // 60–100 частиц в зависимости от ширины экрана
      const count = Math.min(100, Math.floor(window.innerWidth / 20));
      particles = [];
      
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          // ⚡ ИЗМЕНЕНО: Увеличена базовая скорость для более заметного движения
          speedX: (Math.random() - 0.5) * 0.4, 
          speedY: (Math.random() - 0.5) * 0.4 - 0.15, // Лёгкий дрейф вверх
          opacity: Math.random() * 0.5 + 0.1,
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

      // --- ЛУЧ СВЕТА УБРАН (ЧИСТЫЙ КОСМОС) ---

      const time = Date.now() * 0.001;
      
      particles.forEach((p) => {
        // ⚡ ИЗМЕНЕНО: Увеличена амплитуда "плавания" (синусоида)
        p.x += p.speedX + Math.sin(time + p.phase) * 0.3;
        p.y += p.speedY;

        // Зацикливание за пределами экрана
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        // Рисуем частицу
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        // Нежно-фиолетовый оттенок
        ctx.fillStyle = `rgba(180, 170, 255, ${p.opacity})`;
        ctx.fill();

        // Свечение для крупных
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

  // Не рендерим canvas, если экономика включена при загрузке
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
