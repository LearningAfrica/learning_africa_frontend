import InstructorDashboardSidebar from '../components/InstructorDashboardSidebar'
import InstructorDashboardHeader from '../components/InstructorDashboardHeader'
import InstructorDashboardContent from '../components/InstructorDashboardContent'

export default function InstructorDashboard() {
  return (
	<div className="">
			<InstructorDashboardHeader />
			<div className="flex">
				{/* Sidebar */}
				<InstructorDashboardSidebar />
				{/* Content */}
				<InstructorDashboardContent />
			</div>
		</div>
  )
}
