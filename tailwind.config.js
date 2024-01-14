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
				primary: '#f57328',
				secondary: '#f57328',
				accent: '#f57328'
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
