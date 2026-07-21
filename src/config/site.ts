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
  email: 'hi@capeodev.com',
} as const;

export const links = {
  bookCall: 'https://cal.com/capeolabs/30min',
  substack: 'https://capeolabs.substack.com/',
  linkedin: 'https://www.linkedin.com/in/emmanuel-eboh',
  x: 'https://x.com/EOEboh',
  github: 'https://github.com/EOEboh',
  tiktok: 'https://www.tiktok.com/@eo_eboh',
  youtube: 'https://youtube.com/@capeolabs?si=5Z3GRhdx4mHssI6G',
  requestCv: `mailto:${site.email}?subject=${encodeURIComponent('CV request')}`,
} as const;


export const hero = {
  headline: "I build Go backends and AI infrastructure that don't fall over.",
  subline:
    'Six years shipping production backends in e-commerce, payments and AI. Built and still run hookdrop, ziga AI and more other live projects. 20,000+ developers read my engineering breakdowns.',
  primaryCta: 'Book a 30-minute call',
  secondaryCta: 'Request CV',
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
    body: 'Your product is outgrowing its backend, or your API keeps surprising the team that consumes it. I build production services in Go, Java or Node.js: tested, documented, and instrumented, so your frontend and your customers can depend on them.',
    engagement: '2 to 6 weeks',
  },
  {
    title: 'AI and automation',
    body: 'Your product is repetitive, or your team is spending too much time on manual work. I build AI and automation solutions: from chatbots to workflow automation, so your team can focus on what matters most.',
    engagement: '1 to 4 weeks',
  },
  {
    title: 'Product and developer experience',
    body: 'Your product is hard to use, or your API is hard to integrate. I build and improve user interfaces and developer experiences: intuitive and accessible, so your users and integrators can get the most out of your product.',
    engagement: '2 to 5 weeks',
  },
] as const;

export const contact = {
  hiring: {
    heading: 'Hiring for a senior backend or full-stack role?',
    body: "You get production Go, Java, and JavaScript experience, system design depth, and a record of shipping solo and in teams. I'm open to senior and lead roles, remote or relocating with visa sponsorship. Reach out and I'll send you my CV",
  },
  project: {
    heading: 'Need something built?',
    body: "Book a 30-minute call. You'll leave with a scoped plan either way: what gets built, how long it takes, and whether I'm the right fit. Vet me before the call: I explain engineering to 20,000+ developers in public, and hookdrop stays live because I keep running what I ship, async and in the open.",
  },
} as const;

export const footer = {
  prompt: 'macbook@CapEO:~$ echo "let\'s build"',
} as const;
