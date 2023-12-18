import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBook,
	faChevronLeft,
	faChevronRight,
	faCog,
	faDashboard,
	faPerson,
	faUserGroup
} from '@fortawesome/free-solid-svg-icons';
import SidebarLinkItem from '@/components/SidebarLinkItem';
import React from 'react';
const routes = [
	{ id: 1, label: 'Dashboard', path: '/instructor/dashboard', icon: faDashboard },
	{ id: 2, label: 'Profile', path: '/instructor/profile', icon: faPerson },
	{
		id: 3, label: 'Users', path: '/instructor/users', icon: faUserGroup,
		children: [
			{ id: 1, label: 'Users', path: '/instructor/users', icon: faUserGroup },
			{ id: 2, label: 'Roles', path: '/instructor/roles', icon: faUserGroup },
			{ id: 3, label: 'Permissions', path: '/instructor/permissions', icon: faUserGroup }
		]
	},
	{ id: 4, label: 'Courses', path: '/instructor/courses', icon: faBook },
	{ id: 5, label: 'Settings', path: '/instructor/settings', icon: faCog },
	{ id: 6, label: 'NA', path: '/instructor/na', icon: 'na' }
];

type Props = {
	isSidebarOpen: boolean;
	setIsSidebarOpen: (sidebarState: boolean) => void;
};
export default function InstructorSidebar({
	isSidebarOpen,
	setIsSidebarOpen
}: Props) {
	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	}
	const [activeItem, setActiveItem] = React.useState('dashboard');

	const onToggle = (id: string) => {
		setActiveItem(id);
	}
	return (
		<motion.div
			className={`flex flex-col gap-2 p-2 border-r absolute h-screen z-50 bg-slate-300 ${isSidebarOpen ? 'w-60' : 'w-20'
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
					<SidebarLinkItem
						href={route.path}
						id={route.id.toString()}
						onToggle={() => { }}
						title={route.label}
						isActive={true}
						isChildActive={true}
						key={route.id} />
				);
			})}

		</motion.div>
	);
}
