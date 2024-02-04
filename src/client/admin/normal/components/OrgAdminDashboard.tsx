import OrgAdminDashboardSidebar from './OrgAdminDashboardSidebar';
import OrgAdminDashboardHeader from './OrgAdminDashboardHeader';
import OrgAdminDashboardContent from './OrgAdminDashboardContent';

export default function OrgAdminDashboard() {
	return (
		<div className="">
			<OrgAdminDashboardHeader />
			<div className="flex">
				{/* Sidebar */}
				<OrgAdminDashboardSidebar />
				{/* Content */}
				<OrgAdminDashboardContent />
			</div>
		</div>
	);
}
