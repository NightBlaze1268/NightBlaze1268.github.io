import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../theme";

const LINK_DISTANCE = 140;
const MOUSE_RADIUS = 200;
const PARALLAX = 0.12;

// "34 211 238" -> "34,211,238" so it can be dropped into rgba()
const readVar = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim().split(/\s+/).join(",");

const makeParticle = (w, h) => {
  const angle = Math.random() * Math.PI * 2;
  const speed = 0.006 + Math.random() * 0.014; // px per ms
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    r: 0.8 + Math.random() * 1.6,
    tone: Math.floor(Math.random() * 3),
    phase: Math.random() * Math.PI * 2,
  };
};

/**
 * Constellation of slowly drifting particles that link up when close
 * and reach toward the cursor. Pauses when the tab is hidden and renders
 * a single static frame when the user prefers reduced motion.
 */
function ParticleField({ theme }) {
  const canvasRef = useRef(null);
  const colorsRef = useRef(null);
  const redrawRef = useRef(null);

  useEffect(() => {
    colorsRef.current = [readVar("--accent"), readVar("--accent-2"), readVar("--accent-3")];
    redrawRef.current?.();
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext?.("2d");
    if (!ctx) return undefined;

    const reduceMotion = prefersReducedMotion();
    const mouse = { x: 0, y: 0, active: false };
    let particles = [];
    let width = 0;
    let height = 0;
    // Particles live in a band taller than the viewport so scroll parallax
    // can wrap them around without a visible seam.
    let span = 0;
    let frame = 0;
    let last = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      span = height + LINK_DISTANCE * 2;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Keep existing particles (no visible reshuffle when mobile toolbars
      // resize the viewport) and only top up / trim to the target density.
      const target = Math.round(Math.min(110, Math.max(36, (width * span) / 16000)));
      while (particles.length < target) particles.push(makeParticle(width, span));
      particles.length = target;
    };

    const draw = (now) => {
      const dt = Math.min(now - last, 50);
      last = now;
      const colors = colorsRef.current || ["255,255,255", "255,255,255", "255,255,255"];
      const scrollShift = window.scrollY * PARALLAX;

      ctx.clearRect(0, 0, width, height);

      // Move particles and compute on-screen positions (with scroll parallax)
      for (const p of particles) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < 0) p.y += span;
        if (p.y > span) p.y -= span;

        p.sx = p.x;
        p.sy = ((((p.y - scrollShift) % span) + span) % span) - LINK_DISTANCE;

        if (mouse.active) {
          const dx = p.sx - mouse.x;
          const dy = p.sy - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < MOUSE_RADIUS && dist > 0.1) {
            // Gentle push away from the cursor so it "parts" the field
            const force = (1 - dist / MOUSE_RADIUS) * 0.35;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }
        }
      }

      // Links between neighbours
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.sx - b.sx;
          const dy = a.sy - b.sy;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DISTANCE * LINK_DISTANCE) {
            const alpha = (1 - Math.sqrt(d2) / LINK_DISTANCE) * 0.22;
            ctx.strokeStyle = `rgba(${colors[a.tone]},${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            ctx.stroke();
          }
        }
      }

      // Links to the cursor
      if (mouse.active) {
        for (const p of particles) {
          const dist = Math.hypot(p.sx - mouse.x, p.sy - mouse.y);
          if (dist < MOUSE_RADIUS) {
            ctx.strokeStyle = `rgba(${colors[0]},${(1 - dist / MOUSE_RADIUS) * 0.45})`;
            ctx.beginPath();
            ctx.moveTo(p.sx, p.sy);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // Twinkling dots
      for (const p of particles) {
        const twinkle = 0.55 + 0.45 * Math.sin(now * 0.0015 + p.phase);
        ctx.fillStyle = `rgba(${colors[p.tone]},${0.35 + twinkle * 0.5})`;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (now) => {
      draw(now);
      frame = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(frame);
      last = performance.now();
      frame = requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(frame);
      else start();
    };

    const onPointerMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = e.pointerType === "mouse";
    };
    const onPointerLeave = () => {
      mouse.active = false;
    };

    resize();

    if (reduceMotion) {
      const drawStatic = () => {
        last = performance.now();
        draw(last);
      };
      const onResizeStatic = () => {
        resize();
        drawStatic();
      };
      redrawRef.current = drawStatic;
      drawStatic();
      window.addEventListener("resize", onResizeStatic);
      return () => {
        redrawRef.current = null;
        window.removeEventListener("resize", onResizeStatic);
      };
    }

    start();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />;
}

export default function AnimatedBackground({ theme }) {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Drifting aurora glows (radial gradients instead of blur filters keeps them cheap) */}
      <div className="absolute -left-[20vmax] -top-[25vmax] h-[70vmax] w-[70vmax] animate-aurora-a rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent)/0.22),transparent)] will-change-transform" />
      <div className="absolute -right-[25vmax] top-[5vh] h-[65vmax] w-[65vmax] animate-aurora-b rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent-3)/0.18),transparent)] will-change-transform" />
      <div className="absolute -bottom-[35vmax] left-[10vw] h-[60vmax] w-[60vmax] animate-aurora-c rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent-2)/0.16),transparent)] will-change-transform" />

      {/* Static grid, faded out from the top */}
      <div className="bg-grid mask-radial-top absolute inset-0" />

      <ParticleField theme={theme} />

      {/* Film grain + edge vignette for depth */}
      <div className="bg-noise absolute inset-0 opacity-[0.04] mix-blend-overlay dark:opacity-[0.06]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgb(var(--page)/0.85)_100%)]" />
    </div>
  );
}
