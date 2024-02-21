import DashboardContent from '@/components/shared/DashboardContent';
import DashboardSidebar from '@/components/shared/DashboardSidebar';
import { studentSidebarItems } from '@/lib/data/student-sidebar-items';
import React from 'react';
// import { lazy } from 'react';
import { Outlet } from 'react-router-dom';


export default function StudentDashboard() {
	const [isOpen, setIsOpen] = React.useState(false);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const handleMenubarToggle = (_e: React.MouseEvent<HTMLButtonElement>) => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={''}>
			{' '}
			<DashboardSidebar
				isSidebarOpen={isOpen}
				title="Student"
				menuItems={studentSidebarItems}
				handleToggle={handleMenubarToggle}
			/>
			<DashboardContent
				isOpen={isOpen}
				handleMenubarToggle={handleMenubarToggle}
			>
				<Outlet />
				{/* <div>{children}</div> */}
			</DashboardContent>
		</div>
	);
}
