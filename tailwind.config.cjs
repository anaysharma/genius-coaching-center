/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	safelist: ['-right-full', 'right-0'],
	theme: {
		extend: {
			fontFamily: {
				rajdhani: ['Rajdhani', 'sans-serif'],
			},
			boxShadow: {
				accent: 'inset 0 -0.7rem 0 -0.6rem rgb(13 148 136)',
			},
			width: {
				content: '1024px',
			},
		},
	},
	plugins: [],
};
