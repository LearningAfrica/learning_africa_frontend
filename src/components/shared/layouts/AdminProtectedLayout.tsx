import OrgAdminDashboard from '@/client/admin/normal/components/OrgAdminDashboard';
import useAuthHook from '@/lib/hooks/useAuthHook';
import { Navigate } from 'react-router-dom';

export default function AdminProtectedLayout() {
	const { access, isAuthenticated } = useAuthHook('admin');
	return !isAuthenticated ? (
		<Navigate to="/login" />
	) : access ? (
		<OrgAdminDashboard />
	) : (
		<Navigate to="/" />
	);
}
