
/* eslint-disable @typescript-eslint/no-unused-vars */
export default defineNuxtRouteMiddleware((to, from) => {
	const auth = useAuthStore();
	// console.log({_to, _from, auth: auth.isAuthenticated});
	if (auth.isAuthenticated && auth.user.user_role == "super_admin") {
		return navigateTo(auth.dashboardUrl ?? "/");
	}
	// log
	abortNavigation();
});
