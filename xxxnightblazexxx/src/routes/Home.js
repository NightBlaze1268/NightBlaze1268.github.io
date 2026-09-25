import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import portrait from "../photos/pic_of_me-web.jpg";
import gradPhoto from "../photos/grad-photo-web.jpg";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SpotlightCard from "../components/SpotlightCard";
import { GITHUB_URL, LINKEDIN_URL } from "../constants";
import { prefersReducedMotion } from "../theme";
import {
  ArrowRightIcon,
  CodeIcon,
  GithubIcon,
  GraduationCapIcon,
  LinkedinIcon,
  MapPinIcon,
  PawIcon,
  ShieldIcon,
  SparklesIcon,
} from "../components/Icons";

const stats = [
  { end: 32, prefix: "$", suffix: "M", label: "saved in year one by a vulnerability-tracking app I helped build" },
  { end: 23000, label: "Army workstations covered by that security tracking" },
  { end: 182, suffix: "K", label: "active soldiers in the transition system I maintain" },
  { end: 100, suffix: "+", label: "employees using a training tracker I built" },
];

const facts = [
  { icon: MapPinIcon, label: "Based in", value: "Bardstown, Kentucky" },
  { icon: GraduationCapIcon, label: "Degree", value: "B.S. Computer Science & Engineering" },
  { icon: ShieldIcon, label: "Certified", value: "CompTIA Security+" },
  { icon: PawIcon, label: "Crew", value: "2 dogs & 3 cats" },
];

const techRows = [
  ["C#", "Python", "Java", "C", "C++", "JavaScript", "React", "Tailwind CSS", "SQL"],
  ["Power BI", "Azure DevOps", "Microsoft 365", "Kotlin", "Swift", "Firebase", "BeautifulSoup", "Raspberry Pi"],
];

function CountUp({ end, prefix = "", suffix = "", duration = 1800 }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      setValue(end);
      return undefined;
    }
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min(1, (now - start) / duration);
          setValue(Math.round(end * (1 - Math.pow(1 - progress, 4))));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

