<script lang="ts" setup>
import moment from "moment";
definePageMeta({
	layout: "instructor-layout",
	middleware: "instructor-auth"
});
const router = useRoute("dashboard-instructor-courses-id");
const { data, fetchData, is_loading } = useSingleCourse();

// const modules =
onMounted(async () => {
	console.log('Mounted');

	await fetchData(Number(router.params.id));
});

const addModuleOpen = ref(false);
const toggleAddModule = (state: boolean) => {
	addModuleOpen.value = state;
};
const instructor = computed(() => {
	if (!data.value.instructor) {
		return ''
	} else {
		const { first_name, last_name } = data.value.instructor
		return [first_name, last_name].filter((nm) => !!nm).join(' ')
	}
})
</script>
<template>
	<main class="max-w-7xl w-full">
		<partial-loader v-if="is_loading"></partial-loader>

		<div class="grid grid-cols-12 gap-2 py-2 auto-rows-auto">

			<!--hero section -->
			<div
				class="row-start-1 row-end-2 col-span-12 md:col-start-1 md:col-end-8 p-4 h-80 md:h-96 md:row-start-1 md:row-end-2">
				<img :src="data.course_image_url" alt="" class="h-full object-cover w-full">

			</div>
			<!--Tags and title -->
			<div
				class="row-start-2 row-end-3 col-span-12 md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-8 bg-white-200 flex flex-col gap-2">
				<h1 class="text-4xl py-2">{{ data.title }}</h1>
				<div class="flex flex-wrap gap-2 ">
					<span v-for="tag of data.tags" class="border px-1 rounded-lg bg-slate-50">{{ tag }}</span>
				</div>
				<p>
					{{(moment(data.created).format('LLL'))}}
				</p>
				<p>
					<strong>Author: </strong> {{ instructor }}
				</p>
			</div>
			<!--Modules -->
			<div
				class="row-start-3 row-end-4 col-span-12 md:col-start-8 md:col-end-[-1] bg-white p-4 md:row-start-1 shadow-sm rounded border flex flex-col gap-2">
				<div class="flex items-center border-b justify-between p-2">
					<h1 class="font-medium text-xl">Course Modules</h1> <button
						class="flex text-white items-center gap-2 bg-primary py-1 px-4 rounded"><icon-plus-square
							:size="20"></icon-plus-square> Add</button>
				</div>
				<div v-if="data.modules && data.modules.length > 0">
					<div v-for="{ title } of data.modules">
						<span class="rounded-full h-fit border">&checkmark;</span> {{ title }}
					</div>
				</div>
				<div v-else>
					<p>Course crrently has no modules</p>
				</div>
			</div>
			<!-- Description -->
			<div
				class=" row-start-4 row-end-5 col-span-12 md:row-start-4 md:row-end-5 md:col-start-1 md:col-end-8  bg-white p-4">
				<p v-html="data.overview"></p>
			</div>
		</div>
	</main>
</template>

<style></style>
