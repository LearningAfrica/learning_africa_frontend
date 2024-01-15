import React from 'react';

function Privacy() {
	return (
		<div>
			<div className="flex flex-col">
				<div className="flex flex-col space-y-5">
					<span>
						{' '}
						<h1 className="text-2xl font-semibold">
							Privacy Settings
						</h1>
					</span>
					<span>Modify your privacy settings here.</span>
					<span>
						{' '}
						<h1 className="text-xl font-semibold">
							Profile page settings
						</h1>
					</span>
				</div>
				<div className="space-y-6">
					<div className="flex flex-col space-y-4">
						<span className="flex flex-col">
							<label className="relative inline-flex items-center cursor-pointer">
								<input
									type="checkbox"
									value=""
									className="sr-only peer:"
									checked
								/>
								<div className="w-11 h-6 bg-primary rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-primary"></div>
								<span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
									show your profiles on search engines{' '}
								</span>
							</label>
						</span>
						<span className="flex flex-col">
							<label className="relative inline-flex items-center cursor-pointer">
								<input
									type="checkbox"
									value=""
									className="sr-only peer:"
									checked
								/>
								<div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
								<span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
									show your profiles on search engines{' '}
								</span>
							</label>
						</span>
					</div>
				</div>
				<div className='mt-3'>
					<button
						type="submit"
						className="bg-primary text-white py-2 px-4 rounded-full hover:bg-primary focus:outline-none focus:ring focus:border-red-300"
					>
						Save Changes
					</button>
				</div>
			</div>
		</div>
	);
}

export default Privacy;
