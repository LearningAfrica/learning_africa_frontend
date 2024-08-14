<script setup lang="ts">
import type { SidebarMenuItems } from "~/types/dashboard";
const auth = useAuthStore();
const is_sidebar_open = ref(false);
const logo = ref("https://avatars.githubusercontent.com/u/150797856?s=200&v=4");
const toggleSidebar = () => {
	is_sidebar_open.value = !is_sidebar_open.value;
};
const router = useRouter();
onMounted(async () => {
	// console.log({ auth });

	if (auth.isAuthenticated
	) {
		// 
		if (auth.user.user_role === user_role) {
			return;
		} else { await router.push(auth.dashboardUrl); }
	}
	if (!auth.isAuthenticated) {
		auth.logout()
		// console.log({ auth });

		await router.push("/login");
	}
	await router.push(auth.dashboardUrl);
});
const { menu_items, user_role } = defineProps<{
	menu_items: SidebarMenuItems;
	user_role: "admin" | "super_admin" | "student" | "instructor"
}>();
</script>

<template>
	<div class="bg-white z-50 flex relative">
		<dashboard-sidebar :is_sidebar_open="is_sidebar_open" @toggle-sidebar="toggleSidebar" :logo="logo"
			:menu_items="menu_items"></dashboard-sidebar>
		<div class="flex flex-col w-full h-full transition-all duration-300 p-4 relative"
			:class="{ 'sm:ml-64': is_sidebar_open, 'ml-0': !is_sidebar_open, }">
			<slot name="dashboard-header">
				<dashboard-default-header :is_sidebar_open="is_sidebar_open" :logo="logo"
					@toggle-sidebar="toggleSidebar"></dashboard-default-header>
			</slot>
			<slot name="content">
				<slot></slot>
			</slot>
		</div>
	</div>
</template>