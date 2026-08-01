/**
 * Generates the site's Open Graph share cards. Re-run after editing:
 *   node scripts/generate-og-images.mjs
 *
 * These are finished assets, not placeholders. They follow the standard
 * social card constraints:
 *   - 1200x630 (1.91:1), the size Facebook, LinkedIn, X and Slack all crop to
 *   - text kept inside a 130px left margin and clear of the bottom edge, so
 *     nothing is lost when a platform crops or overlays the card
 *   - headline at 52px so it stays readable at the ~360px wide thumbnail
 *     most feeds actually render
 *   - flat PNG, no gradients or photography, so it stays well under 1MB
 */
import sharp from 'sharp';
import path from 'node:path';

const OUT = 'public';
const DOMAIN = 'capeodev.com';

/**
 * Shared terminal-window chrome, matching the site's TerminalWindow component.
 * `lines` are drawn in order; each is { text, y, size, fill, weight }.
 */
const card = ({ eyebrow, lines, cursorAfter }) => {
  const cursorX = 130 + DOMAIN.length * 24 * 0.6 + 8;
  return `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0a0a0b"/>
  <rect x="80" y="80" width="1040" height="470" rx="14" fill="#121214" stroke="rgba(255,255,255,0.1)"/>
  <circle cx="122" cy="122" r="7" fill="#2e2e33"/>
  <circle cx="146" cy="122" r="7" fill="#2e2e33"/>
  <circle cx="170" cy="122" r="7" fill="#2e2e33"/>
  <line x1="80" y1="152" x2="1120" y2="152" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  <text x="130" y="222" font-family="Menlo, monospace" font-size="26" fill="#6b6b74">${eyebrow}</text>
  ${lines
    .map(
      (l) =>
        `<text x="130" y="${l.y}" font-family="Menlo, monospace" font-size="${l.size}" ${
          l.weight ? `font-weight="${l.weight}"` : ''
        } fill="${l.fill}">${l.text}</text>`,
    )
    .join('\n  ')}
  <text x="130" y="502" font-family="Menlo, monospace" font-size="24" fill="#d4a257">${DOMAIN}</text>
  ${cursorAfter ? `<rect x="${cursorX}" y="480" width="15" height="28" fill="#d4a257"/>` : ''}
</svg>`;
};

const cards = [
  {
    file: 'og-default.png',
    svg: card({
      eyebrow: '~/cap-eo $ whoami',
      lines: [
        { text: 'Emmanuel O. Eboh', y: 320, size: 46, weight: 'bold', fill: '#ededef' },
        { text: 'Backend and payments infrastructure.', y: 378, size: 26, fill: '#a0a0a8' },
        { text: 'Go. Distributed systems. Fintech.', y: 416, size: 26, fill: '#a0a0a8' },
      ],
      cursorAfter: true,
    }),
  },
  {
    file: 'og-lead-rescue.png',
    svg: card({
      eyebrow: '~/cap-eo $ lead-rescue',
      lines: [
        { text: 'Every enquiry, in front', y: 298, size: 52, weight: 'bold', fill: '#ededef' },
        { text: 'of the right person.', y: 356, size: 52, weight: 'bold', fill: '#ededef' },
        { text: 'Enquiry routing for UK law firms.', y: 424, size: 26, fill: '#a0a0a8' },
      ],
      cursorAfter: true,
    }),
  },
];

for (const { file, svg } of cards) {
  const dest = path.join(OUT, file);
  await sharp(Buffer.from(svg), { density: 144 }).resize(1200, 630).png().toFile(dest);
  console.log('wrote', dest);
}
