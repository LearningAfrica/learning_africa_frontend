import DashboardContent from '@/components/shared/DashboardContent';
import DashboardSidebar from '@/components/shared/DashboardSidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { superAdminSidebarItems } from '@/lib/data/super-admin-sidebar-items';

export default function SuperAdminDashboard() {
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
				title="Super"
				menuItems={superAdminSidebarItems}
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
