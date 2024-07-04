<script lang="ts" setup>
import type { ColumnDef, ColumnFiltersState, SortingState, VisibilityState } from '@tanstack/vue-table';
import { Checkbox } from '~/components/ui/checkbox';
import type { TableColumnType, TableRowType } from '~/data/table-data-types';
import type { CoursesResponse } from '~/types/courses';
import DataTableColumnHeader from "@/components/data/table/column/header.vue";
import DataTableRowActions from "@/components/dashboard/course/table/column/actions.vue"
import moment from 'moment';
definePageMeta({
	layout: "instructor-layout",
	middleware: 'instructor-auth'
});
const tableFilters = ref<ColumnFiltersState>([])
const columnVisibility = ref<VisibilityState>({})
const selection = ref({})
const sorting = ref<SortingState>([])

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
		accessorKey: "title",
		header: ({ column }) =>
			h(DataTableColumnHeader, {
				column,
				title: "Title"
			}),
		cell: ({ row }) => h("div", { class: "" }, row.getValue("title")),
		enableSorting: true,
		enableHiding: false,
	},
	{
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
				column: column,
				title: "Date Created"
			}),
		cell: ({ row }) =>
			h(
				"div",
				{ class: "" },
				moment(row.getValue("created")).format("LL")
			),
		enableSorting: true,
		enableHiding: true,
		accessorKey: "created"
	},
	{
		id: "updated",
		header: ({ column }) =>
			h(DataTableColumnHeader, {
				column: column ,
				title: "Date Updated"
			}),
		cell: ({ row }) =>
			h(
				"div",
				{ class: "" },
				moment(row.getValue("updated")).format("LL")
			),
		enableSorting: true,
		enableHiding: true,
		accessorKey: "updated"
	},
	{
		id: "actions",
		cell: ({ row }) => h(DataTableRowActions, { row: row })
	}
];
</script>

<template>
	<div class="py-4 flex flex-col gap-4">
		<partial-loader v-if="course && course.is_loading.value" />
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
			<data-table v-if="course.data.value.data" 
			:columns="courseColumns" 
			:search_label="'Search category...'"
			:search_field="'title'"
			:filters="toRef(tableFilters)"
			:selection="toRef(selection)"
			:sorting="toRef(sorting)"
			:visibility="toRef(columnVisibility)"
			
			:data="course.data.value.data ?? []"></data-table>
		</div>

	</div>
</template>

<style scoped></style>
