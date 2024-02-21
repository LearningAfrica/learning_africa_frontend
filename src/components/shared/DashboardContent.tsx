import { cn } from '@/lib/utils';
import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import DashboardHeader from './DashboardHeader';

type DashboardContentProps = {
	children: React.ReactNode;
	isOpen: boolean;
	handleMenubarToggle: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function DashboardContent({
	children,
	//   isOpen,
	handleMenubarToggle
}: DashboardContentProps) {

	return (
		<div
			className={cn(
				` bg-white border w-full h-full md:ml-64 md:w-[calc(100%_-_16rem)]`
			)}
		>
			<DashboardHeader
			
				handleMenubarToggle={handleMenubarToggle}
			/>
			<MaxWidthWrapper className="max-w-[2540px] h-full overflow-hidden">
				<div className={cn(`h-full overflow-y-auto `)}>{children}</div>
			</MaxWidthWrapper>
		</div>
	);
}
