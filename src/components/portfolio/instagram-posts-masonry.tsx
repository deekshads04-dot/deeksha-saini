import Image from "next/image";
import Link from "next/link";
import type { InstagramPost } from "@/types/media";
import { cn } from "@/utils/cn";

interface InstagramPostsMasonryProps {
  posts: InstagramPost[];
  title?: string;
}

const aspectClasses = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
};

export function InstagramPostsMasonry({
  posts,
  title = "Instagram Posts",
}: InstagramPostsMasonryProps) {
  if (posts.length === 0) return null;

  return (
    <section>
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>
      <div className="columns-2 gap-4 sm:columns-3">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={post.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 block break-inside-avoid overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
          >
            <div
              className={cn(
                "relative w-full overflow-hidden bg-muted",
                aspectClasses[post.aspectRatio ?? "square"],
              )}
            >
              <Image
                src={post.thumbnail}
                alt={post.title ?? "Instagram post"}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
