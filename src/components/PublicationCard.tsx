import { Publication } from "@/types/content";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface PublicationCardProps {
  publication: Publication;
}

export default function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <div className="p-6 border border-border rounded-lg bg-surface">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-heading font-semibold text-text flex-1">
          {publication.title}
        </h3>
        <div className="ml-2 flex flex-col items-end gap-1">
          <span className="px-2 py-1 text-xs rounded bg-accent text-white font-mono">
            {publication.type}
          </span>
          <span className="px-2 py-1 text-xs rounded bg-surface border border-border text-muted font-mono capitalize">
            {publication.language}
          </span>
        </div>
      </div>
      <p className="text-text mb-2">
        {publication.authors.join(", ")}
      </p>
      <p className="text-meta text-muted mb-4 font-mono">
        {publication.venue} • {publication.year}
      </p>
      {publication.links && (
        <div className="flex flex-wrap gap-3">
          {publication.links.paper && (
            <Link
              href={publication.links.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:underline flex items-center"
            >
              {publication.type === "blog" ? "Read post" : "Paper"} <ExternalLink className="h-3 w-3 ml-1" />
            </Link>
          )}
          {publication.links.scholar && (
            <Link
              href={publication.links.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:underline flex items-center"
            >
              Google Scholar <ExternalLink className="h-3 w-3 ml-1" />
            </Link>
          )}
          {publication.links.arxiv && (
            <Link
              href={publication.links.arxiv}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-link-alt hover:underline flex items-center"
            >
              arXiv <ExternalLink className="h-3 w-3 ml-1" />
            </Link>
          )}
          {publication.links.doi && (
            <Link
              href={publication.links.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-link-alt hover:underline flex items-center"
            >
              DOI <ExternalLink className="h-3 w-3 ml-1" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

