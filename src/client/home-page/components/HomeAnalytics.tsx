import {
	faBook,
	faChalkboardTeacher,
	faGlobeAfrica,
	faGraduationCap
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const analytics = [
	{
		id: '1',
		icon: faBook,
		name: 'Total Courses',
		value: 1000
	},
	{
		id: '2',
		icon: faGraduationCap,
		name: 'Certifications',
		value: 500
	},
	{
		id: '3',
		icon: faGlobeAfrica,
		name: 'Countries',
		value: 50
	},
	{
		id: '4',
		icon: faChalkboardTeacher,
		name: 'Tutors',
		value: 200
	}
];

const HomeAnalytics = () => {
	// Generate random values for analytics

	return (
		<div className="bg-gray-100 p-6">
			<div className='max-w-7xl mx-auto py-10'>
				{/* <h2 className="text-2xl font-bold mb-4">Analytics</h2> */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					{
						// Render analytics
						analytics.map((analytic) => (
							<div
								key={analytic.id}
								className="bg-white p-4 flex gap-4 items-center flex-col rounded-md shadow-md"
							>
								<div className="bg-primary-pk p-4 rounded-full">
									<FontAwesomeIcon
										icon={analytic.icon}
										className="text-white text-2xl"
										aria-hidden="true"
									/>
								</div>
								<div>
									<div className="text-2xl font-bold">
										{analytic.value}k+
									</div>
									<div className="text-gray-500">
										{analytic.name}
									</div>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</div>
	);
};

export default HomeAnalytics;
