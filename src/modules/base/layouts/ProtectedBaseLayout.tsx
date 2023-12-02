import { Outlet } from 'react-router-dom';
import BaseLayoutWrapper from '../components/BaseLayoutWrapper';

export default function ProtectedBaseLayout() {
	return (
		<div>
			<BaseLayoutWrapper>
				<Outlet />
			</BaseLayoutWrapper>
		</div>
	);
}
