/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
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
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '20rem',
				'2xl': '60rem',
			},
		},
	},
	plugins: [],
	safelist: ['fill-teal-950', 'dark:fill-slate-100'],
};
