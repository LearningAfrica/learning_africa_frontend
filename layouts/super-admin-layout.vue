<script setup lang="ts">
const navItems = ref([
	{
		href: "/dashboard/super-admin",
		active: false,
		label: "Dashboard",
		children: [],
		icon: "ic:baseline-home",
	},
	{
		href: "#",
		active: false,
		label: "Organizations",
		icon: "ic:baseline-article",
		children: [
			{
				href: "/dashboard/super-admin/organizations",
				active: false,
				label: "All",
				children: [],
				icon: "ic:baseline-article",
			},
			{
				href: "/dashboard/super-admin/organizations/new",
				active: false,
				label: "Add new",
				children: [],
				icon: "ic:baseline-add",
			},
		],
	},
	{
		href: "#",
		active: false,
		label: "Categories",
		icon: "ic:baseline-article",
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
		],
	},
	{
		href: "#",
		active: false,
		label: "Students",
		icon: "ic:baseline-article",
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
		],
	},
	{
		href: "#",
		active: false,
		label: "Instructors",
		icon: "ic:baseline-article",
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
		],
	},
	{
		href: "#",
		active: false,
		label: "Users",
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