<script lang="ts" setup>
import type { DashboardMenuItem } from "~/types/dashboard";


const props = defineProps<{
	item: DashboardMenuItem;
	is_sidebar_open: boolean;
}>();

const hasActiveChild = computed(() => {
	function hasActiveItem(items: DashboardMenuItem[]) {
		const contained = items.some(
			(item) => item.active || hasActiveItem(item.children)
		);
		return contained;
	}
	return hasActiveItem(props.item.children);
});
</script>
<template>
	<nuxt-link v-if="!item.children.length" :class="[
		'capitalize group flex w-full items-center rounded-md py-2 px-3 text-sm',
		'hover:bg-gray-100',
		item.active ? 'font-semibold text-gray-800' : 'font-medium text-gray-600',
	]" :href="item.href">
		<icon :class="[
			'mr-2 h-8 w-8 shrink-0 group-hover:text-gray-600',
			item.active ? 'text-gray-600' : 'text-gray-400',
		]" :name="item.icon" v-if="item.icon"></icon>
		<span class="text-lg">{{ item.label }}</span>
	</nuxt-link>

	<hui-disclosure v-else v-slot="{ open }" :default-open="hasActiveChild">
		<hui-disclosure-button :class="[
			'group flex w-full items-center rounded-md py-2 px-3 text-left text-md',
			'hover:bg-gray-100',
			open ? 'font-semibold text-gray-400' : 'font-medium text-gray-600',
		]">
			<component :class="[
				'mr-2 h-6 w-6 shrink-0 group-hover:text-gray-600',
				open ? 'text-gray-400' : 'text-gray-200',
			]" :is="item.icon" v-if="item.icon"></component>
			<span class="flex-1 text-lg">{{ item.label }}</span>
			<icon :name="'fluent:chevron-right-16-regular'" :class="[
				'h-6 w-6 shrink-0',
				open ? '-rotate-90 text-gray-600' : 'text-gray-400',
			]" />
		</hui-disclosure-button>

		<hui-disclosure-panel class="ml-2">
			<dashboard-menu-item v-for="child in item.children" :item="child" :key="child.label"
				:is_sidebar_open="props.is_sidebar_open"></dashboard-menu-item>
		</hui-disclosure-panel>
	</hui-disclosure>
</template>