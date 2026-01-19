import { Twitter, Mail, Github, Linkedin, Rss, GraduationCap } from "lucide-react";
import Link from "next/link";
import { SocialLink } from "@/types/content";

// Get Substack URL from environment or construct from feed URL
function getSubstackUrl(): string {
  const feedUrl = process.env.NEXT_PUBLIC_SUBSTACK_FEED_URL;
  if (feedUrl) {
    // Extract base URL from feed URL (remove /feed)
    return feedUrl.replace(/\/feed$/, "");
  }
  return "https://substack.com";
}

// Default social links - can be customized
function getDefaultSocialLinks(): SocialLink[] {
  return [
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "twitter",
    },
    {
      name: "Email",
      url: "mailto:your.email@example.com",
      icon: "mail",
    },
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "linkedin",
    },
    {
      name: "Substack",
      url: getSubstackUrl(),
      icon: "substack",
    },
    {
      name: "ORCID",
      url: "https://orcid.org/0009-0008-1703-9506",
      icon: "orcid",
    },
  ];
}

const iconMap = {
  twitter: Twitter,
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  substack: Rss, // Using Rss icon for Substack
  orcid: GraduationCap, // Using GraduationCap icon for ORCID
};

export default function SocialLinks({ links }: { links?: SocialLink[] }) {
  const socialLinks = links || getDefaultSocialLinks();
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => {
        const IconComponent = iconMap[link.icon as keyof typeof iconMap];
        if (!IconComponent) return null;

        return (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label={link.name}
          >
            <IconComponent className="h-5 w-5" />
          </Link>
        );
      })}
    </div>
  );
}

