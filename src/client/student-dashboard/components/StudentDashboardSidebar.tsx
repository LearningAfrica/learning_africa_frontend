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
const studentSidebarItems = [
	{
		icon: faDashboard,
		title: 'Dashboard'
	},
	{
		icon: faBookAtlas,
		title: 'Courses'
	},
	{
		icon: faMessage,
		title: 'Notifications'
	},
	{
		icon: faGraduationCap,
		title: 'Certificates'
	},
	{
		icon: faStar,
		title: 'Reviews'
	}
];
const faQsAndProfileSettings = [
	{
		icon: faUser,
		title: 'Profile'
	},

	{
		icon: faCog,
		title: 'Settings'
	},
	{
		icon: faPhoneAlt,
		title: 'Help'
	}
];

export default function StudentDashboardSidebar() {
	return (
		<div className="w-64 bg-white shadow p-4 overflow-y-scroll border-r flex flex-col">
			{studentSidebarItems.map(({ icon, title }) => (
				<div className="grid grid-cols-[20%_80%] items-center gap-1 hover:bg-primary hover:text-white transition-all ease-linear duration-75 px-4 py-2 rounded">
					<FontAwesomeIcon icon={icon} className="text-xl" />
					<span className="text-xl flex-1">{title}</span>
				</div>
			))}
			<hr className="my-2" />
			{faQsAndProfileSettings.map(({ icon, title }) => (
				<div className="grid grid-cols-[20%_80%] items-center gap-1 hover:bg-primary hover:text-white transition-all ease-linear duration-75 px-4 py-2 rounded">
					<FontAwesomeIcon icon={icon} className="text-xl" />
					<span className="text-xl flex-1">{title}</span>
				</div>
			))}
			{/* <div className="grid grid-cols-[20%_80%] items-center gap-1 hover:bg-primary hover:text-white transition-all ease-linear duration-75 px-4 py-2 rounded">
				<FontAwesomeIcon icon={faCog} className="text-xl" />
				<span className="text-xl flex-1">Settings</span>
			</div> */}
		</div>
	);
}
