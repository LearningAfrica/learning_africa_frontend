import { faGraduationCap, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

export default function AdminStatsSection() {
	return (
		<div className="grid grid-cols-[repeat(auto-fit,30rem)] gap-4">
			<div className="shadow p-4 rounded-md row-span-2 border w-full">
				<div className="flex items-center justify-between">
					<div className="flex border-b p-2 flex-col gap-4 w-full justify-between">
						<div className="flex items-center justify-between">
							<h1 className="text-2xl uppercase font-semibold">
								Learners
							</h1>
							<NavLink
								to={'/admin/users'}
								className="text-sm text-blue-500"
							>
								View all
							</NavLink>
						</div>
						<div className="flex flex-col gap-2 w-full">
							{[1, 2, 3, 4, 5].map((item) => {
								return (
									<div
										key={item}
										className="flex items-center gap-4 border-b"
									>
										<div className="w-10 h-10 rounded-full flex items-center justify-center p-2">
											<FontAwesomeIcon
												icon={faUser}
												size="2x"
											/>
										</div>
										<div className="flex flex-col gap-2">
											<h1 className="text-sm font-medium ">
												John Doe
											</h1>
											<p className="text-sm">
												<span className="font-semibold">
													Email:
												</span>
												<span>janeDoe@gmail.com</span>
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<div className="shadow p-4 rounded-md row-span-2 border w-full">
				<div className="flex items-center justify-between">
					<div className="flex border-b p-2 flex-col gap-4 w-full justify-between">
						<div className="flex items-center justify-between">
							<h1 className="text-2xl uppercase font-semibold">
								Courses
							</h1>
							<NavLink
								to={'/admin/users'}
								className="text-sm text-blue-500"
							>
								View all
							</NavLink>
						</div>
						<div className="flex flex-col gap-2">
							{[1, 2, 3, 4, 5].map((item) => {
								return (
									<div
										key={item}
										className="flex items-center gap-4 border p-2"
									>
										<div className="w-10 h-10 border rounded-full">
											<FontAwesomeIcon
												icon={faGraduationCap}
												size="2x"
											/>
										</div>
										<div className="flex flex-col gap-2">
											<h1 className="text-sm font-medium ">
												Data structures and algorithms
											</h1>
											<p className="text-sm">
												Make a shift to the new way of
												learning
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<div className="shadow">3</div>
			<div className="shadow">3</div>
			<div className="shadow">3</div>
		</div>
	);
}
