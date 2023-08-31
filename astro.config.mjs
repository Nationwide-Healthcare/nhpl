import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  trailingSlash: 'ignore',
  site: "https://nhpl.co.uk",
  base: '/',
  build: {
    format: 'directory'
  },
  server: {
    host: '0.0.0.0',
    port: 4321
  }
});
