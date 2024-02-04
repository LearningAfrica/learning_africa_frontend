import { lazy } from 'react';

const StudentDashboardSidebar = lazy(
	() => import('../components/StudentDashboardSidebar')
);
const StudentDashboardContent = lazy(
	() => import('../components/StudentDashboardContent')
);
const StudentDashboardHeader = lazy(
	() => import('../components/StudentDashboardHeader')
);

export default function StudentDashboard() {
	return (
		<div className="">
			<StudentDashboardHeader />
			<div className="flex">
				{/* Sidebar */}
				<StudentDashboardSidebar />
				{/* Content */}
				<StudentDashboardContent />
			</div>
		</div>
	);
}
