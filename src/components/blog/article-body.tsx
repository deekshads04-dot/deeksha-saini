"use client";

import type { PostMeta, TocItem } from "@/types/content";
import { ArticleHeader } from "./article-header";
import { ReadingProgress } from "./reading-progress";
import { TableOfContents } from "./table-of-contents";
import { ShareButtons } from "./share-buttons";

interface ArticleBodyProps {
  post: PostMeta;
  headings: TocItem[];
  path: string;
  children: React.ReactNode;
}

export function ArticleBody({
  post,
  headings,
  path,
  children,
}: ArticleBodyProps) {
  return (
    <>
      <ReadingProgress />
      <div className="grid gap-12 lg:grid-cols-[1fr_220px]">
        <article>
          <ArticleHeader post={post} />
          <div className="mb-8">
            <ShareButtons title={post.title} path={path} />
          </div>
          {children}
        </article>
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <TableOfContents headings={headings} />
          </div>
        </aside>
      </div>
    </>
  );
}
