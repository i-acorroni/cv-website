import type { Metadata } from "next";
import { getAllPublications } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import PublicationCard from "@/components/PublicationCard";

export const metadata: Metadata = createPageMetadata({
  title: "Publications",
  description: "Academic publications, chapters, and essays by Izabela Acorroni.",
  pathname: "/publications",
});

export default function PublicationsPage() {
  const publications = getAllPublications();
  const groups = [
    { title: "journal articles & book chapters", entries: publications.filter((pub) => pub.type !== "blog") },
    { title: "essays & commentary", entries: publications.filter((pub) => pub.type === "blog") },
  ];

  return (
    <div className="site-page">
      <p className="page-kicker">Research &amp; writing</p>
      <h1 className="page-title">publications</h1>
      {publications.length === 0 && <p>No publications available yet.</p>}
      {groups.filter((group) => group.entries.length > 0).map((group) => (
        <section key={group.title} className="notebook-section" aria-label={group.title}>
          <h2>{group.title}</h2>
          <ul className="notebook-list">
            {group.entries.map((publication) => <li key={publication.id}><PublicationCard publication={publication} /></li>)}
          </ul>
        </section>
      ))}
    </div>
  );
}
