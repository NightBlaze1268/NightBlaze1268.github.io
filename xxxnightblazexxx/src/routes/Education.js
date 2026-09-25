import { useCallback, useState } from "react";
import EducationCard from "../components/EducationCard";
import Lightbox from "../components/Lightbox";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { AwardIcon, GraduationCapIcon } from "../components/Icons";
import securityPlus from "../degrees-certs/SecurityPlus Logo Certified CE.jpg";
import greenBelt from "../degrees-certs/Green Belt Badge.png";
import capstoneAward from "../degrees-certs/capstone_showcase_award.jpg";

const degrees = [
  {
    cardTitle: "University of Louisville",
    cardSubtitle: "Bachelors of Computer Science and Engineering",
    cardDescription:
      "At the University of Louisville I learned not only how to be an Engineer, but to be a problem solver, a self learner, and to enjoy challenges. I graduated with a reputable GPA working a minimum of 25 hours a week throughout all semesters.",
    cardDate: "May 16th, 2024",
    cardCategory: "Degree",
  },
  {
    cardTitle: "Elizabethtown Community and Technical College",
    cardSubtitle: "Associates of Applied Science",
    cardDescription:
      "I started attending ECTC when I was a Junior in high school through the dual-credit program at my high school. Upon graduating high school, I achieved a remarkable feat of also getting to receive my Associates degree in Applied Sciences.",
    cardDate: "June, 2020",
    cardCategory: "Degree",
  },
  {
    cardTitle: "Nelson County High School",
    cardSubtitle: "High School Diploma",
    cardDescription:
      "Throughout high school I had many achievements in sports, but my biggest achievement was being the first person ever to graduate from Nelson County High School with both my high school diploma and an associates degree from a college.",
    cardDate: "June, 2020",
    cardCategory: "Diploma",
  },
];

const credentials = [
  {
    cardTitle: "CompTIA",
    cardSubtitle: "Security+",
    cardDescription:
      "While completing my COOP rotations and attending the University of Louisville I was able to complete and get my Security+ certification through CompTIA.",
    cardDate: "November 10th, 2023",
    cardCategory: "Certification",
    certFileUrl: securityPlus,
    certName: "CompTIA Security+ Certification",
    certFileName: "Kyle-Akridge-CompTIA-Security-Plus.jpg",
  },
  {
    cardTitle: "Six Sigma",
    cardSubtitle: "Green Belt Certification",
    cardDescription:
      "During my first two years at UofL, I had the opportunity to get Six Sigma Green Belt certified by the Institute of Industrial and Systems Engineers.",
    cardDate: "August 30th, 2021",
    cardCategory: "Certification",
    certFileUrl: greenBelt,
    certName: "Green Belt Certification",
    certFileName: "Kyle-Akridge-Six-Sigma-Green-Belt.png",
  },
  {
    cardTitle: "UofL Capstone Showcase",
    cardSubtitle: "3rd Place Award",
    cardDescription:
      "My last semester was extremely hectic at the University of Louisville, but I was still able to lead and pull my team together to win a 3rd place overall award in the Computer Science and Engineering department.",
    cardDate: "April 16th, 2024",
    cardCategory: "Award",
    certFileUrl: capstoneAward,
    certName: "Capstone Showcase Award",
    certFileName: "Kyle-Akridge-Capstone-Showcase-Award.jpg",
    certFit: "cover",
  },
];

function CardGrid({ items, onViewCert }) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal key={item.cardTitle} delay={i * 90} className="h-full">
          <EducationCard
            {...item}
            onViewCert={() =>
              onViewCert({
                src: item.certFileUrl,
                alt: item.certName,
                title: item.certName,
                fileName: item.certFileName,
              })
            }
          />
        </Reveal>
      ))}
    </div>
  );
}

function GroupTitle({ icon: Icon, children }) {
  return (
    <Reveal className="flex items-center gap-4">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
        <Icon className="h-5 w-5" />
      </span>
      <h2 className="font-display text-2xl font-semibold tracking-tight">{children}</h2>
      <span className="h-px flex-1 bg-gradient-to-r from-line/15 to-transparent" />
    </Reveal>
  );
}

export default function Education() {
  const [activeImage, setActiveImage] = useState(null);
  const closeLightbox = useCallback(() => setActiveImage(null), []);

  return (
    <div className="mx-auto max-w-6xl px-6 pt-36 sm:pt-44">
      <SectionHeading as="h1" eyebrow="Education" icon={GraduationCapIcon} title="Explore my" highlight="education.">
        Here you will find my degrees as well as certificates and achievements!
      </SectionHeading>

      <section className="mt-20">
        <GroupTitle icon={GraduationCapIcon}>Degrees &amp; diplomas</GroupTitle>
        <CardGrid items={degrees} onViewCert={setActiveImage} />
      </section>

      <section className="mt-20">
        <GroupTitle icon={AwardIcon}>Certifications &amp; awards</GroupTitle>
        <CardGrid items={credentials} onViewCert={setActiveImage} />
      </section>

      <Lightbox image={activeImage} onClose={closeLightbox} />
    </div>
  );
}
