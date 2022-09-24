//@ts-check
import { sveltekit } from '@sveltejs/kit/vite';
import path from "node:path";

/** @type {import('vite').UserConfig} */
const config = {
	optimizeDeps: {
		include: ['just-throttle', 'dayjs']
	},
	plugins: [sveltekit()],
	resolve: {
		alias: {
			"$i18n": path.resolve("./src/i18n"),
			// "$lib": path.resolve("./src/lib"),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;'
			}
		}
	}
};

export default config;
