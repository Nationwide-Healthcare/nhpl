import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	trailingSlash: 'never',
	build: {
		format: 'directory',
	},
	compressHTML: true,
	experimental: {
		viewTransitions: true,
	},
	server: {
		host: '0.0.0.0',
		port: 3000,
	},
});
