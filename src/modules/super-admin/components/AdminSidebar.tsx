import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import profile from '@/assets/1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft,
	faChevronRight,
	faCog,
	faGraduationCap,
	faHourglass,
	faPenSquare,
	faPencil,
	faUser
} from '@fortawesome/free-solid-svg-icons';
import { faDashboard } from '@fortawesome/free-solid-svg-icons/faDashboard';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup';
import { faDeskpro } from '@fortawesome/free-brands-svg-icons';
const routes = [
	{
		label: 'Dashboard',
		path: '/super-admin',
		icon: faDashboard
	},
	{ label: 'Organizations', path: '/super-admin/organizations', icon: faHourglass },
	{ label: 'Create organization', path: '/super-admin/subjects', icon: faPencil },
	{ label: 'Course Categories', path: '/super-admin/subjects', icon: faDeskpro },
	{ label: 'Create category', path: '/super-admin/subjects', icon: faPencil },
	{ label: 'Courses', path: '/super-admin/subjects', icon: faGraduationCap },
	{ label: 'Create course', path: '/super-admin/subjects', icon: faPencil },
	{ label: 'Students', path: '/super-admin/subjects', icon: faUser },
	{ label: 'Create student', path: '/super-admin/subjects', icon: faPencil },
	{ label: 'Instructors', path: '/super-admin/instructors', icon: faUserGroup },
	{ label: 'Create Instructor', path: '/super-admin/courses', icon: faPenSquare },
	{ label: 'Learners', path: '/super-admin/learners', icon: faGraduationCap },
	{ label: 'Profile', path: '/super-admin/profile', icon: faUser },
	{ label: 'Settings', path: '/super-admin/settings', icon: faCog },
];

type Props = {
	isSidebarOpen: boolean;
	setIsSidebarOpen: (sidebarState: boolean) => void;
};
export default function AdminSidebar({
	isSidebarOpen,
	setIsSidebarOpen
}: Props) {
	return (
		<motion.div
			className="py-8 px-2 border-r h-screen absolute top-0 left-0 bg-black z-10 flex justify-between flex-col gap-4 text-white"
			style={isSidebarOpen ? { width: 250 } : { width: 80 }}
			initial={{ x: -250 }}
			animate={{ x: 0 }}
			transition={{ ease: 'easeOut', duration: 0.3 }}
		>
			<motion.button
				animate={{ x: isSidebarOpen ? 20 : 20 }}
				transition={{ ease: 'easeOut', duration: 0.3 }}
				className="absolute right-0 border rounded-full p-1 bg-light flex items-center justify-center border-black"
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
			>
				{isSidebarOpen ? (
					<FontAwesomeIcon icon={faChevronLeft} className="h-2 w-5 text-black" />
				) : (
					<FontAwesomeIcon
						icon={faChevronRight}
						className="h-2 w-5 text-black"
					/>
				)}
			</motion.button>
			<motion.div className="flex flex-col gap-2">
				<div className="p-2 flex ">
					<img
						src="https://learningafrica.com/assets/images/logos/logo.png"
						alt=""
						className="w-24"
					/>
				</div>
				<div className="flex flex-col px-4">
					{routes.map((route) => {
						return (
							<NavLink
								to={route.path}
								key={route.path}
								className={({ isActive, isPending }) =>
									isPending
										? 'pending'
										: isActive
										? 'active'
										: ''
								}
							>
								<div className="flex items-center gap-4 p-2 rounded hover:bg-slate-600 group">
									{
										<FontAwesomeIcon
											icon={route.icon}
											className="w-5 h-5"
										/>
									}
									<span
										className={
											isSidebarOpen
												? 'opacity-100'
												: 'opacity-0'
										}
									>
										{route.label}
									</span>
								</div>
							</NavLink>
						);
					})}
				</div>
			</motion.div>
			<div className="border-t flex items-center gap-2">
				<img src={profile} alt="" className="w-10 h-10 rounded-full" />
				<div className="flex flex-col">
					<span className="font-bold">learning africa</span>
					<span className="text-xs">Administrator</span>
				</div>
			</div>
		</motion.div>
	);
}
