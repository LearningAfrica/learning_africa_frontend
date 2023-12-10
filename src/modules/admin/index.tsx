import { Outlet, RouteObject } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import AdminUnFoundPage from './error-pages/AdminUnFoundPage';
import AdminDashboard from './pages/admin-dashboard/AdminDashboard';
import AdminProfile from './pages/admin-profile/AdminProfile';
import AdminSettings from './pages/AdminSettings';
import AdminCourses from './pages/admin-courses/AdminCourses';
import AdminErrorPage from './error-pages/AdminErrorPage';
import AdminSubjects from './pages/admin-subjects/AdminSubjects';
import AdminLearners from './pages/admin-learners/AdminLearners';
import AdminInstructors from './pages/admin-instructors/AdminInstructors';
import AdminCreateSubject from './pages/admin-subjects/components/AdminCreateSubject';

const adminRouter: RouteObject = {
	path: '/admin',
	element: <AdminLayout />,
	errorElement: <AdminErrorPage />,
	children: [
		{
			path: '/admin',
			element: <AdminDashboard />
		},
		{
			path: '/admin/profile',
			element: <AdminProfile />
		},
		{
			path: '/admin/learners',
			element: <AdminLearners />
		},
		{
			path: '/admin/courses',
			element: <AdminCourses />
		},
		{
			path: '/admin/instructors',
			element: <AdminInstructors />
		},
		{
			path: '/admin/settings',
			element: <AdminSettings />
		},
		{
			path: '/admin/subjects',
			element: <Outlet />,
			children: [
				{
					path: '/admin/subjects',
					element: <AdminSubjects />
				},
				{
					path: '/admin/subjects/create',
					element: <AdminCreateSubject />
				}
			]
		},
		{
			path: '/admin/*',
			element: <AdminUnFoundPage />
		}
	]
};

export default adminRouter;
