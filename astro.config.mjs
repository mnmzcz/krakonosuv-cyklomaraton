import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import czechTypography from './integrations/czech-typography.mjs';

export default defineConfig({
  site: 'https://krakonosuvcyklomaraton.cz',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // every page is prerendered; only the form endpoint (src/pages/api/formular.ts) runs as a Vercel Function
  adapter: vercel(),
  integrations: [czechTypography()],
});
