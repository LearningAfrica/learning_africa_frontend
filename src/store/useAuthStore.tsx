import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type AuthState = {
	data: object | null;
};

type AuthActions = {
	login: (data: AuthState) => void;
	logout: () => void;
};

export const useAuthStore = create<AuthState & AuthActions>()(
	devtools(
		persist(
			(set) => ({
				data: null,
				login: (data) => set({ data }),
				logout: () => set({ data: null })
			}),
			{ name: 'auth-storage' }
		)
	)
);
