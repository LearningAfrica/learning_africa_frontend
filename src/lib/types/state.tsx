/* eslint-disable @typescript-eslint/no-explicit-any */

import { stateKeys } from '../constants';
export type UserInterface = {
	_id: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	role: string;
	organization: string;
	createdAt: string;
	updatedAt: string;
};
export type PaginatedResponse<T = any> = {
	results: T[];
	pagination: {
		hasNextPage: boolean;
		hasPrevPage: boolean;
		limit: number;
		nextPage: number | null;
		page: number;
		prevPage: number | null;
		totalDocs: number;
		totalPages: number;
	};
};
/**
 * AuthState
 */
export type AuthState = {
	user: UserInterface | null;
	loading: boolean;
	error: string;
	access_token: string;
	refresh_token: string;
	isAuthenticated: boolean;
};



/**
 * Persistent state map
 */
export type PersistState = {
	auth: AuthState;
};

export type KeyOfType<T, U> = {
	[P in keyof T]: T[P] extends U ? P : never;
}[keyof T];

// export type Y = PickKeysType<s, keyof s>;

export type SortFunction<T> = (items: T[], field: string) => T[];
export type LocalStorageKeyType = keyof typeof stateKeys;
export type TokenType = {
	accessToken: string;
	refreshToken: string;
};
