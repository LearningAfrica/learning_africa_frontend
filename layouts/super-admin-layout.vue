<script setup lang="ts">
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
	{
		href: "#",
		active: false,
		label: "Logout",
		children: [],
		icon: "uiw:logout",
	}
]);

</script>
<template>
	<dashboard-content-wrapper :menu_items="navItems" user_role="super_admin">
		<template #content>
			<slot />
		</template>
	</dashboard-content-wrapper>
</template>



<style lang="scss" scoped></style>