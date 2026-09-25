import { useLayoutEffect, useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { CodeIcon } from "../components/Icons";

const projects = [
  {
    cardTitle: "Project portfolio website",
    techStack: ["React", "Tailwind", "JavaScript"],
    cardDescription:
      "This project serves as an outlet for me to portray my skills, education, certifications, and any projects that I am working on.",
    cardCategory: "Current",
    projectURL: "https://github.com/NightBlaze1268/NightBlaze1268.github.io",
    projectLink: "Project Portfolio Website",
  },
  {
    cardTitle: "SMX stats scraper",
    techStack: ["Python", "BeautifulSoup", "SQL"],
    cardDescription:
      "One of the things I love doing is watching professional Motocross and Supercross, and loving statistics I thought it very fitting to create a stats scraper that will be used to generate statistics about the seasons on a website I am working on.",
    cardCategory: "Current",
    projectURL: "https://github.com/NightBlaze1268/smx-stats-scraper",
    projectLink: "SMX Stats Scraper",
  },
  {
    cardTitle: "SMX stats website",
    techStack: ["React", "Tailwind", "CSS", "SQL", "JavaScript", "DataTables"],
    cardDescription:
      "This website will serve as a statistics display for the stats scraper I am wrapping up currently.",
    cardCategory: "Future",
  },
  {
    cardTitle: "Calendar App",
    techStack: ["Kotlin", "Swift"],
    cardDescription:
      "One of the things I have wanted to do for a while is make my own app on the iOS and Android platforms, and I have always found that the calendar apps that are available are either too pricey or just lack the features I am looking for, so I am going to be building my own version.",
    cardCategory: "Future",
  },
  {
    cardTitle: "ChatBot",
    techStack: ["Python", "Artificial Intelligence"],
    cardDescription: "This chatbot will serve as an answering machine for myself. This will ideally be hosted on my website.",
    cardCategory: "Future",
  },
  {
    cardTitle: "KIPDA Android App",
    techStack: ["Kotlin", "Google Firebase"],
    cardDescription:
      "My Capstone project was to create an Android application that would help an organization better outreach to their users. This project was essentially finished but there were additional features that myself or my team could not get wrapped up and thus is still being worked on by other teams before being put onto the Play Store. I cannot provide any code for this project or answer any further questions related to it.",
    cardCategory: "Past",
    note: "Code not publicly available",
  },
  {
    cardTitle: "Raspberry PI Artificial Intelligence Ring Camera",
    techStack: ["Python", "Raspberry Pi", "Electrical"],
    cardDescription:
      "This project utilized a Raspberry PI 3 board, camera, motion sensor, and artificial intelligence library. When the motion sensor would detect motion, the camera would turn on and run the AI facial recognition software to determine if you should have access to the house or not. Ideally this would be combined with a lock and be made smaller with better manufactured chips and components to control access to your house utilizing AI.",
    cardCategory: "Past",
  },
];

const filters = ["All", "Current", "Future", "Past"];

function FilterTabs({ active, onChange }) {
  const refs = useRef({});
  const [indicator, setIndicator] = useState(null);

  useLayoutEffect(() => {
    const measure = () => {
      const el = refs.current[active];
      if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    };
    measure();
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  return (
    <div role="tablist" aria-label="Filter projects" className="glass relative inline-flex rounded-2xl p-1.5">
      {indicator && (
        <span
          aria-hidden="true"
          className="absolute inset-y-1.5 left-0 rounded-xl bg-gradient-to-r from-accent via-accent-2 to-accent-3 shadow-glow transition-all duration-500 ease-out-expo"
          style={{ transform: `translateX(${indicator.left}px)`, width: indicator.width }}
        />
      )}
      {filters.map((filter) => {
        const count = filter === "All" ? projects.length : projects.filter((p) => p.cardCategory === filter).length;
        const selected = filter === active;
        return (
          <button
            key={filter}
            ref={(el) => (refs.current[filter] = el)}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(filter)}
            className={`relative flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-semibold transition-colors duration-300 sm:px-5 ${
              selected ? "text-page" : "text-muted hover:text-ink"
            }`}
          >
            {filter}
            <span
              className={`hidden rounded-md px-1.5 text-[11px] tabular-nums transition-colors duration-300 sm:inline-block ${
                selected ? "bg-page/25" : "bg-line/10"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.cardCategory === filter);

  return (
    <div className="mx-auto max-w-6xl px-6 pt-36 sm:pt-44">
      <SectionHeading as="h1" eyebrow="Projects" icon={CodeIcon} title="View my project" highlight="portfolio.">
        What I'm building now, what's next, and what I've shipped. This page is still a work in progress and is
        constantly being updated.
      </SectionHeading>

      <Reveal delay={220} className="mt-12 flex justify-center">
        <FilterTabs active={filter} onChange={setFilter} />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          // Keyed by filter so cards re-animate in whenever the filter changes
          <Reveal key={`${filter}-${project.cardTitle}`} delay={(i % 3) * 90} className="h-full">
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
