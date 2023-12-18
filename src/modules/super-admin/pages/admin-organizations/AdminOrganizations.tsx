import React from 'react';
import { OrganizationType } from '../../types';
import { organizations_list } from '../../data/organizations';
import { faEye, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

export default function AdminOrganizations() {
	const [organizations, setOrganizations] = React.useState<
		OrganizationType[]
	>([]);
	React.useEffect(() => {
		// fetch organizations
		setOrganizations(organizations_list.slice(0, 10));
	}, []);
	const navigate = useNavigate();
	return (
		<div className="flex flex-col gap-4">
			<div></div>
			<div>
				<button
					className="bg-blue-500 text-white px-2 py-1 rounded-full"
					onClick={() => {
						navigate('/super-admin/organizations/create');
					}}
				>Create Organization</button>
			</div>
			<div className="max-w-6xl border shadow-sm p-2 ">
				<div className="flex items-center justify-between">
					<div className="flex items-center justify-between">
						<form className="border rounded bg-white">
							<input
								type="text"
								placeholder="Search"
								className="p-2"
							/>
							<button className="px-2 b">Search</button>
						</form>
					</div>
					<div>
						<select>
							<option>10</option>
							<option>20</option>
							<option>30</option>
						</select>
					</div>
				</div>
				<table>
					<thead>
						<tr>
							<th>Organization Name</th>
							<th>Admin</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{organizations.map((organization) => (
							<tr key={organization.id}>
								<td>{organization.name}</td>
								<td>{organization.admin}</td>
								<td>
									<div className='w-full flex gap-2 items-center'>
										<button
											onClick={() => navigate(`/super-admin/organizations/${ organization.id }/view`)} className="px-2 text-neutral-500 bg-neutral-200 rounded-full p-1">
											<FontAwesomeIcon icon={faEye} />
										</button>
										<button 
											onClick={() => navigate(`/super-admin/organizations/${ organization.id }/edit`)}
										className="px-2 text-blue-500 bg-blue-200 rounded-full p-1">
											<FontAwesomeIcon icon={faPencil} />
										</button>
										<button className="px-2 text-red-500 bg-red-200 rounded-full p-1">
											<FontAwesomeIcon icon={faTrash} />
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="flex items-center justify-between">
					<p>Showing 1 to 10 of 100 entries</p>
					<div>
						<button>Previous</button>
						{[1, 2, 3, 4, 5].map((page) => (
							<button
								key={page}
								className="border p-[2px] rounded-full text-xs h-5 w-5 bg-blue-500"
							>
								{page}
							</button>
						))}
						<button>Next</button>
					</div>
				</div>
			</div>
		</div>
	);
}
