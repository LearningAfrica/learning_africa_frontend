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
		link: '/super/dashboard'
	},
	{
		icon: faBookAtlas,
		title: 'Courses',
		link: '/super/dashboard/courses'
	},
	{
		icon: faTachographDigital,
		title: 'Organization',
		link: '/super/dashboard/organization'
	},
	{
		icon: faBookOpen,
		title: ' Categories',
		link: '/super/dashboard/courses-category'
	},
	{
		icon: faBellConcierge,
		link: '/super/dashboard/notifications',
		title: 'Notifications'
	},
	{
		icon: faUserGraduate,
		link: '/super/dashboard/students',
		title: 'Students'
	},
	{
		icon: faChalkboardTeacher,
		link: '/super/dashboard/instructors',
		title: 'Instructors'
	},
	{
		icon: faGraduationCap,
		link: '/super/dashboard/certificates',
		title: 'Certificates'
	},
	{
		icon: faStar,
		link: '/super/dashboard/reviews',
		title: 'Reviews'
	}
];
const faQsAndProfileSettings = [
	{
		icon: faUser,
		title: 'Profile',
		link: '/super/dashboard/profile'
	},

	{
		icon: faCog,
		link: '/super/dashboard/settings',
		title: 'Settings'
	},
	{
		icon: faPhoneAlt,
		title: 'Help',
		link: '/super/dashboard/help'
	}
];

export default function SuperAdminDashboardSidebar() {
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
