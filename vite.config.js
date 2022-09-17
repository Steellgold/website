import { HstSvelte } from '@histoire/plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'histoire';
import { fileURLToPath, URL } from 'url';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), defineConfig()],
	histoire: {
		plugins: [HstSvelte()],
		vite: {
			resolve: {
				alias: {
					$lib: fileURLToPath(new URL('./src/lib', import.meta.url)),
					$app: fileURLToPath(new URL('./histoire/app', import.meta.url)),
				},
			},
		},
	}
};

export default config;
