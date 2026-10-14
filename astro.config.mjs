import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeProducts from './src/lib/rehype-products.mjs';

export default defineConfig({
  site: 'https://homebillcuts.com',
  integrations: [mdx(), sitemap()],
  markdown: {
    rehypePlugins: [rehypeProducts],
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
