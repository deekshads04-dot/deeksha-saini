"use client";

import { useState } from "react";
import type { VideoItem } from "@/types/media";
import { YouTubeCard } from "./youtube-card";
import { YouTubeModal } from "./youtube-modal";

interface YouTubeGridProps {
  videos: VideoItem[];
}

export function YouTubeGrid({ videos }: YouTubeGridProps) {
  const [active, setActive] = useState<VideoItem | null>(null);
  const [open, setOpen] = useState(false);

  if (videos.length === 0) return null;

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <YouTubeCard
            key={video.id}
            video={video}
            onClick={() => {
              setActive(video);
              setOpen(true);
            }}
          />
        ))}
      </div>
      <YouTubeModal
        video={active}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}
