import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { jwtDecode } from 'jwt-decode';
type AuthUser = {
	username: string;
	user_role: 'admin' | 'student' | 'instructor' | 'super_admin';
};
export type AuthState = {
	user: AuthUser | null;
	refresh_token: string | null;
	access_token: string | null;

};

type AuthActions = {
	login: (data: AuthState) => void;
	logout: () => void;
	refreshToken: (token: string) => void;
	is_authenticated: () => boolean;
};

export const useAuthStore = create<AuthState & AuthActions>()(
	devtools(
		persist(
			(set) => ({
				access_token: null,
				refresh_token: null,
				login: function (data) {
					set(data);
				}
				,
				logout: function () {
					set({ access_token: null, refresh_token: null, user: null });
				},
				user: null,
				refreshToken: function (token) {
					set({ access_token: token });
				},
				is_authenticated: function () {
					const accessToken = this!.access_token!
					if (accessToken) {
						const decodedToken = jwtDecode(accessToken);
						if (decodedToken) {
							const currentTime = new Date().getTime() / 1000;
							if (decodedToken.exp! < currentTime) {
								return false;
							}
							this!.logout();
							return false;
						}
					}
					return false;
				}

			}),
			{ name: '2333300snncnwinwiqwo' }
		)
	)
);
