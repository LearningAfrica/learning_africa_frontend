import {
	LucideLayoutDashboard,
	LucideGlobe,
	LucideBellPlus,
	LucideGraduationCap,
	LucideStar,
	LucideUser,
	LucideFileCog,
	LucidePhoneCall
} from 'lucide-react';
import { DashboardMenuItemProps } from '../../_components/dash-board-menu-item';

export const instructorSidebarItems: DashboardMenuItemProps[] = [
	{
		Icon: LucideLayoutDashboard,
		name: 'Dashboard',
		href: '/dashboard/instructor'
	},
	{
		Icon: LucideGlobe,
		name: 'Courses',
		href: '/dashboard/instructor/courses'
	},
	{
		Icon: LucideBellPlus,
		name: 'Notifications',
		href: '/dashboard/instructor/notifications'
	},
	{
		Icon: LucideGraduationCap,
		name: 'Certificates',
		href: '/dashboard/instructor/certificates'
	},
	{
		Icon: LucideStar,
		name: 'Reviews',
		href: '/dashboard/instructor/reviews'
	},
	{
		Icon: LucideUser,
		name: 'Profile',
		href: '/dashboard/instructor/profile'
	},

	{
		Icon: LucideFileCog,
		name: 'Settings',
		href: '/dashboard/instructor/settings'
	},
	{
		Icon: LucidePhoneCall,
		name: 'Help',
		href: '/dashboard/instructor/help'
	}
];