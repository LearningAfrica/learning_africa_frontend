/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BaseErrorPage = lazy(() => import('@/client/errors/BaseErrorPage'));
const NotFoundPage = lazy(() => import('@/client/errors/NotFoundPage'));
const SuperAdminProtectedLayout = lazy(
	() => import('@/components/shared/layouts/SuperAdminProtectedLayout')
);
const AdminCreateCourse = lazy(
	() => import('./components/SuperAdminCreateCourse')
);
const AdminCreateOrganization = lazy(
	() => import('./components/SuperAdminCreateOrganization')
);
const AdminDashBoardStats = lazy(
	() => import('./components/SuperAdminDashBoardStats')
);
const AdminDashboardCourses = lazy(
	() => import('./components/SuperAdminDashboardCourses')
);
const AdminDashboardCoursesCategory = lazy(
	() => import('./components/SuperAdminDashboardCoursesCategory')
);
const AdminDashboardStudents = lazy(
	() => import('./components/SuperAdminDashboardStudents')
);
const AdminDashboardCertificates = lazy(
	() => import('./components/SuperAdminDashboardCertificates')
);
const AdminDashboardHelp = lazy(
	() => import('./components/SuperAdminDashboardHelp')
);
const AdminDashboardInstructors = lazy(
	() => import('./components/SuperAdminDashboardInstructors')
);
const AdminDashboardNotification = lazy(
	() => import('./components/SuperAdminDashboardNotification')
);
const AdminDashboardProfile = lazy(
	() => import('./components/SuperAdminDashboardProfile')
);
const AdminDashboardReviews = lazy(
	() => import('./components/SuperAdminDashboardReviews')
);
const AdminDashboardSetting = lazy(
	() => import('./components/SuperAdminDashboardSetting')
);
const AdminDashBoardOrganization = lazy(
	() => import('./components/SuperAdminDashBoardOrganization')
);

export const superAdminRoutes: RouteObject = {
	path: '/super/dashboard',
	element: <SuperAdminProtectedLayout />,
	errorElement: <BaseErrorPage />,
	children: [
		{
			path: '/super/dashboard',
			element: <AdminDashBoardStats />
		},

		{
			path: '/super/dashboard/courses',
			element: <AdminDashboardCourses />
		},
		{
			path: '/super/dashboard/courses/create',
			element: <AdminCreateCourse />
		},
		{
			path: '/super/dashboard/notifications',
			element: <AdminDashboardNotification />
		},
		{
			path: '/super/dashboard/settings',
			element: <AdminDashboardSetting />
		},
		{
			path: '/super/dashboard/certificates',
			element: <AdminDashboardCertificates />
		},
		{
			path: '/super/dashboard/reviews',
			element: <AdminDashboardReviews />
		},
		{
			path: '/super/dashboard/help',
			element: <AdminDashboardHelp />
		},
		{
			path: '/super/dashboard/profile',
			element: <AdminDashboardProfile />
		},
		{
			path: '/super/dashboard/instructors',
			element: <AdminDashboardInstructors />
		},
		{
			path: '/super/dashboard/courses-category',
			element: <AdminDashboardCoursesCategory />
		},
		{
			path: '/super/dashboard/organization',
			element: <AdminDashBoardOrganization />
		},
		{
			path: '/super/dashboard/organization/create',
			element: <AdminCreateOrganization />
		},
		{
			path: '/super/dashboard/students',
			element: <AdminDashboardStudents />
		},
		{
			path: '/super/dashboard/*',
			element: <NotFoundPage/>
		}
	]
};
