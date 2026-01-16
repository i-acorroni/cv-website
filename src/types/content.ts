export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  tags?: string[];
  content: string;
  readingTime?: number;
  link?: string; // For external links (e.g., Substack)
  image?: string; // Featured image URL
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: "journal" | "conference" | "workshop" | "preprint" | "other";
  links?: {
    paper?: string;
    scholar?: string;
    arxiv?: string;
    doi?: string;
  };
  citation?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  links?: {
    demo?: string;
    github?: string;
    website?: string;
  };
  image?: string;
  featured?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  author: {
    name: string;
    email: string;
    bio: string;
    affiliations?: string[];
    researchInterests?: string[];
    photo?: string;
  };
  social: SocialLink[];
}

