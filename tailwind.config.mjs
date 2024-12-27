/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily : {
				base : ['Montserrat', 'Helvetica', 'sans-serif'],
				theme : ['Gloock', 'Helvetica', 'serif'],
				logo : ['Bonheur Royale', 'Glook', 'Montserrat', 'Helvetica', 'sans-serif'],
			},
			colors : {
				bg : {
					light : 'hsl(36deg 20% 93%)',
					mid : 'hsl(36deg 20% 89%)',
					dark : 'hsl(36deg 20% 80%)',
				},
				text : '#4D4D4D',
			},
			animation : {
				'reveal-up-slow' : 'reveal-up 3000ms cubic-bezier(.01,1.01,.22,.99) both',
				'reveal-up-fast' : 'reveal-up 1500ms cubic-bezier(.01,1.01,.22,.99) both',
				'fade-in' : 'fade-in 750ms both'
			},
			keyframes : {
				'reveal-up' : {
					'from' : { 
						clipPath : 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
						transform : 'translateY(1rem)'
					},
					'to' : { 
						clipPath : 'polygon(0 0, 100% 0, 100% 200%, 0 200%)',
						transform : 'translate(0)'
					},
				},
				'fade-in' : {
					'from' : { opacity : '0' },
					'to' : { opacity : '1' },
				}
			}
		},
	},
	plugins: [],
}
