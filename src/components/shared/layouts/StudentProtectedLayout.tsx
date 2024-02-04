import useAuthHook from '@/lib/hooks/useAuthHook';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
const StudentDashboard = lazy(
	() => import('@/client/students/pages/StudentDashboard')
);

// type StudentProtectedLayoutProps = {
// 	children: React.ReactNode;
// };
export default function StudentProtectedLayout() {
	const { access, isAuthenticated } = useAuthHook('student');
	return !isAuthenticated ? (
		<Navigate to="/login" />
	) : access ? (
		<StudentDashboard />
	) : (
		<Navigate to="/" />
	);
}