function Marquee({ items, reverse = false }) {
  const list = (hidden) => (
    <ul
      aria-hidden={hidden || undefined}
      className={`flex shrink-0 items-center gap-3 pr-3 group-hover:[animation-play-state:paused] ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2 whitespace-nowrap rounded-xl border border-line/10 bg-surface/60 px-4 py-2.5 font-mono text-sm text-muted backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent to-accent-3" />
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="mask-fade-x group flex overflow-hidden">
      {list(false)}
      {list(true)}
    </div>
  );
}

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto flex min-h-[100svh] max-w-6xl items-center px-6 pb-16 pt-32">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <Reveal>
              <span className="chip">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Computer Engineer · Fort Knox HRC
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Hi, I'm <span className="text-gradient whitespace-nowrap">Kyle Akridge</span>.
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted lg:mx-0">
                Computer Engineer and University of Louisville Speed School graduate. I build, fix, and ship
                software that supports thousands of soldiers — and I'm always chasing the next challenge.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Link to="/projects" className="btn-primary group">
                  View my work
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="btn-ghost">
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="icon-btn h-11 w-11" aria-label="GitHub">
                  <GithubIcon className="h-5 w-5" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted">
                <MapPinIcon className="h-4 w-4 text-accent" />
                Bardstown, Kentucky
              </p>
            </Reveal>
          </div>

          {/* Portrait with rotating gradient ring and floating badges */}
          <Reveal delay={150} className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-square w-60 sm:w-72 lg:w-[22rem]">
              <div className="absolute -inset-10 animate-glow-pulse rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent)/0.35),rgb(var(--accent-3)/0.15),transparent)]" />
              <div className="ring-conic absolute -inset-1 animate-spin-slow rounded-full" />
              <div className="absolute inset-0 rounded-full bg-page p-1.5">
                <img
                  src={portrait}
                  alt="Portrait of Kyle Akridge"
                  className="h-full w-full rounded-full object-cover object-[60%_50%]"
                />
              </div>

              <div className="glass absolute -left-6 top-8 flex animate-float items-center gap-2 rounded-2xl px-3 py-2 text-xs font-semibold shadow-card sm:-left-10">
                <ShieldIcon className="h-4 w-4 text-accent" />
                Security+ Certified
              </div>
              <div className="glass absolute -right-4 bottom-10 flex animate-float items-center gap-2 rounded-2xl px-3 py-2 font-mono text-xs font-medium shadow-card [animation-delay:-3s] sm:-right-8">
                <CodeIcon className="h-4 w-4 text-accent-3" />
                C# · Python
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Impact stats */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90} className="h-full">
              <SpotlightCard className="h-full p-6">
                <p className="text-gradient font-display text-4xl font-bold tracking-tight">
                  <CountUp {...stat} />
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">{stat.label}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 pt-32">
        <SectionHeading eyebrow="About me" icon={SparklesIcon} title="Engineer by trade," highlight="problem solver by nature." />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="group relative h-full min-h-[26rem] overflow-hidden rounded-3xl border border-line/10 shadow-card">
              <img
                src={gradPhoto}
                alt="Kyle Akridge in graduation cap and gown in front of the University of Louisville"
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1.5s] ease-out-expo group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 pt-24">
                <p className="font-display text-lg font-semibold text-white">University of Louisville</p>
                <p className="text-sm text-white/75">J.B. Speed School of Engineering · Class of 2024</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <SpotlightCard className="h-full p-7 sm:p-9">
              <div className="space-y-5 leading-8 text-muted">
                <p>
                  Hello! I'm <span className="font-semibold text-ink">Kyle Akridge</span>, a Computer Engineer and
                  graduate of the University of Louisville’s Speed School of Engineering. I hold a Bachelor’s degree in
                  Computer Science and Engineering, and during my time at UofL, I gained a strong foundation in software
                  development, problem-solving, and engineering principles.
                </p>
                <p>
                  I have experience with multiple programming languages, including Java, C#, C, C++, Python, and more,
                  but my primary expertise lies in <span className="font-semibold text-ink">C# and Python</span>. I have
                  a deep passion for coding and continuously seek opportunities to expand my skill set and take on new
                  challenges. Whether it's software development, problem-solving, or learning the latest technologies,
                  I’m always eager to push my limits and grow as an engineer.
                </p>
                <p>
                  I was born and raised in Bardstown, Kentucky, and I am 22 years old. I graduated from High School in
                  2020 with my diploma and an Associates of Science from the Elizabethtown Community and Technical
                  College. I have 2 dogs and 3 cats and currently reside in my home town.
                </p>
              </div>

              <dl className="mt-8 grid gap-3 border-t border-line/10 pt-8 sm:grid-cols-2">
                {facts.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3 rounded-2xl bg-line/[0.03] p-3 ring-1 ring-line/5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/15 to-accent-3/15 text-accent ring-1 ring-accent/20">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-muted">{label}</dt>
                      <dd className="text-sm font-semibold text-ink">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </SpotlightCard>
          </Reveal>
        </div>
      </section>

      {/* Tech marquee */}
      <section className="pt-32">
        <Reveal>
          <p className="text-center font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Languages &amp; tools I work with
          </p>
        </Reveal>
        <Reveal delay={100} className="mx-auto mt-8 max-w-6xl space-y-3 px-6">
          <Marquee items={techRows[0]} />
          <Marquee items={techRows[1]} reverse />
        </Reveal>
      </section>

      {/* Call to action */}
      <section className="mx-auto max-w-6xl px-6 pt-32">
        <Reveal>
          <SpotlightCard className="px-6 py-16 text-center sm:px-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent)/0.3),transparent)]"
            />
            <h2 className="relative font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Let's <span className="text-gradient">connect.</span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-lg leading-8 text-muted">
              To visit my LinkedIn profile or get more information, click the link below — or dig into my career,
              education, and projects.
            </p>
            <div className="relative mt-9 flex flex-wrap justify-center gap-3">
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="btn-primary">
                <LinkedinIcon className="h-4 w-4" />
                View my LinkedIn profile
              </a>
              <Link to="/career" className="btn-ghost group">
                Explore my career
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </SpotlightCard>
        </Reveal>
      </section>
    </>
  );
};

export default Home;
