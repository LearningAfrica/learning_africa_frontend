import useAuthHook from '@/lib/hooks/useAuthHook';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

export default function NonAuthLayout() {
	const { isAuthenticated } = useAuthHook('admin');
	const { state } = useLocation() as { state: { from: string | undefined } };

	return !isAuthenticated ? (
		<Outlet />
	) : (
		<Navigate
			to={state?.from ?? '/'}
			state={{ from: state?.from }}
			replace
		/>
	);
}
