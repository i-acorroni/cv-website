import Link from "next/link";

export default function NotFound() {
  return (
    <div className="site-page">
      <h1 className="page-title">404</h1>
      <p className="page-intro">
        Page not found
      </p>
      <Link
        href="/"
        className="underline"
      >
        Return home
      </Link>
    </div>
  );
}

