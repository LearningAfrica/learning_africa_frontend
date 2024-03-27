export default defineNuxtRouteMiddleware((to, from) => {
	const auth = useAuthStore();

	if (auth.isAuthenticated) {
		auth.logout();
		return navigateTo("/login");
	}
});
