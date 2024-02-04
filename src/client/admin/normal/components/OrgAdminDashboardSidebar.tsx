import useAuthHook from '@/lib/hooks/useAuthHook';
import {
	faDashboard,
	faBookAtlas,
	faGraduationCap,
	faUser,
	faCog,
	faStar,
	faPhoneAlt,
	faTachographDigital,
	faBookOpen,
	faBellConcierge,
	faUserGraduate,
	faChalkboardTeacher
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const adminSidebarItems = [
	{
		icon: faDashboard,
		title: 'Dashboard',
		link: '/org-admin/dashboard'
	},
	{
		icon: faBookAtlas,
		title: 'Courses',
		link: '/org-admin/dashboard/courses'
	},
	{
		icon: faTachographDigital,
		title: 'Organization',
		link: '/org-admin/dashboard/organization'
	},
	{
		icon: faBookOpen,
		title: ' Categories',
		link: '/org-admin/dashboard/courses-category'
	},
	{
		icon: faBellConcierge,
		link: '/org-admin/dashboard/notifications',
		title: 'Notifications'
	},
	{
		icon: faUserGraduate,
		link: '/org-admin/dashboard/students',
		title: 'Students'
	},
	{
		icon: faChalkboardTeacher,
		link: '/org-admin/dashboard/instructors',
		title: 'Instructors'
	},
	{
		icon: faGraduationCap,
		link: '/org-admin/dashboard/certificates',
		title: 'Certificates'
	},
	{
		icon: faStar,
		link: '/org-admin/dashboard/reviews',
		title: 'Reviews'
	}
];
const faQsAndProfileSettings = [
	{
		icon: faUser,
		title: 'Profile',
		link: '/org-admin/dashboard/profile'
	},

	{
		icon: faCog,
		link: '/org-admin/dashboard/settings',
		title: 'Settings'
	},
	{
		icon: faPhoneAlt,
		title: 'Help',
		link: '/org-admin/dashboard/help'
	}
];

export default function OrgAdminDashboardSidebar() {
	const { logout } = useAuthHook();
	return (
		<div className="w-64 bg-white shadow p-4 overflow-y-scroll border-r flex flex-col">
			{adminSidebarItems.map(({ icon, title, link }, index) => (
				<div
					key={title + index}
					className="grid grid-cols-[20%_80%] items-center gap-1 hover:bg-primary-pk hover:text-white transition-all ease-linear duration-75 px-4 py-2 rounded"
				>
					<FontAwesomeIcon icon={icon} className="text-xl" />
					<Link to={link}>
						<span className="text-xl flex-1">{title}</span>
					</Link>
				</div>
			))}
			<hr className="my-2" />
			{faQsAndProfileSettings.map(({ icon, title, link }) => (
				<div
					key={title}
					className="grid grid-cols-[20%_80%] items-center gap-1 hover:bg-primary-pk hover:text-white transition-all ease-linear duration-75 px-4 py-2 rounded"
				>
					<FontAwesomeIcon icon={icon} className="text-xl" />
					<Link to={link}>
						<span className="text-xl flex-1">{title}</span>
					</Link>
				</div>
			))}
			<button
				className="grid grid-cols-[20%_80%] items-center gap-1 hover:bg-primary-pk hover:text-white transition-all ease-linear duration-75 px-4 py-2 rounded"
				onClick={logout}
			>
				<FontAwesomeIcon icon={faCog} className="text-xl" />
				<span className="text-xl ">Logout</span>
			</button>
		</div>
	);
}
