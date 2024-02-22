/* eslint-disable react-refresh/only-export-components */
import StudentProtectedLayout from '@/components/shared/layouts/StudentProtectedLayout';
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
const StudentDashBoardStats = lazy(
	() => import('./components/StudentDashBoardStats')
);
const StudentDashboardCertificates = lazy(
	() => import('./components/StudentDashboardCertificates')
);
const StudentDashboardCourses = lazy(
	() => import('./components/StudentDashboardCourses')
);
const StudentDashboardHelp = lazy(
	() => import('./components/StudentDashboardHelp')
);
const StudentDashboardNotification = lazy(
	() => import('./components/StudentDashboardNotification')
);
const StudentDashboardProfile = lazy(
	() => import('./components/StudentDashboardProfile')
);
const StudentDashboardReviews = lazy(
	() => import('./components/StudentDashboardReviews')
);
const StudentDashboardSetting = lazy(
	() => import('./components/StudentDashboardSetting')
);
const DashboardNotFoundPage = lazy(() => import('@/components/shared/DashboardNotFoundPage'));
// import StudentDashboard from './pages/StudentDashboard';

export const studentRoutes: RouteObject = {
	path: '/student/dashboard',
	element: <StudentProtectedLayout />,
	children: [
		{
			path: '/student/dashboard',
			element: <StudentDashBoardStats />
		},

		{
			path: '/student/dashboard/courses',
			element: <StudentDashboardCourses />
		},

		{
			path: '/student/dashboard/certificates',
			element: <StudentDashboardCertificates />
		},
		{
			path: '/student/dashboard/notifications',
			element: <StudentDashboardNotification />
		},
		{
			path: '/student/dashboard/reviews',
			element: <StudentDashboardReviews />
		},
		{
			path: '/student/dashboard/settings',
			element: <StudentDashboardSetting />
		},
		{
			path: '/student/dashboard/help',
			element: <StudentDashboardHelp />
		},
		{
			path: '/student/dashboard/profile',
			element: <StudentDashboardProfile />
		},
		{
			path: '/student/dashboard/*',
			element: <DashboardNotFoundPage />
		}
	]
};
