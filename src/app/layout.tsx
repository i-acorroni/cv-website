import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getSiteDescription, getSiteName, getSiteUrl } from "@/lib/site";

const siteName = getSiteName();
const siteDescription = getSiteDescription();
const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  alternates: siteUrl
    ? {
        canonical: "/",
      }
    : undefined,
  openGraph: {
    title: siteName,
    description: siteDescription,
    siteName,
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", type: "image/x-icon", sizes: "16x16 32x32 48x48 64x64 256x256" },
      { url: "/favicon-32.png?v=2", type: "image/png", sizes: "32x32" },
      { url: "/favicon-192.png?v=2", type: "image/png", sizes: "192x192" },
      { url: "/icon.svg?v=2", type: "image/svg+xml", sizes: "any" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: { url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <div className="site-shell">
          <Navigation />
          <div className="site-column">
            <main id="main-content" className="site-main">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
