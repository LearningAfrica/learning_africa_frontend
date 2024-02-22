import { DashboardMenuItemProps } from '@/components/shared/DashboardMenuItem';
import {
	LucideAsteriskSquare,
	LucideFileCog,
	LucideGlobe,
	LucideGraduationCap,
	LucideLayoutDashboard,
	LucideLibrary,
	LucideMessageCircle,
	LucidePhone,
	LucidePlusSquare,
	LucideShare,
	LucideStar,
	LucideUser
} from 'lucide-react';

export const superAdminSidebarItems: DashboardMenuItemProps[] = [
	{
		Icon: LucideLayoutDashboard,
		name: 'Dashboard',
		href: '/super/dashboard'
	},
	{
		Icon: LucideLibrary,
		name: 'Courses',
		href: '/super/dashboard/courses',
		sub_items: [
			{
				name: 'All Courses',
				href: '/super/dashboard/courses',
				Icon: LucideAsteriskSquare
			},
			{
				name: 'Add Course',
				href: '/super/dashboard/courses/add',
				Icon: LucidePlusSquare
			}
		]
	},
	{
		name: 'Instructors',
		Icon: LucideGlobe,
		href: '/super/dashboard/instructors',
		sub_items: [
			{
				name: 'All Instructors',
				href: '/super/dashboard/students',
				Icon: LucideAsteriskSquare
			},
			{
				name: 'Add Instructor',
				href: '/super/dashboard/students/add',
				Icon: LucidePlusSquare
			},
			{
				name: 'Invite Instructor',
				href: '/super/dashboard/students/groups',
				Icon: LucideShare
			}
		]
	},
	{
		Icon: LucideGraduationCap,
		name: 'Students',
		href: '/super/dashboard/students',
		sub_items: [
			{
				name: 'All Students',
				href: '/super/dashboard/students',
				Icon: LucideAsteriskSquare
			},
			{
				name: 'Add Student',
				href: '/super/dashboard/students/add',
				Icon: LucidePlusSquare
			},
			{
				name: 'Invite Student',
				href: '/super/dashboard/students/groups',
				Icon: LucideShare
			}
		]
	},
	{
		name:"Categories",
		Icon: LucideGlobe,
		href: "/super/dashboard/categories",
		sub_items: [
			{
				name: "All Categories",
				href: "/super/dashboard/categories",
				Icon: LucideAsteriskSquare
			},
			{
				name: "Add Category",
				href: "/super/dashboard/categories/add",
				Icon: LucidePlusSquare
			}
		]
	},
	// users
	{
		Icon: LucideUser,
		name: 'Users',
		href: '/super/dashboard/users',
		sub_items: [
			{
				name: 'All Users',
				href: '/super/dashboard/users',
				Icon: LucideAsteriskSquare
			},
			{
				name: 'Add User',
				href: '/super/dashboard/users/add',
				Icon: LucidePlusSquare
			},
			{
				name: 'Invite User',
				href: '/super/dashboard/users/groups',
				Icon: LucideShare
			}
		]
	},
	{
		Icon: LucideMessageCircle,
		href: '/super/dashboard/notifications',
		name: 'Notifications'
	},
	{
		Icon: LucideGraduationCap,
		href: '/super/dashboard/certificates',
		name: 'Certificates'
	},
	{
		Icon: LucideStar,
		href: '/super/dashboard/reviews',
		name: 'Reviews'
	},
	{
		Icon: LucideUser,
		name: 'Profile',
		href: '/super/dashboard/profile'
	},

	{
		Icon: LucideFileCog,
		href: '/super/dashboard/settings',
		name: 'Settings'
	},
	{
		Icon: LucidePhone,
		name: 'Help',
		href: '/super/dashboard/help'
	}
];
