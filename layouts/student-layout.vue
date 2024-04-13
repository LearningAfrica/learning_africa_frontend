<script setup lang="ts">
import type { SidebarMenuItems } from '~/types/dashboard';


const navItems = ref<SidebarMenuItems>(
	{
		toplinks: [
			{
				href: "/dashboard/student",
				active: false,
				label: "Dashboard",
				children: [],
				icon: "ic:baseline-home",
			},
			{
				href: "/dashboard/student/courses",
				active: false,
				label: "Courses",
				children: [
					{
						href: "/dashboard/student/courses",
						active: false,
						label: "All",
						children: [],
						icon: "clarity:checkbox-list-line",
					},
					{
						href: "/dashboard/student/courses/whitelisted",
						active: false,
						label: "In progress",
						children: [],
						icon: "carbon:in-progress",
					},
					{
						href: "/dashboard/student/courses",
						active: false,
						label: "Completed",
						children: [],
						icon: "clarity:check-circle-line",
					},
				],
				icon: "ic:baseline-article",
			},
			{
				href: "/dashboard/student/payment",
				active: false,
				label: "Payments",
				children: [],
				icon: "clarity:dollar-line",
			},
			{
				href: "#",
				active: false,
				label: "Quiz",
				children: [
					{
						href: "#",
						active: false,
						label: "All",
						children: [],
						icon: "clarity:number-list-line",
					}, {
						href: "#",
						active: false,
						label: "Whitelisted",
						children: [],
						icon: "clarity:favorite-line",
					},
					{
						href: "#",
						active: false,
						label: "Done",
						children: [],
						icon: "clarity:check-circle-line",
					}, {
						href: "#",
						active: false,
						label: "Pending",
						children: [],
						icon: "mdi:circular-arrows",
					},
					{
						href: "#",
						active: false,
						label: "Upcoming",
						children: [
							{
								href: "#",
								active: false,
								label: "Subscribed",
								children: [],
								icon: "clarity:network-globe-line",
							}, {
								href: "#",
								active: false,
								label: "In wait",
								children: [],
								icon: "clarity:network-globe-outline-alerted",
							},
						],
						icon: "ic:baseline-photo-camera",
					},
				],
				icon: "ic:baseline-camera-alt",
			},
		],
		bottomLinks: [
			{
				href: "/dashboard/student/profile",
				active: false,
				label: "Profile",
				children: [],
				icon: "clarity:user-line",
			}, {
				href: "/dashboard/student/settings",
				active: false,
				label: "Settings",
				children: [],
				icon: "clarity:settings-line",
			}, {
				href: "/dashboard/student/conference",
				active: false,
				label: "Conference",
				children: [],
				icon: "mdi:teleconference",
			},
			{
				href: "/logout",
				active: false,
				label: "Logout",
				children: [],
				icon: "clarity:logout-line",
			}
		]
	});

</script>
<template>
	<dashboard-content-wrapper :menu_items="navItems" user_role="student">
		<template #content>
			<slot />
		</template>
	</dashboard-content-wrapper>
</template>



<style lang="scss" scoped></style>