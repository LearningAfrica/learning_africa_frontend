import { RouteObject } from 'react-router-dom';
import InstructorErrorPage from './error-pages/InstructorErrorPage';
import InstructorUnFoundPage from './error-pages/InstructorUnFoundPage';
import InstructorLayout from './layouts/InstructorLayout';
import InstructorCourses from './pages/InstructorCourses';
import InstructorDashboard from './pages/InstructorDashboard';
import InstructorProfile from './pages/InstructorProfile';
import InstructorSettings from './pages/InstructorSettings';
import InstructorUsers from './pages/InstructorUsers';

const instructorRouter: RouteObject = {
	path: '/instructor',
	element: <InstructorLayout />,
	errorElement: <InstructorErrorPage />,
	children: [
		{
			path: '/instructor',
			element: <InstructorDashboard />
		},
		{
			path: '/instructor/profile',
			element: <InstructorProfile />
		},
		{
			path: '/instructor/users',
			element: <InstructorUsers />
		},
		{
			path: '/instructor/courses',
			element: <InstructorCourses />
		},
		{
			path: '/instructor/settings',
			element: <InstructorSettings />
		},
		{
			path: '/instructor/*',
			element: <InstructorUnFoundPage />
		}
	]
};

export default instructorRouter;
