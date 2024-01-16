import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function StudentDashboardNotification() {
	return (
		<div className='p-2'>
			<div className="mt-5 flex flex-col  justify-start">
				<div className="flex space-x-5 text-center justify-start p-2 ">
					<div className="text-gray-600 ">
						<FontAwesomeIcon icon={faBell} />
					</div>
					<div className="text-2xl font-semibold">Notification</div>
				</div>
				<div className="flex justify-start mt-3">
					<button className="rounded-full px-4 py-2 bg-red-600 text-white text-[16px]">
						Notification Setting
					</button>
				</div>
			</div>
			<div className="flex items-center justify-start mt-3">
				<div className="w-full md:w-1/2 lg:w-1/3">
					<div className="flex flex-col space-y-4">
						<div className="w-full flex justify-between py-6 px-4 bg-white/60 rounded-lg divide-x-4">
							<div className="flex items-center space-x-4">
								<img
									src="https://avatars.githubusercontent.com/u/150797856?s=200&v=4"
									className="rounded-full h-14 w-14"
									alt=""
								/>
								<div className="flex flex-col space-y-1">
									<span className="font-bold">
										Leonard Krashner
									</span>
									<span className="text-sm">
										Like Your Comment On Video How to create
										sidebar menu.{' '}
									</span>
									<div className="flex-none px-4 py-2 text-stone-600 text-xs md:text-sm">
										17m ago
									</div>
								</div>
							</div>
						</div>

						<div className="flex justify-between py-6 px-4 bg-white/60 rounded-lg">
							<div className="flex items-center space-x-4">
								<img
									src="https://avatars.githubusercontent.com/u/150797856?s=200&v=4"
									className="rounded-full h-14 w-14"
									alt=""
								/>
								<div className="flex flex-col space-y-1">
									<span className="font-bold">Yao</span>
									<span className="text-sm">
										Like Your Comment On Video How to create
										sidebar menu.{' '}
									</span>
									<div className="flex-none px-4 py-2 text-stone-600 text-xs md:text-sm">
										40m ago
									</div>
								</div>
							</div>
						</div>

						<div className="flex justify-between py-6 px-4 bg-white/60 rounded-lg">
							<div className="flex items-center space-x-4">
								<img
									src="https://avatars.githubusercontent.com/u/150797856?s=200&v=4"
									className="rounded-full h-14 w-14"
									alt=""
								/>
								<div className="flex flex-col space-y-1">
									<span className="font-bold">Lesine</span>
									<span className="text-sm">
										Like Your Comment On Video How to create
										sidebar menu.
									</span>
									<div className="flex-none px-4 py-2 text-stone-600 text-xs md:text-sm">
										50m ago
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StudentDashboardNotification;
