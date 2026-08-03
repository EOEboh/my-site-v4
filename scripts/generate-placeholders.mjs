/**
 * Generates clearly-marked placeholder PNGs in the site's dark terminal style.
 * Re-run any time: node scripts/generate-placeholders.mjs
 *
 * Swap each placeholder by dropping a real image at the same path and size.
 * Open Graph share cards are finished assets, not placeholders: they live in
 * scripts/generate-og-images.mjs.
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const OUT = 'public';

const placeholder = (w, h, label, note) => `
<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${w}" height="${h}" fill="#121214"/>
  <rect x="1" y="1" width="${w - 2}" height="${h - 2}" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2" stroke-dasharray="12 10"/>
  <text x="${w / 2}" y="${h / 2 - 14}" font-family="Menlo, monospace" font-size="${Math.round(w / 45)}" fill="#6b6b74" text-anchor="middle">PLACEHOLDER · ${label}</text>
  <text x="${w / 2}" y="${h / 2 + 30}" font-family="Menlo, monospace" font-size="${Math.round(w / 60)}" fill="#4a4a52" text-anchor="middle">replace with a real asset · ${w}x${h}</text>
</svg>`;

const jobs = [
  { file: 'images/work/hookdrop-hero.png', w: 1600, h: 900, label: 'hookdrop dashboard screenshot' },
  { file: 'images/work/bootcamp-capstone-hero.png', w: 1600, h: 900, label: 'capstone screenshot' },
  { file: 'images/hero-demo.png', w: 1200, h: 750, label: 'hookdrop demo GIF slot' },
];

for (const job of jobs) {
  const dest = path.join(OUT, job.file);
  await mkdir(path.dirname(dest), { recursive: true });
  await sharp(Buffer.from(placeholder(job.w, job.h, job.label))).png().toFile(dest);
  console.log('wrote', dest);
}
