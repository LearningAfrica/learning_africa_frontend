import useAuthHook from '@/lib/hooks/useAuthHook';
import { Outlet, Navigate } from 'react-router-dom';

export default function NonAuthLayout() {
	const { isAuthenticated } = useAuthHook('admin');

	return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
