// type Props = {}

import { NavLink } from 'react-router-dom';

// import { useRouteError } from 'react-router-dom';

export default function BaseErrorPage() {
	// const error = useRouteError() as unknown;
	const reload = () => window.location.reload();
	return (
		<div
			className="w-full h-full flex flex-col gap-8 justify-center items-center"
			style={{ minHeight: 'calc(100vh - 100px)' }}
		>
			<p className="md:text-xl font-bold text-center text-gray-500 text-lg">
				Something went wrong. <br />
				Please try again later.
			</p>
			<div className="flex gap-4 items-center">
				<button
					onClick={reload}
					className="bg-primary-pk text-white px-2  md:px-4 py-2 rounded-md text-sm md:text-xl"
				>
					Reload
				</button>
				<NavLink
					to="/"
					className="bg-primary-pk text-white px-4  md:px-8 py-2  rounded-md text-sm md:text-xl"
				>
					Home
				</NavLink>
			</div>
		</div>
	);
}
