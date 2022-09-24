// @ts-check

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require("daisyui")], themes: false,

	diasyui: { themes: ["dark"] },
};

module.exports = config;
