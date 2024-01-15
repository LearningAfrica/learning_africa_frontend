import React from 'react';

function CloseAccount() {
	return (
		<div>
			<h1 className="text-xl font-semibold">Close Account</h1>
			<div>
				<span className="text-[12px] text-gray-600 font-bold">
					Warning: {''}
				</span>
				<small>
					If you close your account, you will be unsubscribed from all
					your 5 courses, and will lose access forever.
				</small>
			</div>
			<div className="space-y-3">
				<div className="mb-4">
					<input
						type="password"
						id="password"
						className="w-full border rounded-full py-2 px-3 focus:outline-none focus:ring focus:border-orange-300"
						placeholder="password"
					/>
				</div>
				<div className="mt-3">
					<button
						type="submit"
						className="bg-primary text-white py-2 px-4 rounded-full hover:bg-orange-400 focus:outline-none focus:ring focus:border-orange-300"
					>
						Close Account
					</button>s
				</div>
			</div>
		</div>
	);
}

export default CloseAccount;
