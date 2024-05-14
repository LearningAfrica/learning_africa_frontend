<script setup lang="ts">
import type {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	VisibilityState,
} from '@tanstack/vue-table'
import {
	FlexRender,
	getCoreRowModel,
	getFacetedRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useVueTable,
} from '@tanstack/vue-table'
import { ref } from 'vue'
// import type { Task } from '../data/schema'
import type { TableDataType } from '~/data/table-data-types'
import type { DTable } from '~/types/data-table';

import type { Updater } from "@tanstack/vue-table";
import type { Ref } from "vue";
 function valueUpdater<T extends Updater<any>>(
	updaterOrValue: T,
	ref: Ref
) {
	ref.value =
		typeof updaterOrValue === "function"
			? updaterOrValue(ref.value)
			: updaterOrValue;
}

interface DataTableProps {
	columns: ColumnDef<TableDataType, any>[]
	data: TableDataType[],
	facet_options?: DTable.FacetType<TableDataType>
}
const props = defineProps<DataTableProps>()

const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])
const columnVisibility = ref<VisibilityState>({})
const rowSelection = ref({})

const table = useVueTable({
	get data() { return props.data },
	get columns() { return props.columns },
	state: {
		get sorting() { return sorting.value },
		get columnFilters() { return columnFilters.value },
		get columnVisibility() { return columnVisibility.value },
		get rowSelection() { return rowSelection.value },
	},
	enableRowSelection: true,
	onSortingChange: updaterOrValue => valueUpdater(updaterOrValue, sorting),
	onColumnFiltersChange: updaterOrValue => valueUpdater(updaterOrValue, columnFilters),
	onColumnVisibilityChange: updaterOrValue => valueUpdater(updaterOrValue, columnVisibility),
	onRowSelectionChange: updaterOrValue => valueUpdater(updaterOrValue, rowSelection),
	getCoreRowModel: getCoreRowModel(),
	getFilteredRowModel: getFilteredRowModel(),
	getPaginationRowModel: getPaginationRowModel(),
	getSortedRowModel: getSortedRowModel(),
	getFacetedRowModel: getFacetedRowModel(),
	getFacetedUniqueValues: getFacetedUniqueValues(),
})
</script>

<template>
	<div class="space-y-4 border p-2 rounded">
		<data-table-toolbar :table="table" :facet_options="props.facet_options" />
		<div class="rounded-md border">
			<cn-table>
				<cn-table-header>
					<cn-table-row v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
						<cn-table-head v-for="header in headerGroup.headers" :key="header.id">
							<flex-render v-if="!header.isPlaceholder" :render="header.column.columnDef.header"
								:props="header.getContext()" />
						</cn-table-head>
					</cn-table-row>
				</cn-table-header>
				<cn-table-body>
					<template v-if="table.getRowModel().rows?.length">
						<cn-table-row v-for="row in table.getRowModel().rows" :key="row.id"
							:data-state="row.getIsSelected() && 'selected'">
							<cn-table-cell v-for="cell in row.getVisibleCells()" :key="cell.id">
								<flex-render :render="cell.column.columnDef.cell" :props="cell.getContext()" />
							</cn-table-cell>
						</cn-table-row>
					</template>

					<cn-table-row v-else>
						<cn-table-cell :colspan="columns.length" class="h-24 text-center">
							No results.
						</cn-table-cell>
					</cn-table-row>
				</cn-table-body>
			</cn-table>
		</div>

		<DataTablePagination :table="table" />
	</div>
</template>
