<script setup lang="ts">
import type { Table } from '@tanstack/vue-table'

type DataTablePaginationProps<T = unknown> = {
  table: Table<T>
}
defineProps<DataTablePaginationProps>()
</script>

<template>
  <div class="flex items-center justify-between px-2">
    <div class="flex-1 text-sm text-muted-foreground">
      {{ table.getFilteredSelectedRowModel().rows.length }} of
      {{ table.getFilteredRowModel().rows.length }} row(s) selected.
    </div>
    <div class="flex items-center space-x-6 lg:space-x-8">
      <div class="flex items-center space-x-2">
        <p class="text-sm font-medium">
          Rows per page
        </p>
        <cn-select :model-value="`${table.getState().pagination.pageSize}`" @update:model-value="table.setPageSize">
          <cn-select-trigger class="h-8 w-[70px]">
            <cn-select-value :placeholder="`${table.getState().pagination.pageSize}`" />
          </cn-select-trigger>
          <cn-select-content side="top">
            <cn-select-item v-for="pageSize in [10, 20, 30, 40, 50]" :key="pageSize" :value="`${pageSize}`">
              {{ pageSize }}
            </cn-select-item>
          </cn-select-content>
        </cn-select>
      </div>
      <div class="flex w-[100px] items-center justify-center text-sm font-medium">
        Page {{ table.getState().pagination.pageIndex + 1 }} of
        {{ table.getPageCount() }}
      </div>
      <div class="flex items-center space-x-2">
        <cn-button variant="outline" class="hidden h-8 w-8 p-0 lg:flex" :disabled="!table.getCanPreviousPage()"
          @click="table.setPageIndex(0)">
          <span class="sr-only">Go to first page</span>
          <DoubleArrowLeftIcon class="h-4 w-4" />
        </cn-button>
        <cn-button variant="outline" class="h-8 w-8 p-0" :disabled="!table.getCanPreviousPage()"
          @click="table.previousPage()">
          <span class="sr-only">Go to previous page</span>
          <ChevronLeftIcon class="h-4 w-4" />
        </cn-button>
        <cn-button variant="outline" class="h-8 w-8 p-0" :disabled="!table.getCanNextPage()" @click="table.nextPage()">
          <span class="sr-only">Go to next page</span>
          <ChevronRightIcon class="h-4 w-4" />
        </cn-button>
        <cn-button variant="outline" class="hidden h-8 w-8 p-0 lg:flex" :disabled="!table.getCanNextPage()"
          @click="table.setPageIndex(table.getPageCount() - 1)">
          <span class="sr-only">Go to last page</span>
          <DoubleArrowRightIcon class="h-4 w-4" />
        </cn-button>
      </div>
    </div>
  </div>
</template>