import { NavLink } from "react-router-dom";

function AdminDashBoardOrganization() {
	return (
		<div className="flex flex-col gap-4 py-4 px-4">
			<div className="p-4 bg-white rounded-full flex justify-between">
				<h2 className="text-2xl font-bold">Organizations</h2>
				<div>
					<NavLink to={'/admin-dashboard/organization/create'} className="bg-primary text-white px-4 py-2 rounded-full">
						+ Create Organization
					</NavLink>
				</div>
			</div>
			<div className="p-4 grid gap-4 grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
				{/* Has only name and thumbnail */}
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
					<div
						key={index}
						className="flex flex-col gap-4 p-2 shadow bg-white"
					>
						<div className="flex items-center gap-4">
							<div className="w-20 h-20 bg-gray-300 rounded-full"></div>
							<div className="flex flex-col gap-2">
								<h2 className="text-2xl font-bold">
									Learning Africa
								</h2>
								<p>Created by: John Doe</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default AdminDashBoardOrganization;
