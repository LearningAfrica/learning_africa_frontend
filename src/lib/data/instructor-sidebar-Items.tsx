import { MenuItemProps } from '@/components/shared/DashboardMenuItem';
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

export const instructorSidebarItems: MenuItemProps[] = [
	{
		Icon: LucideLayoutDashboard,
		name: 'Dashboard',
		href: '/instructor-dashboard'
	},
	{
		Icon: LucideGlobe,
		name: 'Courses',
		href: '/instructor-dashboard/courses'
	},
	{
		Icon: LucideBellPlus,
		name: 'Notifications',
		href: '/instructor-dashboard/notifications'
	},
	{
		Icon: LucideGraduationCap,
		name: 'Certificates',
		href: '/instructor-dashboard/certificates'
	},
	{
		Icon: LucideStar,
		name: 'Reviews',
		href: '/instructor-dashboard/reviews'
	},
	{
		Icon: LucideUser,
		name: 'Profile',
		href: '/instructor-dashboard/profile'
	},

	{
		Icon: LucideFileCog,
		name: 'Settings',
		href: '/instructor-dashboard/settings'
	},
	{
		Icon: LucidePhoneCall,
		name: 'Help',
		href: '/instructor-dashboard/help'
	}
];
