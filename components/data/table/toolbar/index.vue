<script setup lang="ts" generic="T extends TableDataType">
import type { Table } from '@tanstack/vue-table'
import { computed } from 'vue'
import type { TableDataType } from '~/data/table-data-types';
import type { DTable } from '~/types/data-table';
// import { priorities, statuses } from '../data/data'
// import DataTableFacetedFilter from './DataTableFacetedFilter.vue'
// import DataTableViewOptions from './DataTableViewOptions.vue'

interface DataTableToolbarProps {
	table: Table<T>,
	search_label?: string,
	searchField: keyof TableDataType
	facet_options?: { [K in keyof TableDataType]: {
		title: string;
		column_id_name: K;
		options: {
			label: string;
			value: string;
		}[];
	}
	}
}

type FacetKeysType = keyof TableDataType

const props = defineProps<DataTableToolbarProps>()
const filterOptions = Object.keys(props.facet_options ?? {}).map(((key) => props.facet_options![key as FacetKeysType]))

const isFiltered = computed(() => props.table.getState().columnFilters.length > 0)
</script>

<template>
	<div class="flex items-center justify-between">
		<div class="flex flex-1 items-center space-x-2">
			<cn-input :placeholder="props.search_label ?? 'Search...'"
				:model-value="(table.getColumn(props.searchField)?.getFilterValue() as string) ?? ''"
				class="h-8 w-[150px] lg:w-[250px]"
				@input="table.getColumn(props.searchField)?.setFilterValue($event.target.value)" />
			<div v-for="value of filterOptions" :key="value.column_id_name">
				<data-table-faceted-filter v-if="table.getColumn(value.column_id_name)"
					:column="table.getColumn(value!.column_id_name!)!" :title="value.title" :options="value.options" />
			</div>



			<cn-button v-if="isFiltered" variant="ghost" class="h-8 px-2 lg:px-3" @click="table.resetColumnFilters()">
				Reset
				<icon :name="'basil:cross-solid'" class="ml-2 h-4 w-4" />
			</cn-button>
		</div>
		<data-table-view-options :table="table" />
	</div>
</template>
