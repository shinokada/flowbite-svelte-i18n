import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import examples from 'mdsvexamples/vite';
import inlangPlugin from "@inlang/sdk-js/adapter-sveltekit";

/** @type {import('vite').UserConfig} */
const config = {
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
};

export default config;
