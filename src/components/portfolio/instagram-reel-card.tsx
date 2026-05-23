"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { InstagramReel } from "@/types/media";
import { cn } from "@/utils/cn";

interface InstagramReelCardProps {
  reel: InstagramReel;
  className?: string;
}

export function InstagramReelCard({ reel, className }: InstagramReelCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
    if (videoRef.current && reel.videoSrc) {
      videoRef.current.play().catch(() => undefined);
    }
  };

  const handleMouseLeave = () => {
    setHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Link
      href={reel.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative block w-44 shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md sm:w-52",
        className,
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[9/16] overflow-hidden bg-muted">
        {reel.videoSrc ? (
          <>
            <video
              ref={videoRef}
              src={reel.videoSrc}
              muted
              loop
              playsInline
              preload="none"
              poster={reel.thumbnail}
              className={cn(
                "absolute inset-0 h-full w-full object-cover",
                !hovering && "opacity-0",
              )}
            />
            <Image
              src={reel.thumbnail}
              alt={reel.title}
              fill
              className={cn(
                "object-cover transition-opacity",
                hovering && reel.videoSrc && "opacity-0",
              )}
              sizes="208px"
            />
          </>
        ) : (
          <Image
            src={reel.thumbnail}
            alt={reel.title}
            fill
            className="object-cover"
            sizes="208px"
          />
        )}
      </div>
      {reel.title && (
        <p className="line-clamp-2 p-3 text-xs font-medium">{reel.title}</p>
      )}
    </Link>
  );
}
