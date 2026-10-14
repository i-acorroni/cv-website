import { getSiteName } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} {getSiteName()}.</p>
      <a href="mailto:mendonci@tcd.ie">get in touch ↗</a>
    </footer>
  );
}
