<script setup lang="ts">

const navItems = ref({
	toplinks: [
		{
			href: "#",
			active: false,
			label: "Dashboard",
			children: [],
			icon: "carbon:dashboard-reference",
		}, {
			href: "/dashboard/instructor/organizations",
			active: false,
			label: "organizations",
			children: [],
			icon: "uit:create-dashboard",
		},
		{
			href: "#",
			active: false,
			label: "Categories",
			children: [
				{
					href: "/dashboard/instructor/categories",
					active: false,
					label: "All",
					children: [],
					icon: "carbon:category-new-each",
				},
				{
					href: "/dashboard/instructor/categories/new",
					active: false,
					label: "Add new",
					children: [],
					icon: "carbon:add",
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
					href: "/dashboard/instructor/courses",
					active: false,
					label: "All",
					children: [],
					icon: "carbon:ibm-watson-machine-learning",
				},
				{
					href: "/dashboard/instructor/courses?status=draft",
					active: false,
					label: "Drafts",
					children: [],
					icon: "carbon:result-draft",
				}, {
					href: "/dashboard/instructor/courses/create",
					active: false,
					label: "Add new",
					children: [],
					icon: "carbon:add",
				},

			],
			icon: "ic:baseline-camera-alt",
		},
		
	],
	
	bottomLinks: [
		{
			href: "/dashboard/instructor/profile",
			active: false,
			label: "Profile",
			children: [],
			icon: "carbon:user-avatar-filled",
		},
		{
			href: "/dashboard/instructor/settings",
			active: false,
			label: "Settings",
			children: [],
			icon: "carbon:settings",
		},
		{
			href: "/logout",
			active: false,
			label: "Logout",
			children: [],
			icon: "uiw:logout",
		}
	]
}
);

</script>
<template>
	<dashboard-content-wrapper :menu_items="navItems" user_role="instructor">
		<template #content>
			<slot />
		</template>
	</dashboard-content-wrapper>
</template>
<style lang="scss" scoped></style>