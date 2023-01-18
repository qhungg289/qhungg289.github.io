/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				"ibm-plex-sans": ["IBM Plex Sans", "sans-serif"],
				"source-code-pro": ["Source Code Pro", "monospace"],
			},
			keyframes: {
				breath: {
					"0%, 100%": { opacity: 1 },
					"50%": { opacity: 0 },
				},
				"up-and-down": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(1rem)" },
				},
			},
			animation: {
				breath: "breath 1s ease-in-out infinite",
				"up-and-down-1": "up-and-down 2.25s ease-in-out infinite",
				"up-and-down-2": "up-and-down 2.5s ease-in-out infinite",
				"up-and-down-3": "up-and-down 2.75s ease-in-out infinite",
			},
			boxShadow: {
				hard: "8px 8px black",
			},
		},
		container: {
			center: true,
			padding: "2rem",
		},
	},
	plugins: [],
};
