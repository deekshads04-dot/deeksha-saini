"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import type { VideoItem } from "@/types/media";
import { cn } from "@/utils/cn";

interface YouTubeCardProps {
  video: VideoItem;
  onClick: () => void;
  className?: string;
}

export function YouTubeCard({ video, onClick, className }: YouTubeCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative w-full overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        className,
      )}
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black shadow-lg">
            <Play className="ml-1 h-6 w-6 fill-current" />
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium leading-snug">{video.title}</h3>
        {video.description && (
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {video.description}
          </p>
        )}
      </div>
    </button>
  );
}
