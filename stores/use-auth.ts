import {defineStore} from "pinia";

type User = {
	user_role: "admin" | "super_admin" | "student" | "instructor" | "guest";
	username: string;
	access_token: string;
	refresh_token: string;
};
type AuthUser = User | null;

const defaultState = process.client
	? ((localStorage.getItem("auth") || null) as AuthUser)
	: null;
export const useAuthStore = defineStore("auth", {
	state: () => ({...defaultState}) as {user: AuthUser},
	getters: {
		isAuthenticated: (state) => !!state.user,
		dashboardUrl: (state) => {
			if (!state.user) {
				return "/";
			}
			switch (state.user.user_role) {
			case "admin":
				return "/dashboard/admin";
			case "super_admin":
				return "/dashboard/super-admin";
			case "student":
				return "/dashboard/student";
			case "instructor":
				return "/dashboard/instructor";
			default:
				return "/";
			}
		}
	},

	persist: true,
	actions: {
		login(user: AuthUser) {
			this.user = user;
		},
		logout() {
			this.user = null;
			localStorage.removeItem("auth");
		},
		refresh() {
			// refresh token
		}
	}
});
