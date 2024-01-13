import { Outlet, RouteObject } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import AdminUnFoundPage from './error-pages/AdminUnFoundPage';
import AdminDashboard from './pages/admin-dashboard/AdminDashboard';
import AdminProfile from './pages/admin-profile/AdminProfile';
import AdminSettings from './pages/AdminSettings';
import AdminCourses from './pages/admin-courses/AdminCourses';
import AdminErrorPage from './error-pages/AdminErrorPage';
import AdminSubjects from './pages/admin-course-categories/AdminSubjects';
import AdminLearners from './pages/admin-learners/AdminLearners';
import AdminInstructors from './pages/admin-instructors/AdminInstructors';
import AdminCreateSubject from './pages/admin-course-categories/components/AdminCreateCourseCategory';
import AdminOrganizations from './pages/admin-organizations/AdminOrganizations';
import AdminCreateOrganization from './pages/admin-organizations/AdminCreateOrganization';
import AdminUpdateOrganization from './pages/admin-organizations/AdminUpdateOrganization';
import AdminOrganizationSingleView from './pages/admin-organizations/AdminOrganizationSingleView';
import AdminCreateInstructor from './pages/admin-instructors/AdminCreateInstructor';
import AdminInstructorsUpdate from './pages/admin-instructors/AdminInstructorsUpdate';
import AdminInstructorsSingleView from './pages/admin-instructors/AdminInstructorsSingleView';
import AdminCreateAdminCourse from './pages/admin-courses/components/AdminCreateAdminCourse';
import ViewCourse from './pages/admin-courses/components/ViewCourse';

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
			path: '/super-admin/organizations',
			element: <Outlet />,
			children: [
				{
					path: '/super-admin/organizations',
					element: <AdminOrganizations />
				},
				{
					path: '/super-admin/organizations/create',
					element: <AdminCreateOrganization />
				},
				{
					path: '/super-admin/organizations/:id/edit',
					element: <AdminUpdateOrganization />
				},
				{
					path: '/super-admin/organizations/:id/view',
					element: <AdminOrganizationSingleView />
				}
			]
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
			element: <Outlet />,
			children: [
				{
					path: '/super-admin/courses',
					element: <AdminCourses />,
				},
				{
					path: '/super-admin/courses/create',
					element: <AdminCreateAdminCourse />,

				},
				{
					path: '/super-admin/courses/:id/edit',
					element: <AdminCreateAdminCourse />,

				},
				{
					path: '/super-admin/courses/:id/view',
					element: <ViewCourse />,

				}
			]
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
					element: <AdminCreateInstructor />
				},
				{
					path: '/super-admin/instructors/:id/edit',
					element: <AdminInstructorsUpdate />
				},
				{
					path: '/super-admin/instructors/:id/view',
					element: <AdminInstructorsSingleView />
				}
			]
		},
		{
			path: '/super-admin/settings',
			element: <AdminSettings />
		},
		{
			path: '/super-admin/course-categories',
			element: <Outlet />,
			children: [
				{
					path: '/super-admin/course-categories',
					element: <AdminSubjects />
				},
				{
					path: '/super-admin/course-categories/create',
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
