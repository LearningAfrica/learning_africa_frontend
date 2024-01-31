const instructors = [
	{
		name: 'Learning Africa',
		logo: '',
		courses: '5 Marketing Courses',
		contact: '07345678899'
	},
	{
		name: 'Learning Africa',
		logo: '',
		courses: '5, IT Courses',
		contact: '07345678899'
	},
	{
		name: 'Learning Africa',
		logo: '',
		courses: '5, Design Courses',
		contact: '07345678899'
	},
	{
		name: 'Learning Africa',
		logo: '',
		courses: '5, Marketing Courses',
		contact: '07345678899'
	},
	{
		name: 'Learning Africa',
		logo: '',
		courses: ' 5, IT Courses',
		contact: '07345678899'
	},
	{
		name: 'Learning Africa',
		logo: '',
		courses: ' 5, SOftware Courses',
		contact: '07345678899'
	},
	{
		name: 'Learning Africa',
		logo: '',
		courses: '7, AI Courses',
		contact: '07345678899'
	},
	{
		name: 'Learning Africa',
		logo: '',
		courses: '10, IT Courses',
		contact: '07345678899'
	}
];
function AdminDashboardOrganization() {
	return (
		<div className="p-2">
			<h5 className="text-start text-2xl"> Organization</h5>
			<div className="grid grid-cols-4 place-items-center mt-6 gap-2">
				{instructors.map(({ name, logo, contact }) => (
					<div className="bg-white w-[300px] h-[100px] rounded-md shadow-md flex flex-col">
						<div className="flex flex-row space-x-6 m-auto">
							<div className="flex justify-start shadow bg-orange-400  border-gray-300 p-1 w-8 h-8">
								<img
									src={logo}
									className="text-center rounded-full w-8 h-8 m-auto"
								/>
							</div>
							<div className="flex flex-col space-y-2 justify-center">
								<h5>{name}</h5>
								<p className="text-[12px] text-gray-500">
									{contact}
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

export default AdminDashboardOrganization;
