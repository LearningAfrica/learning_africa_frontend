<script setup lang="ts">
definePageMeta({
	layout: "instructor-layout",
});
</script>
<template>
    <div>
        <form action=""
            class="bg-white p-4 rounded-lg shadow-md w-full sm:w-1/2 mx-auto mt-4 border min-h-[40vh] flex flex-col justify-center">
            <div class="flex justify-center items-center p-4">
                <div class="h-20 w-20 bg-slate-100 rounded-full border-1"></div>
            </div>
            <input type="text" placeholder="Category name" class="border border-gray-300 p-2 rounded-lg w-full mb-4">
            <input type="text" placeholder="Category description"
                class="border border-gray-300 p-2 rounded-lg w-full mb-4">
            <button class="bg-primary text-white p-2 rounded-lg w-full mb-4">Add category</button>
        </form>
    </div>
</template>

<style scoped></style>