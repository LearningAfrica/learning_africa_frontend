import React from 'react';
import { DashboardMenuItem, MenuItemProps } from './DashboardMenuItem';
import { ChevronLeft, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import useViewPort from '@/lib/hooks/useViewPort';

type DashboardSidebarProps = {
	title?: string;
	isSidebarOpen?: boolean;
	menuItems: MenuItemProps[];
	handleToggle?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function DashboardSidebar({
	title,
	isSidebarOpen,
	menuItems: navItems,
	handleToggle
}: DashboardSidebarProps) {
	const { isDesktop, isTablet, isMobile } = useViewPort();
	return (
		<div
			className={cn(
				`hidden md:grid grid-rows-[5rem_1fr_2rem] h-screen bg-black w-48 md:w-64 fixed top-0 left-0 z-[10000]  flex-col gap-6 pb-2`,
				{
					flex: isSidebarOpen
				}
			)}
		>
			<button
				className={cn(
					'absolute top-8 -right-2 w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 bg-white border flex items-center justify-center border-gray-900 rounded md:hidden'
				)}
				onClick={handleToggle}
			>
				<ChevronLeft size={20} className="text-black" />
			</button>
			<div className="h-20 flex items-center justify-start gap-4 px-4 border-b py-12">
				<div
					className={cn(
						'text-white border-double p-4 rounded-full border-8',
						{
							'w-12 h-12': isMobile,
							'w-16 h-16': isTablet,
							'w-20 h-20': isDesktop
						}
					)}
				></div>
				<h1
					className={cn('text-white font-bold text-xl', {
						'text-sm': isMobile,
						'text-md': isTablet,
						'text-lg': isDesktop
					})}
				>
					{title || 'Dashboard'}
				</h1>
			</div>
			{/* <hr /> */}
			<div className="flex justify-between flex-col flex-1 overflow-y-scroll">
				<div className="flex-1 ">
					{navItems.map((nav) => {
						return (
							<div
								key={nav.name}
								className={cn(
									`flex items-center space-y-8 px-4 py-2 text-white`
								)}
							>
								{/* <ConciergeBell /> */}
								<DashboardMenuItem
									{...nav}
									iconSize={
										isDesktop
											? 24
											: isTablet
											? 20
											: isMobile
											? 16
											: 24
									}
									className={cn(
										'text-white text-xl font-medium',
										{
											'text-sm': isMobile,
											'text-md': isTablet,
											'text-lg': isDesktop
										}
									)}
								/>
							</div>
						);
					})}
				</div>
				{/* <hr /> */}
			</div>{' '}
			<button
				className={cn(
					'flex items-center justify-start gap-4 px-4 py-4 border m-2 rounded border-neutral-600',
					{
						'py-4': isDesktop,
						'py-2': isTablet,
						'py-1': isMobile
					}
				)}
			>
				<User
					size={isDesktop ? 24 : isTablet ? 20 : isMobile ? 16 : 24}
					className="text-white"
				/>
				<span className="text-white">Logout</span>
			</button>
		</div>
	);
}
