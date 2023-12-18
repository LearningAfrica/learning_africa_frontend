import { faRocket, faWallet, faEye, faPencil, faTrash, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
// import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
// const data = [
// 	{ name: 'Jan', uv: 200, pv: 2400, amt: 2400 },
// 	{ name: 'Feb', uv: 300, pv: 2400, amt: 2400 },
// 	{ name: 'March', uv: 200, pv: 2400, amt: 2400 },
// 	{ name: 'April', uv: 340, pv: 2400, amt: 2400 },
// 	{ name: 'May', uv: 500, pv: 2400, amt: 2400 },
// 	{ name: 'June', uv: 600, pv: 2400, amt: 2400 },
// 	{ name: 'July', uv: 200, pv: 2400, amt: 2400 },
// 	{ name: 'Aug', uv: 200, pv: 2400, amt: 2400 },
// 	{ name: 'Sep', uv: 230, pv: 2400, amt: 2400 },
// 	{ name: 'Oct', uv: 100, pv: 2400, amt: 2400 },
// 	{ name: 'Nov', uv: 900, pv: 2400, amt: 2400 },
// 	{ name: 'Dec', uv: 200, pv: 2400, amt: 2400 }
// ];

export default function AdminDashboard() {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex justify-between p-4">
				<h1>Dashboard</h1>
				<NavLink to="/super-admin">dashboard</NavLink>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				{/* Col 1 */}
				<div className="grid grid-rows-2 gap-4">
					<div className="shadow p-4 flex flex-col gap-4 bg-white rounded-md border">
						<div className="flex justify-between items-center ">
							<h2 className="border-l-4 border-black pl-2">Subjects</h2>
							<div className="flex gap-2">
								<button className="bg-blue-500 px-2 text-white rounded">Add Subject</button>
								<NavLink to="/super-admin">View all</NavLink>
							</div>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
							{
								[1, 2, 3, 4].map((item) => (
									<div
										key={item}
										className="border rounded p-4 text-center flex flex-col gap-2">
										<div className="flex justify-center items-center">
											<FontAwesomeIcon icon={faRocket} className="h-10 w-10 text-orange-500" />
										</div>
										<h3 className="font-bold text-center text-neutral-700">UI/UX Design</h3>
										<p className="text-gray-600 text-xs">1000+ Courses</p>
									</div>
								))
							}
						</div>
					</div>
					{/* Col 2 */}
					<div className="shadow bg-white rounded-md border">
						<div className="p-4 rounded flex flex-col gap-4">
							<div className="flex justify-between items-center ">
								<h2 className="border-l-4 border-black pl-2">Organizations</h2>
								<div className="flex gap-2">
									<div className="bg-purple-200 rounded overflow-hidden">

										{
											[1, 2, 3, 4].map((item) => (
												<button className={`border border-purple-300 px-1 ${item == 1 ? 'bg-purple-900 text-purple-100' : 'text-purple-900 bg-purple-100'}`}>{item}M</button>
											))
										}
									</div>
								</div>
							</div>
							<div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
								{/* graph */}

							</div>
						</div>
					</div>
				</div>
				{/* Col 2 */}
				<div className="grid grid-rows-2 gap-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
						{
							[1, 2, 3, 4].map((item) => (<div key={item} className="p-4 bg-white rounded-md border shadow flex gap-4 items-center">
								<FontAwesomeIcon icon={faWallet} className="h-10 w-10 text-orange-300 bg-orange-100" />
								<div>
									<h3 className="font-bold text-neutral-700">12</h3>
									<p className="text-gray-600 text-xs">Total instructors</p>
									<p className="text-xs">
										<span className="text-green-500">+2.5%</span> than last month
									</p>
								</div>
							</div>
							))
						}
					</div>
					<div>
						<div className="shadow bg-white rounded-md">
							<div className="p-4 rounded flex flex-col gap-4">
								<div className="flex justify-between items-center ">
									<h2 className="border-l-4 border-black pl-2">My courses</h2>
									<div className="flex gap-2">
										<NavLink to="/super-admin">View all</NavLink>
									</div>
								</div>
								<div className="grid grid-cols-1 gap overflow-x-auto">
									{/* table */}
									<table className="w-full">
										<thead>
											<tr className="text-xs capitalize">
												<th className="text-left">Course</th>
												<th className="text-left">Instructor</th>
												<th className="text-left">Type</th>
												<th className="text-left">Duration</th>
											</tr>
										</thead>
										<tbody>
											{
												[1, 2, 3, 4, 5].map((item) => (
													<tr className="text-xs">
														<td>
															<div className="flex items-center gap-4">

																<div className="flex flex-col text-xs">
																	<span className="font-normal">Introduction to web development</span>
																</div>
															</div>
														</td>
														<td>
															{/* Photo */}
															<div className="flex items-center gap-4">
																{/* <img src="https://learningafrica.com/assets/images/logos/logo.png" alt="" className="w-10 h-10 rounded-full" /> */}
																<div className="flex flex-col text-xs">
																	<span className="font-normal">Brian Odhiambo</span>
																</div>
															</div>
														</td>
														<td>
															<div className="flex items-center gap-4">
																<span className="font-bold bg-green-300 text-green-800 px-2 rounded">Free</span>
															</div>
														</td>
														<td>{item * 10} Days</td>
													</tr>))}
										</tbody>

									</table>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Instructors and Students */}
			<div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
				<div className="bg-white p-4 rounded-md shadow-md space-y-2">
					<div className="flex justify-between items-center ">
						<h2 className="border-l-4 border-black pl-2">Top Instructors</h2>
						<div className="flex gap-2">
							<NavLink to="/super-admin">View all</NavLink>
						</div>
					</div>
					<div className="gap-2 ">
						{
							[1, 2, 3, 4].map((item) => (
								<div key={item} className="flex items-center justify-between gap-4 border-b">
									<div className="flex space-x-4">

										{/* Photo */}
										<img src="https://learningafrica.com/assets/images/logos/logo.png" alt="" className="w-10 h-10 border rounded-full" />
										<div className="flex flex-col text-xs">
											<span className="">Brian Odhiambo</span>
											<span className="text-gray-600">
												<span className="text-gray-500">PHD</span>
											</span>
										</div>

									</div>
									<div className="flex flex-col gap-2">
										<span className="font-bold">12</span>
										<span className="text-gray-600 text-xs">Courses</span>
									</div>
								</div>
							))
						}
					</div>
				</div>
				<div className="bg-white p-4 rounded-md shadow-md lg:col-span-3 space-y-2">
					<div className="flex justify-between items-center ">
						<h2 className="border-l-4 border-black pl-2">New Students</h2>
						<div className="flex gap-2">
							<NavLink to="/super-admin">View all</NavLink>
						</div>
					</div>
					<div className="grid grid-cols-1  gap-2">
						<table>
							<thead>
								<tr className="text-xs capitalize">
									<th className="text-left">Name</th>
									<th className="text-left">Courses</th>
									<th className="text-left">In progress</th>
									<th className="text-left">Completed</th>
									<th className="text-left">Action</th>
								</tr>
							</thead>
							<tbody>
								{
									[1, 2, 3, 4, 5].map((item) => (
										<tr className="text-xs"
											key={item}>
											<td>
												<div className="flex items-center gap-4">

													<div className="flex flex-col text-xs">
														<span className="font-normal">Wanjala</span>
													</div>
												</div>
											</td>
											<td>
												{/* Photo */}
												30
											</td><td>
												{/* Photo */}
												7
											</td>
											<td>
												23
											</td>
											<td>
												<div className="flex items-center gap-4">
													<button className="px-2 text-neutral-500 bg-neutral-200 rounded-full p-1">
														<FontAwesomeIcon icon={faEye} />
													</button>
													<button className="px-2 text-blue-500 bg-blue-200 rounded-full p-1">
														<FontAwesomeIcon icon={faPencil} />
													</button><button className="px-2 text-red-500 bg-red-200 rounded-full p-1">
														<FontAwesomeIcon icon={faTrash} />
													</button>
												</div>

											</td>
										</tr>))}
							</tbody>
						</table>

					</div>
				</div>
			</div>
			{/* Course list */}
			<div className="bg-white p-4 shadow-md border rounded-md flex flex-col gap-2">
				<div className="flex justify-between items-center ">
					<h2 className="border-l-4 border-black pl-2">Course list</h2>
					<div className="flex gap-2">
						<NavLink to="/super-admin">View all</NavLink>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-4">

					{/* table */}
					<table className="w-full">
						<thead>
							<tr className="text-xs capitalize">
								<th className="text-left">S.No</th>
								<th className="text-left">Course</th>
								<th className="text-left">Category</th>
								<th className="text-left">Classes</th>
								<th className="text-left">Last updated</th>
								<th className="text-left">instructor</th>
								<th className="text-left">Students</th>
								<th className="text-left">Actions</th>
							</tr>
						</thead>
						<tbody>
							{
								[1, 2, 3, 4, 5].map((item) => (
									<tr className="text-xs">
										<td>
											<div className="flex items-center gap-4">
												<span className="font-bold">{item}</span>
											</div>
										</td>
										<td>
											{/* Photo */}
											<div className="flex items-center gap-4">
												<div className="flex flex-col text-xs">
													<span className="font-normal">Introduction to web development</span>
												</div>
											</div>
										</td>
										<td>
											<div className="flex items-center gap-4">
												<span className="">Science and IT</span>
											</div>
										</td>
										<td>
											<div className="flex items-center gap-4">
												<span className="">12</span>
											</div>
										</td>
										<td>
											<div className="flex items-center gap-4">
												<span className="">12/12/2023</span>
											</div>
										</td>
										<td>
											<div className="flex items-center gap-4">
												{/* Photo */}
												{/* <img src="https://learningafrica.com/assets/images/logos/logo.png" alt="" className="w-10 h-10 rounded-full" /> */}
												<div className="flex flex-col text-xs">
													<span className="font-normal">Brian Odhiambo</span>
												</div>
											</div>
										</td>
										<td>
											<div className="flex items-center gap-4">
												<span className="">12</span>
											</div>
										</td>
										<td>
											<div className="flex items-center gap-4">
												<button className="px-2 text-neutral-500 bg-neutral-200 rounded-full p-1">
													<FontAwesomeIcon icon={faEye} />
												</button>
												<button className="px-2 text-blue-500 bg-blue-200 rounded-full p-1">
													<FontAwesomeIcon icon={faPencil} />
												</button><button className="px-2 text-red-500 bg-red-200 rounded-full p-1">
													<FontAwesomeIcon icon={faTrash} />
												</button>
											</div>
										</td>

									</tr>))
							}
						</tbody>
					</table>
					{/* pagination */}
					<div className="flex justify-between items-center">
						<div className="flex gap-2">
							<p>
								Showing 1 to 10 of 57 entries
							</p>
						</div>
						<div className="flex gap-2">
							<button className="px-2 py-1 bg-neutral-200 rounded-full text-neutral-500">
								<FontAwesomeIcon icon={faChevronLeft} />
							</button>
							<button className="px-2 py-1 bg-blue-500 rounded-full text-neutral-200">
								1
							</button>
							<button className="px-2 py-1 bg-neutral-200 rounded-full text-neutral-500">
								2
							</button>
							<button className="px-2 py-1 bg-neutral-200 rounded-full text-neutral-500">
								<FontAwesomeIcon icon={faChevronRight} />
							</button>
						</div>

					</div>

				</div>


			</div>
		</div>
	);
}
