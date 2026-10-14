import type { Metadata } from "next";
import { getAllProjects } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description: "Selected legal tech, research, and public-sector innovation projects by Izabela Acorroni.",
  pathname: "/projects",
});

export default function ProjectsPage() {
  const projects = getAllProjects();
  const groups = [
    { title: "personal projects", entries: projects.filter((project) => project.category === "personal") },
    { title: "projects I’ve contributed to", entries: projects.filter((project) => project.category !== "personal") },
  ];

  return (
    <div className="site-page">
      <p className="page-kicker">Research in practice</p>
      <h1 className="page-title">projects</h1>
      {projects.length === 0 && <p>No projects available yet.</p>}
      {groups.filter((group) => group.entries.length > 0).map((group) => (
        <section key={group.title} className="notebook-section" aria-label={group.title}>
          <h2>{group.title}</h2>
          {group.entries.map((project) => <ProjectCard key={project.id} project={project} />)}
        </section>
      ))}
    </div>
  );
}
