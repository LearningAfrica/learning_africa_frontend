<script setup lang="ts">
import type { Column } from '@tanstack/vue-table'

interface DataTableColumnHeaderProps<T = unknown> {
    column: Column<T, any>
    title: string
}

defineProps<DataTableColumnHeaderProps>()
</script>

<script lang="ts">
export default {
    inheritAttrs: false,
}
</script>

<template>
    <div v-if="column.getCanSort()" :class="cn('flex items-center space-x-2', $attrs.class ?? '')">
        <cn-dropdown-menu>
            <cn-dropdown-menu-trigger as-child>
                <cn-button variant="ghost" size="sm" class="-ml-3 h-8 data-[state=open]:bg-accent">
                    <span>{{ title }}</span>
                    <ArrowDownIcon v-if="column.getIsSorted() === 'desc'" class="ml-2 h-4 w-4" />
                    <ArrowUpIcon v-else-if="column.getIsSorted() === 'asc'" class="ml-2 h-4 w-4" />
                    <CaretSortIcon v-else class="ml-2 h-4 w-4" />
                </cn-button>
            </cn-dropdown-menu-trigger>
            <cn-dropdown-menu-content align="start">
                <cn-dropdown-menu-item @click="column.toggleSorting(false)">
                    <ArrowUpIcon class="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                    Asc
                </cn-dropdown-menu-item>
                <cn-dropdown-menu-item @click="column.toggleSorting(true)">
                    <ArrowDownIcon class="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                    Desc
                </cn-dropdown-menu-item>
                <cn-dropdown-menu-separator />
                <cn-dropdown-menu-item @click="column.toggleVisibility(false)">
                    <EyeNoneIcon class="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                    Hide
                </cn-dropdown-menu-item>
            </cn-dropdown-menu-content>
        </cn-dropdown-menu>
    </div>

    <div v-else :class="$attrs.class">
        {{ title }}
    </div>
</template>