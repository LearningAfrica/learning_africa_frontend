<script setup lang="ts">
import type { SidebarMenuItems } from '~/types/dashboard';


const navItems = ref<SidebarMenuItems>(
	{
		toplinks: [
			{
				href: "#",
				active: false,
				label: "Dashboard",
				children: [],
				icon: "ic:baseline-home",
			}, {
				href: "#",
				active: false,
				label: "Organizations",
				icon: "ic:baseline-article",
				children: [
					{
						href: "/dashboard/admin/organizations",
						active: false,
						label: "All",
						children: [],
						icon: "ic:baseline-article",
					},
					{
						href: "/dashboard/admin/organizations/new",
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
				],
				icon: "ic:baseline-camera-alt",
			}, {
				href: "/dashboard/admin/instructors",
				active: false,
				label: "Instructors",
				icon: "mdi:teacher",
				children: [
				],
			},
		],
		bottomLinks: [
			{
				href: "#",
				active: false,
				label: "Settings",
				children: [],
				icon: "ic:baseline-settings",
			},
			{
				href: "#",
				active: false,
				label: "Logout",
				children: [],
				icon: "ic:baseline-exit_to_app",
			},
			{
				href: "/logout",
				active: false,
				label: "Logout",
				children: [],
				icon: "uiw:logout",


			}
		]
	});

</script>
<template>
	<dashboard-content-wrapper :menu_items="navItems" user_role="admin">
		<template #content>
			<slot />
		</template>
	</dashboard-content-wrapper>
</template>



<style lang="scss" scoped></style>