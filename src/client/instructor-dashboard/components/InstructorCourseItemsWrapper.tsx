import { cn } from '@/lib/utils/cn';
import {
	faBook,
	faDownload,
	faUpload
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useParams } from 'react-router-dom';
import { CourseTabs } from './InstructorCourses';
const courseTabs = [
	{
		icon: faBook,
		title: 'My Courses',
		tabref: 'my-courses',
		href: '/instructor-dashboard/courses?tab=my-courses'
	},
	{
		icon: faDownload,
		title: 'Purchased courses',
		tabref: 'purchased-courses',
		href: '/instructor-dashboard/courses?tab=purchased-courses'
	},
	{
		// Upcoming
		icon: faUpload,
		title: 'Upcoming courses',
		tabref: 'upcoming-courses',
		href: '/instructor-dashboard/courses?tab=upcoming-courses'
	},
	{
		// drafts
		icon: faDownload,
		title: 'Drafts',
		tabref: 'drafts',
		href: '/instructor-dashboard/courses?tab=drafts'
	}
];



type Props = {
	tab: CourseTabs;
};
export default function InstructorCourseItemsWrapper({ tab }: Props) {
	const param = useParams();
	console.log({ param });

	return (
		<div>
			<div className="flex items-center gap-1 justify-stretch bg-white shadow">
				{courseTabs.map(({ icon, title, href, tabref }) => (
					<NavLink
						to={href}
						className={cn(
							`flex flex-1 items-center gap-1 hover:bg-primary hover:text-white transition-all ease-linear duration-75 px-4 p-4 rounded`,
							{
								'bg-primary text-white': tab === tabref
							}
						)}
					>
						<FontAwesomeIcon icon={icon} className="text-xl" />
						<span className="text-xl flex-1">{title}</span>
					</NavLink>
				))}
			</div>
			<div className='py-4'>
				{tab === 'my-courses' ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
						{[
							{
								id: 1,
								title: 'Introduction to HTML',
								description:
									'Learn the basics of HTML and how to create a website',
								imageUrl:
									`https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww`
							},
							{
								id: 2,
								title: 'Introduction to CSS',
								description:
									'Learn the basics of CSS and how to style your website',
								imageUrl:
									`https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww`
							},
							{
								id: 3,
								title: 'Introduction to JavaScript',
								description:
									'Learn the basics of JavaScript and how to add interactivity to your website',
								imageUrl:
									`https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww`
							}
						].map((course) => (
							<div
								key={course.id}
								className="bg-white p-4 shadow px-2 rounded-md flex flex-col justify-between"
							>
								<div
									className="flex justify-between items-center"
									style={{ marginBottom: '-1rem' }}
								>
									<div className="w-32 h-32 bg-gray-200 rounded-md">
										<img
											src={course.imageUrl}
											alt="course"
											className="w-full h-full object-cover rounded-md"
										/>
									</div>
									<div className="flex flex-col gap-2">
										<div className="text-lg font-bold">
											{course.title}
										</div>
										<div className="text-gray-500">
											{course.description}
										</div>
									</div>
								</div>
								<div className="flex justify-between items-center">
									<div className="text-lg font-bold text-gray-500">
										Students
									</div>
									<div className="text-lg font-bold text-gray-500">
										10
									</div>
								</div>
								<div className="flex justify-between items-center">
									<div className="text-lg font-bold text-gray-500">
										Reviews
									</div>
									<div className="text-lg font-bold text-gray-500">
										10
									</div>
								</div>
								<div className="flex justify-between items-center">
									<div className="text-lg font-bold text-gray-500">
										Last updated
									</div>
									<div className="text-lg font-bold text-gray-500">
										10
									</div>
								</div>
							</div>
						))}
					</div>
				) : tab === 'purchased-courses' ? (
					<>Some</>
				) : (
					<>Some 2</>
				)}
			</div>
		</div>
	);
}
