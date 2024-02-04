/* eslint-disable react-refresh/only-export-components */
import { adminRoutes } from '@/client/admin/normal';
import { superAdminRoutes } from '@/client/admin/super';

import { Outlet, RouteObject, createBrowserRouter } from 'react-router-dom';
import { baseRoutes } from '@/client/base';
import { studentRoutes } from '@/client/students';
import { instructorRoutes } from '@/client/instructors';
import { lazy } from 'react';
import BaseErrorPage from '@/client/errors/BaseErrorPage';
const NotFoundPage = lazy(() => import('@/client/errors/NotFoundPage'));

function wrapRouters(routes: RouteObject[]) {
	const router = createBrowserRouter([
		{
			path: '/',
			errorElement: <BaseErrorPage />,
			element: <Outlet />,
			children: routes	
		},
		
	]);

	return router;
}

const router = wrapRouters([
	baseRoutes,
	studentRoutes,
	instructorRoutes,
	adminRoutes,
	superAdminRoutes,
	{
		path: '/*',
		element: <NotFoundPage />
	}
])

export default router;
