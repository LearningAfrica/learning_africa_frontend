import { RouteObject } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import AdminUnFoundPage from './error-pages/AdminUnFoundPage';
import AdminDashboard from './pages/AdminDashboard';
import AdminProfile from './pages/AdminProfile';
import AdminUsers from './pages/AdminUsers';
import AdminSettings from './pages/AdminSettings';
import AdminCourses from './pages/AdminCourses';

const adminRouter: RouteObject = {
	path: '/admin',
	element: <AdminLayout />,
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
			path: '/admin/users',
			element: <AdminUsers />
		},
		{
			path: '/admin/courses',
			element: <AdminCourses />
		},
		{
			path: '/admin/settings',
			element: <AdminSettings />
		},
		{
			path: '/admin/*',
			element: <AdminUnFoundPage />
		}
	]
};

export default adminRouter;
