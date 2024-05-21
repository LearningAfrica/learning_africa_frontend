
/* eslint-disable @typescript-eslint/no-unused-vars */
export default defineNuxtRouteMiddleware((to, from) => {
	// return await navigateTo(auth.dashboardUrl ?? "/");
	const { isAuthenticated, dashboardUrl, user } = storeToRefs(useAuthStore()); // make authenticated state reactive

	// if token exists and url is /login redirect to homepage
	if (
		isAuthenticated.value &&
		to?.name === "login" &&
		user.value.user_role === "super_admin"
	) {
		return navigateTo(dashboardUrl.value ?? { name: "index" });
	}
	if (isAuthenticated.value && to?.name === "login") {
		return navigateTo({ name: "index" });
	}

	// if token doesn't exist redirect to log in
	if (!isAuthenticated.value && to?.name !== "login") {
		abortNavigation();
		return navigateTo("/login");
	}
});
