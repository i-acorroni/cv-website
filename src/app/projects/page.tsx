import { getAllProjects } from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const projects = getAllProjects();

  const personalProjects = projects.filter(
    (project) => project.category === "personal"
  );
  const contributedProjects = projects.filter(
    (project) => project.category !== "personal"
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-h1 font-heading font-semibold text-text mb-8">Projects</h1>

      {projects.length === 0 ? (
        <p className="text-muted">
          No projects available yet. Add projects in content/projects/projects.json
        </p>
      ) : (
        <div className="space-y-12">
          {personalProjects.length > 0 && (
            <section>
              <h2 className="text-h2 font-heading font-semibold text-text mb-6">
                Personal Projects
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {personalProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          )}

          {contributedProjects.length > 0 && (
            <section>
              <h2 className="text-h2 font-heading font-semibold text-text mb-6">
                Projects I&apos;ve contributed:
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {contributedProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}

