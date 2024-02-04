import { cn } from '@/lib/utils/cn';
import { faDashboard, faBookAtlas, faMessage, faGraduationCap, faStar, faUser, faCog, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
const studentSidebarItems = [
	{
		icon: faDashboard,
		title: 'Dashboard',
		href: '/instructor-dashboard'
	},
	{
		icon: faBookAtlas,
		title: 'Courses',
		href: '/instructor-dashboard/courses'
	},
	{
		icon: faMessage,
		title: 'Notifications',
		href: '/instructor-dashboard/notifications'
	},
	{
		icon: faGraduationCap,
		title: 'Certificates',
		href: '/instructor-dashboard/certificates'
	},
	{
		icon: faStar,
		title: 'Reviews',
		href: '/instructor-dashboard/reviews'
	}
];
const faQsAndProfileSettings = [
	{
		icon: faUser,
		title: 'Profile',
		href: '/instructor-dashboard/profile'
	},

	{
		icon: faCog,
		title: 'Settings',
		href: '/instructor-dashboard/settings'
	},
	{
		icon: faPhoneAlt,
		title: 'Help',
		href: '/instructor-dashboard/help'
	}
];
export default function InstructorDashboardSidebar() {
  return (
	<div className="w-64 bg-white shadow p-4 overflow-y-scroll border-r flex flex-col">
			{studentSidebarItems.map(({ icon,title ,href }) => (
				<NavLink to={href} className="grid grid-cols-[20%_80%] items-center gap-1 hover:bg-primary-pk hover:text-white transition-all ease-linear duration-75 px-4 py-2 rounded">
					<FontAwesomeIcon icon={icon} className="text-xl" />
					<span className="text-xl flex-1">{title}</span>
				</NavLink>
			))}
			<hr className="my-2" />
			{faQsAndProfileSettings.map(({ icon, title,href }) => (
				<NavLink to={href} className={cn(`grid grid-cols-[20%_80%] items-center gap-1 hover:bg-primary-pk hover:text-white transition-all ease-linear duration-75 px-4 py-2 rounded`)}>
					<FontAwesomeIcon icon={icon} className="text-xl" />
					<span className="text-xl flex-1">{title}</span>
				</NavLink>
			))}
			{/* <div className="grid grid-cols-[20%_80%] items-center gap-1 hover:bg-primary-pk hover:text-white transition-all ease-linear duration-75 px-4 py-2 rounded">
				<FontAwesomeIcon icon={faCog} className="text-xl" />
				<span className="text-xl flex-1">Settings</span>
			</div> */}
		</div>
  )
}
