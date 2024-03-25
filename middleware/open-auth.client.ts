import {useAuthStore} from "#imports";
export default defineNuxtRouteMiddleware((_to, _from) => {
	const auth = useAuthStore();
	console.log({_to, _from, auth: auth.isAuthenticated});
	if (auth.isAuthenticated) {
		return navigateTo(auth.dashboardUrl ?? "/");
	}
	// log
	navigateTo(_to.path);
});
