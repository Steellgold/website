import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'histoire';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), defineConfig()],
};

export default config;
