import { DashboardMenuItemProps } from '@/components/shared/DashboardMenuItem';
import { LucideAsteriskSquare, LucideFileCog, LucideGlobe, LucideGraduationCap, LucideLayoutDashboard, LucideLibrary, LucideMessageCircle, LucidePhone, LucidePlusSquare, LucideShare, LucideStar, LucideUser } from 'lucide-react';

export const adminSidebarItems: DashboardMenuItemProps[] = [
	{
		Icon: LucideLayoutDashboard,
		name: 'Dashboard',
		href: '/org-admin/dashboard'
	},
	{
		Icon: LucideLibrary,
		name: 'Courses',
		href: '/org-admin/dashboard/courses',
		sub_items: [
			{
				name: 'All Courses',
				href: '/org-admin/dashboard/courses',
				Icon: LucideAsteriskSquare
			},
			{
				name: 'Add Course',
				href: '/org-admin/dashboard/courses/add',
				Icon: LucidePlusSquare
			}
		]
	},
	{
		name: 'Instructors',
		Icon: LucideGlobe,
		href: '/org-admin/dashboard/instructors',
		sub_items: [
			{
				name: 'All Instructors',
				href: '/org-admin/dashboard/students',
				Icon: LucideAsteriskSquare
			},
			{
				name: 'Add Instructor',
				href: '/org-admin/dashboard/students/add',
				Icon: LucidePlusSquare
			},
			{
				name: 'Invite Instructor',
				href: '/org-admin/dashboard/students/groups',
				Icon: LucideShare
			}
		]
	},
	{
		Icon: LucideGraduationCap,
		name: 'Students',
		href: '/org-admin/dashboard/students',
		sub_items: [
			{
				name: 'All Students',
				href: '/org-admin/dashboard/students',
				Icon: LucideAsteriskSquare
			},
			{
				name: 'Add Student',
				href: '/org-admin/dashboard/students/add',
				Icon: LucidePlusSquare
			},
			{
				name: 'Invite Student',
				href: '/org-admin/dashboard/students/groups',
				Icon: LucideShare
			}
		]
	},
	{
		name:"Categories",
		Icon: LucideGlobe,
		href: "/org-admin/dashboard/categories",
		sub_items: [
			{
				name: "All Categories",
				href: "/org-admin/dashboard/categories",
				Icon: LucideAsteriskSquare
			},
			{
				name: "Add Category",
				href: "/org-admin/dashboard/categories/add",
				Icon: LucidePlusSquare
			}
		]
	},
	// users
	{
		Icon: LucideUser,
		name: 'Users',
		href: '/org-admin/dashboard/users',
		sub_items: [
			{
				name: 'All Users',
				href: '/org-admin/dashboard/users',
				Icon: LucideAsteriskSquare
			},
			{
				name: 'Add User',
				href: '/org-admin/dashboard/users/add',
				Icon: LucidePlusSquare
			},
			{
				name: 'Invite User',
				href: '/org-admin/dashboard/users/groups',
				Icon: LucideShare
			}
		]
	},
	{
		Icon: LucideMessageCircle,
		href: '/org-admin/dashboard/notifications',
		name: 'Notifications'
	},
	{
		Icon: LucideGraduationCap,
		href: '/org-admin/dashboard/certificates',
		name: 'Certificates'
	},
	{
		Icon: LucideStar,
		href: '/org-admin/dashboard/reviews',
		name: 'Reviews'
	},
	{
		Icon: LucideUser,
		name: 'Profile',
		href: '/org-admin/dashboard/profile'
	},

	{
		Icon: LucideFileCog,
		href: '/org-admin/dashboard/settings',
		name: 'Settings'
	},
	{
		Icon: LucidePhone,
		name: 'Help',
		href: '/org-admin/dashboard/help'
	}
];
