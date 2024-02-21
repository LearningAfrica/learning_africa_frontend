import { MenuItemProps } from '@/components/shared/DashboardMenuItem';
import { LucideFileCog, LucideGraduationCap, LucideLayoutDashboard, LucideLibrary, LucideMessageCircle, LucidePhone, LucideStar, LucideUser } from 'lucide-react';

export const studentSidebarItems: MenuItemProps[] = [
	{
		Icon: LucideLayoutDashboard,
		name: 'Dashboard',
		href: '/student/dashboard'
	},
	{
		Icon: LucideLibrary,
		name: 'Courses',
		href: '/student/dashboard/courses'
	},
	{
		Icon: LucideMessageCircle,
		href: '/student/dashboard/notifications',
		name: 'Notifications'
	},
	{
		Icon: LucideGraduationCap,
		href: '/student/dashboard/certificates',
		name: 'Certificates'
	},
	{
		Icon: LucideStar,
		href: '/student/dashboard/reviews',
		name: 'Reviews'
	},
	{
		Icon: LucideUser,
		name: 'Profile',
		href: '/student/dashboard/profile'
	},

	{
		Icon: LucideFileCog,
		href: '/student/dashboard/settings',
		name: 'Settings'
	},
	{
		Icon: LucidePhone,
		name: 'Help',
		href: '/student/dashboard/help'
	}
];
