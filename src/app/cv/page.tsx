export default function CVPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-h1 font-heading font-semibold text-text mb-8">Curriculum Vitae</h1>
      <p className="text-xl text-text mb-6">
        Last updated: January 2026
        </p>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full h-[calc(100vh-12rem)] min-h-[800px]">
          <iframe
            src="/cv.pdf"
            className="w-full h-full border-0"
            title="CV PDF Viewer"
          />
        </div>
      </div>
    </div>
  );
}

