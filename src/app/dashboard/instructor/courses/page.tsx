"use client"
import useViewPort from '@/hooks/use-viewport';
import { LucideBook, Link } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import React from 'react'
import InstructorCourseItemsWrapper from '../_components/instructor-course-items-wrapper';
import { CourseTabs } from '../page';

function InstructorCoursesPage() {
  //   const router = useRouter();
  const searchParams = useSearchParams();

  const tab = searchParams.get("tab") as CourseTabs;
  // const tab = searchParam.get('tab') as CourseTabs;
  const { isDesktop, isTablet } = useViewPort();
  return (
    // <Suspense>
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
          <Link
            href={"/dashboard/instructor/courses/create"}
            className="bg-primary-pk  rounded-full py-1 px-4 sm:py-2"
          >
            Create Course
          </Link>
        </div>
      </div>

      <InstructorCourseItemsWrapper tab={tab as CourseTabs} />
    </div>
  );
}

export default InstructorCoursesPage