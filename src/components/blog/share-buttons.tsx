"use client";

import { Link2, Briefcase, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

interface ShareButtonsProps {
  title: string;
  path: string;
}

export function ShareButtons({ title, path }: ShareButtonsProps) {
  const url = `${siteConfig.url}${path}`;

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="outline" size="sm" onClick={copyLink}>
        <Link2 className="mr-2 h-4 w-4" />
        Copy link
      </Button>
      <Button variant="outline" size="sm" asChild>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Share
        </a>
      </Button>
      <Button variant="outline" size="sm" asChild>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Briefcase className="mr-2 h-4 w-4" />
          LinkedIn
        </a>
      </Button>
    </div>
  );
}
