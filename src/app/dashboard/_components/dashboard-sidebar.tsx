"use client"
import { ChevronLeft, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DashboardMenuItem, DashboardMenuItemProps } from './dash-board-menu-item';
import useViewPort from '@/hooks/use-viewport';
import useAuthHook from '@/hooks/use-auth-hook';

type DashboardSidebarProps = {
	title?: string;
	isSidebarOpen?: boolean;
	menuItems: DashboardMenuItemProps[];
	handleToggle?: () => void;
};

export default function DashboardSidebar({
	title,
	isSidebarOpen,
	menuItems: navItems,
	handleToggle
}: DashboardSidebarProps) {
	const { isDesktop, isTablet, isMobile } = useViewPort();
	const auth =useAuthHook();
	return (
		<div
			className={cn(
				`hidden md:grid grid-rows-[5rem_1fr_2rem] h-[100dvh] bg-slate-100  text-black w-48 md:w-64 fixed border-r border-gray-500 top-0 left-0 z-[10000]  flex-col gap-6 pb-4`,
				{
					flex: isSidebarOpen
				}
			)}
		>
			<button
				className={cn(
					'absolute top-8 -right-2 w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 bg-white border flex items-center justify-center border-black rounded md:hidden'
				)}
				onClick={handleToggle}
			>
				<ChevronLeft size={20} className="text-black" />
			</button>
			<div className="h-20 flex items-center justify-start gap-4 px-4 border-b py-12">
				<div
					className={cn(
						'border-double p-4 rounded-full border-8 border-black bg-gradient-to-r from-primary-500 to-primary-600',
						{
							'w-12 h-12': isMobile,
							'w-16 h-16': isTablet,
							'w-20 h-20': isDesktop
						}
					)}
				></div>
				<h1
					className={cn('font-bold text-xl', {
						'text-sm': isMobile,
						'text-md': isTablet,
						'text-lg': isDesktop
					})}
				>
					{title || 'Dashboard'}
				</h1>
			</div>
			{/* <hr /> */}
			<div className="flex justify-between flex-col flex-1 overflow-y-scroll scrb">
				<div className="flex-1 ">
					{navItems.map((nav) => {
						return (
							<div
								key={nav.name}
								className={cn(
									`flex items-center  px-4 py-1 `
								)}
							>
								{/* <ConciergeBell /> */}
								<DashboardMenuItem
									{...nav}
									toggleSidebar={handleToggle}
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
										' text-xl font-medium text-black',
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
				onClick={auth.logout}
			>
				<User
					size={isDesktop ? 24 : isTablet ? 20 : isMobile ? 16 : 24}
					className=""
				/>
				<span className="">Logout</span>
			</button>
		</div>
	);
}