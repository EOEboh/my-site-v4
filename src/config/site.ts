/**
 * Single source of truth for site copy, links, and metrics.
 * Edit wording here, not in layout code.
 *
 * PLACEHOLDER links are marked with TODO. Swap before launch.
 */

export const site = {
  name: 'Emmanuel O. Eboh',
  brand: 'CapEO Labs',
  handle: 'EOEboh',
  title: 'Emmanuel O. Eboh · Backend & Payments Infrastructure',
  description:
    'Senior software engineer. Go, distributed systems, fintech. I design, build, and launch backend and payments infrastructure.',
  url: 'https://capeolabs.com', // TODO: set the real production domain
  email: 'emmanueleboh87@gmail.com',
  cvPath: '/cv/emmanuel-eboh-cv.pdf', // TODO: drop the real CV pdf at public/cv/
} as const;

export const links = {
  bookCall: 'https://cal.com/capeolabs/30min', 
  // substack: 'https://capeo.substack.com', 
  linkedin: 'https://www.linkedin.com/in/emmanuel-eboh', 
  x: 'https://x.com/EOEboh', 
  github: 'https://github.com/EOEboh',
  tiktok: 'https://www.tiktok.com/@eo_eboh', // TODO: verify handle
  // youtube: 'https://www.youtube.com/@cap_eo', 
} as const;

export const hero = {
  headline: "I build backend and payments infrastructure that doesn't fall over.",
  subline:
    'Senior software engineer. Go, distributed systems, fintech. Shipped hookdrop solo. Teaching 20,000+ developers how backends actually work.',
  primaryCta: 'Book a call',
  secondaryCta: 'Download CV',
} as const;

export const metrics = [
  { value: '20K+', label: 'audience across X and TikTok' },
  { value: '1', label: 'SaaS shipped solo: hookdrop' },
  { value: '10', label: 'AI projects taught in a live bootcamp' },
  { value: '5+', label: 'years focused on backend' },
] as const;

export const services = [
  {
    title: 'Backend and API development',
    body: 'Production services in Go or Node.js: tested, documented, and instrumented. APIs your frontend team and your customers can trust.',
    engagement: '2 to 6 weeks',
  },
  {
    title: 'Payments integration',
    body: 'Paystack, LemonSqueezy, Stripe. Billing flows, webhook handling, retries, and reconciliation that survive real-world provider quirks.',
    engagement: '1 to 4 weeks',
  },
  {
    title: 'Developer tooling and SDKs',
    body: 'CLIs, internal tools, and API clients that engineers actually enjoy using. Clear errors, sane defaults, real documentation.',
    engagement: '2 to 5 weeks',
  },
] as const;

export const contact = {
  hiring: {
    heading: 'Hiring for a backend or fintech role?',
    body: 'I bring production Go experience, payments domain depth, and a track record of shipping alone or in a team.',
  },
  project: {
    heading: 'Need something built?',
    body: 'Tell me what you need on a 30 minute call. You get a straight answer on scope, timeline, and whether I am the right fit.',
  },
} as const;

export const footer = {
  prompt: 'captain@capeo:~$ echo "let\'s build"',
} as const;
