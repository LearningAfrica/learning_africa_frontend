import {
	faChevronLeft,
	faChevronRight,
	faDownload,
	faPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { Link } from 'react-router-dom';
const subjects = [
	{
		id: 1,
		title: 'Software Engineering',
		creator: {
			name: 'John Doe',
			email: 'jdoe@gmail.com'
		},
		created_at: '2023-04-05',
		updated_at: '2023-05-01'
	},
	{
		id: 2,
		title: 'Mathematics',
		creator: {
			name: 'Sam Smith',
			email: 'samSmith@gmil.com'
		},
		created_at: '2023-03-01',
		updated_at: '2023-01-01'
	},
	{
		id: 3,
		title: 'Physics',
		creator: {
			name: 'mary Doe',
			email: 'marydoe@gmail.com'
		},
		created_at: '2023-01-01',
		updated_at: '2023-01-01'
	}
];
export default function AdminSubjectsDataTable() {
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
							to={'/super-admin/course-categories/create'}
							className="bg-neutral-300 text-orange px-4 py-1 rounded-lg border flex items-center gap-2"
						>
							<FontAwesomeIcon
								icon={faPlus}
								className="text-lg"
							/>
							<span>Create</span>
						</Link>
					</div>
				</div>
				<table className="table-fixed table border w-full border-collapse p-4">
					<thead>
						<tr>
							<th className="">Subject</th>
							<th className="">Creator</th>
							<th className="">Date created</th>
							<th className="">Actions</th>
						</tr>
					</thead>
					<tbody>
						{subjects.map((subject) => (
							<tr key={subject.id}>
								{/* <td className="">{index + 1}</td> */}
								<td className="">{subject.title}</td>
								<td className="">{subject.creator.name}</td>
								<td className="">
									{moment(subject.created_at).format('LL')}
								</td>
								<td className="">
									<button>Edit</button>
									<button>Delete</button>
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
