export type PortfolioCategory =
  | "copywriting"
  | "social-media"
  | "video"
  | "branding"
  | "campaign";

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: PortfolioCategory;
  tags: string[];
  coverImage: string;
  href?: string;
  companySlug?: string;
  featured?: boolean;
}
