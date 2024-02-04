/* eslint-disable react-refresh/only-export-components */
import { Outlet, RouteObject } from 'react-router-dom';
import { all_authenticated_or_unauthenticated_routes } from './all_authenticated_or_unauthenticated.routes';
import { all_only_unauthenticated_routes } from './all_only_unauthenticated.routes';
import { lazy } from 'react';
// import NotFoundPage from '../errors/NotFoundPage';

const BaseErrorPage = lazy(() => import('../errors/BaseErrorPage'));

export const baseRoutes: RouteObject = {
	path: '/',
	errorElement: <BaseErrorPage />,
	element: <Outlet />,
	children: [
		all_authenticated_or_unauthenticated_routes,
		all_only_unauthenticated_routes,
	]
};
