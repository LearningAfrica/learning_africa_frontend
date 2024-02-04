import SuperAdminDashboard from '@/client/admin/super/components/SuperAdminDashboard';
import useAuthHook from '@/lib/hooks/useAuthHook';
import { Navigate, useLocation } from 'react-router-dom';

export default function SuperAdminProtectedLayout() {
	const { access, isAuthenticated } = useAuthHook('super_admin');
	const location = useLocation();
	return !isAuthenticated ? (
		<Navigate to="/login" state={{ from: location.pathname }} replace />
	) : access ? (
		<SuperAdminDashboard />
	) : (
		<Navigate to="/" />
	);
}
