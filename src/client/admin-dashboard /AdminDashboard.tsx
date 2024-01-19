import AdminDashboardHeader from './components/AdminDashboardHeader';
import AdminDashboardContent from './components/AdminDashboardContent';
import AdminDashboardSidebar from './components/AdminDashboardSidebar';

export default function StudentDashboard() {
	return (
		<div className="">
			<AdminDashboardHeader />
			<div className="flex">
				{/* Sidebar */}
				<AdminDashboardSidebar />
				{/* Content */}
				<AdminDashboardContent />
			</div>
		</div>
	);
}
