<script lang="ts" setup>
definePageMeta({
	layout: "instructor-layout",
	middleware: "instructor-auth"
});
const is_edit_module_content_open = ref(false);
const {
	params: {
		id: course_id,
		module_id,
		content_id
	}
} = useRoute("dashboard-instructor-courses-id-module_id-content_id");
const content = useSingleCourseModuleContent();
onMounted(async () => {
	const params = {
		content_id: Number(content_id),
		course_id: Number(course_id),
		module_id: Number(module_id)
	};
	await content.fetchData(params);
});
const contentData = computed(() => content.data.value);
const toggleEditModuleContent = (state: boolean) => {

};
</script>

<template>
	<div class="p-2 max-w-7xl">

		<div
			class="p-2 flex justify-between w-full items-center border-b mb-2 ">
			<nuxt-link
				:to="{ name: 'dashboard-instructor-courses-id-module_id', params: { id: course_id } }"
				class="flex items-center text-md rounded-lg border-black border text-black pr-2">
				<icon :name="'heroicons:arrow-small-left'"
					  class="h-8 w-8"></icon>
				Back
			</nuxt-link>
			<div class="flex justify-end gap-2 items-center">
				<button class="flex items-center"
						@click="toggleEditModuleContent(true)">
					<icon :name="'heroicons:pencil-square'"
						  class="h-8 w-8 border-black border"></icon>
				</button>

			</div>
		</div>
		<div v-if="!content.has_error.value&&!content.is_loading.value" class="instructor-course-content">
			<h1 class="font-semibold text-2xl">
				{{ contentData.title }}
			</h1>
			<div v-if="contentData.content_type === 'text'">
				<div v-html="contentData.text ?? ''"></div>
			</div>
			<div v-if="contentData.content_type === 'image'">
				{{ contentData.image }}
				<LazyNuxtImg :src="contentData.image!" />
			</div>
			<div v-if="contentData.content_type === 'video'">
				<object :data="contentData.video_url!" type="video/mp4"
						width="100%">
					<!-- <img src="path/image.jpg" alt="useful image description" /> -->
				</object>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
