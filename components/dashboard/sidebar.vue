<script lang="ts" setup>
import type { DashboardMenuItem } from "~/types/dashboard";
defineProps<{
	is_sidebar_open: boolean;
	logo: string;
	menu_items: {
		toplinks: DashboardMenuItem[];
		bottomLinks: DashboardMenuItem[];
	}
}>(
	// {
	// is_sidebar_open: {
	// 	type: Boolean,
	// 	default: true,
	// 	required: true,
	// },
	// logo: {
	// 	type: String,
	// 	default: "",
	// 	required: true,
	// },
	// menu_items: {
	// 	// type: Array as PropType<DashboardMenuItem[]>,
	// 	// default: () => [],
	// },
	// }
);


</script>

<template>
	<div class="border-r p-4 bg-dark fixed z-[9999999999] h-screen transition-all duration-300 flex flex-col gap-4 justify-between"
		:class="{ 'w-64': is_sidebar_open, '-left-[100%]': !is_sidebar_open }">
		<button
			class="flex sm:hidden justify-center items-center p-1 rounded-full hover:bg-gray-200 border w-fit absolute -right-4 bg-white"
			@click="$emit('toggle-sidebar')">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
				stroke="currentColor" class="w-6 h-6" :class="{ '-rotate-180': !is_sidebar_open }">
				<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
			</svg>
		</button>
		<div>

			<div class="flex flex-col gap-2 ">
				<!-- <h1>UTest</h1> -->
				<div class="flex justify-center">
					<img :src="logo" alt="Vue logo"
						class="h-12 object-scale-down border border-primary w-fit rounded-full" />
				</div>
				<div class="flex justify-center" v-if="is_sidebar_open">
					<span class="p-2">Learning Africa</span>
				</div>
				<hr />
			</div>
			<!-- Headless sidebar with recursive menu links -->
			<nav class="mt-2 px-2">
				<dashboard-menu-item :item="item" v-for="item in menu_items.toplinks" :key="item.label"
					:is_sidebar_open="is_sidebar_open" />
			</nav>
		</div>
		<div>
			<div class="border border-gray-400 my-2"></div>
			<dashboard-menu-item :item="item" v-for="item in menu_items.bottomLinks" :key="item.label"
				:is_sidebar_open="is_sidebar_open" />
		</div>
	</div>
</template>

<style scoped></style>~~/types/dashboard