import type { Column, Row } from "@tanstack/vue-table";
import type { CourseCategoryType, TaskType } from ".";

export type TableDataType = CourseCategoryType | TaskType;

export type TableColumnType = Column<TableDataType>;
export type TableRowType = Row<TableDataType>;
