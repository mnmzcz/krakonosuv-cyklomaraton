import { defineConfig } from 'astro/config';
import czechTypography from './integrations/czech-typography.mjs';

export default defineConfig({
  site: 'https://krakonosuvcyklomaraton.cz',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [czechTypography()],
  // WordPress-era addresses that no longer have their own page
  redirects: {
    '/fotogalerie/2026-2/': '/fotogalerie/#rocnik-2026',
    '/fotogalerie/2025-2/': '/fotogalerie/#rocnik-2025',
    '/fotogalerie/2024-2/': '/fotogalerie/#rocnik-2024',
    '/fotogalerie/2023-2/': '/fotogalerie/#rocnik-2023',
    '/fotogalerie/2022-2/': '/fotogalerie/#rocnik-2022',
  },
});
