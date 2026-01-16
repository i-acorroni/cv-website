import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Page not found
      </p>
      <Link
        href="/"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        Return home
      </Link>
    </div>
  );
}

