/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  primary: "#1c3a9d",
		  secundary: "#00468C",
		  gris: {
			100: "#F5F5F5",
			200: "#F1F3F3",
			300: "#D0D0D0",
			400: "#606060",
		  },
		},
		screens: {
		  phone: "414px",
		  tablet: "768px",
		  tabletlg: "960px",
		  tabletxl: "1024px",
		  laptop: "1200px",
		  laptoplg: "1400px",
		  desktop: "1700px",
		},
	  },
	},
	plugins: [],
  };
  