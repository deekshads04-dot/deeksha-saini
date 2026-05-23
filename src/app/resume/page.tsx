import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/config/seo";
import { withBasePath } from "@/utils/base-path";

export const metadata = createPageMetadata({
  title: pageSeo.resume.title,
  description: pageSeo.resume.description,
  path: "/resume/",
});

export default function ResumePage() {
  return (
    <Container className="py-16 md:py-24">
      <header className="mb-12 max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Resume
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {siteConfig.creator.role}
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="relative aspect-[8.5/11] w-full max-w-2xl bg-muted">
            <Image
              src={siteConfig.resume.previewImage}
              alt="Resume preview"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 672px"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:sticky lg:top-24">
          <Button asChild size="lg">
            <a
              href={withBasePath(siteConfig.resume.pdfUrl)}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </Button>
          <Button asChild variant="outline">
            <Link href={withBasePath("/contact/")}>Contact Me</Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            Last updated regularly. For the latest experience, see the{" "}
            <Link
              href={withBasePath("/experience/")}
              className="text-accent hover:underline"
            >
              experience page
            </Link>
            .
          </p>
        </div>
      </div>
    </Container>
  );
}
