import { NavLink } from 'react-router-dom';
export default function BaseHeader() {
	return (
		<div className="border-b p-2 bg-light sticky top-0 z-50">
			<div className="max-w-7xl mx-auto py-2 flex justify-between items-center">
				<NavLink to="/" className="flex items-center gap-2">
					{/* <FontAwesomeIcon icon={faBars} size="2x" /> */}
					<img src="https://learningafrica.com/assets/images/logos/logo.png" alt=""  className='h-14 w-fit ' />
					{/* <h2 className="text-xl uppercase font-bold">Learning africa</h2> */}
				</NavLink>
				<div>
					<ul className="flex gap-4 uppercase">
						<li className="inline-block mr-2">
							<NavLink to="/" className="text-sm  font-bold">
								Home
							</NavLink>
						</li>
						<li className="inline-block mr-2">
							<NavLink to="/about" className="text-sm  font-bold">
								About
							</NavLink>
						</li>
						<li className="inline-block mr-2">
							<NavLink
								to="/contact"
								className="text-sm  font-bold"
							>
								Contact
							</NavLink>
						</li>
						<li className="inline-block mr-2">
							<NavLink to="/login" className="text-sm  font-bold">
								Login
							</NavLink>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li className="inline-block mr-2">
							<NavLink
								to="/login"
								className="text-sm uppercase font-bold bg-orange text-white px-4 py-2 rounded"
							>
								Become an Instructor
							</NavLink>
						</li>{' '}
						<li className="inline-block mr-2">
							{/* <label htmlFor="">
									Lang
								</label> */}
							<select name="" id="">
								<option value="">English</option>
								<option value="">Spanish</option>
								<option value="">French</option>
							</select>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
