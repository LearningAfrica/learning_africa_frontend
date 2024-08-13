<script lang="ts" setup>
definePageMeta({
	layout: "instructor-layout",
	middleware: 'instructor-auth'
});
const course =
	useCourses()
onMounted(async() => {
	await course.fetchData()
})

</script>

<template>
	<div class="py-4 flex flex-col gap-4">
		<partial-loader v-if="course && course.is_loading.value" />
		<div class="p-4 flex justify-between border" v-if="!course.is_loading.value">
			<div>
				<h1>Courses</h1>
			</div>
			<div>
				<nuxt-link :to="{ name: 'dashboard-instructor-courses-create' }"
					class="bg-primary text-white p-2 rounded-lg w-full mb-4">Add course</nuxt-link>
			</div>
		</div>
		<div class="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-2">
			<div v-for="({ category, course_image_url, title, overview, tags, instructor, modules, id }, index) of course.data.value.data"
				class="border rounded w-full">
				<div class="h-80">
					<img :src="course_image_url" alt="" class="h-full w-full object-cover">
				</div>
				<div class="p-2 ">
					<h2 class="font-bold text-xl">{{ title }}</h2>
					<div>
						{{ modules.length }} Module(s)
					</div>
					<div class="grid grid-cols-3 gap-2">
						<nuxt-link :to="{
							name: 'dashboard-instructor-courses-id',
							params: { id }
						}" class="p-2 bg-gray-500 rounded text-white flex items-center gap-2">
							<icon :name="'heroicons:eye'"></icon> View
						</nuxt-link>
						<nuxt-link :to="{ name: 'dashboard-instructor-courses-id-edit', params: { id } }"
							class="p-2 bg-blue-500 rounded text-white flex items-center gap-2">
							<icon :name="'heroicons:pencil-square'"></icon> Edit
						</nuxt-link>
						<button class="p-2 bg-red-500 rounded text-white flex items-center gap-2">
							<icon :name="'heroicons:trash'"></icon> Remove
						</button>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<style scoped></style>
