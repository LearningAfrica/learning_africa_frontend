import { cn } from '@/lib/utils/cn';
import { faBars, faBell, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

export default function AdminDashboardHeader() {
	return (
		<div className="h-16 bg-white flex justify-between items-center shadow border-b pr-4">
			<div className="flex items-center">
				<button className="p-4 bg-primary-pk h-full">
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
							'text-xl   text-primary-pk ml-4 font-bold uppercase'
						)}
					>
						Learning Africa
					</div>
				</NavLink>
			</div>
			<div className="flex gap-2 items-center">
				<div className="relative flex items-center">
					<FontAwesomeIcon icon={faBell} className="text-xl" />
					<div className="absolute -top-3 right-1 bg-primary-pk text-white rounded-full w-4 h-4 flex items-center justify-center">
						2
					</div>
				</div>
				<div className="relative flex items-center">
					<FontAwesomeIcon icon={faMessage} className="text-xl" />
					<div className="absolute -top-3 right-1 bg-primary-pk text-white rounded-full w-4 h-4 flex items-center justify-center">
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
