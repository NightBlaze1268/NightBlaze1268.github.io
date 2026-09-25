import SpotlightCard from "./SpotlightCard";
import { ArrowUpRightIcon, ClockIcon, CodeIcon, GithubIcon, LockIcon } from "./Icons";

const statusStyles = {
  Current: {
    className: "border-emerald-500/30 text-emerald-600 dark:text-emerald-400",
    dot: "bg-emerald-500 animate-pulse",
  },
  Future: { className: "border-accent-2/30 text-accent-2", dot: "bg-accent-2" },
  Past: { className: "", dot: "bg-muted" },
};

export default function ProjectCard({ cardTitle, techStack, cardDescription, cardCategory, projectURL, projectLink, note }) {
  const status = statusStyles[cardCategory] ?? statusStyles.Past;
  const isPrivate = note?.toLowerCase().includes("not public");

  return (
    <SpotlightCard as="article" className="flex h-full flex-col p-6">
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/20 via-accent-2/10 to-accent-3/20 text-accent ring-1 ring-accent/20 transition-transform duration-500 ease-out-expo group-hover/card:-rotate-6 group-hover/card:scale-110">
            <CodeIcon className="h-5 w-5" />
          </span>
          <span className={`chip ${status.className}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
            {cardCategory}
          </span>
        </div>

        <h3 className="mt-5 font-display text-xl font-semibold leading-snug tracking-tight">{cardTitle}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-muted">{cardDescription}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
          {techStack.map((tech) => (
            <li key={tech} className="rounded-md bg-line/[0.04] px-2 py-1 font-mono text-[11px] text-muted ring-1 ring-line/10">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t border-line/10 pt-5">
          {projectURL ? (
            <a
              href={projectURL}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" />
              {projectLink}
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm text-muted">
              {isPrivate ? <LockIcon className="h-4 w-4" /> : <ClockIcon className="h-4 w-4" />}
              {note ?? "Coming soon"}
            </span>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}
