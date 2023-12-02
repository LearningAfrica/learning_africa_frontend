import { NavLink } from 'react-router-dom';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';
import { motion } from 'framer-motion';
const routes = [
	{ label: 'Dashboard', path: '/student/dashboard', icon: 'dashboard' },
	{ label: 'Profile', path: '/student/profile', icon: 'person' },
	{ label: 'Users', path: '/student/users', icon: 'people' },
	{ label: 'Courses', path: '/student/courses', icon: 'book' },
	{ label: 'Settings', path: '/student/settings', icon: 'settings' },
	{ label: 'NA', path: '/student/na', icon: 'na' }
];

type Props = {
	isSidebarOpen: boolean;
	setIsSidebarOpen: (sidebarState: boolean) => void;
};
export default function StudentSidebar({
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
					<CiCircleChevLeft className="h-5 w-5" />
				) : (
					<CiCircleChevRight />
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
