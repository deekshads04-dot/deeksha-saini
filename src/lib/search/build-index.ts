import type { SearchDocument } from "@/types/search";
import { getAllPosts } from "@/lib/content/posts";
import { getAllCompanies } from "@/lib/content/companies";
import { getAllPortfolioItems } from "@/lib/content/portfolio";

export function buildSearchIndex(): SearchDocument[] {
  const documents: SearchDocument[] = [];

  getAllPosts("blog").forEach((post) => {
    documents.push({
      id: `blog-${post.slug}`,
      type: "blog",
      title: post.title,
      description: post.description,
      href: `/blog/${post.slug}/`,
      tags: post.tags,
      category: post.category,
    });
  });

  getAllPosts("case-study").forEach((post) => {
    documents.push({
      id: `case-${post.slug}`,
      type: "case-study",
      title: post.title,
      description: post.description,
      href: `/case-studies/${post.slug}/`,
      tags: post.tags,
      category: post.category,
    });
  });

  getAllCompanies().forEach((company) => {
    documents.push({
      id: `company-${company.slug}`,
      type: "company",
      title: company.name,
      description: company.overview,
      href: `/experience/${company.slug}/`,
      tags: [company.industry, company.role],
      category: company.industry,
    });
  });

  getAllPortfolioItems().forEach((item) => {
    documents.push({
      id: `portfolio-${item.id}`,
      type: "portfolio",
      title: item.title,
      description: item.description,
      href: "/portfolio/",
      tags: item.tags,
      category: item.category,
    });
  });

  return documents;
}
