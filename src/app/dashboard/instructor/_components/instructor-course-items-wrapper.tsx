"use client";
import useViewPort from "@/hooks/use-viewport";
import { cn } from "@/lib/utils";
import {
  LucideBook,
  LucideDollarSign,
  LucideDownloadCloud,
  LucideIcon,
  LucideUploadCloud,
} from "lucide-react";
import Link from "next/link";
import { CourseTabs } from "../_courses/page";
import Image from "next/image";
import { Suspense } from "react";

type TabItem = {
  Icon: LucideIcon;
  title: string;
  tabRef: string;
  href: string;
};
const courseTabs: TabItem[] = [
  {
    Icon: LucideBook,
    title: "All",
    tabRef: "my-courses",
    href: "/dashboard/instructor/courses?tab=my-courses",
  },
  {
    Icon: LucideDollarSign,
    title: "Purchased",
    tabRef: "purchased-courses",
    href: "/dashboard/instructor/courses?tab=purchased-courses",
  },
  {
    // Upcoming
    Icon: LucideUploadCloud,
    title: "Upcoming",
    tabRef: "upcoming-courses",
    href: "/dashboard/instructor/courses?tab=upcoming-courses",
  },
  {
    // drafts
    Icon: LucideDownloadCloud,
    title: "Drafts",
    tabRef: "drafts",
    href: "/dashboard/instructor/courses?tab=drafts",
  },
];

const courses = [
  {
    id: "1",
    title: "Introduction to Python",
    description: "Learn Python from scratch",
    imageUrl: "https://source.unsplash.com/300x200/?python",
  },
  {
    id: "2",
    title: "Introduction to React",
    description: "Learn React from scratch",
    imageUrl: "https://source.unsplash.com/300x200/?react",
  },
  {
    id: "3",
    title: "Introduction to Node",
    description: "Learn Node from scratch",
    imageUrl: "https://source.unsplash.com/300x200/?node",
  },
  {
    id: "4",
    title: "Introduction to Express",
    description: "Learn Express from scratch",
    imageUrl: "https://source.unsplash.com/300x200/?express",
  },
  {
    id: "5",
    title: "Introduction to MongoDB",
    description: "Learn MongoDB from scratch",
    imageUrl: "https://source.unsplash.com/300x200/?mongodb",
  },
];

type Props = {
  tab: CourseTabs;
};

export default function InstructorCourseItemsWrapper({ tab }: Props) {
  const { isDesktop, isTablet } = useViewPort();

  return (
    <Suspense>
      <div className="bg-white p-2">
        <div className="flex items-center gap-1 justify-stretch bg-white shadow">
          {courseTabs.map(({ Icon, title, href, tabRef }) => (
            <Link
              href={href}
              key={title}
              className={cn(
                `flex flex-1 items-center gap-1 hover:bg-primary-pk  transition-all ease-linear duration-75 px-4 p-2 rounded`,
                {
                  "bg-primary-pk text-black border-b-2 rounded-none border-black":
                    tab === tabRef,
                }
              )}
            >
              <Icon
                className="text-sm"
                size={isDesktop ? 24 : isTablet ? 20 : 16}
              />
              <span className="text-sm flex-1">{title}</span>
            </Link>
          ))}
        </div>
        <div className="py-4 ">
          {
            <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {courses.map((course) => (
                <div key={course.id} className="flex flex-col gap-2 border">
                  <div className="">
                    <div className="w-full">
                      <Image
                        width={300}
                        height={200}
                        src={course.imageUrl}
                        alt="course"
                        className="w-full h-full object-cover rounded-md bg-slate-200"
                      />
                    </div>
                    <div className="text-left flex flex-col gap-2 p-2">
                      <div className="text-lg font-bold">{course.title}</div>
                      <div className="text-gray-500 text-ellipsis">
                        {course.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
        </div>
      </div>
    </Suspense>
  );
}

// const InstructorCourseItem = () => {
