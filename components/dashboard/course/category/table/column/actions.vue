<script setup lang="ts">
import type { Row } from '@tanstack/vue-table'
import type { CourseCategoryType } from '~/data';

interface DataTableRowActionsProps {
  row: Row<CourseCategoryType>,

}
const props = defineProps<DataTableRowActionsProps>()

// const task = computed(() => courseCategorySchema.parse(props.row.original))
const emit = defineEmits<{
  (e: 'delete-row', value: Row<CourseCategoryType>): void,
  (e: 'edit-row', value: Row<CourseCategoryType>): void
  (e: 'view-course', value: Row<CourseCategoryType>): void
}>()
// defineEmits<
// {
//   'update-row':[row:Row<CourseCategoryType>],
//     (e:'delete-row',value:Row<CourseCategoryType>):void
// }>()
</script>

<template>
  <cn-dropdown-menu>
    <cn-dropdown-menu-trigger as-child>
      <cn-button variant="ghost" class="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
        <icon :name="'humbleicons:dots-horizontal'" class="h-4 w-4" />
        <span class="sr-only">Open menu</span>
      </cn-button>
    </cn-dropdown-menu-trigger>
    <cn-dropdown-menu-content align="end" class="w-[160px]">
      <cn-dropdown-menu-item>
        <cn-button @click="$emit('edit-row', row)" class="w-full p-0">
          Edit
        </cn-button>
      </cn-dropdown-menu-item>
      <cn-dropdown-menu-item>
        <cn-button @click="$emit('view-course', row)"
          class="bg-gray-200 text-black w-full py-[1px] hover:bg-primary hover:text-white">
          View
        </cn-button>
        <!-- <cn-dropdown-menu-shortcut>⌘⌫</cn-dropdown-menu-shortcut> -->
      </cn-dropdown-menu-item><cn-dropdown-menu-item>
        <cn-button @click="$emit('delete-row', row)"
          class="bg-gray-200 text-black w-full py-[1px] hover:bg-red-500 hover:text-white">
          Delete
        </cn-button>
        <!-- <cn-dropdown-menu-shortcut>⌘⌫</cn-dropdown-menu-shortcut> -->
      </cn-dropdown-menu-item>
    </cn-dropdown-menu-content>
  </cn-dropdown-menu>
</template>
