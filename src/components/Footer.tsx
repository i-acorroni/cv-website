export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center">
          <div className="text-sm text-muted">
            <p>&copy; {new Date().getFullYear()} CV Website. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

