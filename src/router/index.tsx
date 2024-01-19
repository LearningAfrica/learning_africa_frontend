import AdminDashboard from '@/client/admin-dashboard /AdminDashboard';
import AdminDashBoardStats from '@/client/admin-dashboard /components/AdminDashBoardStats';
import AdminDashbaordCourses from '@/client/admin-dashboard /components/AdminDashbaordCourses';
import AdminDashbaordCoursesCategory from '@/client/admin-dashboard /components/AdminDashbaordCoursesCategory';
import AdminDashbaordOrganization from '@/client/admin-dashboard /components/AdminDashbaordOrganization';
import AdminDashbaordStudents from '@/client/admin-dashboard /components/AdminDashbaordStudents';
import AdminDashboardCertificates from '@/client/admin-dashboard /components/AdminDashboardCertificates';
import AdminDashboardHelp from '@/client/admin-dashboard /components/AdminDashboardHelp';
import AdminDashboardInstructors from '@/client/admin-dashboard /components/AdminDashboardInstructors';
import AdminDashboardNotification from '@/client/admin-dashboard /components/AdminDashboardNotification';
import AdminDashboardProfile from '@/client/admin-dashboard /components/AdminDashboardProfile';
import AdminDashboardReviews from '@/client/admin-dashboard /components/AdminDashboardReviews';
import AdminDashboardSeting from '@/client/admin-dashboard /components/AdminDashboardSeting';
import Homepage from '@/client/home-page/Homepage';
import InstructorDashboard from '@/client/instructor-dashboard/InstructorDashboard';
import InstructorCourses from '@/client/instructor-dashboard/components/InstructorCourses';
import InstructorDashboardStats from '@/client/instructor-dashboard/components/InstructorDashboardStats';
import InstructorPageNotFound from '@/client/instructor-dashboard/components/InstructorPageNotFound';
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
	},
	{
		path: '/admin-dashboard',
		element: <AdminDashboard />,
		children: [
			{
				path: '/admin-dashboard',
				element: <AdminDashBoardStats />
			},
			{
				path: '*',
				element: <></>
			},
			{
				path: '/admin-dashboard/courses',
				element: <AdminDashbaordCourses />
			},
			{
				path: '/admin-dashboard/notifications',
				element: <AdminDashboardNotification />
			},
			{
				path: '/admin-dashboard/settings',
				element: <AdminDashboardSeting />
			},
			{
				path: '/admin-dashboard/certificates',
				element: <AdminDashboardCertificates />
			},{
				path: '/admin-dashboard/reviews',
				element: <AdminDashboardReviews/>
			},
			{
				path: '/admin-dashboard/help',
				element: <AdminDashboardHelp />
			},
			{
				path: '/admin-dashboard/profile',
				element: <AdminDashboardProfile />
			},
			{
				path: '/admin-dashboard/instructors',
				element: <AdminDashboardInstructors />
			},
			{
				path: '/admin-dashboard/courses-category',
				element: <AdminDashbaordCoursesCategory />
			},{
				path: '/admin-dashboard/organization',
				element: <AdminDashbaordOrganization />
			},{
				path: '/admin-dashboard/students',
				element: <AdminDashbaordStudents />
			},
			
		]
	}
]);

export default router;
