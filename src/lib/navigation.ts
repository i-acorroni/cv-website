export interface NavItem {
  href: string;
  label: string;
}

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/cv", label: "CV" },
  { href: "/publications", label: "Publications" },
  { href: "/talks", label: "Talks" },
  { href: "/projects", label: "Projects" },
];
