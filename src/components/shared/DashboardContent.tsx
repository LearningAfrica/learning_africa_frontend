import { cn } from '@/lib/utils';
import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import useViewPort from '@/lib/hooks/useViewPort';
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
	const { isDesktop, isLaptop } = useViewPort();
	return (
		<div
			className={cn(
				` bg-white border w-full h-full md:ml-64 md:w-[calc(100%_-_16rem)]`
			)}
		>
			<DashboardHeader
				isDesktop={isDesktop}
				isLaptop={isLaptop}
				handleMenubarToggle={handleMenubarToggle}
			/>
			<MaxWidthWrapper className="max-w-[2540px] h-full overflow-hidden">
				<div className={cn(`h-full overflow-y-auto `)}>{children}</div>
			</MaxWidthWrapper>
		</div>
	);
}
