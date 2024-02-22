import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardContent from './DashboardContent';
import DashboardSidebar from './DashboardSidebar';
import { DashboardMenuItemProps } from './DashboardMenuItem';

type DashboardWrapperProps = {
	menu_items: DashboardMenuItemProps[];
	title?: string;
};

export default function DashboardWrapper({
	menu_items,
	title
}: DashboardWrapperProps) {
	const [isOpen, setIsOpen] = React.useState(false);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const handleMenubarToggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className={'w-full '}>
			{' '}
			<DashboardSidebar
				isSidebarOpen={isOpen}
				title={title || 'Dashboard'}
				menuItems={menu_items}
				handleToggle={handleMenubarToggle}
			/>
			<DashboardContent
				isOpen={isOpen}
				handleMenubarToggle={handleMenubarToggle}
			>
				<Outlet />
			</DashboardContent>
		</div>
	);
}
