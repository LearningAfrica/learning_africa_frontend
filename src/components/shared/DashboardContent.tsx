import { cn } from '@/lib/utils';
import React from 'react';
import DashboardHeader from './DashboardHeader';

type DashboardContentProps = {
	children: React.ReactNode;
	isOpen: boolean;
	handleMenubarToggle: () => void;
};

export default function DashboardContent({
	children,
	//   isOpen,
	handleMenubarToggle
}: DashboardContentProps) {
	return (
		<div
			className={cn(
				` bg-stone-100 border w-full md:ml-64 md:w-[calc(100%_-_16rem)]`
			)}
		>
			<DashboardHeader handleMenubarToggle={handleMenubarToggle} />

			<div
				className={cn(
					`border  overflow-y-auto min-h-screen`
				)}
			>
				{children}
			</div>
		</div>
	);
}
