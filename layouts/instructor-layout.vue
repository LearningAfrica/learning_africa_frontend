<script setup lang="ts">

const navItems = ref([
	{
		href: "#",
		active: false,
		label: "Dashboard",
		children: [],
		icon: "carbon:dashboard-reference",
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
				href: "/dashboard/instructor/create",
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
				href: "#",
				active: false,
				label: "All",
				children: [],
				icon: "carbon:ibm-watson-machine-learning",
			},
			{
				href: "#",
				active: false,
				label: "Drafts",
				children: [],
				icon: "carbon:result-draft",
			}, {
				href: "#",
				active: false,
				label: "Add new",
				children: [],
				icon: "carbon:add",
			},
			
		],
		icon: "ic:baseline-camera-alt",
	},
	{
		href: "/logout",
		active: false,
		label: "Logout",
		children: [],
		icon: "uiw:logout",
	}
]);

</script>
<template>
	<dashboard-content-wrapper :menu_items="navItems" user_role="instructor">
		<template #content>
			<slot />
		</template>
	</dashboard-content-wrapper>
</template>



<style lang="scss" scoped></style>