<template>
    <div class="flex items-center justify-center h-screen bg-gray-100 text-center">
        <div>
            <svg class="mx-auto h-20 w-auto text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                aria-hidden="true">
                <!-- Insert your SVG path here -->
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 19V6l-2.293 2.293a1 1 0 0 1-1.414 0L2 5l6-6 6 6-3.293 3.293a1 1 0 0 1-1.414 0L9 6v13z" />
            </svg>
            <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Oops! Page not found.</h2>
            <p class="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
            <div class="mt-6">
                <nuxt-link to="/" class="text-base font-medium text-indigo-600 hover:text-indigo-500">
                    Go back home<span aria-hidden="true"> →</span>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>