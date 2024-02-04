/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const NonAuthLayout = lazy(
	() => import('@/components/shared/layouts/NonAuthLayout')
);

export const all_only_unauthenticated_routes: RouteObject = {
	path: '/',
	element: <NonAuthLayout />,
	children: [
		{
			path: '/login',
			element: <Login />
		},
		{
			path: '/register',
			element: <Register />
		}
	]
};
