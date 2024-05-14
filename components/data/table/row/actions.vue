<script setup lang="ts">
import type { Row } from '@tanstack/vue-table'
import { computed } from 'vue'

import type { TableDataType } from '~/data/table-data-types'
import { courseCategorySchema } from '~/data'

interface DataTableRowActionsProps {
  row: Row<TableDataType>,
}
const props = defineProps<DataTableRowActionsProps>()

const task = computed(() => courseCategorySchema.parse(props.row.original))
</script>

<template>
  <cn-dropdown-menu>
    <cn-dropdown-menu-trigger as-child>
      <cn-button
        variant="ghost"
        class="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
      >
        <icon :name="'humbleicons:dots-horizontal'" class="h-4 w-4" />
        <span class="sr-only">Open menu</span>
      </cn-button>
    </cn-dropdown-menu-trigger>
    <cn-dropdown-menu-content align="end" class="w-[160px]">
      <cn-dropdown-menu-item>Edit</cn-dropdown-menu-item>
      <cn-dropdown-menu-item>Make a copy</cn-dropdown-menu-item>
      <cn-dropdown-menu-item>Favorite</cn-dropdown-menu-item>
      <cn-dropdown-menu-separator />
      <cn-dropdown-menu-sub>
        <cn-dropdown-menu-sub-trigger>Labels</cn-dropdown-menu-sub-trigger>
        <cn-dropdown-menu-sub-content>
          <cn-dropdown-menu-radio-group :value="task.label">
            <cn-dropdown-menu-radio-item v-for="label in labels" :key="label.value" :value="label.value">
              {{ label.label }}
            </cn-dropdown-menu-radio-item>
          </cn-dropdown-menu-radio-group>
        </cn-dropdown-menu-sub-content>
      </cn-dropdown-menu-sub>
      <cn-dropdown-menu-separator />
      <cn-dropdown-menu-item>
        Delete
        <cn-dropdown-menu-shortcut>⌘⌫</cn-dropdown-menu-shortcut>
      </cn-dropdown-menu-item>
    </cn-dropdown-menu-content>
  </cn-dropdown-menu>
</template>
