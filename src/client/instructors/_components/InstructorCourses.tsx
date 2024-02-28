import InstructorCourseItemsWrapper from './InstructorCourseItemsWrapper';
import { useLocation } from 'react-router-dom';
import useParamHook from '@/lib/hooks/useParamHook';
import { LucideBook } from 'lucide-react';
import useViewPort from '@/lib/hooks/useViewPort';

export type CourseTabs =
	| 'my-courses'
	| 'purchased-courses'
	| 'upcoming-courses'
	| 'drafts';
export default function InstructorCourses() {
	const location = useLocation();
	const {
		searchParam: { tab }
	} = useParamHook({ location });
	// const tab = searchParam.get('tab') as CourseTabs;
	const { isDesktop, isTablet } = useViewPort();
	return (
		<div className="p-2 flex flex-col gap-4">
			<div className="px-8 py-4 bg-white shadow rounded-md flex justify-between gap-4">
				<div className="flex items-center">
					{/* <FontAwesomeIcon icon={faBook} className="mr-2 text-2xl" />
					 */}
					<LucideBook
						className="mr-2 text-sm"
						size={isDesktop ? 24 : isTablet ? 20 : 16}
					/>
					<h1 className="text-sm sm:text-2xl">Courses</h1>
				</div>
				<div>
					<button className="bg-primary-pk text-white rounded-full py-1 px-4 sm:py-2">
						Create Course
					</button>
				</div>
			</div>

			<InstructorCourseItemsWrapper tab={tab as CourseTabs} />
		</div>
	);
}
