/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
const InstructorCourses = lazy(() => import('./components/InstructorCourses'));

const InstructorDashboardStats = lazy(
	() => import('./components/InstructorDashboardStats')
);

const InstructorPageNotFound = lazy(
	() => import('./components/InstructorPageNotFound')
);
const InstructorDashboard = lazy(() => import('./pages/InstructorDashboard'));

export const instructorRoutes: RouteObject = {
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
			path: '/instructor-dashboard/*',
			element: <InstructorPageNotFound />
		}
	]
};
