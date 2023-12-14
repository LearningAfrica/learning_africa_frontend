// type Props = {}

import { Outlet } from 'react-router-dom';
import AdminWrapper from '../components/AdminWrapper';

export default function AdminLayout() {
	return (
		<div>
			<AdminWrapper>
				<Outlet />
			</AdminWrapper>
		</div>
	);
}
