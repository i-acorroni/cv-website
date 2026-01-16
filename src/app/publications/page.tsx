import { getAllPublications } from "@/lib/content";
import PublicationCard from "@/components/PublicationCard";

export default function PublicationsPage() {
  const publications = getAllPublications();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-h1 font-heading font-semibold text-text mb-8">Publications</h1>

      {publications.length === 0 ? (
        <p className="text-muted">
          No publications available yet. Add publications in content/publications/publications.json
        </p>
      ) : (
        <div className="space-y-6">
          {publications.map((publication) => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
        </div>
      )}
    </div>
  );
}

