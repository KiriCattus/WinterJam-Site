const colors = require('tailwindcss/colors');
const flowbite = require('flowbite/plugin');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {
			colors: {
				// custom colors
				primary: colors.cyan[50],
				secondary: colors.gray[800],
				accent: colors.sky[300],
				accent2: colors.indigo[300],
				// important: colors.amber[500],
				important: colors.orange[300],
			},
			fontFamily: {
				blocky: ['"Press Start 2P"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
			}
		}
	},

	plugins: [
		flowbite,
		function ({ addVariant }) {
			addVariant('child', '& > *');
			addVariant('child-hover', '& > *:hover');
		}
	]
};

module.exports = config;
