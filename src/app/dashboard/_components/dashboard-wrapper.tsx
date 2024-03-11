"use client";
import React from 'react';
import { DashboardMenuItemProps } from './dash-board-menu-item';
import DashboardSidebar from './dashboard-sidebar';
import DashboardContent from './dashboard-content';

type DashboardWrapperProps = {
	menu_items: DashboardMenuItemProps[];
	title?: string;
    children: React.ReactNode;
};

export default function DashboardWrapper({
	menu_items,
	title,
    children,
}: DashboardWrapperProps) {
	const [isOpen, setIsOpen] = React.useState(false);
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
				{children }
			</DashboardContent>
		</div>
	);
}