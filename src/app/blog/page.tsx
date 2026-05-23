import { Container } from "@/components/layout/container";
import { BlogList } from "@/components/blog/blog-list";
import { getAllPosts, getAllCategories } from "@/lib/content/posts";
import { createPageMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/config/seo";

export const metadata = createPageMetadata({
  title: pageSeo.blog.title,
  description: pageSeo.blog.description,
  path: "/blog/",
});

export default function BlogPage() {
  const posts = getAllPosts("blog");
  const categories = getAllCategories("blog");

  return (
    <Container className="py-16 md:py-24">
      <header className="mb-12 max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Blog</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Insights on content strategy, copywriting, and social media growth.
        </p>
      </header>
      <BlogList posts={posts} basePath="/blog" categories={categories} />
    </Container>
  );
}
