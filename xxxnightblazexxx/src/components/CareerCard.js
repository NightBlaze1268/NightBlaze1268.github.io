import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";
import { BriefcaseIcon, CalendarIcon, CheckIcon } from "./Icons";

const CareerCard = ({ title, positionDate, positionTitle, children, responsibilities, current = false, delay = 0 }) => {
  return (
    <Reveal as="li" delay={delay} className="relative pl-14 sm:pl-20">
      {/* Timeline node */}
      <span className="absolute left-0 top-7 grid h-10 w-10 place-items-center rounded-full border border-line/10 bg-surface shadow-glow sm:left-2">
        {current && <span className="absolute inset-0 animate-ping rounded-full bg-accent/25" />}
        <BriefcaseIcon className="relative h-4 w-4 text-accent" />
      </span>

      <SpotlightCard className="p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{title}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{positionTitle}</h3>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {current && (
              <span className="chip border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                Current role
              </span>
            )}
            <span className="chip">
              <CalendarIcon className="h-3.5 w-3.5" />
              {positionDate}
            </span>
          </div>
        </div>

        <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{children}</p>

        <h4 className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">Responsibilities</h4>
        <ul className="mt-4 space-y-3">
          {responsibilities.map((responsibility) => (
            <li key={responsibility} className="flex gap-3 leading-7 text-muted">
              <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/10 text-accent ring-1 ring-accent/20">
                <CheckIcon className="h-3 w-3" />
              </span>
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </SpotlightCard>
    </Reveal>
  );
};

export default CareerCard;
