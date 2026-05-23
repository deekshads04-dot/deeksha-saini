import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const contentRoot = path.join(root, "src/content");

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com").replace(
  /\/$/,
  "",
);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function absoluteUrl(path) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!basePath) return `${siteUrl}${normalized}`;
  if (siteUrl.endsWith(basePath)) return `${siteUrl}${normalized}`;
  return `${siteUrl}${basePath}${normalized}`;
}

function readPosts(type) {
  const dir =
    type === "blog"
      ? path.join(contentRoot, "blog")
      : path.join(contentRoot, "case-studies");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data } = matter(raw);
      const slug = data.slug || path.basename(file, path.extname(file));
      return { ...data, slug, type };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function buildSearchIndex() {
  const docs = [];

  readPosts("blog").forEach((post) => {
    docs.push({
      id: `blog-${post.slug}`,
      type: "blog",
      title: post.title,
      description: post.description,
      href: `/blog/${post.slug}/`,
      tags: post.tags ?? [],
      category: post.category,
    });
  });

  readPosts("case-study").forEach((post) => {
    docs.push({
      id: `case-${post.slug}`,
      type: "case-study",
      title: post.title,
      description: post.description,
      href: `/case-studies/${post.slug}/`,
      tags: post.tags ?? [],
      category: post.category,
    });
  });

  return docs;
}

function buildRssFeed() {
  const posts = readPosts("blog").slice(0, 20);
  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${absoluteUrl(`/blog/${post.slug}/`)}</link>
      <guid>${absoluteUrl(`/blog/${post.slug}/`)}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.description}]]></description>
    </item>`,
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Deeksha Saini Blog</title>
    <link>${absoluteUrl("/blog/")}</link>
    <description>Insights on content, copywriting, and social growth.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${absoluteUrl("/feed.xml")}" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;
}

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

const searchIndex = buildSearchIndex();
fs.writeFileSync(
  path.join(publicDir, "search-index.json"),
  JSON.stringify(searchIndex, null, 2),
);

fs.writeFileSync(path.join(publicDir, "feed.xml"), buildRssFeed());
fs.writeFileSync(path.join(publicDir, ".nojekyll"), "");

console.log("Generated search-index.json, feed.xml, and .nojekyll");
