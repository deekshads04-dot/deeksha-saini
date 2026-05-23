import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const files = [
  "images/creator-hero.jpg",
  "images/resume-preview.jpg",
  "images/og-default.jpg",
  "images/blog/landing-page.jpg",
  "images/blog/instagram-reels.jpg",
  "images/blog/glow-labs.jpg",
  "images/blog/brand-voice.jpg",
  "images/portfolio/glow-labs.jpg",
  "images/portfolio/nova-digital.jpg",
  "images/portfolio/freshframe.jpg",
  "images/portfolio/pulse-media.jpg",
  "images/portfolio/craft-co.jpg",
  "images/portfolio/elevate.jpg",
  "images/companies/glow-labs-cover.jpg",
  "images/companies/nova-digital-cover.jpg",
  "images/companies/freshframe-cover.jpg",
  "thumbnails/youtube-featured-1.jpg",
  "thumbnails/youtube-featured-2.jpg",
  "thumbnails/youtube-featured-3.jpg",
  "thumbnails/glow-labs-launch.jpg",
  "thumbnails/glow-labs-routine.jpg",
  "thumbnails/nova-demo.jpg",
  "thumbnails/glow-reel-1.jpg",
  "thumbnails/glow-reel-2.jpg",
  "thumbnails/glow-reel-3.jpg",
  "thumbnails/glow-post-1.jpg",
  "thumbnails/glow-post-2.jpg",
  "thumbnails/glow-post-3.jpg",
  "thumbnails/fresh-reel-1.jpg",
  "thumbnails/fresh-reel-2.jpg",
  "thumbnails/fresh-post-1.jpg",
  "thumbnails/fresh-post-2.jpg",
];

const svgLogos = [
  "images/companies/glow-labs-logo.svg",
  "images/companies/nova-digital-logo.svg",
  "images/companies/freshframe-logo.svg",
  "images/brands/glow-labs.svg",
  "images/brands/nova-digital.svg",
  "images/brands/freshframe.svg",
  "images/brands/pulse-media.svg",
  "images/brands/craft-co.svg",
  "images/brands/elevate.svg",
];

function placeholderSvg(label, w = 800, h = 600) {
  const text = label.replace(/\.[^.]+$/, "").replace(/[-_/]/g, " ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#7c3aed;stop-opacity:0.15"/>
      <stop offset="100%" style="stop-color:#a78bfa;stop-opacity:0.35"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <rect width="100%" height="100%" fill="#f4f4f5" fill-opacity="0.5"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui,sans-serif" font-size="24" fill="#52525b">${text}</text>
</svg>`;
}

function logoSvg(label) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40">
  <text x="8" y="26" font-family="system-ui,sans-serif" font-size="14" font-weight="600" fill="#52525b">${label}</text>
</svg>`;
}

for (const file of files) {
  const full = path.join(publicDir, file);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  const label = path.basename(file);
  fs.writeFileSync(full.replace(/\.jpg$/, ".svg"), placeholderSvg(label));
  // Also write as .jpg content that's actually svg - Next Image might fail on svg with .jpg extension
  // Better: write real minimal jpeg or use .svg extension in data files
}

// Write SVG files with correct extension
for (const file of files) {
  const svgPath = path.join(publicDir, file.replace(/\.jpg$/, ".svg"));
  fs.mkdirSync(path.dirname(svgPath), { recursive: true });
  fs.writeFileSync(svgPath, placeholderSvg(path.basename(file)));
}

for (const file of svgLogos) {
  const full = path.join(publicDir, file);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  const name = path.basename(file, ".svg").replace(/-/g, " ");
  fs.writeFileSync(full, logoSvg(name));
}

// Create empty resume pdf placeholder
fs.mkdirSync(path.join(publicDir, "resume"), { recursive: true });
fs.writeFileSync(
  path.join(publicDir, "resume", "deeksha-saini-resume.pdf"),
  "%PDF-1.1\n% Placeholder resume PDF\n",
);

console.log("Placeholders created. Update image paths to .svg where needed.");
