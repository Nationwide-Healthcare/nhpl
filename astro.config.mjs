import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	root: './',
	srcDir: './src',
	publicDir: './public',
	outDir: './dist',
	cacheDir: './node_modules/.astro',
	redirects: {},
	compressHTML: true,
	base: '/',
	trailingSlash: 'always',
	scopedStyleStrategy: 'attribute',
	output: 'static',
	build: {
		format: 'directory',
	},
	integrations: [tailwind(), sitemap()],
	site: 'https://nhpl.co.uk',
	server: {
		host: '0.0.0.0',
		port: 4321,
	},
});
