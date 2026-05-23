import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { ContentType, Post, PostMeta } from "@/types/content";

const CONTENT_ROOT = path.join(process.cwd(), "src/content");

function getContentDir(type: ContentType): string {
  return type === "blog"
    ? path.join(CONTENT_ROOT, "blog")
    : path.join(CONTENT_ROOT, "case-studies");
}

function parsePostFile(
  filePath: string,
  type: ContentType,
): Post | null {
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  const slug =
    (data.slug as string) ||
    path.basename(filePath, path.extname(filePath));

  return {
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    updated: data.updated as string | undefined,
    slug,
    tags: (data.tags as string[]) ?? [],
    category: (data.category as string) ?? "General",
    featured: data.featured as boolean | undefined,
    coverImage: data.coverImage as string | undefined,
    author: data.author as string | undefined,
    readingTime: stats.text,
    type,
    content,
  };
}

function getMdxFiles(type: ContentType): string[] {
  const dir = getContentDir(type);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => path.join(dir, f));
}

export function getAllPosts(type: ContentType = "blog"): PostMeta[] {
  return getMdxFiles(type)
    .map((file) => parsePostFile(file, type))
    .filter((p): p is Post => p !== null)
    .map(({ content: _, ...meta }) => meta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(
  slug: string,
  type: ContentType = "blog",
): Post | null {
  const dir = getContentDir(type);
  const mdxPath = path.join(dir, `${slug}.mdx`);
  const mdPath = path.join(dir, `${slug}.md`);

  if (fs.existsSync(mdxPath)) return parsePostFile(mdxPath, type);
  if (fs.existsSync(mdPath)) return parsePostFile(mdPath, type);
  return null;
}

export function getAllPostSlugs(type: ContentType = "blog"): string[] {
  return getAllPosts(type).map((p) => p.slug);
}

export function getFeaturedPosts(
  type: ContentType = "blog",
  limit = 3,
): PostMeta[] {
  return getAllPosts(type)
    .filter((p) => p.featured)
    .slice(0, limit);
}

export function getLatestPosts(
  type: ContentType = "blog",
  limit = 3,
): PostMeta[] {
  return getAllPosts(type).slice(0, limit);
}

export function getPostsByCategory(
  category: string,
  type: ContentType = "blog",
): PostMeta[] {
  return getAllPosts(type).filter(
    (p) => p.category.toLowerCase() === category.toLowerCase(),
  );
}

export function getPostsByTag(
  tag: string,
  type: ContentType = "blog",
): PostMeta[] {
  return getAllPosts(type).filter((p) =>
    p.tags.some((t) => t.toLowerCase() === tag.toLowerCase()),
  );
}

export function getAllTags(type: ContentType = "blog"): string[] {
  const tags = new Set<string>();
  getAllPosts(type).forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}

export function getAllCategories(type: ContentType = "blog"): string[] {
  const categories = new Set<string>();
  getAllPosts(type).forEach((p) => categories.add(p.category));
  return Array.from(categories).sort();
}
