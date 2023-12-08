import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
export default function BaseHeader() {
	return (
		<div className="border-b p-2 bg-light sticky top-0 z-50">
			<div className="max-w-7xl mx-auto py-2 flex justify-between">
				<NavLink to="/" className="flex items-center gap-2">
					<FontAwesomeIcon icon={faBars} size="2x" />
					<h2 className="text-xl uppercase font-bold">Learning</h2>
				</NavLink>
				<div>
					<ul>
						<li className="inline-block mr-2">
							<NavLink to="/" className="text-sm uppercase font-bold">
								Home
							</NavLink>
						</li>
						<li className="inline-block mr-2">
							<NavLink to="/about" className="text-sm uppercase font-bold">
								About
							</NavLink>
						</li>
						<li className="inline-block mr-2">
							<NavLink
								to="/contact"
								className="text-sm uppercase font-bold"
							>
								Contact
							</NavLink>
						</li>
						<li className="inline-block mr-2">
							<NavLink
								to="/login"
								className="text-sm uppercase font-bold"
							>
								Login
							</NavLink>
						</li>
						
						<li className="inline-block mr-2">
							<NavLink
								to="/login"
								className="text-sm uppercase font-bold bg-orange text-white px-4 py-2 rounded"
							>
								Become an Instructor
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
