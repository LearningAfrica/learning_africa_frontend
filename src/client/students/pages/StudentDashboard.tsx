import DashboardWrapper from '@/components/shared/DashboardWrapper';
import { studentSidebarItems } from '@/lib/data/student-sidebar-items';
// import { lazy } from 'react';

export default function StudentDashboard() {
	return (
		<DashboardWrapper title="Student" menu_items={studentSidebarItems} />
	);
}
