import StudentDashboardSidebar from './components/StudentDashboardSidebar';
import StudentDashboardContent from './components/StudentDashboardContent';
import StudentDashboardHeader from './components/StudentDashboardHeader';

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
