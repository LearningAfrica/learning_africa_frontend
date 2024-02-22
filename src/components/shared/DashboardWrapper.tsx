import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardContent from './DashboardContent';
import DashboardSidebar from './DashboardSidebar';
import { DashboardMenuItemProps } from './DashboardMenuItem';
import MaxWidthWrapper from './MaxWidthWrapper';
import { cn } from '@/lib/utils';

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
		<MaxWidthWrapper
			className={cn('max-w-[1920px] h-screen w-full scrb')}
		>
			<div className={'w-full relative'}>
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
		</MaxWidthWrapper>
	);
}
