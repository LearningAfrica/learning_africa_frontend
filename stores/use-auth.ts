/* eslint-disable indent */
import {defineStore} from "pinia";
type UserOrg = {
	id: string;
	name: string;
	is_active: boolean;
	is_current: boolean;
};
type User = {
	user_role: "admin" | "super_admin" | "student" | "instructor" | "guest";
	username: string;
	access_token: string;
	refresh_token: string;
	id: string;
	organizations: UserOrg[];
};
type AuthUser = {
	user: User;
};

// type LoginUser = {

const authKey = "learning-africa-ctx";

// console.log({defaultState});
const defaultState = JSON.parse(
	localStorage.getItem(authKey) || "{}"
) as unknown as AuthUser;

export const useAuthStore = defineStore("auth", {
	state: () => ({auth: defaultState, user: defaultState.user}),
	getters: {
		isAuthenticated: (state) => {
			// console.log({state: state.user});

			const {user} = state;
			return user && user.access_token ? true : false;
		},
		dashboardUrl: (state) => {
			const {user} = state;
			if (!user || !user.access_token) {
				return "/";
			}
			switch (user!.user_role) {
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
	// persist: true,
	actions: {
		login(user: User) {
			console.log({user});

			this.auth = {user};
			this.user = user;
			this.switchCurrentOrg(user.organizations[0].id);
			this.syncStorage();
		},
		logout() {
			// this.user = null;
			localStorage.removeItem(authKey);
		},
		refresh() {
			// refresh token
		},
		syncStorage() {
			const state_toSync = {user: this.user, auth: this.auth};
			localStorage.setItem(authKey, JSON.stringify(state_toSync));
		},
		switchCurrentOrg(org_id: string) {
			const orgs = this.user.organizations.map((org) =>
				org.id === org_id
					? {...org, is_current: true}
					: {...org, is_current: false}
			);
			this.user.organizations = orgs;
			this.auth.user = {...this.user};
			this.syncStorage();
		},
		getOrganizations() {
			return this.user.organizations ?? [];
		}
	}
	// hydrate(storeState, initialState) {
	// 	storeState.auth = initialState.auth;
	// 	storeState.user = initialState.user;
	// }
});
