<script setup lang="ts">
import type { Table } from '@tanstack/vue-table'

interface DataTableViewOptionsProps<T = unknown> {
    table: Table<T>
}

const props = defineProps<DataTableViewOptionsProps>()

const columns = computed(() => props.table.getAllColumns()
    .filter(
        column =>
            typeof column.accessorFn !== 'undefined' && column.getCanHide(),
    ))
</script>

<template>
    <cn-dropdown-menu>
        <cn-dropdown-menu-trigger as-child>
            <cn-button variant="outline" size="sm" class="ml-auto hidden h-8 lg:flex">
                <MixerHorizontalIcon class="mr-2 h-4 w-4" />
                View
            </cn-button>
        </cn-dropdown-menu-trigger>
        <cn-dropdown-menu-content align="end" class="w-[150px]">
            <cn-dropdown-menu-label>Toggle columns</cn-dropdown-menu-label>
            <cn-dropdown-menu-separator />

            <cn-dropdown-menu-checkbox-item v-for="column in columns" :key="column.id" class="capitalize"
                :checked="column.getIsVisible()" @update:checked="(value) => column.toggleVisibility(!!value)">
                {{ column.id }}
            </cn-dropdown-menu-checkbox-item>
        </cn-dropdown-menu-content>
    </cn-dropdown-menu>
</template>