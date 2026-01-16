import { Project } from "@/types/content";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
      {project.image && (
        <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-800">
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
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {project.name}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        {project.techStack && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
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
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                Demo <ExternalLink className="h-3 w-3 ml-1" />
              </Link>
            )}
            {project.links.github && (
              <Link
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                GitHub <Github className="h-3 w-3 ml-1" />
              </Link>
            )}
            {project.links.website && (
              <Link
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center"
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

