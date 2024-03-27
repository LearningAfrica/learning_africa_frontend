
export default defineNuxtRouteMiddleware(async (_to, _from) => {
	const auth = useAuthStore();
	// console.log({_to, _from, auth: auth.isAuthenticated});
	// if (auth.isAuthenticated) {
	// 	return navigateTo(auth.dashboardUrl ?? "/");
	// }
	// // log
	// navigateTo(_to.path);
	// if (!auth.isAuthenticated) {
	// 	console.log("Going to path: ", _to.path);
		
	// 	return await navigateTo(_to.path);
	// }
	// if (auth.isAuthenticated) {
	// 	return await navigateTo(auth.dashboardUrl ?? "/");
	// }
	// abortNavigation();
	abortNavigation();
});
