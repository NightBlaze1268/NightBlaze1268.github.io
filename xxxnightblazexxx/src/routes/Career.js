import { useEffect, useRef } from "react";
import CareerCard from "../components/CareerCard";
import SectionHeading from "../components/SectionHeading";
import { BriefcaseIcon } from "../components/Icons";

const positions = [
  {
    title: "Fort Knox Human Resources Command",
    positionDate: "May 2024 – Present",
    positionTitle: "Computer Engineer",
    current: true,
    summary:
      "As a Computer Engineer I serve as the SME for development work, helping to find and resolve bugs, and assist with priority categorization.",
    responsibilities: [
      "Help maintain our Azure DevOps space ensuring that tags, titles, sprints, and testing are done correctly and thoroughly.",
      "Maintain, fix, and add features to a previous contractor created application that helps 32,000 soldiers transition every 2 months with a total of 182,000 active soldiers in the system.",
      "Create reports using Power BI and SQL seen by governments leaders to show how the program and counselors are doing as well as give ideas as to why and when soldiers are transitioning from their current stations.",
      "Sustain compliance for our Azure environments.",
      "Continue assistance when asked for help with a training tracker application that I previously built.",
    ],
  },
  {
    title: "Fort Knox Human Resources Command",
    positionDate: "January 2022 – May 2024",
    positionTitle: "IT Specialist / Student Trainee",
    summary:
      "As an IT/Specialist at Fort Knox I have learned and been in charge of many different aspects of application development, web-development and Microsoft apps development.",
    responsibilities: [
      "Assisted in the maintenance and refinement of documentation for diverse products and services under our support.",
      "Helped develop and maintain a comprehensive web-app to track and assist in mitigating security vulnerabilities across 23,000 workstations for the Army, enhancing overall IT security posture. This application in the first year alone held the government 32 million dollars in savings.",
      "Updated existing software packages to the latest stable versions, ensuring compliance with current security standards.",
      "Innovated a new method for tracking training using a broad range of Microsoft 365 Apps, streamlining a process once thought of as a chore for over 100 employees.",
      "Leveraged teamwork skills to efficiently assist users in mitigating IT issues and security vulnerabilities.",
      "Demonstrated strong leadership by presenting and leading multiple meetings and projects, fostering collaboration and driving successful outcome.",
    ],
  },
];

const Career = () => {
  const timelineRef = useRef(null);
  const fillRef = useRef(null);

  // Fill the timeline line as the reader scrolls through it
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const timeline = timelineRef.current;
      const fill = fillRef.current;
      if (!timeline || !fill) return;
      const rect = timeline.getBoundingClientRect();
      const progress = (window.innerHeight * 0.65 - rect.top) / rect.height;
      fill.style.transform = `scaleY(${Math.min(1, Math.max(0, progress))})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-6 pt-36 sm:pt-44">
      <SectionHeading as="h1" eyebrow="Career" icon={BriefcaseIcon} title="Follow my" highlight="career.">
        Below you will find information about all of my positions from the last 5 years.
      </SectionHeading>

      <div ref={timelineRef} className="relative mt-20">
        {/* Track + scroll-driven gradient fill */}
        <div aria-hidden="true" className="absolute bottom-0 left-5 top-2 w-px bg-line/10 sm:left-7">
          <div
            ref={fillRef}
            className="h-full w-full origin-top bg-gradient-to-b from-accent via-accent-2 to-accent-3 shadow-[0_0_12px_rgb(var(--accent)/0.6)]"
            style={{ transform: "scaleY(0)" }}
          />
        </div>

        <ol className="space-y-10">
          {positions.map(({ summary, ...position }, i) => (
            <CareerCard key={position.positionTitle} {...position} delay={i * 80}>
              {summary}
            </CareerCard>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Career;
