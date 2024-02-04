/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
const Homepage = lazy(() => import('./pages/Homepage'));
const OpenLayout = lazy(() => import('@/components/shared/layouts/OpenLayout'));

export const all_authenticated_or_unauthenticated_routes: RouteObject = {
	path: '/',
	element: <OpenLayout />,
	children: [
		{
			path: '/',
			element: <Homepage />
		},
		
	]
};
