import {
	faDownload,
	faPrint,
	faTrash
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function StudentDashbaordCourses() {
	return (
		<div className='p-2'>
			<div className='m-3'>
				<h2>Purchased Courses</h2>
			</div>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-orange-200 ">
						<tr>
							<th scope="col" className="px-6 py-3">
								Item No
							</th>
							<th scope="col" className="px-6 py-3">
								Title
							</th>
							<th scope="col" className="px-6 py-3">
								Vendor
							</th>
							<th scope="col" className="px-6 py-3">
								Category
							</th>
							<th scope="col" className="px-6 py-3">
								Delivery Type
							</th>
							<th scope="col" className="px-6 py-3">
								Price
							</th>
							<th scope="col" className="px-6 py-3">
								PURCHASE Date{' '}
							</th>
							<th scope="col" className="px-6 py-3">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-white border-b">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								Course Title Here{' '}
							</th>
							<td className="px-6 py-4">Software Development</td>
							<td className="px-6 py-4">Simplilearn</td>
							<td className="px-6 py-4">Web Development</td>

							<td className="px-6 py-4">Online</td>

							<td className="px-6 py-4">$2999</td>
							<td className="px-6 py-4">14-01-2024</td>

							<td className="px-6 py-4">
								<div className="flex space-x-4">
									<a
										href="#"
										className="font-medium text-gray-600 hover:underline"
									>
										<FontAwesomeIcon icon={faDownload} />
									</a>
									<a
										href="#"
										className="font-medium text-gray-600 hover:underline"
									>
										<FontAwesomeIcon icon={faTrash} />
									</a>
									<a
										href="#"
										className="font-medium text-gray-600 hover:underline"
									>
										<FontAwesomeIcon icon={faPrint} />
									</a>
								</div>
							</td>
						</tr>
						<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								Course Title Here{' '}
							</th>
							<td className="px-6 py-4">Software Development</td>
							<td className="px-6 py-4">Simplilearn</td>
							<td className="px-6 py-4">Web Development</td>

							<td className="px-6 py-4">Online</td>

							<td className="px-6 py-4">$2999</td>
							<td className="px-6 py-4">14-01-2024</td>

							<td className="px-6 py-4">
								<div className="flex space-x-4">
									<a
										href="#"
										className="font-medium text-gray-600 hover:underline"
									>
										<FontAwesomeIcon icon={faDownload} />
									</a>
									<a
										href="#"
										className="font-medium text-gray-600 hover:underline"
									>
										<FontAwesomeIcon icon={faTrash} />
									</a>
									<a
										href="#"
										className="font-medium text-gray-600 hover:underline"
									>
										<FontAwesomeIcon icon={faPrint} />
									</a>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default StudentDashbaordCourses;
