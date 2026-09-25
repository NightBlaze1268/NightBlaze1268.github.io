import { useRef } from "react";

/**
 * Glass card with a soft glow that follows the cursor and a lift on hover.
 */
export default function SpotlightCard({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);

  const handlePointerMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <Tag
      ref={ref}
      onPointerMove={handlePointerMove}
      className={`group/card relative overflow-hidden rounded-3xl border border-line/10 bg-surface/60 shadow-card backdrop-blur-md transition duration-500 ease-out-expo hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow ${className}`}
      {...rest}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 0%), rgb(var(--accent) / 0.12), transparent 45%)",
        }}
      />
      <div className="relative h-full">{children}</div>
    </Tag>
  );
}
