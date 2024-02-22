import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InstructorCourseItemsWrapper from './InstructorCourseItemsWrapper';
import { useLocation } from 'react-router-dom';
import useParamHook from '@/lib/hooks/useParamHook';

export type CourseTabs =
	| 'my-courses'
	| 'purchased-courses'
	| 'upcoming-courses'
	| 'drafts';
export default function InstructorCourses() {
	const location = useLocation();
	// const searchParam = new URLSearchParams(location.search)
	// const tab = searchParam.get('tab') as CourseTabs
	const {
		searchParam: { tab }
	} = useParamHook({ location });
	// const tab = searchParam.get('tab') as CourseTabs;

	return (
		<div className="p-4 flex flex-col gap-4">
			<div className="px-4 flex items-center gap-2">
				<FontAwesomeIcon icon={faBook} className="mr-2" />
				<span>Courses</span>
			</div>
			<div className="px-8 py-4 bg-white shadow rounded-md flex justify-between gap-4">
				<div className="flex items-center">
					<FontAwesomeIcon icon={faBook} className="mr-2 text-2xl" />
					<h1 className="text-2xl">Jump into course creation</h1>
				</div>
				<div>
					<button className="bg-primary-pk text-white rounded-full px-4 py-2">
						Create Course
					</button>
				</div>
			</div>
			
			<InstructorCourseItemsWrapper tab={tab as CourseTabs} />
		</div>
	);
}
