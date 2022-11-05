/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				// 'ibm-plex-sans': ['IBM Plex Sans', 'sans-serif'],
				'source-code-pro': ['Source Code Pro', 'monospace']
			},
			keyframes: {
				breath: {
					"0%, 100%": { opacity: 1 },
					"50%": { opacity: 0 },
				},
			},
			animation: {
				breath: "breath 1s ease-in-out infinite",
			},
		},
		container: {
			center: true,
			padding: '2rem',
		}
	},
	plugins: [],
}
