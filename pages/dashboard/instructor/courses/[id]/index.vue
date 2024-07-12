<script lang="ts" setup>
import moment from "moment";
definePageMeta({
	layout: "instructor-layout",
	middleware: "instructor-auth"
});
const router = useRoute("dashboard-instructor-courses-id");
const course = useSingleCourse();

// const modules =
onMounted(() => {
	course.fetchData(Number(router.params.id));
});
const courseInfo = computed(() => course.data);
const addModuleOpen = ref(false);
const toggleAddModule = (state: boolean) => {
	addModuleOpen.value = state;
};
</script>
<template>
	<main>
		<partial-loader v-if="course.is_loading.value" />

		<div
			v-else-if="!course.is_loading.value && course.data.value"
			class="mx-auto gap-4 w-full p-4 grid lg:grid-cols-1"
		>
			<div class="flex flex-col gap-2 shadow border p-4 rounded">
				<div class="max-h-80 overflow-hidden">
					<img
						class="w-full h-full object-scale-down aspect-auto"
						:src="courseInfo.value.course_image_url"
					/>
				</div>
				<h1 class="font-bold text-3xl">
					{{ courseInfo.value.title }}
				</h1>
				<div class="flex items-center gap-2 flex-wrap">
					<span
						v-for="tag of courseInfo.value.tags"
						class="border px-2 rounded-full py-1 bg-slate-200 border-primary"
					>
						{{ tag }}
					</span>
				</div>
				<p class="whitespace-pre-wrap">
					<show-more
						:max_length="350"
						:content="courseInfo.value.overview"
					></show-more>
					<!-- {{ courseInfo.value.overview }} -->
				</p>
				<p>
					<strong> Instructor: </strong>
					<span>
						{{ courseInfo.value.instructor?.first_name }}
						{{ courseInfo.value.instructor?.last_name }}
					</span>
				</p>
				<p>
					Date created:
					{{ moment(courseInfo.value.created).format("LL") }}
				</p>
			</div>
			<div class="rounded">
				<div class="flex flex-col px-4 py-2 rounded">
					<div class="flex justify-end items-center">
						<!-- <h1 class="font-bold uppercase underline">Modules</h1> -->
						<cn-button
							@click="toggleAddModule(true)"
							class="bg-primary text-white p-2 rounded-lg w-fit gap-1 px-4 h-fit text-sm"
						>
							<icon
								:name="'flowbite:file-pen-outline'"
								size="20"
							/>
							<span> Add </span>
						</cn-button>
					</div>
					<div>
						<!-- modules -->
						<div
							v-for="(module, index) in courseInfo.value.modules"
							class="p-2 rounded-lg my-2"
						>
							<div class="grid grid-cols-[3rem_1fr]">
								<div
									class="border bg-primary h-10 w-10 rounded-full flex text-white font-semibold items-center justify-center"
								>
									<span>{{ index + 1 }}</span>
								</div>
								<div class="border p-2 rounded">
									<div class="flex items-center">
										<nuxt-link
											:to="{
												name: 'dashboard-instructor-courses-id-module_id',
												params: {
													id: courseInfo.value.id,
													module_id: module.id
												}
											}"
										>
											<icon
												:name="'mdi:eye-outline'"
											></icon>

											<span> View</span>
										</nuxt-link>
									</div>

									<h1 class="font-bold text-lg">
										{{ module.title }}
									</h1>
									<p>
										<show-more
											:content="module.description"
										></show-more>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-else>
			<h1>Something went wrong!</h1>
		</div>
		<dashboard-course-add-module
			v-if="courseInfo.value"
			:course_id="courseInfo.value.id"
			:is_create_module_dialog_open="addModuleOpen"
			@close="toggleAddModule"
		/>
	</main>
</template>

<style></style>
