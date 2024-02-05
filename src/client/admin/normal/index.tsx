/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
const AdminProtectedLayout = lazy(() => import('@/components/shared/layouts/AdminProtectedLayout'));
const BaseErrorPage = lazy(() => import('@/client/errors/BaseErrorPage'));
const NotFoundPage = lazy(() => import('@/client/errors/NotFoundPage'));

export const adminRoutes: RouteObject = {
	path: '/org-admin',
	element: <AdminProtectedLayout />,
	errorElement: <BaseErrorPage />,
	children: [
		{
			path: '/org-admin',
			element: <>Hello world</>
		},
		{
			path: '/org-admin/*',
			element: <NotFoundPage />
		}
	]
};