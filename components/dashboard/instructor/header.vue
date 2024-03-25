<script setup lang="ts">
defineProps({
	is_sidebar_open: {
		type: Boolean,
		required: true
	},
	logo: {
		type: String,
		default: "/images/logo.svg"

	}
});

defineEmits(["toggle-sidebar"]);
</script>
<template>
    <div class="grid grid-cols-3 border-b sticky top-0">
        <div class="flex items-center">
            <button @click="$emit('toggle-sidebar')" class="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7">
                    </path>
                </svg>
            </button>
            <nuxt-link to="/">
                <icon name="mdi:home" class="text-4xl text-primary-pk"></icon>
            </nuxt-link>
        </div>
        <div class="w-full flex-1">
            <div class="w-full">
                <input type="text" placeholder="Search" class="border p-2 rounded w-full" />
            </div>
        </div>
        <div class="flex justify-end">
            login
        </div>
    </div>
</template>


<style scoped></style>