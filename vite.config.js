import { sveltekit } from '@sveltejs/kit/vite';
import svg from '@poppanator/sveltekit-svg';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

import adapter from '@sveltejs/adapter-static';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			adapter: adapter()
		}),
		svg()
	]
});
