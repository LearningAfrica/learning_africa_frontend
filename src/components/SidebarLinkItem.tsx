
type Props = {
	id: string;
	title: string;
	href: string;
	children?: Props[];
	isActive?: boolean;
	isChildActive?: boolean;
	onToggle: (id: string) => void;
};

const SidebarLinkItem = ({ id, title, href, children, isActive, isChildActive, onToggle }: Props) => {
	const shouldExpand = isActive || isChildActive;

	return (
		<div>
			<a href={href} onClick={(e) => { e.preventDefault(); onToggle(id); }}>
				{title}
			</a>
			{shouldExpand && children && (
				<div style={{ marginLeft: '20px' }}>
					{children.map((child) => (
						<SidebarLinkItem
							key={child.id}
							{...child}
							isActive={isActive}
							isChildActive={isChildActive}
							onToggle={onToggle}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default SidebarLinkItem;
