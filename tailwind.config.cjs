/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				"jetbrains-mono": ["JetBrains Mono", "monospace"],
				inter: ["Inter", "sans-serif"],
			},
		},
		container: {
			center: true,
			padding: "1rem",
		},
	},
	plugins: [],
};
