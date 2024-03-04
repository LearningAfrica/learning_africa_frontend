import { DashboardMenuItemProps } from '@/components/shared/DashboardMenuItem';
import {
	LucideLayoutDashboard,
	LucideGlobe,
	LucideBellPlus,
	LucideGraduationCap,
	LucideStar,
	LucideUser,
	LucideFileCog,
	LucidePhoneCall,
	LucidePencil,
	LucideLibrary,
	LucideDollarSign,
	LucideLoader,
	LucideDraftingCompass
} from 'lucide-react';

export const instructorSidebarItems: DashboardMenuItemProps[] = [
	{
		Icon: LucideLayoutDashboard,
		name: 'Dashboard',
		href: '/instructor-dashboard'
	},
	{
		Icon: LucideLibrary,
		name: 'Courses',
		href: '/instructor-dashboard/courses',
		sub_items: [
			{
				Icon: LucideGlobe,
				name: 'All Courses',
				href: '/instructor-dashboard/courses?tab=my-courses'
			},
			{
				Icon: LucidePencil,
				name: 'Create Course',
				href: '/instructor-dashboard/courses/create'
			},{
				Icon: LucideDollarSign,
				name: 'Purchased',
				href: '/instructor-dashboard/courses?tab=purchased-courses'
			},{
				Icon: LucideLoader,
				name: 'Upcoming',
				href: '/instructor-dashboard/courses?tab=upcoming-courses'
			},{
				Icon: LucideDraftingCompass,
				name: 'Drafts',
				href: '/instructor-dashboard/courses?tab=drafts'
			}
		]
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
