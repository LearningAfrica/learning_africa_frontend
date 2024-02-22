import MaxWidthWrapper from './MaxWidthWrapper';

export default function DashboardNotFoundPage() {
	return (
		<MaxWidthWrapper className="h-full p-2">
			<div className="flex items-center justify-center h-full w-full text-gray-500 bg-stone-100  text-center min-h-screen">
				<p id="zero-state">
					<h1 className="text-3xl font-bold">404</h1>
					<h2 className="text-2xl font-bold">Page Not Found</h2>
					<br />
				</p>
			</div>
		</MaxWidthWrapper>
	);
}
