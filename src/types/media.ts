export interface VideoItem {
  id: string;
  title: string;
  description?: string;
  youtubeId: string;
  thumbnail: string;
  publishedAt?: string;
}

export interface InstagramReel {
  id: string;
  title: string;
  thumbnail: string;
  videoSrc?: string;
  instagramUrl: string;
}

export interface InstagramPost {
  id: string;
  title?: string;
  thumbnail: string;
  instagramUrl: string;
  aspectRatio?: "square" | "portrait" | "landscape";
}
