export interface PostLink {
  title: string;
  slug: string;
  description?: string;
  date?: string;
}

export interface SocialLink {
  platform: string;
  label: string;
  href: string;
  icon: string;
}
