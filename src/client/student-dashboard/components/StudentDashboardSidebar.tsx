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
const studentSidebarItems = [
	{
		icon: faDashboard,
		title: 'Dashboard',
		link: '/student-dashboard'
	},
	{
		icon: faBookAtlas,
		title: 'Courses',
		link: '/student-dashboard/courses'
	},
	{
		icon: faMessage,
		link: '/student-dashboard/notifications',
		title: 'Notifications'
	},
	{
		icon: faGraduationCap,
		link: '/student-dashboard/certificates',
		title: 'Certificates'
	},
	{
		icon: faStar,
		link: '/student-dashboard/reviews',
		title: 'Reviews'
	}
];
const faQsAndProfileSettings = [
	{
		icon: faUser,
		title: 'Profile',
		link: '/student-dashboard/profile'
	},

	{
		icon: faCog,
		link: '/student-dashboard/settings',
		title: 'Settings'
	},
	{
		icon: faPhoneAlt,
		title: 'Help',
		link: '/student-dashboard/help'
	}
];

export default function StudentDashboardSidebar() {
	return (
		<div className="w-64 bg-white shadow p-4 overflow-y-scroll border-r flex flex-col">
			{studentSidebarItems.map(({ icon, title, link }) => (
				<div className="grid grid-cols-[20%_80%] items-center gap-1 hover:bg-primary-pk hover:text-white transition-all ease-linear duration-75 px-4 py-2 rounded">
					<FontAwesomeIcon icon={icon} className="text-xl" />
					<Link to={link}>
						<span className="text-xl flex-1">{title}</span>
					</Link>
				</div>
			))}
			<hr className="my-2" />
			{faQsAndProfileSettings.map(({ icon, title, link }) => (
				<div className="grid grid-cols-[20%_80%] items-center gap-1 hover:bg-primary-pk hover:text-white transition-all ease-linear duration-75 px-4 py-2 rounded">
					<FontAwesomeIcon icon={icon} className="text-xl" />
					<Link to={link}>
						<span className="text-xl flex-1">{title}</span>
					</Link>
				</div>
			))}
			{/* <div className="grid grid-cols-[20%_80%] items-center gap-1 hover:bg-primary-pk hover:text-white transition-all ease-linear duration-75 px-4 py-2 rounded">
				<FontAwesomeIcon icon={faCog} className="text-xl" />
				<span className="text-xl flex-1">Settings</span>
			</div> */}
		</div>
	);
}
