const instructors = [
	{
		name: 'Felix Orinda',
		avatar: '',
		courses: '5 Marketing Courses'
	},
	{
		name: 'Felix Orinda',
		avatar: '',
		courses: '5, IT Courses'
	},
	{
		name: 'Felix Orinda',
		avatar: '',
		courses: '5, Design Courses'
	},
	{
		name: 'Felix Orinda',
		avatar: '',
		courses: '5, Marketing Courses'
	},
	{
		name: 'Felix Orinda',
		avatar: '',
		courses: ' 5, IT Courses'
	},
	{
		name: 'Felix Orinda',
		avatar: '',
		courses: ' 5, SOftware Courses'
	},
	{
		name: 'Felix Orinda',
		avatar: '',
		courses: '7, AI Courses'
	},
	{
		name: 'Felix Orinda',
		avatar: '',
		courses: '10, IT Courses'
	}
];
function AdminDashboardInstructors() {
	return (
		<div>
			AdminDashboardInstructors
			<div className="grid grid-cols-4 place-items-center mt-6 gap-2">
				{instructors.map(({ name, avatar, courses }) => (
					<div className="bg-white w-[300px] h-[100px] rounded-md shadow-md flex flex-col">
						<div className="flex flex-row space-x-6 m-auto">
							<div className="flex justify-start shadow bg-orange-400  border-gray-300 p-1 w-8 h-8">
								<img
									src={avatar}
									className="text-center rounded-full w-8 h-8 m-auto"
								/>
							</div>
							<div className="flex flex-col space-y-2 justify-center">
								<h5>{name}</h5>
								<p className="text-[12px] text-gray-500">
									{courses}
								</p>
							</div>
							<div className="flex flex-row justify-end items-center space-x-3">
								<a
									href={'/admin-dashboard/courses'}
									className="rounded-full bg-primary-pk px-4 py-2 text-white"
								>
									Courses
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default AdminDashboardInstructors;
