import { RouteObject } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
import BaseHomepage from './views/BaseHomepage';

const baseRoutes: RouteObject = {
	path: '/',
	element: <BaseLayout />,
	children: [
		{
			path: '/',
			index: true,
			element: <BaseHomepage />
		},
		{
			path: '/login',
			element: <h1>Login</h1>
		},
		{
			path: '/register',
			element: <h1>Register</h1>
		},
		{
			path: '/forgot-password',
			element: <h1>Forgot Password</h1>
		},
		{
			path: 'reset-password',
			element: <h1>Reset Password</h1>
		},
		{
			path: '404',
			element: <h1>404</h1>
		},
		{
			path: '500',
			element: <h1>500</h1>
		},
		{
			path: '*',
			element: <h1>404</h1>
		}
	]
};

export default baseRoutes;
