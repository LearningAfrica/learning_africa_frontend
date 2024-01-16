import Homepage from '@/client/home-page/Homepage';
import StudentDashboard from '@/client/student-dashboard/StudentDashboard';
import StudentDashBoardStats from '@/client/student-dashboard/components/StudentDashBoardStats';
import StudentDashbaordCertificates from '@/client/student-dashboard/components/StudentDashbaordCertificates';
import StudentDashbaordCourses from '@/client/student-dashboard/components/StudentDashbaordCourses';
import StudentDashboardHelp from '@/client/student-dashboard/components/StudentDashboardHelp';
import StudentDashboardNotification from '@/client/student-dashboard/components/StudentDashboardNotification';
import StudentDashboardProfile from '@/client/student-dashboard/components/StudentDashboardProfile';
import StudentDashboardReviews from '@/client/student-dashboard/components/StudentDashboardReviews';
import StudentDashboardSeting from '@/client/student-dashboard/components/StudentDashboardSeting';
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
			},
			{
				path: '/student-dashboard/courses',
				element: <StudentDashbaordCourses />
			},

			{
				path: '/student-dashboard/certificates',
				element: <StudentDashbaordCertificates />
			},
			{
				path: '/student-dashboard/notifications',
				element: <StudentDashboardNotification />
			},
			{
				path: '/student-dashboard/reviews',
				element: <StudentDashboardReviews />
			},
			{
				path: '/student-dashboard/settings',
				element: <StudentDashboardSeting />
			},
			{
				path: '/student-dashboard/help',
				element: <StudentDashboardHelp />
			},
			{
				path: '/student-dashboard/profile',
				element: <StudentDashboardProfile />
			}
		]
	}
]);

export default router;
