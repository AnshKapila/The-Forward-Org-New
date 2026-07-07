export interface LinkedInPost {
  date: string;
  tag: string;
  excerpt: string;
  linkedin_url: string;
  imageUrl?: string;
  featured: boolean;
}

export interface NewsletterContentBlock {
  type: "paragraph" | "subheading" | "image";
  value: string;
}

export interface Newsletter {
  id: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  linkedinUrl: string;
  thumbnailUrl: string;
  featured: boolean;
  content: NewsletterContentBlock[];
}
