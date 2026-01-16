import { getAllProjects } from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Projects</h1>

      {projects.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">
          No projects available yet. Add projects in content/projects/projects.json
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

