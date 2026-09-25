import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../theme";

/**
 * Fades + lifts its children into view the first time they scroll on screen.
 * `delay` (ms) staggers siblings.
 */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    if (visible) return undefined;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms", ...style }}
      className={`transition-[opacity,transform,filter] duration-1000 ease-out-expo ${
        // filter must end as `none` (not blur(0)) or it would break backdrop-blur on nested glass cards
        visible ? "opacity-100 [filter:none] [transform:none]" : "translate-y-8 opacity-0 blur-sm"
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
