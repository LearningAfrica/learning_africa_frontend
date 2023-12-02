import { RouteObject } from 'react-router-dom';
import StudentErrorPage from './error-pages/StudentErrorPage';
import StudentUnFoundPage from './error-pages/StudentUnFoundPage';
import StudentLayout from './layouts/StudentLayout';
import StudentCourses from './pages/StudentCourses';
import StudentDashboard from './pages/StudentDashboard';
import StudentProfile from './pages/StudentProfile';
import StudentSettings from './pages/StudentSettings';
import StudentUsers from './pages/StudentUsers';

const studentRouter: RouteObject = {
	path: '/student',
	element: <StudentLayout />,
	errorElement: <StudentErrorPage />,
	children: [
		{
			path: '/student',
			element: <StudentDashboard />
		},
		{
			path: '/student/profile',
			element: <StudentProfile />
		},
		{
			path: '/student/users',
			element: <StudentUsers />
		},
		{
			path: '/student/courses',
			element: <StudentCourses />
		},
		{
			path: '/student/settings',
			element: <StudentSettings />
		},
		{
			path: '/student/*',
			element: <StudentUnFoundPage />
		}
	]
};

export default studentRouter;
