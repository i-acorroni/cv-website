import { Publication } from "@/types/content";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface PublicationCardProps {
  publication: Publication;
}

export default function PublicationCard({ publication }: PublicationCardProps) {
  const typeColors = {
    journal: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
    conference: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
    workshop: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
    preprint: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
    other: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200",
  };

  return (
    <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex-1">
          {publication.title}
        </h3>
        <span
          className={`ml-2 px-2 py-1 text-xs rounded ${
            typeColors[publication.type] || typeColors.other
          }`}
        >
          {publication.type}
        </span>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        {publication.authors.join(", ")}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {publication.venue} • {publication.year}
      </p>
      {publication.links && (
        <div className="flex flex-wrap gap-3">
          {publication.links.paper && (
            <Link
              href={publication.links.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center"
            >
              Paper <ExternalLink className="h-3 w-3 ml-1" />
            </Link>
          )}
          {publication.links.scholar && (
            <Link
              href={publication.links.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center"
            >
              Google Scholar <ExternalLink className="h-3 w-3 ml-1" />
            </Link>
          )}
          {publication.links.arxiv && (
            <Link
              href={publication.links.arxiv}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center"
            >
              arXiv <ExternalLink className="h-3 w-3 ml-1" />
            </Link>
          )}
          {publication.links.doi && (
            <Link
              href={publication.links.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center"
            >
              DOI <ExternalLink className="h-3 w-3 ml-1" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

