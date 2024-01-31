import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CourseCard from './course-category/CourseCard';
const populacourses = [
	{
		name: 'Marketing',
		courses: '25+ Courses',
		href: '/admin-dashboard/courses',
		title: 'M'
	},
	{
		name: 'IT & Software',
		courses: '25+ Courses',
		href: '/admin-dashboard/courses',
		title: 'I'
	},
	{
		name: 'Design',
		courses: '25+ Courses',
		href: '/admin-dashboard/courses',
		title: 'D'
	},
	{
		name: 'Marketing',
		courses: '25+ Courses',
		href: '/admin-dashboard/courses',
		title: 'M'
	},
	{
		name: 'IT & Software',
		courses: '25+ Courses',
		href: '/admin-dashboard/courses',
		title: 'I'
	},
	{
		name: 'Design',
		courses: '25+ Courses',
		href: '/admin-dashboard/courses',
		title: 'D'
	}
];
function AdminDashbaordCoursesCategory() {
	return (
		<div className="p-2">
			<div className="m-3">
				<h2>Popular CoursesCategory</h2>
			</div>
			<div className="grid grid-cols-4 place-items-center mt-6 gap-2">
				{populacourses.map(({ name, courses, href, title }) => (
					<CourseCard>
						<div className="flex justify-start shadow bg-orange-400  border-gray-300 w-8 h-8">
							<h2 className="text-center m-auto">{title}</h2>
						</div>
						<div className="flex flex-col space-y-2 justify-center">
							<h5>{name}</h5>
							<p className="text-[12px] text-gray-500">
								{courses}
							</p>
						</div>
						<div className="flex flex-row justify-end items-center space-x-3">
							<a
								href={href}
								className="rounded-full bg-primary-pk px-4 py-2 text-white"
							>
								View
							</a>
							<button className="rounded-full  text-neutral-900">
								<FontAwesomeIcon icon={faEllipsis} />
							</button>
						</div>
					</CourseCard>
				))}
			</div>
		</div>
	);
}

export default AdminDashbaordCoursesCategory;
