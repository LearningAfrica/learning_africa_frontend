import useAuthHook from '@/lib/hooks/useAuthHook';
import React from 'react';
import { Navigate } from 'react-router-dom';
type InstructorProtectedLayoutProps = {
	children: React.ReactNode;
};
export default function InstructorProtectedLayout({
	children
}: InstructorProtectedLayoutProps) {
	const { access, isAuthenticated } = useAuthHook('instructor');
	return !isAuthenticated ? (
		<Navigate to="/login" />
	) : access ? (
		{ children }
	) : (
		<Navigate to="/" />
	);
}
