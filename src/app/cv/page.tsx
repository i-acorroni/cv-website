import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import cv from "../../../content/cv/cv.json";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "CV",
  description:
    "Izabela Acorroni’s online CV: research, professional experience, education, fellowships, awards, and academic service in law and technology.",
  pathname: "/cv",
});

const sections = [
  { id: "education", label: "education" },
  { id: "experience", label: "experience" },
  { id: "fellowships", label: "fellowships & programmes" },
  { id: "awards", label: "awards & scholarships" },
  { id: "activities", label: "academic activities & service" },
];

type CVEntry = { period: string; title: string; organisation: string; details: string[] };

function CVSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="notebook-section">
      <h2 id={`${id}-heading`}>{title}</h2>
      {children}
    </section>
  );
}

function CVEntries({ entries }: { entries: CVEntry[] }) {
  return (
    <ul className="cv-entries">
      {entries.map((entry) => (
        <li key={`${entry.organisation}-${entry.title}`}>
          <p className="cv-date"><span className="date-marker">{entry.period}</span></p>
          <div>
            <h3 className="entry-title">{entry.title}</h3>
            <p className="entry-meta">{entry.organisation}</p>
            {entry.details.length === 1 ? (
              <p className="entry-description">{entry.details[0]}</p>
            ) : entry.details.length > 1 ? (
              <ul className="cv-details">
                {entry.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function CVPage() {
  return (
    <div className="site-page">
      <h1 className="page-title">curriculum vitae</h1>
      <nav aria-label="CV sections" className="cv-navigation">
        {sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.label}</a>)}
      </nav>
      <CVSection id="education" title="education"><CVEntries entries={cv.education} /></CVSection>
      <CVSection id="experience" title="professional & research experience">
        <CVEntries entries={cv.experience} />
        <div className="entry-links">
          <Link href="/projects">related projects ↗</Link>
          <Link href="/talks">talks &amp; workshops ↗</Link>
        </div>
      </CVSection>
      <CVSection id="fellowships" title="fellowships & programmes"><CVEntries entries={cv.fellowships} /></CVSection>
      <CVSection id="awards" title="awards & scholarships"><CVEntries entries={cv.awards} /></CVSection>
      <CVSection id="activities" title="academic activities & service"><CVEntries entries={cv.activities} /></CVSection>
    </div>
  );
}
