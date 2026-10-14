"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/navigation";

const profiles = [
  { label: "substack", href: "https://thelawandtechmixandmatch.substack.com/" },
  { label: "scholar", href: "https://scholar.google.com/citations?user=o1ALjbEAAAAJ&hl=en" },
  { label: "github", href: "https://github.com/i-acorroni" },
  { label: "linkedin", href: "https://www.linkedin.com/in/izabela-acorroni" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <aside className="site-sidebar">
      <Link href="/" className="site-wordmark" aria-label="Izabela Acorroni — home">
        <span>izabela</span><br /><span>acorroni</span>
      </Link>
      <nav aria-label="Primary" className="site-navigation">
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                <span>{item.label.toLowerCase()}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="site-contact">
        <a href="mailto:mendonci@tcd.ie">mendonci@tcd.ie</a>
        <ul className="site-profiles" aria-label="Elsewhere">
          {profiles.map((profile) => (
            <li key={profile.label}>
              <a href={profile.href} target="_blank" rel="noopener noreferrer">
                {profile.label} <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="sidebar-note">law, technology<br />&amp; public life.</p>
      <p className="sidebar-location">Trinity College Dublin</p>
    </aside>
  );
}
