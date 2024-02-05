// import { jwtDecode } from 'jwt-decode';
import { atom } from 'jotai';
import { AppLocalStorage } from '@/lib/services/cookie-service';
import { jwtDecode } from 'jwt-decode';
type AuthUser = {
	username: string;
	user_role: UserRoleTypes;
};

export type UserRoleTypes = 'admin' | 'student' | 'instructor' | 'super_admin';
export type AuthState = {
	user: AuthUser | null;
	refresh_token: string | null;
	access_token: string | null;
};

const authStorage = AppLocalStorage.get<AuthState>('learning-africa-auth');

const authAtom = atom<AuthState | null>(
	authStorage ?? {
		user: null,
		refresh_token: null,
		access_token: null
	}
);

export const authStoreAtom = atom(
	authStorage,
	(_get, set, update: AuthState) => {
		console.log('authStoreAtom', { update });

		set(authAtom, update);
		AppLocalStorage.set('learning-africa-auth', JSON.stringify(update));
	}
);

// Want derived is_authenticated value
export const isAuthenticatedAtom = atom((get) => {
	const state = get(authAtom);
	const { access_token } = state!;
	if (!access_token) return false;
	// Add more checks here with jwt-decode
	const decodedToken = jwtDecode(access_token!);
	if (decodedToken) {
		const currentTime = new Date().getTime() / 1000;
		if (decodedToken.exp! < currentTime) {
			return false;
		}
		return !!access_token;
	}
	return !!access_token;
});

export const userRoleAtom = atom((get) => {
	const state = get(authAtom);
	const { user } = state!;
	if (user) {
		return user.user_role;
	}
	return null;
});

export const logoutUserAtom = atom(authStorage, (_get, set) => {
	set(authAtom, {
		user: null,
		refresh_token: null,
		access_token: null
	});
	AppLocalStorage.removeKey('learning-africa-auth');
});
