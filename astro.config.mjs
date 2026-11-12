import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import czechTypography from './integrations/czech-typography.mjs';

export default defineConfig({
  site: 'https://krakonosuvcyklomaraton.cz',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // Astro 7 defaults to 'jsx', which drops whitespace across line breaks between inline elements
  // ("tel. <a>…</a>" would render as "tel.…"); keep the HTML whitespace rules the templates were written for
  compressHTML: true,
  // every page is prerendered; only the form endpoint (src/pages/api/formular.ts) runs as a Vercel Function
  adapter: vercel(),
  integrations: [czechTypography()],
  vite: {
    build: {
      // Page CSS is minified (by Lightning CSS) in the server build, which has no browser targets of its own.
      // Without them it drops -webkit- prefixes and writes shorthands Safari rejects, such as
      // "text-decoration: line-through 2px". This is Vite's default browser list for client builds.
      cssTarget: ['chrome111', 'edge111', 'firefox114', 'safari16.4', 'ios16.4'],
    },
  },
});
