"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
};

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return undefined;
    }

    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    if (!context) return undefined;

    const pointer = {
      x: 0,
      y: 0,
      active: false,
    };

    const particles: Particle[] = [];
    const colors = ["#77F2FF", "#8B5CF6", "#38BDF8", "#F472B6", "#A78BFA"];

    const setup = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const particleCount = Math.min(100, Math.max(50, Math.floor((rect.width * rect.height) / 12)));
      particles.length = 0;

      for (let i = 0; i < particleCount; i += 1) {
        particles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          size: Math.random() * 2.4 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    let frameId = 0;
    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(5, 8, 22, 0.18)";
      context.fillRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];

        if (pointer.active) {
          const dx = pointer.x - particle.x;
          const dy = pointer.y - particle.y;
          const distance = Math.hypot(dx, dy) || 1;

          if (distance < 160) {
            const force = (160 - distance) / 160;
            particle.x -= (dx / distance) * force * 1.6;
            particle.y -= (dy / distance) * force * 1.6;
          }
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        particle.x = Math.min(width, Math.max(0, particle.x));
        particle.y = Math.min(height, Math.max(0, particle.y));

        context.beginPath();
        context.fillStyle = particle.color;
        context.globalAlpha = 0.7;
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      }

      context.globalAlpha = 0.25;
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 90) {
            context.beginPath();
            context.strokeStyle = "rgba(119, 242, 255, 0.22)";
            context.lineWidth = 1;
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }
      context.globalAlpha = 1;

      frameId = requestAnimationFrame(animate);
    };

    const moveHandler = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    };

    const leaveHandler = () => {
      pointer.active = false;
    };

    canvas.addEventListener("pointermove", moveHandler);
    canvas.addEventListener("pointerleave", leaveHandler);
    setup();
    frameId = requestAnimationFrame(animate);

    window.addEventListener("resize", setup);

    return () => {
      cancelAnimationFrame(frameId);
      canvas.removeEventListener("pointermove", moveHandler);
      canvas.removeEventListener("pointerleave", leaveHandler);
      window.removeEventListener("resize", setup);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.18),transparent_30%)]" />
      <canvas ref={canvasRef} className="h-full w-full opacity-90" />
    </div>
  );
}
