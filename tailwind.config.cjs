/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily : {
				base : ['Lato', 'Helvetica', 'sans-serif'],
				stylized : ['Luxia', 'Helvetica', 'sans-serif']
			},
			colors : {
				"primary" : {
					50  : "hsl( var(--primary-color) 95% / <alpha-value> )",
					100 : "hsl( var(--primary-color) 90% / <alpha-value> )",
					200 : "hsl( var(--primary-color) 80% / <alpha-value> )",
					300 : "hsl( var(--primary-color) 70% / <alpha-value> )",
					400 : "hsl( var(--primary-color) 60% / <alpha-value> )",
					500 : "hsl( var(--primary-color) 50% / <alpha-value> )",
					600 : "hsl( var(--primary-color) 40% / <alpha-value> )",
					700 : "hsl( var(--primary-color) 30% / <alpha-value> )",
					800 : "hsl( var(--primary-color) 20% / <alpha-value> )",
					900 : "hsl( var(--primary-color) 10% / <alpha-value> )",
				},
				"secondary" : {
					50  : "hsl( var(--secondary-color) 95% / <alpha-value> )",
					100 : "hsl( var(--secondary-color) 90% / <alpha-value> )",
					200 : "hsl( var(--secondary-color) 80% / <alpha-value> )",
					300 : "hsl( var(--secondary-color) 70% / <alpha-value> )",
					400 : "hsl( var(--secondary-color) 60% / <alpha-value> )",
					500 : "hsl( var(--secondary-color) 50% / <alpha-value> )",
					600 : "hsl( var(--secondary-color) 40% / <alpha-value> )",
					700 : "hsl( var(--secondary-color) 30% / <alpha-value> )",
					800 : "hsl( var(--secondary-color) 20% / <alpha-value> )",
					900 : "hsl( var(--secondary-color) 10% / <alpha-value> )",
				},
				"tertiary" : {
					50  : "hsl( var(--tertiary-color) 95% / <alpha-value> )",
					100 : "hsl( var(--tertiary-color) 90% / <alpha-value> )",
					200 : "hsl( var(--tertiary-color) 80% / <alpha-value> )",
					300 : "hsl( var(--tertiary-color) 70% / <alpha-value> )",
					400 : "hsl( var(--tertiary-color) 60% / <alpha-value> )",
					500 : "hsl( var(--tertiary-color) 50% / <alpha-value> )",
					600 : "hsl( var(--tertiary-color) 40% / <alpha-value> )",
					700 : "hsl( var(--tertiary-color) 30% / <alpha-value> )",
					800 : "hsl( var(--tertiary-color) 20% / <alpha-value> )",
					900 : "hsl( var(--tertiary-color) 10% / <alpha-value> )",
				},
			},
			backgroundImage : {
				'radial-gradient' : 'radial-gradient(var(--tw-gradient-stops))'
			},
			animation : {
				'hero' : 'hero-anim 800ms cubic-bezier(0.34, 1.56, 0.64, 1)',
				'hero-img' : 'hero-img-anim 500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
			},
			keyframes : {
				'hero-anim' : {
					'0%'   : { transform : 'translateY(100%)', opacity : '0' },
					'100%' : { transform : 'translateY(0%)', opacity : '1' }
				},
				'hero-img-anim' : {
					'0%'   : { transform : 'translateY(50%)', opacity : '0' },
					'100%' : { transform : 'translateY(0%)', opacity : '1' }
				},
			}
		},
	},
	plugins: [],
}
