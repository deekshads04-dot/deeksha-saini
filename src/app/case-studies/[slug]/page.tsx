import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { ArticleBody } from "@/components/blog/article-body";
import { MdxRenderer } from "@/components/mdx/mdx-renderer";
import { getAllPostSlugs, getPostBySlug } from "@/lib/content/posts";
import { extractHeadings } from "@/lib/mdx/headings";
import { createPageMetadata } from "@/lib/seo/metadata";
import { createArticleSchema, createBreadcrumbSchema } from "@/lib/seo/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs("case-study").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug, "case-study");
  if (!post) return {};

  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/case-studies/${slug}/`,
    image: post.coverImage,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updated,
    tags: post.tags,
  });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug, "case-study");
  if (!post) notFound();

  const headings = extractHeadings(post.content);
  const path = `/case-studies/${slug}/`;

  const articleSchema = createArticleSchema(
    { ...post, type: "case-study" },
    path,
  );
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies/" },
    { name: post.title, path },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, breadcrumb]),
        }}
      />
      <Container className="py-12 md:py-16">
        <ArticleBody post={post} headings={headings} path={path}>
          <MdxRenderer source={post.content} />
        </ArticleBody>
      </Container>
    </>
  );
}
