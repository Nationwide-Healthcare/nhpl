/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Roboto'],
		},
		colors: {
			black: '#000000',
			gray1: '#1C1C1E',
			gray2: '#2C2C2E',
			gray3: '#3A3A3C',
			gray4: '#D1D1D6',
			gray5: '#E5E5EA',
			gray6: '#F2F2F7',
			white: '#FFFFFF',
			red: '#FF3B30',
			orange: '#FF9500',
			yellow: '#FFCC00',
			green: '#34C759',
			mint: '#00C7BE',
			teal: '#30B0C7',
			cyan: '#32ADE6',
			blue: '#007AF7',
			indigo: '#5856D6',
			purple: '#AF52DE',
			pink: '#FF2D55',
			brown: 'A2845E',
		},
		fontSize: {
			'title-xl': [
				'48px',
				{
					lineHeight: '64px',
					letterSpacing: '-0.025em',
					fontWeight: '900',
				},
			],

			'title-lg': [
				'40px',
				{
					lineHeight: '52px',
					letterSpacing: '0em',
					fontWeight: '700',
				},
			],

			'title-md': [
				'32px',
				{
					lineHeight: '40px',
					letterSpacing: '0em',
					fontWeight: '700',
				},
			],

			'title-sm': [
				'30px',
				{
					lineHeight: '36px',
					letterSpacing: '0em',
					fontWeight: '700',
				},
			],

			body: [
				'18px',
				{
					lineHeight: '24px',
					letterSpacing: '0em',
					fontWeight: '400',
				},
			],

			caption: [
				'12px',
				{
					lineHeight: '18px',
					letterSpacing: '0em',
					fontWeight: '400r',
				},
			],
		},
	},
	plugins: [],
};