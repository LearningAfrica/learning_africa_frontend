
function SuperAdminNotification() {
	return (
		<div className="flex flex-col">
			<div className="flex flex-col space-y-5">
				<span> Notification -Choose when and how to be notified</span>
				<span>
					Select push and email notifications you'd like to receive
				</span>
			</div>
			<div className="">
				<div className="flex flex-col">
					<span className="flex flex-col">
						<label className="relative inline-flex items-center cursor-pointer">
							<input
								type="checkbox"
								value=""
								className="sr-only peer:"
								checked
							/>
							<div className="w-11 h-6 bg-primary-pk rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
							<span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
								Subscription
							</span>
						</label>
					</span>
					<span className="mx-3 text-sm font-medium text-gray-400 ">
						Notify me about activity from the profiles I'm
						subscribed to
					</span>
				</div>
				<div className="flex flex-col">
					<span className="flex flex-col">
						<label className="relative inline-flex items-center cursor-pointer">
							<input
								type="checkbox"
								value=""
								className="sr-only peer:"
								checked
							/>
							<div className="w-11 h-6 bg-primary-pk rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
							<span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
								Recommended Courses{' '}
							</span>
						</label>
					</span>
					<span className="mx-3 text-sm font-medium text-gray-400 dark:text-gray-300">
						Notify me about activity from the profiles I'm
						subscribed to
					</span>
				</div>
				<div className="flex flex-col">
					<span className="flex flex-col">
						<label className="relative inline-flex items-center cursor-pointer">
							<input
								type="checkbox"
								value=""
								className="sr-only peer:"
								checked
							/>
							<div className="w-11 h-6 bg-primary-pk rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
							<span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
								ACTIVITY
							</span>
						</label>
					</span>
					<span className="mx-3 text-sm font-medium text-gray-400 dark:text-gray-300">
						Notify me about activity from the profiles I'm
						subscribed to
					</span>
				</div>
			</div>
		</div>
	);
}

export default SuperAdminNotification;
