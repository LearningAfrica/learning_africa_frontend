import { faBars, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AdminHeader() {
	return (
		<div className="border border-slate-300 px-4 py-2 gap-4 sticky top-0 rounded grid md:grid-cols-3 bg-white">
			<div className="flex items-center gap-2">
				<FontAwesomeIcon icon={faBars} />

				<h1 className="text-sm font-medium uppercase">Dashboard</h1>
			</div>
			<div className="flex items-center flex-1">
				{/* <form action="" className="flex items-center w-full">
					<input
						type="search"
						name=""
						id=""
						placeholder="Search..."
						className="border rounded p-2 flex-1 border-slate-500 outline-none"
					/>
				</form> */}
			</div>
			<div className="flex justify-end items-center gap-4">
				<div className='flex items-center'>
					<FontAwesomeIcon icon={faBell} size='1x' />
					{/* <span className='absolute -top-2 border border-black p-2 rounded-full h-4 w-4 items-center justify-center'>2</span> */}
				</div>
				<div>
					<FontAwesomeIcon icon={faUser} size='1x'/>
				</div>
			</div>
		</div>
	);
}
