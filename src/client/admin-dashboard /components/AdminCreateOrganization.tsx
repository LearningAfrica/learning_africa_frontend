import React, { useState } from 'react';
import { OrganizationType } from '../types';

const users = [
	{
		id: 1,
		username: 'Jane Doe'
	},
	{
		id: 2,
		username: 'John Doe'
	},
	{
		id: 3,
		username: 'Sam Smith'
	}
];

export default function AdminCreateOrganization() {
	// const [loading, setLoading] = useState(false);
	// const params = useParams<{ id: string }>();
	const [formData, setFormData] = useState<OrganizationType>(
		{} as OrganizationType
	);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData(
			(prev) =>
				({
					...prev!,
					[e.target.name]: e.target.value
				} as OrganizationType)
		);
	};
	return (
		<div className="p-4 flex flex-col gap-4">
			<div className="flex items-center flex-col gap-4 justify-between">
				<div>
					<h2 className="text-2xl font-bold">Create Organization</h2>
				</div>
				<form
					action=""
					className="w-full max-w-4xl p-10 shadow-sm border gap-4"
				>
					<div className="flex flex-col gap-6">
						<div className="flex flex-col gap-2">
							<label htmlFor="">Organization Name</label>
							<input
								type="text"
								className="border p-2 rounded"
								placeholder='e.g. "Learning Africa"'
								value={formData?.name}
								onChange={handleInputChange}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="">Organization Admin</label>
							{/* <input
								type="text"
								className="border p-2 rounded"
								value={formData?.admin}
								placeholder='e.g. "John Doe"'
								onChange={handleInputChange}
							/> */}
							<select
								name=""
								id=""
								className="border p-2 rounded"
							>
								<option value="">Select Admin</option>
								{users.map((user) => (
									<option value={user.id} key={user.id}>
										{user.username}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="flex justify-start gap-2 my-4">
						{/* <button
							className="bg-blue-500 text-white px-2 py-1 rounded-full"
							onClick={() => {}}
						>
							Create Organization
						</button> */}
						<button className="p-2 bg-orange-500 text-white rounded-md w-full">
							Create Organization
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}