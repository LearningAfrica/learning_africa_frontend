import {
	UserRoleTypes,
	authStoreAtom,
	isAuthenticatedAtom,
	logoutUserAtom,
	userRoleAtom
} from '@/store/authAtom';
import { useAtom } from 'jotai';
import React from 'react';

export default function useAuthHook(expected_role?: UserRoleTypes) {
	const [isAuthenticated] = useAtom(isAuthenticatedAtom);
	const [role] = useAtom(userRoleAtom);
	const [auth] = useAtom(authStoreAtom);
	const [, logout] = useAtom(logoutUserAtom);
	const access = React.useMemo(
		() =>
			expected_role
				? isAuthenticated && role === expected_role
				: isAuthenticated,
		[isAuthenticated, role, expected_role]
	);
	return {
		isAuthenticated,
		role,
		access,
		auth,
		logout
	};
}
