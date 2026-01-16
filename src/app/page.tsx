export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-h1 font-heading font-semibold text-text mb-4">
          Izabela Acorroni
        </h1>
        <p className="text-xl text-text mb-6">
          Researcher
        </p>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-h2 font-heading font-semibold text-text mb-4">
          About
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-text mb-4">
            Brief introduction about yourself, your research interests, and what you do.
            This is a placeholder that you can customize with your own information.
          </p>
          <p className="text-text mb-4">
            Add more paragraphs to describe your work, achievements, and what drives you.
          </p>
          
          <h3 className="text-xl font-heading font-semibold text-text mt-8 mb-4">
            Research Interests
          </h3>
          <ul className="list-disc list-inside text-text space-y-2">
            <li>Research interest 1</li>
            <li>Research interest 2</li>
            <li>Research interest 3</li>
          </ul>

          <h3 className="text-xl font-heading font-semibold text-text mt-8 mb-4">
            Current Affiliations
          </h3>
          <div className="space-y-2 text-text">
            <p>
              <strong>Position:</strong> Your Position
            </p>
            <p>
              <strong>Institution:</strong> Your Institution
            </p>
            <p>
              <strong>Location:</strong> Your Location
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

