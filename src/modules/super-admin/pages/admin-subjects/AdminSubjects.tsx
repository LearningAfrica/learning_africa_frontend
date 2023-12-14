import AdminSubjectsDataTable from './components/AdminSubjectsDataTable';
import AdminSubjectsQuickActionWithTitle from './components/AdminSubjectsQuickActionWithTitle';

export default function AdminSubjects() {
	return (
		<div>
			<AdminSubjectsQuickActionWithTitle />
			<AdminSubjectsDataTable />
		</div>
	);
}
