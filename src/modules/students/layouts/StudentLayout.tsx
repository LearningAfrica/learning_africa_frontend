// type Props = {}

import { Outlet } from 'react-router-dom';
import StudentWrapper from '../components/StudentWrapper';

export default function StudentLayout() {
	return (
		<div>
			<StudentWrapper>
				<Outlet />
			</StudentWrapper>
		</div>
	);
}
