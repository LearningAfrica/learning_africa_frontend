<script setup lang="ts">

const logo = ref("https://avatars.githubusercontent.com/u/150797856?s=200&v=4");
const is_sidebar_open = ref(true);

const toggleSidebar = () => {
	is_sidebar_open.value = !is_sidebar_open.value;
};
const navItems = ref([
	{
		href: "#",
		active: false,
		label: "Dashboard",
		children: [],
		icon: "ic:baseline-home",
	},
	{
		href: "#",
		active: false,
		label: "Categories",
		children: [
			{
				href: "#",
				active: false,
				label: "All",
				children: [],
				icon: "ic:baseline-article",
			},
			{
				href: "#",
				active: false,
				label: "Add new",
				children: [],
				icon: "ic:baseline-add",
			},
			// {
			// 	href: "#",
			// 	active: false,
			// 	label: "Categories",
			// 	children: [],
			// 	icon: "ic:baseline-category",
			// },
		],
		icon: "ic:baseline-article",
	},
	{
		href: "#",
		active: false,
		label: "Courses",
		children: [
			{
				href: "#",
				active: false,
				label: "All",
				children: [],
				icon: "ic:baseline-photo-library",
			},
			{
				href: "#",
				active: false,
				label: "Drafts",
				children: [],
				icon: "ic:baseline-photo-library",
			}, {
				href: "#",
				active: false,
				label: "Add new",
				children: [],
				icon: "ic:baseline-photo-library",
			},
			// {
			// 	href: "#",
			// 	active: false,
			// 	label: "Add new",
			// 	children: [
			// 		{
			// 			href: "#",
			// 			active: false,
			// 			label: "Third level",
			// 			children: [],
			// 			icon: "ic:baseline-photo-camera",
			// 		},
			// 	],
			// 	icon: "ic:baseline-photo-camera",
			// },
		],
		icon: "ic:baseline-camera-alt",
	},
]);

</script>
<template>
	<div class="bg-white z-50 flex relative">
		<!-- Sidebar -->

		<dashboard-sidebar :is_sidebar_open="is_sidebar_open" @toggle-sidebar="toggleSidebar" :logo="logo"
			:menu_items="navItems"></dashboard-sidebar>
		<!-- Main view -->
		<div class="flex flex-col w-full h-full transition-all duration-300 p-4 relative" :class="{
			'sm:ml-64': is_sidebar_open,
			'ml-0': !is_sidebar_open,
		}">
			<dashboard-instructor-header :is_sidebar_open="is_sidebar_open" :logo="logo"
				@toggle-sidebar="toggleSidebar"></dashboard-instructor-header>
			<!-- Header -->
			<!-- <app-header></app-header> -->
			<!-- Content -->
			<div>
				<slot>

				</slot>
			</div>
			<div>
				<slot name="content-section">
					<div class="mt-4">
						<h2 class="text-lg font-semibold text-gray-800">Welcome to the dashboard</h2>
						<p class="text-gray-600">This is the dashboard page</p>
					</div>
				</slot>
			</div>
		</div>
	</div>
</template>



<style lang="scss" scoped></style>