export type SearchResultType =
  | "blog"
  | "case-study"
  | "company"
  | "portfolio";

export interface SearchDocument {
  id: string;
  type: SearchResultType;
  title: string;
  description: string;
  href: string;
  tags?: string[];
  category?: string;
}
