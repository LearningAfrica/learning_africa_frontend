import OrgAdminDashboard from '@/client/admin/normal/components/OrgAdminDashboard';
import useAuthHook from '@/lib/hooks/useAuthHook';
import { Navigate, useLocation } from 'react-router-dom';

export default function AdminProtectedLayout() {
	const { access, isAuthenticated } = useAuthHook('admin');
	const location = useLocation();
	return !isAuthenticated ? (
		<Navigate to="/login" state={{ from: location.pathname }} replace />
	) : access ? (
		<OrgAdminDashboard />
	) : (
		<Navigate to="/" />
	);
}
