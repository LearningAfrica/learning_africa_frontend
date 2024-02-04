import useAuthHook from '@/lib/hooks/useAuthHook';
import { lazy } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
const StudentDashboard = lazy(
	() => import('@/client/students/pages/StudentDashboard')
);

export default function StudentProtectedLayout() {
	const { access, isAuthenticated } = useAuthHook('student');
	const location = useLocation();
	return !isAuthenticated ? (
		<Navigate to="/login" state={{ from: location.pathname }} replace />
	) : access ? (
		<StudentDashboard />
	) : (
		<Navigate to="/" />
	);
}
