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
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "fellowships", label: "Fellowships & programmes" },
  { id: "awards", label: "Awards & scholarships" },
  { id: "activities", label: "Academic activities & service" },
];

type CVEntry = {
  period: string;
  title: string;
  organisation: string;
  details: string[];
};

function CVSection({ id, title, children }: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-8">
      <h2 id={`${id}-heading`} className="font-heading text-2xl sm:text-h2 font-semibold text-text mb-8">
        {title}
      </h2>
      {children}
    </section>
  );
}

function CVEntries({ entries }: { entries: CVEntry[] }) {
  return (
    <ul className="space-y-8">
      {entries.map((entry) => (
        <li key={`${entry.organisation}-${entry.title}`} className="grid gap-2 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-5">
          <p className="text-meta text-muted pt-1">{entry.period}</p>
          <div className="min-w-0 border-l-2 border-border pl-5">
            <h3 className="text-lg font-semibold leading-snug text-text">{entry.title}</h3>
            <p className="mt-1 text-base text-accent">{entry.organisation}</p>
            {entry.details.length === 1 ? (
              <p className="mt-3 text-base text-muted">{entry.details[0]}</p>
            ) : entry.details.length > 1 ? (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base text-muted marker:text-accent">
                {entry.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}

const linkClassName =
  "text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function CVPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="border-b border-border pb-10 mb-10">
        <h1 className="text-4xl sm:text-h1 font-heading font-semibold text-text">Curriculum Vitae</h1>
      </header>

      <div className="lg:grid lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12">
        <aside className="mb-12 lg:mb-0">
          <nav aria-label="CV sections" className="lg:sticky lg:top-8">
            <p className="text-meta uppercase tracking-widest text-muted mb-4">On this page</p>
            <ul className="flex flex-wrap gap-2 lg:block lg:space-y-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="block rounded-md border border-border px-3 py-2 text-sm text-muted hover:bg-surface hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent lg:border-0 lg:pl-0">
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="min-w-0 space-y-12 [&>section+section]:border-t [&>section+section]:border-border [&>section+section]:pt-12">
          <CVSection id="experience" title="Professional & research experience">
            <CVEntries entries={cv.experience} />
            <p className="mt-6 text-sm">
              <Link href="/projects" className={linkClassName}>Explore related projects</Link>
              <span className="text-muted mx-3" aria-hidden="true">·</span>
              <Link href="/talks" className={linkClassName}>Talks & workshops</Link>
            </p>
          </CVSection>

          <CVSection id="education" title="Education">
            <CVEntries entries={cv.education} />
          </CVSection>

          <CVSection id="fellowships" title="Fellowships & programmes">
            <CVEntries entries={cv.fellowships} />
          </CVSection>

          <CVSection id="awards" title="Awards & scholarships">
            <CVEntries entries={cv.awards} />
          </CVSection>

          <CVSection id="activities" title="Academic activities & service">
            <CVEntries entries={cv.activities} />
          </CVSection>
        </div>
      </div>
    </div>
  );
}
