import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

export default function AdminCourses() {
	return (
		<div className="p-2">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Admin Courses</title>
				<meta name="description" content="Admin Courses" />
				<meta name="keywords" content="Admin Courses" />
			</Helmet>
			<div className="flex flex-col gap-4">
				<div className="flex justify-between items-center border px-2 py-4">
					<div>
						<h1 className="font-bold capitalize text-2xl">
							Learning Africa Courses
						</h1>
						<p>
							Our goal is to be the #1 learning platform for
							Africans and the world.
						</p>
					</div>
					<div>
						We have <span>10</span> courses in total
					</div>
				</div>
				<div className="p-4 rounded-md bg-light">
					<button className="bg-blue-500 text-white px-2 py-1 rounded-full">
						<span className="text-blue-500">+</span> Create new
						course
					</button>
					{/* <button>
						<span className="text-blue-500">+</span> Create new
						course
					</button> */}
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((course, index) => (
						<div
							key={course + index}
							className="flex flex-col gap-2 shadow-sm justify-evenly rounded-md"
						>
							<div className="flex flex-col border">
								<div className="w-full overflow-hidden max-h-80 relative">
									<img
										src="https://th.bing.com/th/id/R.875b7e9bc007fbd292c070ac9735ef6a?rik=NkfIsfiwzk%2br5g&riu=http%3a%2f%2fmarvistamom.com%2fwp-content%2fuploads%2fbooks3.jpg&ehk=45OcK5XC3hHbUte6%2frEAdckJ2n%2bdSAASyFXEw0EOXZ8%3d&risl=&pid=ImgRaw&r=0"
										alt=""
										className="w-full"
									/>
									<button
										className="absolute top-1 right-1 bg-orange-500 text-white px-2 py-1 rounded-full"
										onClick={() => {}}
									>
										Finance
									</button>
								</div>
								<div className="p-2 bg-blue-300 flex flex-col gap-2">
									<h1 className="font-bold">
										Master business analytics
									</h1>

									<p>
										Get a certificate of completion at the
										end
									</p>
									<p className="text-xs flex items-center gap-2">
										<div>
											<FontAwesomeIcon icon={faClock} />
										</div>
										30Min | 10 Modules | 5 Quizzes
									</p>
									<div className=" rounded-md bg-light text-center flex justify-center">
										<NavLink to={'/super-admin/courses/45/view'} className=" px-4">
											View
										</NavLink>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
