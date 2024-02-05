/* eslint-disable react-refresh/only-export-components */
import InstructorProtectedLayout from '@/components/shared/layouts/InstructorProtectedLayout';
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
const InstructorCourses = lazy(() => import('./components/InstructorCourses'));

const InstructorDashboardStats = lazy(
	() => import('./components/InstructorDashboardStats')
);

const InstructorPageNotFound = lazy(
	() => import('./components/InstructorPageNotFound')
);
// const InstructorProtectedLayout = lazy(() => import('@/components/shared/layouts/InstructorProtectedLayout'));

export const instructorRoutes: RouteObject = {
	path: '/instructor-dashboard',
	element: <InstructorProtectedLayout />,
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
			path: '/instructor-dashboard/*',
			element: <InstructorPageNotFound />
		}
	]
};
