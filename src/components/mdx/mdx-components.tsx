import Image from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { cn } from "@/utils/cn";

function Callout({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning" | "success";
}) {
  return (
    <aside
      className={cn(
        "my-6 rounded-xl border-l-4 p-4",
        type === "info" && "border-accent bg-accent/5",
        type === "warning" && "border-amber-500 bg-amber-500/5",
        type === "success" && "border-emerald-500 bg-emerald-500/5",
      )}
    >
      {children}
    </aside>
  );
}

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0" {...props} />
  ),
  h2: (props) => (
    <h2
      className="mt-10 scroll-m-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight" {...props} />
  ),
  p: (props) => <p className="mt-4 leading-7 text-muted-foreground [&:not(:first-child)]:mt-4" {...props} />,
  ul: (props) => <ul className="my-4 ml-6 list-disc space-y-2" {...props} />,
  ol: (props) => <ol className="my-4 ml-6 list-decimal space-y-2" {...props} />,
  li: (props) => <li className="leading-7 text-muted-foreground" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-4 border-l-4 border-accent pl-4 italic text-muted-foreground"
      {...props}
    />
  ),
  a: ({ href, ...props }) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          className="font-medium text-accent underline-offset-4 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        />
      );
    }
    return (
      <Link
        href={href ?? "#"}
        className="font-medium text-accent underline-offset-4 hover:underline"
        {...props}
      />
    );
  },
  code: ({ className, ...props }) => (
    <code
      className={cn(
        "rounded bg-muted px-1.5 py-0.5 font-mono text-sm",
        className,
      )}
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-xl border border-border bg-muted/50 p-4 text-sm"
      {...props}
    />
  ),
  img: ({ alt, src }) => (
    <span className="my-6 block overflow-hidden rounded-xl">
      {src && (
        <Image
          src={src}
          alt={alt ?? ""}
          width={800}
          height={450}
          className="h-auto w-full"
        />
      )}
    </span>
  ),
  Callout,
};
