import { Project } from "@/types/content";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-border rounded-lg overflow-hidden hover:border-accent transition-colors bg-surface">
      {project.image && (
        <div className="relative w-full h-48 bg-border">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold text-text mb-2">
          {project.name}
        </h3>
        <p className="text-text mb-4">
          {project.description}
        </p>
        {project.techStack && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-meta bg-border text-text rounded font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        {project.links && (
          <div className="flex flex-wrap gap-3">
            {project.links.demo && (
              <Link
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline flex items-center"
              >
                Demo <ExternalLink className="h-3 w-3 ml-1" />
              </Link>
            )}
            {project.links.github && (
              <Link
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline flex items-center"
              >
                GitHub <Github className="h-3 w-3 ml-1" />
              </Link>
            )}
            {project.links.website && (
              <Link
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline flex items-center"
              >
                Website <ExternalLink className="h-3 w-3 ml-1" />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

