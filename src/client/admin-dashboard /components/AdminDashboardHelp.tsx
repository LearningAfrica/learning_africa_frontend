import HelpTab from './admin-help/HelpTab';
function AdminDashboardHelp() {
	return (
		<div className="">
			<div className="bg-neutral-800 w-full flex flex-col justify-center items-center space-y-4 h-[300px]">
				<p className="text-white text-center text-2xl">
					How may we help
				</p>
				<div className="w-[60%] mb-4 flex justify-center items-center">
					<input
						type="search"
						id="search"
						placeholder="search for your solutions"
						className="w-full border rounded-full py-2 px-3 focus:outline-none focus:ring focus:border-orange-300"
					/>
				</div>
			</div>
			<HelpTab />
		</div>
	);
}

export default AdminDashboardHelp;
