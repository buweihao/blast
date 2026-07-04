import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://blast.weihaobu.cn',
  image: {
    responsiveStyles: false,
  },
  integrations: [sitemap()],
  markdown: {
    syntaxHighlight: 'prism',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
