import { RouteObject } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
import Homepage from './views/homepage/Homepage';
import Login from './views/login/Login';
import CreateAccount from './views/register/CreateAccount';
import BaseNotFoundPage from './views/404/BaseNotFoundPage';

const baseRoutes: RouteObject = {
	path: '/',
	element: <BaseLayout />,
	children: [
		{
			path: '/',
			index: true,
			element: <Homepage />
		},
		{
			path: '/login',
			element: <Login/>
		},
		{
			path: '/register',
			element: <CreateAccount/>
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
			element:<BaseNotFoundPage/>
		}
	]
};

export default baseRoutes;
