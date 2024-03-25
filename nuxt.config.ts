// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {enabled: true},
	extends: [],
	modules: [
		"@nuxtjs/i18n",
		"@vueuse/nuxt",
		"@nuxt/image",
		"@nuxtjs/google-fonts",
		"@pinia/nuxt",
		"@pinia-plugin-persistedstate/nuxt",
		"nuxt-icon",
		"nuxt-headlessui",
		"nuxt-lucide-icons",
		"my-module",
		"@nuxtjs/eslint-module",
		// "'@nuxt/ui'"
	],
	css: ["~/assets/css/main.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	routeRules: {
		// "/login": { ssr: false },
		// "/register": { ssr: false },
	},
	googleFonts: {
		families: {
			Inter: true,
			Catamaran: true,
			Poppins: true,
			Raleway: true,
			Roboto: true
		}
	},
	lucide: {
		namePrefix: "icon"
	},
	headlessui: {
		prefix: "hui"
	},
	pinia: {
		disableVuex: true,
		storesDirs: ["./stores/**"]
	}
});
