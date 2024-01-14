import Homepage from '@/client/home-page/Homepage';
import StudentDashboard from '@/client/student-dashboard/StudentDashboard';
import StudentDashBoardStats from '@/client/student-dashboard/components/StudentDashBoardStats';
import { Outlet, RouteObject, createBrowserRouter } from 'react-router-dom';

function wrapRouters(routes: RouteObject[]) {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Outlet />,
			children: routes
		},
		{
			path: '*',
			element: <></>
		}
	]);

	return router;
}

const router = wrapRouters([
	{
		path: '/',
		element: <Homepage />
	},
	{
		path: '/student-dashboard',
		element: <StudentDashboard />,
		children: [
			{
				path: '/student-dashboard',
				element: <StudentDashBoardStats />
			},
			{
				path: '*',
				element: <></>
			}
		]
	}
]);

export default router;
