import type {Column, ColumnDef} from "@tanstack/vue-table";
import type {CourseCategoryType} from "../schemas/course-categories-schema";
import {Checkbox} from "~/components/ui/checkbox";
import DataTableColumnHeader from "@/components/data/table/column/header.vue";
import DataTableRowActions from "@/components/data/table/row/actions.vue";
import moment from "moment";
import type {
	TableColumnType,
	TableDataType,
	TableRowType
} from "../table-data-types";

export const courseCategoriesColumns: ColumnDef<CourseCategoryType>[] = [
	{
		id: "select",
		header: ({table}) =>
			h(Checkbox, {
				checked:
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && "indeterminate"),
				"onUpdate:checked": (value) =>
					table.toggleAllPageRowsSelected(!!value),
				ariaLabel: "Select all",
				class: "translate-y-0.5"
			}),
		cell: ({row}) =>
			h(Checkbox, {
				checked: row.getIsSelected(),
				"onUpdate:checked": (value) => row.toggleSelected(!!value),
				ariaLabel: "Select row",
				class: "translate-y-0.5"
			}),
		enableSorting: false,
		enableHiding: false
	},
	{
		id: "index",
		header: "#",
		cell: ({row}) => h("div", {}, row.index + 1)
	},
	
	{
		id: "title",
		header: ({column}) =>
			h(DataTableColumnHeader, {
				column: column as TableColumnType,
				title: "Title"
			}),
		cell: ({row}) => h("div", {class: ""}, row.getValue("title")),
		enableSorting: true,
		enableHiding: false,
		accessorKey: "title"
	},

	{
		id: "created",
		header: ({column}) =>
			h(DataTableColumnHeader, {
				column: column as TableColumnType,
				title: "Date Created"
			}),
		cell: ({row}) =>
			h(
				"div",
				{class: ""},
				moment(row.getValue("created")).format("LLL")
			),
		enableSorting: true,
		enableHiding: true,
		accessorKey: "created"
	},
	{
		id: "updated",
		header: ({column}) =>
			h(DataTableColumnHeader, {
				column: column as TableColumnType,
				title: "Date Updated"
			}),
		cell: ({row}) =>
			h(
				"div",
				{class: ""},
				moment(row.getValue("updated")).format("LLL")
			),
		enableSorting: true,
		enableHiding: true,
		accessorKey: "updated"
	},
	{
		id: "actions",
		cell: ({row}) => h(DataTableRowActions, {row: row as TableRowType})
	}
];
