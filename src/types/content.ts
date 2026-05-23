export type ContentType = "blog" | "case-study";

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  updated?: string;
  slug: string;
  tags: string[];
  category: string;
  featured?: boolean;
  coverImage?: string;
  author?: string;
}

export interface PostMeta extends PostFrontmatter {
  readingTime: string;
  type: ContentType;
}

export interface Post extends PostMeta {
  content: string;
}

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export interface CompiledPost extends PostMeta {
  headings: TocItem[];
}
