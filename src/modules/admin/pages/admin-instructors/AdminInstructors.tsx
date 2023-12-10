import { instructorsData } from '@/components/data/instructors-data';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import {
	faChevronLeft,
	faChevronRight,
	faSearch,
	faStar
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

export default function AdminInstructors() {
	return (
		<div className="p-4 flex flex-col gap-2 max-w-7xl mx-auto">
			<div className="p-10 border">
				<h1 className="text-center">List of Instructors</h1>
			</div>
			<div className="">
				{/* Filter section */}
				<div className="grid grid-cols-4 place-content-center gap-4 py-2">
					<form>
						<div className="border-neutral-300 bg-light border-[1px] px-2 py-1 flex flex-row-reverse items-center gap-2 rounded-md">
							<label htmlFor="search-instructor">
								<button className="bg-orange h-10 w-10 text-light rounded-md">
									<FontAwesomeIcon
										icon={faSearch}
										className="text-lg"
									/>
								</button>
							</label>
							<input
								type="text"
								name="search-instructor"
								id="search-instructor"
								autoComplete=""
								className="border p-2 flex-1 border-none outline-none focus:ring-0 bg-transparent"
								placeholder="Search..."
							/>
						</div>
					</form>
					<div>
						{/* Filter */}
						<select
							name=""
							id=""
							className="border p-2 border-neutral-300 rounded-md h-full w-full"
						>
							<option value="">Filter</option>
							<option value="">Filter</option>
							<option value="">Filter</option>
						</select>
					</div>
					<div>
						{/* Sort */}
						<select
							name=""
							id=""
							className="border p-2 border-neutral-300 rounded-md w-full h-full"
						>
							<option value="">Sort</option>
							<option value="">Sort</option>
							<option value="">Sort</option>
						</select>
					</div>
					<div>
						{/* Actions */}
						<button className="bg-orange text-white py-1 rounded-md h-full px-8">
							Export
						</button>
					</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{instructorsData.map((instructor) => (
						<div className="p-2 shadow-sm flex border gap-4 flex-col lg:flex-row">
							<div>
								<img
									src={instructor.profile_image}
									alt=""
									className="w-full h-64 lg:w-48 lg:h-44 object-cover rounded"
								/>
							</div>
							<div className="p-2 flex-1 flex flex-col gap-4">
								<div className="flex flex-col gap-4">
									<div className="flex justify-between items-center">
										<NavLink to={`/admin/instructors/${ instructor.id }`}>
											<h2 className="text-sm text-black font-bold">
												{instructor.first_name +
													' ' +
													instructor.last_name}
											</h2>
											<p className="text-xs">
												{instructor.qualification}
											</p>
										</NavLink>
										<div className="flex items-center gap-1 justify-center">
											<h2 className="text-sm">4.5</h2>
											<FontAwesomeIcon
												icon={faStar}
												className="text-sm"
											/>
										</div>
									</div>
								</div>
								<p className="text-neutral-700 text-clip">
									{instructor.about.slice(0, 150) + '...'}
								</p>
								<div className="flex items-center justify-between">
									<div className="text-orange-600 font-bold">
										{/* <h2 className='text-sm font-bold'>Skills</h2> */}
										<p className="text-sm">
											{instructor.skills}
										</p>
									</div>
									<div className="flex gap-2 items-center text-blue-600">
										<FontAwesomeIcon
											icon={faFacebook}
											className="text-sm"
										/>
										<FontAwesomeIcon
											icon={faTwitter}
											className="text-sm"
										/>
										<FontAwesomeIcon
											icon={faLinkedin}
											className="text-sm"
										/>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				{/* Pagination details */}
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<button className="rounded-lg">
							<FontAwesomeIcon icon={faChevronLeft} /> Prev
						</button>
						{/* Splitter vertical bar */}
						<div className="border-r h-4 border-neutral-600"></div>
						<button className=" rounded-lg">
							Next <FontAwesomeIcon icon={faChevronRight} />
						</button>
					</div>
					<div className="flex items-center gap-2 p-2">
						<span className="whitespace-nowrap">Page 1 of 2</span>
						<select
							name=""
							id=""
							className="border p-2 border-neutral-300 rounded-md w-full h-full"
						>
							<option value="">20</option>
							<option value="">30</option>
							<option value="">40</option>
						</select>
					</div>
				</div>
			</div>
			<div>{/* CTAs */}</div>
		</div>
	);
}
