import { cn } from '@/lib/utils/cn';
import {
	IconDefinition,
	faBars,
	faBell,
	faBookAtlas,
	faCog,
	faDashboard,
	faGraduationCap,
	faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

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
		icon: faGraduationCap,
		title: 'Certifications'
	},
	{
		icon: faUser,
		title: 'Profile'
	},
	{
		icon: faCog,
		title: 'Settings'
	}
];

function BadgeWithIconAndCount(props: {
	icon: IconDefinition;
	count: number;
	title: string;
}) {
	const { icon, count } = props;
	return (
		<div className="relative flex">
			<FontAwesomeIcon icon={icon} />
			<div className="top-0 right-0 bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center">
				{count}
			</div>
		</div>
	);
}

export default function StudentDashboard() {
	return (
		<div className="">
			<div className="h-16 bg-white flex justify-between items-center shadow border-b">
				<div className="flex items-center">
					<button className='p-4 bg-primary'>
						<FontAwesomeIcon icon={faBars} />
					</button>
					<div className="flex items-center">
						<img
							className="w-8 h-8 rounded-full"
							src="https://avatars.githubusercontent.com/u/150797856?s=200&v=4"
							alt="avatar"
						/>
						<div
							className={cn(
								'text-xl   text-primary ml-4 font-bold uppercase'
							)}
						>
							Learning Africa
						</div>
					</div>
				</div>
				<div className="flex gap-2">
					{['Courses', 'Certifications', 'Profile', 'Settings'].map(
						(title) => (
							<BadgeWithIconAndCount
								icon={faBell}
								count={1}
								title={title}
							/>
						)
					)}
				</div>
			</div>
			<div className="flex">
				{/* Sidebar */}

				<div className="w-64 bg-white shadow p-4 overflow-y-scroll gap-4 border-r">
					{studentSidebarItems.map(({ icon, title }) => (
						<div className="flex items-center gap-4">
							<FontAwesomeIcon icon={icon} />
							<span>{title}</span>
						</div>
					))}
				</div>
				{/* Content */}
				<div
					style={{
						width: 'calc(100vw - 64px)',
						height: 'calc(100vh - 64px)'
					}}
					className="bg-gray-100 overflow-y-scroll"
				></div>
			</div>
		</div>
	);
}
