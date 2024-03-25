<script setup lang="ts">

const logo = ref("https://avatars.githubusercontent.com/u/150797856?s=200&v=4");
const is_sidebar_open = ref(false);

const toggleSidebar = () => {
	is_sidebar_open.value = !is_sidebar_open.value;
};

</script>
<template>
    <div class="bg-white z-50 flex relative">
        <!-- Sidebar -->

        <dashboard-sidebar :is_sidebar_open="is_sidebar_open" @toggle-sidebar="toggleSidebar"
            :logo="logo"></dashboard-sidebar>
        <!-- Main view -->
        <div class="flex flex-col w-full h-full transition-all duration-300 p-4 relative" :class="{
            'ml-64': is_sidebar_open,
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