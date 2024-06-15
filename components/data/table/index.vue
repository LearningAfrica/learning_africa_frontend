<script setup lang="ts" generic="Data extends {[k:string]:any}">
import type {
	ColumnDef,
	ColumnFiltersState,
	PaginationDefaultOptions,
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
import type { TableDataType } from '~/data/table-data-types'
import type { DTable } from '~/types/data-table';

import type { Updater } from "@tanstack/vue-table";
import type { Ref } from "vue";
function valueUpdater<T extends Updater<any>>(
	updaterOrValue: T,
	ref: Ref<T>
) {
	ref.value =
		typeof updaterOrValue === "function"
			? updaterOrValue(ref.value)
			: updaterOrValue;
}

type PageOptions = {
	pageSize: number;
	pageIndex: number;
};

interface DataTableProps {
	columns: ColumnDef<Data, any>[]
	data: Data[],
	search_label?: string,
	search_field: string,
	facet_options?: DTable.FacetType<TableDataType>,
	sorting?: Ref<SortingState>,
	filters?: Ref<ColumnFiltersState>,
	visibility?: Ref<VisibilityState>,
	selection?: Ref<{ [k: string]: boolean }>,
	pagination?: Ref<PageOptions>
}
const props = withDefaults(defineProps<DataTableProps>(), {
	columns: () => [], data: () => [],
	facet_options: () => ({} as any),
	filters: () => ref<ColumnFiltersState>([]),
	search_label: () => 'Search...',
	searchField: () => 'title',
	selection: () => ref({}),
	sorting: () => ref<SortingState>([]),
	visibility: () => ref<VisibilityState>({}),
	pagination: () => ref<PageOptions>({ pageIndex:0,pageSize:100})
})

// const sorting = ref<SortingState>([])
// const columnFilters = ref<ColumnFiltersState>([])
// const columnVisibility = ref<VisibilityState>({})
// const rowSelection = ref({})


const table = useVueTable({
	get data() { return props.data },
	get columns() { return props.columns },
	state: {
		get sorting() { return props.sorting.value },
		get columnFilters() { return props.filters.value },
		get columnVisibility() { return props.visibility.value },
		get rowSelection() { return props.selection.value },
		get pagination() { return props.pagination.value }
	},
	enableRowSelection: true,
	onSortingChange: (updaterOrValue => valueUpdater(updaterOrValue, props.sorting)),
	onPaginationChange: updaterOrValue => valueUpdater(updaterOrValue, props.pagination),
	onColumnFiltersChange: updaterOrValue => valueUpdater(updaterOrValue, props.filters),
	onColumnVisibilityChange: updaterOrValue => valueUpdater(updaterOrValue, props.visibility),
	onRowSelectionChange: updaterOrValue => valueUpdater(updaterOrValue, props.selection),
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
		<data-table-toolbar 
		:table="table as any" 
		:facet_options="props.facet_options" 
		:search-field="props.searchField"
		:search_label="props.search_label" />
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

		<data-table-pagination :table="table as any" />
	</div>
</template>
