import SuperAdminDashboard from '@/client/admin/super/components/SuperAdminDashboard';
import useAuthHook from '@/lib/hooks/useAuthHook';
import { Navigate } from 'react-router-dom';

export default function SuperAdminProtectedLayout() {
	const { access, isAuthenticated } = useAuthHook('super_admin');
	return !isAuthenticated ? (
		<Navigate to="/login" />
	) : access ? (
		<SuperAdminDashboard />
	) : (
		<Navigate to="/" />
	);
}
