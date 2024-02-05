import InstructorDashboard from '@/client/instructors/pages/InstructorDashboard';
import useAuthHook from '@/lib/hooks/useAuthHook';
import { Navigate, useLocation } from 'react-router-dom';

export default function InstructorProtectedLayout() {
	const { access, isAuthenticated } = useAuthHook('instructor');
	const location = useLocation();
	return !isAuthenticated ? (
		<Navigate to="/login" state={{ from: location.pathname }} replace />
	) : access ? (
		<InstructorDashboard/>
	) : (
		<Navigate to="/" state={{ from: location.pathname }} replace />
	);
}
