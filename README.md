# Deeksha Saini — Creator Portfolio Platform

Production-grade, fully static, config-driven portfolio for content creators, copywriters, and social media marketers. Built with Next.js App Router, TypeScript, Tailwind CSS, and MDX. Deploys to **GitHub Pages** with zero backend.

## Features

- **Static export** — `output: "export"`, no API routes or server features
- **Config-driven** — navigation, homepage sections, companies, portfolio, socials
- **CMS-ready abstractions** — `getAllPosts()`, `getCompanyBySlug()`, etc.
- **MDX blog & case studies** — tags, categories, pagination, search, RSS
- **Experience pages** — per-company configs with dynamic sections
- **Instagram & YouTube** — custom cards, carousels, modal video player
- **Global search** — Fuse.js + build-time index
- **SEO** — metadata, OpenGraph, schema.org, sitemap, robots.txt
- **Dark mode** — system preference + toggle

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content editing (non-coders)

| What to edit | Where |
|--------------|--------|
| Site name, bio, hero image | `src/config/site.ts` |
| Navigation | `src/config/navigation.ts` |
| Homepage section order/visibility | `src/config/homepage.ts` |
| Company experience | `src/data/companies/*.ts` |
| Portfolio items | `src/data/portfolio/index.ts` |
| Featured videos/writing | `src/data/featured/` |
| Blog posts | `src/content/blog/*.mdx` |
| Case studies | `src/content/case-studies/*.mdx` |
| Social links | `src/data/socials/index.ts` |

### Homepage sections

Toggle and reorder sections in `src/config/homepage.ts`:

```ts
{ id: "featuredVideos", enabled: true, order: 5 }
```

### Company pages

Each company is a file in `src/data/companies/`. Control which sections render:

```ts
sections: ["hero", "achievements", "instagramReels", "blogs"]
```

## GitHub Pages deployment

1. **Enable Pages (required once):** [Settings → Pages](https://github.com/me4abhi/deeksha-saini/settings/pages) → **Build and deployment** → **Source:** **GitHub Actions**.  
   If this is still set to “Deploy from a branch”, the deploy job fails with `404` / “Failed to create deployment”.

2. Copy `.env.example` to `.env.local` and set:
   - `NEXT_PUBLIC_SITE_URL` — e.g. `https://deekshads04-dot.github.io/deeksha-saini`
   - `NEXT_PUBLIC_BASE_PATH` — `/deeksha-saini` for project sites (empty for custom domains). Use plain paths in `<Link href="/blog/">`; Next.js adds the base path once.

3. Push to `main` or `development` — the GitHub Action builds `out/` and deploys via `actions/deploy-pages`.

4. Optional: repo variable `SITE_URL` overrides the default Pages URL in CI.

## Build

```bash
npm run build
```

Output is in `out/`. Prebuild generates `public/search-index.json`, `public/feed.xml`, and placeholder assets.

## Architecture

```
src/
  app/           # Routes (static pages)
  components/    # UI, sections, layout
  config/        # Site-wide configuration
  content/       # MDX blog & case studies
  data/          # Structured JSON-like TS data
  lib/           # Content layer abstractions
  types/         # TypeScript models
```

**Rule:** UI components never read MDX files directly. Use `src/lib/content/*` helpers only.

## Tech stack

- Next.js 16 (App Router, static export)
- TypeScript
- Tailwind CSS v4
- MDX (`next-mdx-remote`, gray-matter)
- Framer Motion, Lucide, Fuse.js, next-themes

## License

Private — all rights reserved.
