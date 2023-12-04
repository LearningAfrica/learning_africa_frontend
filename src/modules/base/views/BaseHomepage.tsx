import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGraduationCap,
	faCubesStacked,
	faSquareRootAlt,
	faArrowRight,
	faStar,
	faBook,
	faGlobe
} from '@fortawesome/free-solid-svg-icons';

export default function BaseHomepage() {
	const image =
		'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
	return (
		<div>
			{/* Banner */}
			<div
				className="h-fit md:min-h-[50vh] bg-cover bg-center bg-no-repeat bg-orange-500 bg-blend-overlay"
				style={{ backgroundImage: `url(${image})` }}
			>
				<div className="max-w-7xl h-full w-ful mx-auto grid md:grid-cols-2 items-center py-10">
					<div className=" flex flex-col gap-2 md:gap-4 justify-start">
						<div className="flex items-center gap-2">
							<div className="flex items-center  gap-2">
								<FontAwesomeIcon
									icon={faGraduationCap}
									size="2x"
									color="orange"
								/>
								<span>
									<h2 className="text-white font-bold">
										Transmission
									</h2>
								</span>
							</div>
							<div className="flex items-center  gap-2">
								<FontAwesomeIcon
									icon={faCubesStacked}
									size="2x"
									color="orange"
								/>
								<span>
									<h2 className="text-white font-bold">
										Transmission
									</h2>
								</span>
							</div>
							<div className="flex items-center  gap-2">
								<FontAwesomeIcon
									icon={faSquareRootAlt}
									size="2x"
									color="orange"
								/>
								<span>
									<h2 className="text-white font-bold">
										Transmission
									</h2>
								</span>
							</div>
						</div>
						<h1 className="text-6xl text-white font-bold">
							Grow your career with complete courses
						</h1>

						<div className="flex -space-x-2 overflow-hidden">
							<img
								className="inline-block h-20 w-20 rounded-full ring-2 ring-white"
								src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
							<img
								className="inline-block h-20 w-20 rounded-full ring-2 ring-white"
								src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
							<img
								className="inline-block h-20 w-20 rounded-full ring-2 ring-white"
								src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
								alt=""
							/>
							<img
								className="inline-block h-20 w-20 rounded-full ring-2 ring-white"
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
							<img
								className="inline-block h-20 w-20 rounded-full ring-2 ring-white"
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
			{/* Courses */}
			<div className="w-full bg-light py-10">
				<div className="max-w-7xl mx-auto w-full flex flex-col gap-4">
					{/* Course browse list */}
					<div className="flex gap-2 items-center justify-between w-full">
						<div className="flex flex-col gap-2 w-full flex-1">
							<h2 className="text-3xl font-bold">
								Featured{' '}
								<span className="text-orange-500">Courses</span>
							</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Non aliquam facere possimus
								ipsa voluptate illo, ex at sint necessitatibus
								magnam pariatur reiciendis cupiditate eos nisi.
								Quibusdam, explicabo ipsum? Similique, nisi?
							</p>
						</div>

						<div className="flex-1 flex justify-end">
							<button className="bg-orange text-light px-4 py-2 rounded-md whitespace-nowrap">
								View All <FontAwesomeIcon icon={faArrowRight} />{' '}
							</button>
						</div>
					</div>
					{/* Course catalogue */}
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{[1, 2, 3, 4, 5, 6].map((item, index) => {
							return (
								<div className="bg-white shadow-md rounded-md">
									<div className="flex flex-col gap-4">
										<div className="h-48 bg-gray-300 rounded-md">
											<img
												src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
												alt=""
												className="h-full w-full object-cover rounded-md"
											/>
										</div>
										<div className="flex flex-col gap-2 relative p-4">
											<div className="absolute right-2 p-2 border rounded-full -top-10 bg-orange text-light font-bold">
												<span>${(index + 1) * 10}</span>
											</div>
											<div className="flex gap-2 items-center">
												<img
													src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
													alt=""
													className="w-10 h-10 rounded-full"
												/>
												<div>
													<h2 className="text-sm">
														Jane Cooper
													</h2>
													{/* Stars */}
													<div className="flex items-center">
														{
															// 5 stars
															[1, 2, 3, 4]
																// map over them
																.map(
																	(
																		star,
																		index
																	) => {
																		return (
																			<span>
																				<FontAwesomeIcon
																					icon={
																						faStar
																					}
																					size="xs"
																					color="orange"
																				/>
																			</span>
																		);
																	}
																)
														}
													</div>
													<p className="text-xs">
														JavaScript Developer
													</p>
												</div>
											</div>
											<div className="flex flex-col gap-2">
												<h2 className="text-sm font-bold">
													Modern JavaScript
												</h2>
												<p className="text-xs">
													Mern, React, Node, Express
												</p>
												<hr />
												<div className="flex gap-2">
													<div className="flex items-center gap-1">
														{/* Number of lessons */}
														<FontAwesomeIcon
															icon={faBook}
															size="xs"
															color="orange"
														/>
														<span className="text-xs">
															10 Lessons
														</span>
													</div>
													<div className="flex items-center gap-1">
														{/* Class type */}
														<FontAwesomeIcon
															icon={faGlobe}
															size="xs"
															color="orange"
														/>
														<span className="text-xs">
															Online Class
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			{/* Trending categories */}
			<div className="w-full bg-neutral-200 py-10">
				<div className="max-w-7xl mx-auto w-full flex flex-col gap-4">
					{/* Course browse list */}
					<div className="flex gap-2 items-center justify-between w-full">
						<div className="flex flex-col gap-2 w-full flex-1">
							<h2 className="text-3xl font-bold">
								Trending{' '}
								<span className="text-orange-500">
									Categories
								</span>
							</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Non aliquam facere possimus
								ipsa voluptate illo, ex at sint necessitatibus
								magnam pariatur reiciendis cupiditate eos nisi.
								Quibusdam, explicabo ipsum? Similique, nisi?
							</p>
						</div>

						<div className="flex-1 flex justify-end">
							<button className="bg-orange text-light px-4 py-2 rounded-md whitespace-nowrap">
								All categories{' '}
								<FontAwesomeIcon icon={faArrowRight} />{' '}
							</button>
						</div>
					</div>
					{/* Course catalogue */}
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4">
						{[1, 2, 3, 4, 5, 6].map((item, index) => (
							<div className="shadow">
								<div>
									<img
										src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										alt=""
										className="h-48 w-full object-cover rounded-md"
									/>
									<div className="flex justify-center items-center flex-col gap-2 p-2">
										<h2 className="text-xl font-bold">
											Data structures and algorithms
										</h2>
										<p>
											Over 100 lessons, 10 hours of video
										</p>
										<button className="bg-neutral-300 px-4 py-2 rounded text-black">
											<FontAwesomeIcon
												icon={faArrowRight}
											/>
											<span>View course</span>
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* Stats */}
			<div
				className="bg-cover bg-center bg-no-repeat bg-orange-500 bg-blend-overlay bg-fixed"
				style={{
					backgroundImage: `url('https://images.unsplash.com/photo-1656077217715-bdaeb06bd01f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
				}}
			>
				<div className="max-w-7xl w-full mx-auto py-10 flex flex-col gap-4">
					<div className="h-full w-full bg-black bg-opacity-10 flex flex-col justify-center items-center gap-4">
						<h2 className="text-3xl font-bold text-light">
							Join over 1000+ students
						</h2>
						<button className="bg-light text-orange px-4 py-2 rounded-md">
							Get started
						</button>
					</div>
					<hr className='my-2'/>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
						<div>
							<h2 className="text-3xl font-bold text-light">
								1000+
							</h2>
							<p className="text-light">Students</p>
						</div>
						<div>
							<h2 className="text-3xl font-bold text-light">
								100+
							</h2>
							<p className="text-light">Courses</p>
						</div>
						<div>
							<h2 className="text-3xl font-bold text-light">
								100+
							</h2>
							<p className="text-light">Instructors</p>
						</div>
						<div>
							<h2 className="text-3xl font-bold text-light">
								100+
							</h2>
							<p className="text-light">Reviews</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
