/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const animate = require("tailwindcss-animate");
const forms = require("@tailwindcss/forms");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue"
	],
	theme: {
		extend: {
			colors: {
				primary: "#f49906",
				secondary: {
					100: "#E2E2D5",
					200: "#888883"
				}
			}
		}
	},
	plugins: [animate, forms]
};
