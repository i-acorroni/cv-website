import type { Project } from "@/types/content";

export default function ProjectCard({ project }: { project: Project }) {
  const links = [
    { label: "website", href: project.links?.website },
    { label: "GitHub", href: project.links?.github },
    { label: "demo", href: project.links?.demo },
  ].filter((link) => link.href);

  return (
    <article className="notebook-project">
      <h3 className="entry-title">{project.name}</h3>
      {(project.period || project.organisation) && (
        <p className="entry-meta">
          {project.period && <><span className="date-marker">{project.period}</span>{" "}</>}
          {project.organisation}
        </p>
      )}
      <p className="entry-description">{project.description}</p>
      {project.techStack.length > 0 && <p className="entry-meta">{project.techStack.map((tech) => tech.trim()).join(" · ")}</p>}
      {links.length > 0 && (
        <div className="entry-links">
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </div>
      )}
      {project.relatedReports && project.relatedReports.length > 0 && (
        <section aria-label={`Related institutional reports for ${project.name}`}>
          <h4 className="entry-meta mt-6">related institutional reports</h4>
          <ul className="report-list">
            {project.relatedReports.map((report) => (
              <li key={report.url}>
                <p>{report.description}</p>
                <div className="entry-links mt-1">
                  <a href={report.url} target="_blank" rel="noopener noreferrer">{report.label} ↗<span className="sr-only"> (opens in a new tab)</span></a>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
