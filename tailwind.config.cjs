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
				tealButtonHover:
					'0 4px 0 color-mix(in srgb, rgb(13 148 136) 70%, black), 0 4px 10px -2px #0006',
				slateButtonHoverLight: '0 4px 0 #bbb, 0 4px 10px -2px #0006',
				slateButtonHoverDark: '0 4px 0 rgb(30 41 59), 0 4px 10px -2px #0006',
			},
			width: {
				content: '1024px',
			},
		},
	},
	plugins: [],
};
