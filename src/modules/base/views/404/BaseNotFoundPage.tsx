import { faArrowLeft, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

export default function BaseNotFoundPage() {
	return (
		<div className="w-full bg-light">
			<div className="max-w-7xl mx-auto p-10 flex flex-col justify-center items-center gap-4 min-h-[50vh]">
				{/* Need fontawesome exclamation with sory resource yo are looking for not fount 404 */}
				<h1 className="text-4xl font-bold">
					<FontAwesomeIcon icon={faExclamationTriangle} size='4x' />
				</h1>
				<p className="text-xl">
					Sorry, the resource you are looking for could not be found.
				</p>
				<div>
					<NavLink
						to={'/'}
						className="bg-orange text-white p-2 rounded flex items-center gap-2"
					>
					<FontAwesomeIcon icon={faArrowLeft}	/>Go Back
					</NavLink>
				</div>
			</div>
		</div>
	);
}
