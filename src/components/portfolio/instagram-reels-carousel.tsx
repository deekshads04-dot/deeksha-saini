import type { InstagramReel } from "@/types/media";
import { InstagramReelCard } from "./instagram-reel-card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface InstagramReelsCarouselProps {
  reels: InstagramReel[];
  title?: string;
}

export function InstagramReelsCarousel({
  reels,
  title = "Instagram Reels",
}: InstagramReelsCarouselProps) {
  if (reels.length === 0) return null;

  return (
    <section>
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex gap-4 pb-4">
          {reels.map((reel) => (
            <InstagramReelCard key={reel.id} reel={reel} />
          ))}
        </div>
      </ScrollArea>
    </section>
  );
}
