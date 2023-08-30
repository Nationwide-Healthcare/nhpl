import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	trailingSlash: 'ignore',
	base: '/',
	build: {
		format: 'directory',
	},
	server: {
		host: '0.0.0.0',
		port: 4321,
	},
});
