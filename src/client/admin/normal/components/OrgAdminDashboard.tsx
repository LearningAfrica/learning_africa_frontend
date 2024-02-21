
import React from 'react';
import DashboardContent from '@/components/shared/DashboardContent';
import DashboardSidebar from '@/components/shared/DashboardSidebar';
import { Outlet } from 'react-router-dom';
import { adminSidebarItems } from '@/lib/data/admin-sidebar-items';

export default function OrgAdminDashboard() {
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
				title="Admin"
				menuItems={adminSidebarItems}
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
