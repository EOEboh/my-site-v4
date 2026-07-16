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
  title: 'Emmanuel O. Eboh: Go backend and payments engineer',
  description:
    'Go backend and payments engineer. Solo-shipped hookdrop, a live webhook debugging SaaS, and teaches 20,000+ developers how backends actually work.',
  url: 'https://capeodev.com',
  email: 'emmanueleboh87@gmail.com',
  cvPath: '/cv/Emmanuel_O_Eboh_Senior_Backend_Engineer.pdf', 
} as const;

export const links = {
  bookCall: 'https://cal.com/capeolabs/30min', 
  // substack: 'https://capeo.substack.com', 
  linkedin: 'https://www.linkedin.com/in/emmanuel-eboh', 
  x: 'https://x.com/EOEboh', 
  github: 'https://github.com/EOEboh',
  tiktok: 'https://www.tiktok.com/@eo_eboh', 
  // youtube: 'https://www.youtube.com/@cap_eo', 
} as const;

/**
 * Headline drafts (under 12 words, must contain "Go" plus fintech/payments/backend):
 * 1. "I build Go backends and payments infrastructure that don't fall over." (implemented: keeps the signature line, adds Go)
 * 2. "Payments infrastructure in Go for fintechs that can't afford failed webhooks."
 * 3. "Go backend and payments engineering for fintech teams and founders."
 */
export const hero = {
  headline: "I build Go backends and e-commerce infrastructure that don't fall over.",
  subline:
    'Six years shipping production backends in e-commerce, payments and AI. Built and still run hookdrop, a webhook debugging SaaS, and more other live projects. 20,000+ developers read my engineering breakdowns.',
  primaryCta: 'Book a 30-minute call',
  secondaryCta: 'Download CV',
} as const;

export const metrics = [
  { value: '6+', label: 'years shipping production backends' },
  { value: '10+', label: 'SaaS products and AI agents shipped end to end' },
  { value: '20K+', label: 'devs read my engineering breakdowns' },
  // TODO: name the awards so this label can say what they were for.
  { value: '3', label: 'digital community awards won ' },
] as const;

export const services = [
  {
    title: 'Backend and API development',
    body: 'Your product is outgrowing its backend, or your API keeps surprising the team that consumes it. I build production services in Go or Node.js: tested, documented, and instrumented, so your frontend and your customers can depend on them.',
    engagement: '2 to 6 weeks',
  },
  {
    title: 'Payments integration',
    body: 'Billing bugs cost you money and user trust, and every provider has quirks its docs never mention. I ship Paystack, LemonSqueezy, and Stripe integrations: billing flows, webhook handling, retries, and reconciliation built for what providers actually send.',
    engagement: '1 to 4 weeks',
  },
  {
    title: 'Developer tooling and SDKs',
    body: 'Your API works, but integrating it is a slog and your support tickets prove it. I build CLIs, SDKs, and internal tools with clear errors, sane defaults, and documentation engineers actually read.',
    engagement: '2 to 5 weeks',
  },
] as const;

export const contact = {
  hiring: {
    heading: 'Hiring for a senior backend or full-stack role?',
    body: "You get production Go, Java, and JavaScript experience, system design depth, and a record of shipping solo and in teams. I'm open to senior and lead roles, remote or relocating with visa sponsorship.",
  },
  project: {
    heading: 'Need something built?',
    body: "Book a 30-minute call. You'll leave with a scoped plan either way: what gets built, how long it takes, and whether I'm the right fit. Vet me before the call: I explain engineering to 20,000+ developers in public, and hookdrop stays live because I keep running what I ship, async and in the open.",
  },
} as const;

export const footer = {
  prompt: 'captain@capeo:~$ echo "let\'s build"',
} as const;
