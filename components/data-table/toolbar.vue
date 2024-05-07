<script setup lang="ts">
import type { Table } from '@tanstack/vue-table'
import { Icon } from 'lucide-vue-next';
type DataTableToolbarProps<T = unknown> = {
  table: Table<T>
}
const labels = ref([
  {
    value: 'bug',
    label: 'Bug',
  },
  {
    value: 'feature',
    label: 'Feature',
  },
  {
    value: 'documentation',
    label: 'Documentation',
  },
])

const statuses = ref([
  {
    value: 'backlog',
    label: 'Backlog',
    // icon: h(Icon),
  },
  {
    value: 'todo',
    label: 'Todo',
    // icon: h(Icon),
  },
  {
    value: 'in progress',
    label: 'In Progress',
    // icon: h(Icon),
  },
  {
    value: 'done',
    label: 'Done',
    // icon: h(Icon),
  },
  {
    value: 'canceled',
    label: 'Canceled',
    // icon: h(Icon),
  },
])

const priorities = ref([
  {
    label: 'Low',
    value: 'low',
    // icon: h(Icon),
  },
  {
    label: 'Medium',
    value: 'medium',
    // icon: h(Icon),
  },
  {
    label: 'High',
    value: 'high',
    // icon: h(<Icon name=''/>),
  },
])

const props = defineProps<DataTableToolbarProps>()

const isFiltered = computed(() => props.table.getState().columnFilters.length > 0)
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex flex-1 items-center space-x-2">
      <cn-input placeholder="Filter tasks..."
        :model-value="(table.getColumn('title')?.getFilterValue() as string) ?? ''" class="h-8 w-[150px] lg:w-[250px]"
        @input="table.getColumn('title')?.setFilterValue($event.target.value)" />
      <data-table-faceted-filter v-if="table.getColumn('status')" :column="table.getColumn('status')" title="Status"
        :options="statuses" />
      <data-table-faceted-filter v-if="table.getColumn('priority')" :column="table.getColumn('priority')"
        title="Priority" :options="priorities" />
      <cn-button v-if="isFiltered" variant="ghost" class="h-8 px-2 lg:px-3" @click="table.resetColumnFilters()">
        Reset
        <Cross2Icon class="ml-2 h-4 w-4" />
      </cn-button>
    </div>
    <data-table-view-options :table="table" />
  </div>
</template>