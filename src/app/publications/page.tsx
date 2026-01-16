import { getAllPublications } from "@/lib/content";
import PublicationCard from "@/components/PublicationCard";

export default function PublicationsPage() {
  const publications = getAllPublications();

  // Separate publications into journal/book-chapters and blog posts
  const academicPublications = publications.filter(
    (pub) => pub.type !== "blog"
  );
  const blogPosts = publications.filter((pub) => pub.type === "blog");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-h1 font-heading font-semibold text-text mb-8">Publications</h1>

      {publications.length === 0 ? (
        <p className="text-muted">
          No publications available yet. Add publications in content/publications/publications.json
        </p>
      ) : (
        <div className="space-y-12">
          {/* Journal & Book chapters section */}
          {academicPublications.length > 0 && (
            <section>
              <h2 className="text-h2 font-heading font-semibold text-text mb-6">
                Journal & Book chapters
              </h2>
              <div className="space-y-6">
                {academicPublications.map((publication) => (
                  <PublicationCard key={publication.id} publication={publication} />
                ))}
              </div>
            </section>
          )}

          {/* Blog posts section */}
          {blogPosts.length > 0 && (
            <section>
              <h2 className="text-h2 font-heading font-semibold text-text mb-6">
                Blog posts
              </h2>
              <div className="space-y-6">
                {blogPosts.map((publication) => (
                  <PublicationCard key={publication.id} publication={publication} />
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}

