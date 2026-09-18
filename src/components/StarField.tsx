"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinklePhase: number;
  twinkleSpeed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  life: number;
  maxLife: number;
}

/**
 * Lightweight canvas star field with subtle twinkle, optional shooting stars,
 * and reduced-motion support. Renders behind page content.
 */
export default function StarField({
  density = 1,
  showShootingStars = true,
}: {
  density?: number;
  showShootingStars?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    let width = 0;
    let height = 0;
    let rafId = 0;
    let lastShooting = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas || !ctx) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Density of stars scaled to area
      const target = Math.min(360, Math.floor((width * height) / 6500) * density);
      stars = new Array(target).fill(0).map(() => createStar());
    }

    function createStar(): Star {
      const r = Math.random();
      // Most stars small, a few larger
      const radius =
        r > 0.95 ? 1.6 + Math.random() * 0.8 : r > 0.7 ? 1 + Math.random() * 0.5 : 0.4 + Math.random() * 0.4;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        baseAlpha: 0.35 + Math.random() * 0.6,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.005 + Math.random() * 0.015,
      };
    }

    function spawnShootingStar() {
      const startX = Math.random() * width * 0.7 + width * 0.3;
      const startY = Math.random() * height * 0.4;
      const angle = Math.PI / 4 + (Math.random() * 0.2 - 0.1); // ~45 degrees
      shootingStars.push({
        x: startX,
        y: startY,
        length: 120 + Math.random() * 80,
        speed: 7 + Math.random() * 3,
        angle,
        life: 0,
        maxLife: 60 + Math.random() * 30,
      });
    }

    function draw(now: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Draw stars
      for (const s of stars) {
        if (!reduceMotion) {
          s.twinklePhase += s.twinkleSpeed;
        }
        const alpha =
          reduceMotion
            ? s.baseAlpha
            : s.baseAlpha * (0.55 + 0.45 * Math.sin(s.twinklePhase));

        // Subtle warm/cool tint for some stars
        const isWarm = (s.radius * 100) % 3 < 1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        if (isWarm) {
          ctx.fillStyle = `rgba(255, 240, 210, ${alpha})`;
        } else {
          ctx.fillStyle = `rgba(220, 230, 255, ${alpha})`;
        }
        ctx.fill();

        // Glow for larger stars
        if (s.radius > 1.4) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(220, 230, 255, ${alpha * 0.08})`;
          ctx.fill();
        }
      }

      // Shooting stars
      if (showShootingStars && !reduceMotion && now - lastShooting > 6500) {
        if (Math.random() > 0.4) {
          spawnShootingStar();
        }
        lastShooting = now;
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const sh = shootingStars[i];
        sh.life += 1;
        sh.x -= Math.cos(sh.angle) * sh.speed;
        sh.y += Math.sin(sh.angle) * sh.speed;

        const lifeRatio = sh.life / sh.maxLife;
        const alpha = lifeRatio < 0.2 ? lifeRatio * 5 : 1 - (lifeRatio - 0.2) * 1.25;

        const tailX = sh.x + Math.cos(sh.angle) * sh.length;
        const tailY = sh.y - Math.sin(sh.angle) * sh.length;

        const gradient = ctx.createLinearGradient(sh.x, sh.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(255, 248, 230, ${alpha})`);
        gradient.addColorStop(1, "rgba(255, 248, 230, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(sh.x, sh.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        if (sh.life >= sh.maxLife) {
          shootingStars.splice(i, 1);
        }
      }

      rafId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    rafId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, [density, showShootingStars]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      style={{
        background:
          "radial-gradient(ellipse at 20% 10%, rgba(80, 40, 120, 0.18) 0%, transparent 45%), radial-gradient(ellipse at 80% 80%, rgba(40, 70, 160, 0.16) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(20, 15, 45, 1) 0%, rgba(8, 6, 22, 1) 100%)",
      }}
    />
  );
}
