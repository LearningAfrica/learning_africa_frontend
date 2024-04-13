export type DashboardMenuItem = {
	href: string;
	active: boolean;
	label: string;
	children: DashboardMenuItem[];
	icon: string;
};

export type SidebarMenuItems = {
	toplinks: DashboardMenuItem[];
	bottomLinks: DashboardMenuItem[];
};
