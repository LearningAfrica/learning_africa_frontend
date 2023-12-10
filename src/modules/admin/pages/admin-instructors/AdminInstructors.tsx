import {
	faDownload,
	faPlus,
	faChevronLeft,
	faChevronRight,
	faEye
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

type Instructor = {
	id: number;
	first_name: string;
	last_name: string;
	qualification: string;
	profile_image: string;
	skills: string;
};
const instructors: Instructor[] = [
	{
		id: 1,
		first_name: 'John',
		last_name: 'Doe',
		profile_image: 'https://picsum.photos/200',
		qualification: 'BSc. Computer Science',
		skills: 'HTML, CSS, JavaScript'
	},
	{
		id: 2,
		first_name: 'Jane',
		last_name: 'Smith',
		profile_image: 'https://picsum.photos/200',
		qualification: 'BSc. Computer Science',
		skills: 'HTML, CSS, JavaScript, Python'
	}
];

export default function AdminInstructors() {
	return (
		<div>
			<div className="border p-2">
				<div className="flex justify-between py-2">
					<form action="">
						<input
							type="text"
							placeholder="Search..."
							className="border p-2"
						/>
					</form>
					<div className="flex items-center gap-2">
						<button className="bg-neutral-300 text-orange px-4 py-1 rounded-lg border flex items-center gap-2">
							<FontAwesomeIcon
								icon={faDownload}
								className="text-lg"
							/>
							<span>Export</span>
						</button>
						<Link
							to={'/admin/subjects/create'}
							className="bg-neutral-300 text-orange px-4 py-1 rounded-lg border flex items-center gap-2"
						>
							<FontAwesomeIcon
								icon={faPlus}
								className="text-lg"
							/>
							<span>Add</span>
						</Link>
					</div>
				</div>
				<table className="table border w-full border-collapse p-4">
					<thead>
						<tr>
							<th className="text-center">Picture</th>
							<th className="">First name</th>
							<th className="">Last name</th>
							<th className="">Qualification</th>
							<th className="">Skills</th>
							<th className="">Actions</th>
						</tr>
					</thead>
					<tbody>
						{instructors.map((instructor) => (
							<tr key={instructor.id}>
								{/* <td className="">{index + 1}</td> */}
								<td className="">
									<div className="flex justify-center">
										{instructor.profile_image ? (
											<img
												src={instructor.profile_image}
												alt=""
												className="w-10 h-10 rounded-full"
											/>
										) : (
											<div className="w-10 h-10 rounded-full bg-neutral-300"></div>
										)}
									</div>
								</td>
								<td className="">{instructor.first_name}</td>
								<td className="">{instructor.last_name}</td>
								<td className="">{instructor.qualification}</td>
								<td className="">{instructor.skills}</td>
								<td className="">
									<div className='flex items-center'>
										<Link to={`/admin/instructors/${ instructor.id }`} className="border px-2 gap-1 flex items-center">
											<FontAwesomeIcon icon={faEye} />
											<span>view</span>
										</Link>
										{/* <button>Edit</button>
										<button>Delete</button> */}
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="p-2">
					<div className="flex justify-between items-center">
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
						<div>
							<p>Showing 1 to 10 of 100 entries</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
