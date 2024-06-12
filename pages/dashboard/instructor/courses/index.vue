<script lang="ts" setup>
import type { ColumnDef } from '@tanstack/vue-table';
import { Checkbox } from '~/components/ui/checkbox';
import type { TableColumnType } from '~/data/table-data-types';
import type { CoursesResponse } from '~/types/courses';
import DataTableColumnHeader from "@/components/data/table/column/header.vue";
import DataTableRowActions from "@/components/data/table/row/actions.vue";
import moment from 'moment';
definePageMeta({
	layout: "instructor-layout",
	middleware: 'instructor-auth'
});

const course =
	useCourses()
onMounted(() => {
	course.fetchData()
})
const courseColumns: ColumnDef<CoursesResponse>[] = [
	{
		id: "select",
		header: ({ table }) =>
			h(Checkbox, {
				checked:
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && "indeterminate"),
				"onUpdate:checked": (value) =>
					table.toggleAllPageRowsSelected(!!value),
				ariaLabel: "Select all",
				class: "translate-y-0.5"
			}),
		cell: ({ row }) =>
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
		cell: ({ row }) => h("div", {}, row.index + 1)
	},
	{
		id: "course_image_url",
		header: 'Image',
		accessorKey: "course_image_url",
		
		cell: ({ row }) =>h('img', {
			src: row.getValue('course_image_url'),
			alt: row.getValue('course_image_url'),
			class:'rounded-md h-20 w-20 object-cover',
			
		},)
		
		,
		enableSorting: false,
		enableHiding: false,
	},
	{
		id: "title",
		header: ({ column }) =>
			h(DataTableColumnHeader, {
				column: column as TableColumnType,
				title: "Title"
			}),
		cell: ({ row }) => h("div", { class: "" }, row.getValue("title")),
		enableSorting: true,
		enableHiding: false,
		accessorKey: "title"
	},{
		id: "instructor",
		header: "instructor",
		cell: ({ row }) => h("div", { class: "" }, row.original.instructor.first_name+' '+row.original.instructor.last_name),
		enableSorting: true,
		enableHiding: true,
		// accessorKey: "title"
	},

	{
		id: "created",
		header: ({ column }) =>
			h(DataTableColumnHeader, {
				column: column as TableColumnType,
				title: "Date Created"
			}),
		cell: ({ row }) =>
			h(
				"div",
				{ class: "" },
				moment(row.getValue("")).format("LLL")
			),
		enableSorting: true,
		enableHiding: true,
		accessorKey: "created"
	},
	{
		id: "updated",
		header: ({ column }) =>
			h(DataTableColumnHeader, {
				column: column as TableColumnType,
				title: "Date Updated"
			}),
		cell: ({ row }) =>
			h(
				"div",
				{ class: "" },
				moment(row.getValue("updated")).format("LLL")
			),
		enableSorting: true,
		enableHiding: true,
		accessorKey: "updated"
	},
	{
		id: "actions",
		cell: ({ row }) => h(DataTableRowActions, { row: row as TableRowType })
	}
];
</script>

<template>
	<div class="py-4 flex flex-col gap-4">
		<partial-loader v-if="course.is_loading.value" />
		<div class="p-4 flex justify-between border">
			<div>
				<h1>Courses</h1>
			</div>
			<div>
				<nuxt-link :to="{ name: 'dashboard-instructor-courses-create' }"
					class="bg-primary text-white p-2 rounded-lg w-full mb-4">Add course</nuxt-link>
			</div>
		</div>
		<div>
			<data-table v-if="course.data.value.data" :columns="courseColumns" :search_label="'Search category...'"
				:search-field="'title'" :data="course.data.value.data ?? []"></data-table>
		</div>

	</div>
</template>

<style scoped></style>
