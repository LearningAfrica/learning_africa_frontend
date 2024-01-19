import {
	faDashboard,
	faBookAtlas,
	faGraduationCap,
	faUser,
	faCog,
	faMessage,
	faStar,
	faPhoneAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const adminSidebarItems = [
	{
		icon: faDashboard,
		title: 'Dashboard',
		link: '/admin-dashboard'
	},
	{
		icon: faBookAtlas,
		title: 'Courses',
		link: '/admin-dashboard/courses'
	},
	{
		icon: faBookAtlas,
		title: 'Organization',
		link: '/admin-dashboard/organization'
	},
	{
		icon: faBookAtlas,
		title: ' Categories',
		link: '/admin-dashboard/courses-category'
	},
	{
		icon: faMessage,
		link: '/admin-dashboard/notifications',
		title: 'Notifications'
	},
	{
		icon: faMessage,
		link: '/admin-dashboard/students',
		title: 'Students'
	},
	{
		icon: faMessage,
		link: '/admin-dashboard/instructors',
		title: 'Instructors'
	},
	{
		icon: faGraduationCap,
		link: '/admin-dashboard/certificates',
		title: 'Certificates'
	},
	{
		icon: faStar,
		link: '/admin-dashboard/reviews',
		title: 'Reviews'
	}
];
const faQsAndProfileSettings = [
	{
		icon: faUser,
		title: 'Profile',
		link: '/admin-dashboard/profile'
	},

	{
		icon: faCog,
		link: '/admin-dashboard/settings',
		title: 'Settings'
	},
	{
		icon: faPhoneAlt,
		title: 'Help',
		link: '/admin-dashboard/help'
	}
];

export default function AdminDashboardSidebar() {
	return (
		<div className="w-64 bg-white shadow p-4 overflow-y-scroll border-r flex flex-col">
			{adminSidebarItems.map(({ icon, title, link }) => (
				<div className="grid grid-cols-[20%_80%] items-center gap-1 hover:bg-primary hover:text-white transition-all ease-linear duration-75 px-4 py-2 rounded">
					<FontAwesomeIcon icon={icon} className="text-xl" />
					<Link to={link}>
						<span className="text-xl flex-1">{title}</span>
					</Link>
				</div>
			))}
			<hr className="my-2" />
			{faQsAndProfileSettings.map(({ icon, title, link }) => (
				<div className="grid grid-cols-[20%_80%] items-center gap-1 hover:bg-primary hover:text-white transition-all ease-linear duration-75 px-4 py-2 rounded">
					<FontAwesomeIcon icon={icon} className="text-xl" />
					<Link to={link}>
						<span className="text-xl flex-1">{title}</span>
					</Link>
				</div>
			))}
			{/* <div className="grid grid-cols-[20%_80%] items-center gap-1 hover:bg-primary hover:text-white transition-all ease-linear duration-75 px-4 py-2 rounded">
				<FontAwesomeIcon icon={faCog} className="text-xl" />
				<span className="text-xl flex-1">Settings</span>
			</div> */}
		</div>
	);
}
