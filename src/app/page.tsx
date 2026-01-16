export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Izabela Acorroni
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
          Researcher
        </p>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          About
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Brief introduction about yourself, your research interests, and what you do.
            This is a placeholder that you can customize with your own information.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Add more paragraphs to describe your work, achievements, and what drives you.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
            Research Interests
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Research interest 1</li>
            <li>Research interest 2</li>
            <li>Research interest 3</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
            Current Affiliations
          </h3>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
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

