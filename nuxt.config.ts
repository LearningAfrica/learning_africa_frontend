// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	experimental: {
		typedPages: true
	},

	app: {
		layoutTransition: { name: "layout", mode: "in-out" },
		head:{
			script:[{ src: 'coi-serviceworker.js', }]
		}
	},

	devtools: {
		enabled: true,

		timeline: {
			enabled: true
		}
	},

	ssr: false,
	extends: [],

	modules: [
		"@nuxtjs/i18n",
		"@vueuse/nuxt",
		"@nuxt/image",
		"@nuxtjs/google-fonts",
		"@pinia/nuxt",
		"@pinia-plugin-persistedstate/nuxt",
		"@nuxt/icon",
		"nuxt-headlessui",
		"nuxt-lucide-icons",
		"my-module",
		"shadcn-nuxt"
	],

	css: ["~/assets/css/tailwind.css", "sweetalert2/src/sweetalert2.scss", '@vueup/vue-quill/dist/vue-quill.snow.css'
	],

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
	},

	shadcn: {
		prefix: "cn"
	},
	runtimeConfig: {
		ZoomVideoSDKKey: process.env.ZOOM_SDK_KEY,
		ZoomVideoSDKSecret: process.env.ZOOM_SDK_SECRET,
	},
	vue: {
		compilerOptions: {
			isCustomElement: (tag) => tag === 'video-player-container'
		}
	},

	compatibilityDate: "2024-08-12"
});
