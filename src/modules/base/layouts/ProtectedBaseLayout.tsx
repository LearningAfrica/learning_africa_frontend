import { Outlet } from 'react-router-dom';
import BaseLayoutWrapper from '../components/BaseLayoutWrapper';
import BaseHeader from '../components/BaseHeader';
import BaseFooter from '../components/BaseFooter';

export default function ProtectedBaseLayout() {
	return (
		<div>
			<BaseLayoutWrapper>
				<BaseHeader />
				<Outlet />
				<BaseFooter />
			</BaseLayoutWrapper>
		</div>
	);
}
