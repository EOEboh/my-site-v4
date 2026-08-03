// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://capeodev.com',
  output: 'static',
  integrations: [mdx(), sitemap()],
  redirects: {
    // The in-progress stub lived here before the full write-up shipped.
    '/work/ziga-ai/': '/work/ziga-data/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'vesper',
    },
  },
});
