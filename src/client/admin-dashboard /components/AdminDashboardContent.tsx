import { Outlet } from 'react-router-dom';

export default function AdminDashboardContent() {
	return (
		<div
			style={{
				width: 'calc(100vw - 64px)',
				height: 'calc(100vh - 64px)'
			}}
			className="overflow-y-scroll bg-neutral-100"
		>
			<Outlet />
		</div>
	);
}
