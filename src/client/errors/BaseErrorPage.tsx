// type Props = {}

import { NavLink } from 'react-router-dom';

// import { useRouteError } from 'react-router-dom';

export default function BaseErrorPage() {
	// const error = useRouteError() as unknown;
	const reload = () => window.location.reload();
	return (
		<div
			className="w-full h-full flex flex-col justify-center items-center"
			style={{ minHeight: 'calc(100vh - 100px)' }}
		>
			<p>Something went wrong. Please try again later.</p>
			<div className="flex gap-4 items-center">
				<button
					onClick={reload}
					className="bg-primary-pk text-white px-4  md:px-8 py-2 md:py-4 rounded-md text-sm md:text-2xl"
				>
					Reload
				</button>
				<NavLink
					to="/"
					className="bg-primary-pk text-white px-4  md:px-8 py-2 md:py-4 rounded-md text-sm md:text-2xl"
				>
					Go to Home
				</NavLink>
			</div>
		</div>
	);
}
