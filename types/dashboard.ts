export type DashboardMenuItem = {
	href: string;
	active: boolean;
	label: string;
	children: DashboardMenuItem[];
	icon: string;
};