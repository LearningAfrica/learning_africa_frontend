import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft,
	faChevronRight
} from '@fortawesome/free-solid-svg-icons';
const routes = [
	{ label: 'Dashboard', path: '/instructor/dashboard', icon: 'dashboard' },
	{ label: 'Profile', path: '/instructor/profile', icon: 'person' },
	{ label: 'Users', path: '/instructor/users', icon: 'people' },
	{ label: 'Courses', path: '/instructor/courses', icon: 'book' },
	{ label: 'Settings', path: '/instructor/settings', icon: 'settings' },
	{ label: 'NA', path: '/instructor/na', icon: 'na' }
];

type Props = {
	isSidebarOpen: boolean;
	setIsSidebarOpen: (sidebarState: boolean) => void;
};
export default function InstructorSidebar({
	isSidebarOpen,
	setIsSidebarOpen
}: Props) {
	return (
		<motion.div
			className={`flex flex-col gap-2 p-2 border-r absolute h-screen z-50 bg-slate-300 ${
				isSidebarOpen ? 'w-60' : 'w-20'
			}`}
		>
			<motion.button
				animate={{ x: isSidebarOpen ? 60 : 20 }}
				transition={{ ease: 'easeOut', duration: 0.3 }}
				className="absolute right-0"
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
			>
				{isSidebarOpen ? (
					<FontAwesomeIcon icon={faChevronLeft} className="h-5 w-5" />
				) : (
					<FontAwesomeIcon
						icon={faChevronRight}
						className="h-5 w-5"
					/>
				)}
			</motion.button>
			{routes.map((route) => {
				return (
					<NavLink
						to={route.path}
						key={route.path}
						className={({ isActive, isPending }) =>
							isPending ? 'pending' : isActive ? 'active' : ''
						}
					>
						<span>{route.label}</span>
					</NavLink>
				);
			})}
		</motion.div>
	);
}
