// type Props = {}

import { Outlet } from 'react-router-dom';
import InstructorWrapper from '../components/InstructorWrapper';

export default function InstructorLayout() {
	return (
		<div>
			<InstructorWrapper>
				<Outlet />
			</InstructorWrapper>
		</div>
	);
}
