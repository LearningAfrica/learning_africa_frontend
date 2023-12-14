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
import AdminInstructorsCreatePage from './pages/admin-instructors/components/AdminInstructorsCreatePage';
import AdminSingleInstructorView from './pages/admin-instructors/components/AdminSingleInstructorView';

const adminRouter: RouteObject = {
	path: '/super-admin',
	element: <AdminLayout />,
	errorElement: <AdminErrorPage />,
	children: [
		{
			path: '/super-admin',
			element: <AdminDashboard />
		},
		{
			path: '/super-admin/profile',
			element: <AdminProfile />
		},
		{
			path: '/super-admin/learners',
			element: <AdminLearners />
		},
		{
			path: '/super-admin/courses',
			element: <AdminCourses />
		},
		{
			path: '/super-admin/instructors',
			element: <Outlet />,
			children: [
				{
					path: '/super-admin/instructors',
					element: <AdminInstructors />
				},
				{
					path: '/super-admin/instructors/create',
					element: <AdminInstructorsCreatePage />
				},
				{
					path: '/super-admin/instructors/:id',
					element: <AdminSingleInstructorView />
				}
			]
		},
		{
			path: '/super-admin/settings',
			element: <AdminSettings />
		},
		{
			path: '/super-admin/subjects',
			element: <Outlet />,
			children: [
				{
					path: '/super-admin/subjects',
					element: <AdminSubjects />
				},
				{
					path: '/super-admin/subjects/create',
					element: <AdminCreateSubject />
				}
			]
		},
		{
			path: '/super-admin/*',
			element: <AdminUnFoundPage />
		}
	]
};

export default adminRouter;
