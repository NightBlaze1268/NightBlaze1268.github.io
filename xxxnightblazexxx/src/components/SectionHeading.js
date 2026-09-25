import Reveal from "./Reveal";

/**
 * Eyebrow chip + big display title (with a gradient highlight) + lead text.
 * Renders an <h1> for page headers and an <h2> for in-page sections.
 */
export default function SectionHeading({ eyebrow, icon: Icon, title, highlight, as = "h2", align = "center", children }) {
  const Heading = as;
  const alignment = align === "center" ? "mx-auto text-center items-center" : "items-start text-left";
  const size = as === "h1" ? "text-4xl sm:text-6xl" : "text-3xl sm:text-5xl";

  return (
    <header className={`flex max-w-3xl flex-col ${alignment}`}>
      {eyebrow && (
        <Reveal>
          <span className="chip font-mono uppercase tracking-[0.18em]">
            {Icon && <Icon className="h-3.5 w-3.5 text-accent" />}
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <Heading className={`mt-5 font-display font-bold tracking-tight text-balance ${size}`}>
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </Heading>
      </Reveal>
      {children && (
        <Reveal delay={160}>
          <p className="mt-5 text-lg leading-8 text-muted">{children}</p>
        </Reveal>
      )}
    </header>
  );
}
