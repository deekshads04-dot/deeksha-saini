import Image from "next/image";
import type { PostMeta } from "@/types/content";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/utils/format";

interface ArticleHeaderProps {
  post: PostMeta;
}

export function ArticleHeader({ post }: ArticleHeaderProps) {
  return (
    <header className="mb-10">
      <div className="mb-4 flex flex-wrap gap-2">
        <Badge>{post.category}</Badge>
        {post.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
        {post.title}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>
      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span>·</span>
        <span>{post.readingTime}</span>
        {post.author && (
          <>
            <span>·</span>
            <span>{post.author}</span>
          </>
        )}
      </div>
      {post.coverImage && (
        <div className="relative mt-8 aspect-[21/9] overflow-hidden rounded-2xl bg-muted">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      )}
    </header>
  );
}
