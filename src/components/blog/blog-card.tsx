import Link from "next/link";
import Image from "next/image";
import type { PostMeta } from "@/types/content";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/utils/format";
import { withBasePath } from "@/utils/base-path";

interface BlogCardProps {
  post: PostMeta;
  basePath: "/blog" | "/case-studies";
}

export function BlogCard({ post, basePath }: BlogCardProps) {
  const href = withBasePath(`${basePath}/${post.slug}/`);

  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-accent/20 to-muted text-sm text-muted-foreground">
            {post.category}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex flex-wrap gap-2">
          <Badge variant="secondary">{post.category}</Badge>
          <span className="text-xs text-muted-foreground">{post.readingTime}</span>
        </div>
        <h3 className="font-semibold leading-snug group-hover:text-accent">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
          {post.description}
        </p>
        <time className="mt-4 text-xs text-muted-foreground" dateTime={post.date}>
          {formatDate(post.date)}
        </time>
      </div>
    </Link>
  );
}
