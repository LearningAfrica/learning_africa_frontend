import Homepage from '@/client/home-page/Homepage';
import InstructorDashboard from '@/client/instructor-dashboard/InstructorDashboard';
import InstructorCourses from '@/client/instructor-dashboard/components/InstructorCourses';
import InstructorDashboardStats from '@/client/instructor-dashboard/components/InstructorDashboardStats';
import InstructorPageNotFound from '@/client/instructor-dashboard/components/InstructorPageNotFound';
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
	},
	{
		path: '/instructor-dashboard',
		element: <InstructorDashboard />,
		children: [
			{
				path: '/instructor-dashboard',
				element: <InstructorDashboardStats />
			},
			{
				path: '/instructor-dashboard/courses',
				element: <InstructorCourses />
			},
			{
				path: '*',
				element: <InstructorPageNotFound />
			}
		]
	}
]);

export default router;
