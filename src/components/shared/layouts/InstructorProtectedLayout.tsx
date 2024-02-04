import useAuthHook from '@/lib/hooks/useAuthHook';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
type InstructorProtectedLayoutProps = {
	children: React.ReactNode;
};
export default function InstructorProtectedLayout({
	children
}: InstructorProtectedLayoutProps) {
	const { access, isAuthenticated } = useAuthHook('instructor');
	const location = useLocation();
	return !isAuthenticated ? (
		<Navigate to="/login" state={{ from: location.pathname }} replace />
	) : access ? (
		{ children }
	) : (
		<Navigate to="/" state={{ from: location.pathname }} replace />
	);
}
