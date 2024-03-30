// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	experimental: {
		typedPages: true
	},
	devtools: {enabled: true},
	ssr: false,
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
		"@nuxtjs/eslint-module"
	],
	css: ["~/assets/css/main.css", "sweetalert2/src/sweetalert2.scss"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	routeRules: {},
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
