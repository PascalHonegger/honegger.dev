import { defineConfig } from '@playwright/test';

export default defineConfig({
	webServer: {
		command: 'pnpm build && pnpm preview',
		url: 'http://localhost:4173/'
	},
	use: {
		baseURL: 'http://localhost:4173/'
	}
});
