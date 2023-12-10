/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			padding: {
				DEFAULT: '1.5rem'
				// lg: "3rem",
			}
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px'
		},
		extend: {
			colors: {
				primary: 'orange',
				's-blue': '#0D3B66',
				's-black': '#020A12',
				light: '#F9F9F9',
				accent: '#286F6C',
				grey: {
					DEFAULT: '#919297',
					1: '#D9D9D9',
					2: '#E7E9EB',
					3: '#F5F5F5'
				},
				white: '#fff',
				pink: 'pink'
			},
			backgroundColor: {
				// orange: '#ff581f'
			},
			backgroundImage: {
				hero: 'url("/images/hero-bg.jpg")',
				cta: 'url("/images/hero-bg1.jpg")'
			},
			dropShadow: {
				primary: '0px 4px 10px rgba(15, 27, 51, 0.05);'
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
				rubik: ['Rubik', 'sans-serif']
			}
		}
	},
	plugins: [import('@tailwindcss/forms')]
};
