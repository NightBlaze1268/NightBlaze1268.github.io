import SpotlightCard from "./SpotlightCard";
import { AwardIcon, CalendarIcon, DownloadIcon, ExpandIcon, GraduationCapIcon, ShieldIcon } from "./Icons";

const categoryStyles = {
  Degree: { icon: GraduationCapIcon, className: "border-accent/30 text-accent" },
  Diploma: { icon: GraduationCapIcon, className: "border-accent-2/30 text-accent-2" },
  Certification: { icon: ShieldIcon, className: "border-emerald-500/30 text-emerald-600 dark:text-emerald-400" },
  Award: { icon: AwardIcon, className: "border-amber-500/30 text-amber-600 dark:text-amber-400" },
};

export default function EducationCard({
  cardTitle,
  cardSubtitle,
  cardDescription,
  cardDate,
  cardCategory,
  certFileUrl,
  certName,
  certFileName,
  certFit = "contain",
  onViewCert,
}) {
  const { icon: CategoryIcon, className: chipClass } = categoryStyles[cardCategory] ?? categoryStyles.Degree;
  const hasCert = certFileUrl && certName;

  return (
    <SpotlightCard as="article" className="flex h-full flex-col p-6">
      <div className="flex h-full flex-col">
        {hasCert ? (
          <button
            type="button"
            onClick={onViewCert}
            className="group/img relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl bg-white ring-1 ring-line/10"
            aria-label={`View ${certName}`}
          >
            <img
              src={certFileUrl}
              alt=""
              loading="lazy"
              className={`h-full w-full transition-transform duration-700 ease-out-expo group-hover/img:scale-105 ${
                certFit === "cover" ? "object-cover" : "object-contain p-5"
              }`}
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-300 group-hover/img:bg-black/40 group-hover/img:opacity-100">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black">
                <ExpandIcon className="h-4 w-4" />
                View
              </span>
            </span>
          </button>
        ) : (
          <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-accent/20 via-accent-2/10 to-accent-3/20 text-accent ring-1 ring-accent/20">
            <CategoryIcon className="h-7 w-7" />
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className={`chip ${chipClass}`}>
            <CategoryIcon className="h-3.5 w-3.5" />
            {cardCategory}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted">
            <CalendarIcon className="h-3.5 w-3.5" />
            {cardDate}
          </span>
        </div>

        <h3 className="mt-5 font-display text-xl font-semibold leading-snug tracking-tight">{cardTitle}</h3>
        <p className="mt-1 text-sm font-semibold text-accent">{cardSubtitle}</p>
        <p className="mt-4 flex-1 text-sm leading-7 text-muted">{cardDescription}</p>

        {hasCert && (
          <div className="mt-6 flex flex-wrap gap-2 border-t border-line/10 pt-5">
            <button
              type="button"
              onClick={onViewCert}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold text-ink ring-1 ring-line/15 transition hover:text-accent hover:ring-accent/40"
            >
              <ExpandIcon className="h-4 w-4" />
              View
            </button>
            <a
              href={certFileUrl}
              download={certFileName}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold text-muted transition hover:text-accent"
            >
              <DownloadIcon className="h-4 w-4" />
              Download
            </a>
          </div>
        )}
      </div>
    </SpotlightCard>
  );
}
