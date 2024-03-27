/* eslint-disable @typescript-eslint/no-unused-vars */
export default defineNuxtRouteMiddleware(async (to, from) => {
	const auth = useAuthStore();
	if (!auth.isAuthenticated) {
		return await navigateTo("/login");
	}
	// console.log({_to, _from, auth: auth.isAuthenticated});
	if (auth.user.user_role == "instructor") {
		if (to.path !== "/") {
			console.log("Going to path: ", to.path);

			return await navigateTo(to.path);
		}
	}
	console.log("Last call to path: ", auth.dashboardUrl ?? "/");

	return await navigateTo(auth.dashboardUrl ?? "/");
});
