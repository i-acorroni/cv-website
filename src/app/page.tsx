import type { Metadata } from "next";
import Link from "next/link";
import cv from "../../content/cv/cv.json";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  description:
    "Law and technology research by Izabela Acorroni, including publications, talks, projects, writing, and an online CV.",
  pathname: "/",
});

export default function Home() {
  return (
    <div className="site-page">
      <header>
        <p className="page-kicker">Law &amp; technology researcher</p>
        <h1 className="page-title">now &amp; recent</h1>
        <p className="page-intro">
          I research how law and technology shape one another, with a focus on AI
          governance, judicial decision-making, and access to justice.
        </p>
      </header>

      <ul className="notebook-list" aria-label="Current research and recent activities">
        <li>
          <span className="date-marker">2026_</span>{" "}
          <Link href="/cv#education">{cv.education[0].title}</Link> at Trinity College
          Dublin, researching AI-assisted judicial decision-making through JUDGEASSIST.
        </li>
        <li>
          <span className="date-marker">2026_</span>{" "}
          Joining the <Link href="/cv#fellowships">{cv.fellowships[0].title}</Link> at
          the Center for AI and Digital Policy.
        </li>
        <li>
          <span className="date-marker">2026_</span>{" "}
          <Link href="/cv#fellowships">{cv.fellowships[1].title}</Link>, Information
          Society Law Center, University of Milan.
        </li>
        <li>
          <span className="date-marker">2025_</span>{" "}
          <Link href="/cv#awards">{cv.awards[0].title}</Link>, Best Overall
          Postgraduate Law Student, Birkbeck, University of London.
        </li>
      </ul>

      <section className="notebook-section" aria-labelledby="research-heading">
        <h2 id="research-heading">Research interests</h2>
        <ul className="research-list">
          <li>AI governance and fundamental rights</li>
          <li>Judicial decision-making and access to justice</li>
          <li>Platform governance and algorithmic regulation</li>
          <li>Code-driven and text-driven normativity</li>
          <li>Digital transformation of the public sector</li>
        </ul>
      </section>

      <details className="about-notes">
        <summary>more about my background</summary>
        <p>
          I am a Brazilian legal scholar engaged in academic research since 2015,
          with a focus on the intersection of law and technology since 2020.
          My background combines a law degree with secondary technical education
          in technology, connecting legal theory with technical implementation.
        </p>
        <p>
          I graduated with Distinction from the LLM in Law and New Technologies at
          Birkbeck, University of London, where I received the Global Futures
          Scholarship and the Academic Excellence Award for Best Overall
          Postgraduate Law Student.
        </p>
        <h3>strengths</h3>
        <ul>
          <li><strong>Research maturity:</strong> over a decade of research experience, with a sustained focus on law and technology since 2020.</li>
          <li><strong>Justice systems experience:</strong> former legal consultant at the State Court of Justice of Minas Gerais (TJMG), leading and supporting projects on technology adoption, access to justice, and service design.</li>
          <li><strong>Policymaking experience:</strong> three years of research at the Legal Centre for Public Policies at the Pontifical Catholic University of Minas Gerais, and participation in the CEPS Young Thinkers 2025 Training Programme.</li>
          <li><strong>Interdisciplinarity:</strong> experience across legal theory, regulatory environments, and socio-technical infrastructures, connecting doctrinal analysis with implementation.</li>
          <li><strong>Technical fluency:</strong> a technical education background and coding skills to prototype and test ideas.</li>
        </ul>
      </details>
    </div>
  );
}
