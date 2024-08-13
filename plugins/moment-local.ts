import moment from "moment";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.provide("moment", moment);

	// Add a custom filter
	nuxtApp.vueApp.config.globalProperties.$filters = {
		moment: (date: string, format: string) => {
			return moment(date).format(format);
		}
	};
});
