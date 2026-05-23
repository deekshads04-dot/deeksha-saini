"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { VideoItem } from "@/types/media";

interface YouTubeModalProps {
  video: VideoItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function YouTubeModal({ video, open, onOpenChange }: YouTubeModalProps) {
  if (!video) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden p-0 sm:max-w-4xl">
        <div className="aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold">{video.title}</h3>
          {video.description && (
            <p className="mt-1 text-sm text-muted-foreground">{video.description}</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
