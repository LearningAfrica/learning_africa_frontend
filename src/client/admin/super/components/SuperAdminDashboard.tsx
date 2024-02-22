import { superAdminSidebarItems } from '@/lib/data/super-admin-sidebar-items';
import DashboardWrapper from '@/components/shared/DashboardWrapper';

export default function SuperAdminDashboard() {


	return (
		<DashboardWrapper title="Admin" menu_items={superAdminSidebarItems} />
	);
}
