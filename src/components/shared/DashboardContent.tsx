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
				` bg-stone-100 border w-full md:ml-64 md:w-[calc(100%_-_16rem)] overflow-hidden`
			)}
		>
			<DashboardHeader handleMenubarToggle={handleMenubarToggle} />

			<div
				className={cn(
					`border  overflow-y-auto  h-[calc(100dvh_-_4rem)] p-4 sm:p-4 md:p-6 lg:p-8`
				)}
			>
				{children}
			</div>
		</div>
	);
}
