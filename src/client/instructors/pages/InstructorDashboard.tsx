import DashboardWrapper from '@/components/shared/DashboardWrapper';
import { instructorSidebarItems } from '@/lib/data/instructor-sidebar-Items';

export default function InstructorDashboard() {
	return (
		<DashboardWrapper title="Instructor" menu_items={instructorSidebarItems} />
	);
}
