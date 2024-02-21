'use client';
import  { useEffect, useRef, useState } from 'react';
import { LucideChevronDown, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';
export type MenuItemProps = {
	Icon: LucideIcon;
	name: string;
	showIcon?: boolean;
	iconSize?: number;
	href?: string;
	sub_items?: MenuItemProps[];
};
export function DashboardMenuItem({
	Icon,
	name,
	sub_items,
	iconSize,
	className,
	href
}: MenuItemProps & {
	className?: string;
}) {
	const [isOpen, setIsOpen] = useState(false);
	const hasSubItems = sub_items && sub_items.length > 0;

	const wrapperRef = useRef<HTMLDivElement>(null);

	const handleEsc = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			setIsOpen(false);
		}
	};

	const handleClickOutside = (e: MouseEvent) => {
		if (
			wrapperRef.current &&
			!wrapperRef.current.contains(e.target as Node)
		) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', handleEsc);
		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('keydown', handleEsc);
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return (
		<div
			className={cn(
				'flex items-center justify-start gap-4  text-white w-full',
				className
			)}
			ref={wrapperRef}
		>
			{hasSubItems ? (
				<div
					className={cn('relative w-full', {
						'mb-2': isOpen
					})}
				>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className={cn(
							`flex items-center justify-between w-full gap-4 text-white`,
							{
								'mb-4': isOpen
							}
						)}
					>
						<div
							className={cn(
								`flex items-center justify-start gap-4 text-white w-full`
							)}
						>
							<Icon size={iconSize || 20} />
							<span>{name}</span>
						</div>
						<LucideChevronDown
							size={iconSize || 20}
							className={`transform ${
								isOpen ? 'rotate-180' : ''
							}`}
						/>
					</button>
					{isOpen && (
						<div className="flex px-2 flex-col gap-4">
							{sub_items!.map((item) => (
								<DashboardMenuItem
									key={item.name}
									Icon={item.Icon}
									name={item.name}
									href={item.href}
									iconSize={iconSize || 20}
									sub_items={item.sub_items}
								/>
							))}
						</div>
					)}
				</div>
			) : (
				<NavLink
					to={href!}
					className={() => {
						return cn(
							`flex items-center justify-start gap-4 text-white w-full`,
							
						);
					}}
				>
					<Icon size={iconSize || 20} />
					<span>{name}</span>
				</NavLink>
			)}
		</div>
	);
}