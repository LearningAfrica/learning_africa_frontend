import SuperAdminDashboardHeader from './SuperAdminDashboardHeader';
import SuperAdminDashboardContent from './SuperAdminDashboardContent';
import SuperAdminDashboardSidebar from './SuperAdminDashboardSidebar';

export default function SuperAdminDashboard() {
	return (
		<div className="">
			<SuperAdminDashboardHeader />
			<div className="flex">
				{/* Sidebar */}
				<SuperAdminDashboardSidebar />
				{/* Content */}
				<SuperAdminDashboardContent />
			</div>
		</div>
	);
}
