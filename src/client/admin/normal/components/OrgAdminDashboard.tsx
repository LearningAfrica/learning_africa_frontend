import { adminSidebarItems } from '@/lib/data/admin-sidebar-items';
import DashboardWrapper from '@/components/shared/DashboardWrapper';

export default function OrgAdminDashboard() {
	return <DashboardWrapper title="Admin" menu_items={adminSidebarItems} />;
}
