# CapEO Labs · capeolabs.com

Personal portfolio for Emmanuel O. Eboh (`cap-eo`). Astro 5, Tailwind CSS 4, static output, dark terminal aesthetic.

## Local dev

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static site into dist/
pnpm preview    # serve the production build locally
```

Requires Node 20+ and pnpm.

## Where things live

| What | Where |
| --- | --- |
| All homepage copy, links, metrics | `src/config/site.ts` |
| Case studies | `src/content/work/*.mdx` |
| Writing entries | `src/content/writing/*.md` |
| Design tokens (colors, fonts, type scale) | `src/styles/global.css` (`@theme` block) |
| Meta, OG, JSON-LD, PostHog gate | `src/layouts/BaseLayout.astro` |

### Copy rules

No em dashes anywhere. Banned words: leverage (as a verb), seamless, robust, ecosystem, unlock, empower, game-changer, transformative, passionate, "dive into", "delve into". Check before committing:

```sh
grep -rn --include='*.md*' -e '—' src/
grep -rniE --include='*.md*' 'seamless|robust|ecosystem|unlock|empower|game.changer|transformative|passionate|dive into|delve into|leverag' src/
```

## Adding a case study

Create `src/content/work/my-project.mdx`. The filename becomes the URL: `/work/my-project/`.

```mdx
---
title: 'my-project: outcome-stating title'
outcome: 'One line result, shown on cards.'
role: 'Solo founder and engineer'
timeline: '2026, 6 weeks'
stack: ['Go', 'SQLite']          # full stack, shown on the detail page
tags: ['Go', 'SQLite']           # 3 to 4 short tags, shown on cards
liveUrl: 'https://example.com'   # optional
repoUrl: 'https://github.com/..' # optional
heroImage: '/images/work/my-project-hero.png'  # 1600x900
heroImageAlt: 'What the screenshot shows'
featured: true    # appears on the homepage
flagship: false   # true = the single full-width homepage card
order: 4          # homepage sort order
---

## Problem and constraints
...

## Key decisions
### Decision name
**Decision:** ... **Why:** ... **Tradeoff:** ...

## The hard part: name it
The war story. Code blocks welcome.

## Results and lessons
Numbers first, then lessons.
```

The page template (`src/pages/work/[slug].astro`) renders the header from frontmatter and the body as written. Keep the four `##` sections in that order.

## Adding a writing entry

Create `src/content/writing/my-post.md` with `title`, `date`, `topic`, and optionally `externalUrl` (X threads, Substack posts link out). Set `featured: true` for one of the four homepage slots.

## Placeholder assets to swap

All placeholders are dark tiles marked `PLACEHOLDER`. Replace the file at the same path and size:

| Asset | Path | Size |
| --- | --- | --- |
| hookdrop dashboard screenshot | `public/images/work/hookdrop-hero.png` | 1600x900 |
| agent-skills screenshot | `public/images/work/agent-skills-hero.png` | 1600x900 |
| Capstone screenshot | `public/images/work/bootcamp-capstone-hero.png` | 1600x900 |
| Hero demo GIF slot (unused on v1, terminal component renders instead) | `public/images/hero-demo.png` | 1200x750 |
| Default OG image | `public/og-default.png` | 1200x630 |

Placeholder links marked `TODO` in `src/config/site.ts`: cal.com booking URL, Substack, LinkedIn, X, TikTok, YouTube handles, and the production domain (also update `site` in `astro.config.mjs` and `public/robots.txt`).

Regenerate placeholder tiles any time: `node scripts/generate-placeholders.mjs`.

## Analytics

PostHog is off by default. To enable, set `PUBLIC_POSTHOG_KEY` (see `.env.example`). No key, no script: nothing loads.

## Deploying to Cloudflare Pages

Option A, git integration:

1. Push the repo to GitHub.
2. Cloudflare dashboard: Workers & Pages, Create, Pages, connect the repo.
3. Build command `pnpm build`, output directory `dist`. No environment variables needed.
4. Set the production domain, then update `site` in `astro.config.mjs` to match and redeploy (sitemap and OG URLs derive from it).

Option B, direct upload:

```sh
pnpm build
# upload dist/ in the Pages dashboard, or:
pnpm dlx wrangler pages deploy dist
```

The build is plain static files. Any static host works.
