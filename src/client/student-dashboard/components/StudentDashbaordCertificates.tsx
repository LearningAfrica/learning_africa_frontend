import { faCertificate, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function StudentDashbaordCertificates() {
	return (
		<div className='p-3'>
			<div>MY CERTIFICATES</div>
			<div className='mb-4  bg-white px-4 py-2 rounded-sm'>
				<div className="flex items-center justify-start">
					<FontAwesomeIcon icon={faCertificate} />
					<h1 className='text-center'>Jump into new certificate</h1>
				</div>
				<div className="flex items-center justify-end">
					<button className="bg-red-500 text-center  text-white px-4 py-2 rounded-full">
						New Certificate
					</button>
				</div>
			</div>
			{/* table */}
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								Item No
							</th>
							<th scope="col" className="px-6 py-3">
								Title
							</th>
							<th scope="col" className="px-6 py-3">
								Marks
							</th>
							<th scope="col" className="px-6 py-3">
								Out of
							</th>

							<th scope="col" className="px-6 py-3">
								Upload Date{' '}
							</th>
							<th scope="col" className="px-6 py-3">
								Certificate
							</th>
							<th scope="col" className="px-6 py-3">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								Course Title Here{' '}
							</th>
							<td className="px-6 py-4">Software Development</td>
							<td className="px-6 py-4">60</td>
							<td className="px-6 py-4">100</td>
							<td className="px-6 py-4">14-01-2024</td>
							<td className="px-6 py-4">
								<div className="flex space-x-4">
									<a
										href="#"
										className="font-medium text-blue-600 hover:underline"
									>
										View
									</a>
								</div>
							</td>{' '}
							<td className="px-6 py-4">
								<div className="flex space-x-4">
									<a
										href="#"
										className="font-medium text-gray-600 hover:underline"
									>
										<FontAwesomeIcon icon={faTrash} />
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
							<td className="px-6 py-4">60</td>
							<td className="px-6 py-4">100</td>
							<td className="px-6 py-4">14-01-2024</td>
							<td className="px-6 py-4">
								<div className="flex space-x-4">
									<a
										href="#"
										className="font-medium text-blue-600 hover:underline"
									>
										View
									</a>
								</div>
							</td>{' '}
							<td className="px-6 py-4">
								<div className="flex space-x-4">
									<a
										href="#"
										className="font-medium text-gray-600 hover:underline"
									>
										<FontAwesomeIcon icon={faTrash} />
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

export default StudentDashbaordCertificates;
