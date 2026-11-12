import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import czechTypography from './integrations/czech-typography.mjs';

export default defineConfig({
  site: 'https://krakonosuvcyklomaraton.cz',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // every page is prerendered; only the form endpoint (src/pages/api/formular.ts) runs as a Vercel Function
  adapter: vercel(),
  integrations: [
    czechTypography(),
    // pages that only make sense after a form is sent stay out of the sitemap (they are noindex too)
    sitemap({ filter: (page) => !/\/(dekujeme|odeslani-selhalo)\/$/.test(page) }),
  ],
});
