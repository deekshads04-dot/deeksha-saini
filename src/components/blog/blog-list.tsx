"use client";

import { useMemo, useState } from "react";
import type { PostMeta } from "@/types/content";
import { BlogCard } from "./blog-card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/utils/cn";

const POSTS_PER_PAGE = 6;

interface BlogListProps {
  posts: PostMeta[];
  basePath: "/blog" | "/case-studies";
  categories: string[];
}

export function BlogList({ posts, basePath, categories }: BlogListProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesQuery =
        !query ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.description.toLowerCase().includes(query.toLowerCase());
      const matchesCategory =
        !category || post.category.toLowerCase() === category.toLowerCase();
      return matchesQuery && matchesCategory;
    });
  }, [posts, query, category]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE,
  );

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        <Input
          placeholder="Search posts..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          className="sm:max-w-xs"
        />
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => {
              setCategory(null);
              setPage(1);
            }}
            className={cn(!category && "ring-2 ring-accent ring-offset-2 rounded-full")}
          >
            <Badge variant={!category ? "default" : "outline"}>All</Badge>
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setCategory(cat);
                setPage(1);
              }}
              className={cn(
                category === cat &&
                  "ring-2 ring-accent ring-offset-2 rounded-full",
              )}
            >
              <Badge variant={category === cat ? "default" : "outline"}>
                {cat}
              </Badge>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {paginated.map((post) => (
          <BlogCard key={post.slug} post={post} basePath={basePath} />
        ))}
      </div>

      {paginated.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">No posts found.</p>
      )}

      {totalPages > 1 && (
        <div className="mt-10 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPage(p)}
              className={cn(
                "h-10 w-10 rounded-full text-sm transition-colors",
                page === p
                  ? "bg-accent text-accent-foreground"
                  : "border border-border hover:bg-muted",
              )}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
