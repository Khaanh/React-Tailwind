/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xl: "1400px",
			md: "1024px",
		},
		extend: {
			colors: {
				"almost-white": "hsl(0, 0%, 90%)",
				"medium-gray": "hsl(0, 0%, 41%)",
				"almost-black": "hsl(0, 0%, 8%)",
			},
		},
	},
	plugins: [],
};
