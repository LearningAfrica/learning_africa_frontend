<script lang="ts" setup>
definePageMeta({
	layout: "instructor-layout",
	middleware: 'instructor-auth'
});
const course =
	useCourses()
onMounted(() => {
	course.fetchData()
})

</script>

<template>
	<div class="py-4 flex flex-col gap-4">
		<partial-loader v-if="course && course.is_loading.value" />
		<div class="p-4 flex justify-between border">
			<div>
				<h1>Courses</h1>
			</div>
			<div>
				<nuxt-link :to="{ name: 'dashboard-instructor-courses-create' }"
					class="bg-primary text-white p-2 rounded-lg w-full mb-4">Add course</nuxt-link>
			</div>
		</div>
		<div class="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-2">
		<!--	<data-table v-if="course.data.value.data" 
			:columns="courseColumns" 
			:search_label="'Search category...'"
			:search_field="'title'"
			:filters="toRef(tableFilters)"
			:selection="toRef(selection)"
			:sorting="toRef(sorting)"
			:visibility="toRef(columnVisibility)"
			
			:data="course.data.value.data ?? []"></data-table>
		-->
			<div v-for="({category,course_image_url,title,overview,tags,instructor,modules,id},index) of course.data.value.data" class="border rounded w-full">
			<div class="h-80">
				<img :src="course_image_url" alt="" class="h-full w-full object-cover">
			</div>
			<div class="p-2 ">
				<h2 class="font-bold text-xl">{{title}}</h2>
				<div>
					{{ modules.length }} Module(s)
				</div>
				<div class="grid grid-cols-3 gap-2">
					<nuxt-link :to="{
			name:'dashboard-instructor-courses-id',
			params: { id}
			}" class="p-2 bg-gray-500 rounded text-white flex items-center gap-2"><icon :name="'hugeicons:view'"></icon> View</nuxt-link>
				<button class="p-2 bg-blue-500 rounded text-white flex items-center gap-2"><icon :name="'icon-park-outline:edit-one'"></icon> Edit</button>
				<button class="p-2 bg-red-500 rounded text-white flex items-center gap-2"><icon :name="'solar:trash-bin-2-outline'"></icon> Remove</button>
				</div>
			</div>
			</div>
		</div>

	</div>
</template>

<style scoped></style>
