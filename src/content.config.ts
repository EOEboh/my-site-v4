import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    outcome: z.string(), // one-liner shown on cards
    role: z.string(),
    stack: z.array(z.string()),
    tags: z.array(z.string()), // short tech tags for cards
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    heroImage: z.string().optional(), // path under /public, swap placeholder
    heroImageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    flagship: z.boolean().default(false), // full-width card on homepage
    order: z.number().default(99),
    draft: z.boolean().default(false),
    inProgress: z.boolean().default(false), // placeholder page until the write-up is ready
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    topic: z.string(), // short tag, e.g. "sql", "http", "incident"
    externalUrl: z.string().url().optional(), // set for X threads etc.
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, writing };
