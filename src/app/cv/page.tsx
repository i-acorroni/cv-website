export default function CVPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Curriculum Vitae</h1>

      <div className="space-y-8">
        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
            Education
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Degree Name
              </h3>
              <p className="text-gray-700 dark:text-gray-300">Institution Name</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Year - Year</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
            Experience
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Position Title
              </h3>
              <p className="text-gray-700 dark:text-gray-300">Company/Institution</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Date - Date</p>
              <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Key achievement or responsibility</li>
                <li>Another key point</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Technical Skills</h3>
              <p className="text-gray-700 dark:text-gray-300">Skill 1, Skill 2, Skill 3</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Languages</h3>
              <p className="text-gray-700 dark:text-gray-300">Language 1, Language 2</p>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
            Awards & Honors
          </h2>
          <div className="space-y-2">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Award Name</h3>
              <p className="text-gray-700 dark:text-gray-300">Organization, Year</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

