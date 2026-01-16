import { getAllPublications } from "@/lib/content";
import PublicationCard from "@/components/PublicationCard";

export default function PublicationsPage() {
  const publications = getAllPublications();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Publications</h1>

      {publications.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">
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

