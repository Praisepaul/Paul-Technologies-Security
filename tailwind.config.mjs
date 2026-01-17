/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', // This is vital for your theme toggling
	theme: {
		extend: {
			colors: {
				brand: '#2563eb', // Blue
				dark: '#020617',  // Deep Blue/Black
			},
		},
	},
	plugins: [],
};