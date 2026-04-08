import Link from "next/link";
import { navItems } from "@/lib/navigation";
import { getSiteName } from "@/lib/site";

export default function Footer() {
  const siteName = getSiteName();

  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted hover:text-text transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="text-sm text-muted text-center">
            <p>&copy; {new Date().getFullYear()} {siteName}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
