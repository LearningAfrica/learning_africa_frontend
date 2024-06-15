import type { Column, Row } from "@tanstack/vue-table";
import type { CourseCategoryType, TaskType } from ".";
import type { CoursesResponse } from "~/types/courses";

export type TableDataType = CourseCategoryType | TaskType|CoursesResponse

export type TableColumnType<T> = Column<T>;
export type TableRowType<T> = Row<T>;
