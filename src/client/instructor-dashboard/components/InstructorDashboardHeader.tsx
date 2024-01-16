import { cn } from '@/lib/utils/cn';
import { faBars, faBell, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

export default function InstructorDashboardHeader() {
	return (
		<div className="h-16 bg-white flex justify-between items-center shadow border-b pr-4">
			<div className="flex items-center">
				<button className="p-4 bg-primary h-full">
					<FontAwesomeIcon icon={faBars} />
				</button>
				<NavLink to={'/'} className="flex items-center">
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
				</NavLink>
			</div>
			<div className="flex-1 flex justify-between px-4">
				<div>
					<input
						type="text"
						placeholder="Search for courses"
						className="border border-gray-300 rounded-md px-4 py-1 w-96 focus:outline-none focus:ring-2 focus:ring-primary"
					/>
				</div>
				<div>
					<NavLink to={'/'} className="text-xl bg-primary px-4 py-1 rounded-full text-white">
						Create Course
					</NavLink>
				</div>
			</div>
			<div className="flex gap-2 items-center">
				<div className="relative flex items-center">
					<FontAwesomeIcon icon={faBell} className="text-xl" />
					<div className="absolute -top-3 right-1 bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center">
						2
					</div>
				</div>
				<div className="relative flex items-center">
					<FontAwesomeIcon icon={faMessage} className="text-xl" />
					<div className="absolute -top-3 right-1 bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center">
						2
					</div>
				</div>
				<div className="flex items-center">
					<img
						className="w-8 h-8 rounded-full"
						src="https://secure.gravatar.com/avatar/2b7b7c9b5c9c5b5c9b7c9b5c9b7c9b5c?s=200&d=mm&r=g"
						alt="avatar"
					/>
				</div>
			</div>
		</div>
	);
}