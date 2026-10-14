import type { Publication } from "@/types/content";

export default function PublicationCard({ publication }: { publication: Publication }) {
  const links = [
    { label: publication.type === "blog" ? "read post" : "paper", href: publication.links?.paper },
    { label: "Google Scholar", href: publication.links?.scholar },
    { label: "arXiv", href: publication.links?.arxiv },
    { label: "DOI", href: publication.links?.doi },
  ].filter((link) => link.href);

  return (
    <article>
      <h3 className="entry-title">
        <span className="date-marker">{publication.year}_</span>{" "}
        {publication.links?.paper ? (
          <a href={publication.links.paper} target="_blank" rel="noopener noreferrer">
            {publication.title}<span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : publication.title}
      </h3>
      <p className="entry-meta">{publication.authors.join(", ")}</p>
      <p className="entry-meta">{publication.venue} · {publication.type.replace(/-/g, " ")} · {publication.language}</p>
      {links.length > 0 && (
        <div className="entry-links">
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
