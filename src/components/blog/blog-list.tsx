"use client";

import { useMemo, useState } from "react";
import type { PostMeta } from "@/types/content";
import { BlogCard } from "./blog-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";

const POSTS_PER_PAGE = 6;

function CategoryChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center rounded-full border-2 px-2.5 py-0.5 text-xs font-medium transition-colors",
        active
          ? "border-accent bg-accent/10 text-accent"
          : "border-border text-muted-foreground hover:bg-muted",
      )}
    >
      {children}
    </button>
  );
}

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
          <CategoryChip
            active={!category}
            onClick={() => {
              setCategory(null);
              setPage(1);
            }}
          >
            All
          </CategoryChip>
          {categories.map((cat) => (
            <CategoryChip
              key={cat}
              active={category === cat}
              onClick={() => {
                setCategory(cat);
                setPage(1);
              }}
            >
              {cat}
            </CategoryChip>
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
