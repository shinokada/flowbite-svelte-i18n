import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import { defineConfig } from 'vitest/config';
import inlangPlugin from "@inlang/sdk-js/adapter-sveltekit";
import examples from 'mdsvexamples/vite';

export default defineConfig({
	plugins: [
		inlangPlugin(),
		sveltekit(),
		examples
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		port: 8080,
		strictPort: false
	},
	resolve: {
		alias: {
			'flowbite-svelte': path.resolve(process.cwd(), './src/lib/index.ts')
		}
	}
});
