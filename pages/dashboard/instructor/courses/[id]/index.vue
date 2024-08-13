<script lang="ts" setup>
import moment from "moment";
import { useForm } from "vee-validate";
import { AxiosError } from "axios";
import { createCourseModuleSchema } from "~/data/schemas/course-module-schema";

definePageMeta({
	layout: "instructor-layout",
	middleware: "instructor-auth"
});
const { $privateAxios, $notify } = useNuxtApp()
const is_add_module_loading = ref(false)
const { params: { id: course_id } } = useRoute("dashboard-instructor-courses-id");
const { data, fetchData, is_loading } = useSingleCourse();
const form = useForm({ validationSchema: createCourseModuleSchema });
// const modules =
onMounted( () => {
	console.log("Mounted");

	 fetchData(Number(course_id));
});

const addModuleOpen = ref(false);
const toggleAddModule = (state: boolean) => {
	addModuleOpen.value = state;
};
const instructor = computed(() => {
	if (!data.value.instructor) {
		return "";
	} else {
		const { first_name, last_name } = data.value.instructor;
		return [first_name, last_name].filter((nm) => !!nm).join(" ");
	}
});

const controller = ref<AbortController>();
const submitAddCourseModuleForm = form.handleSubmit(async (values) => {
	is_add_module_loading.value = true;
	controller.value = new AbortController();
	try {
		await $privateAxios.post(`/api/courses/${course_id}/modules/`, values, {
			signal: controller.value.signal,
		});
		await $notify.fire("Module created successfully", "success");
		await fetchData(Number(course_id), true);
		toggleAddModule(false)
	} catch (error) {
		console.log({ error })
		if (error instanceof AxiosError) {
			$notify.fire({
				title: "",
				text: error.response?.data.detail ?? "Something went wrong!",
				timer: 2000,
			});
		}
	} finally {
		is_add_module_loading.value = false;
	}

});
const abortRequest = () => {
	controller.value?.abort();
	// is_loading.value = false
};

onUnmounted(() => {
	if (controller.value) controller.value?.abort();
});
</script>
<template>
	<main class="max-w-7xl w-full">
		<div class="p-2">
			<nuxt-link :to="{ name: 'dashboard-instructor-courses' }"
				class="flex items-center gap-2 border w-fit px-4 text-lg rounded-lg bg-primary text-white">
				<icon :name="'heroicons:arrow-small-left'" class="h-8 w-8"></icon>
				Back
			</nuxt-link>
		</div>
		<partial-loader v-if="is_loading"></partial-loader>

		<div class="grid grid-cols-12 gap-2 py-2 auto-rows-auto" v-if="!is_loading">

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
					<span v-for="tag of data.tags" class="border px-1 rounded-lg bg-slate-50">{{ tag
						}}</span>
				</div>
				<p>

					{{ (moment(data.created).format("LLL")) }}
				</p>
				<p>
					<strong>Author: </strong> {{ instructor }}
				</p>
			</div>
			<!--Modules -->
			<div
				class="row-start-3 row-end-4 col-span-12 md:col-start-8 md:col-end-[-1] bg-white p-4 md:row-start-1 shadow-sm rounded border flex flex-col gap-2">
				<div class="flex items-center border-b justify-between p-2">
					<h1 class="font-medium text-xl">Course Modules</h1>
					<button @click="toggleAddModule(true)"
						class="flex text-white items-center gap-2 bg-primary py-1 px-4 rounded">
						<icon-plus-square :size="20"></icon-plus-square>
						Add
					</button>
				</div>
				<div v-if="data.modules && data.modules.length > 0" class="flex flex-col gap-4">
					<div v-for="{ title, id: module_id } of data.modules" class="flex items-center justify-between">
						<div class="flex gap-2 items-center">
							<icon :name="'heroicons:check-circle'"></icon>
							<span class="">
								{{ title }}
							</span>
						</div>
						<div class="flex items-center gap-2">
							<nuxt-link
								:to="{ name: 'dashboard-instructor-courses-id-module_id', params: { id: course_id, module_id } }">
								<icon :name="'heroicons:eye'"></icon>
							</nuxt-link><button>
								<icon :name="'heroicons:pencil-square'"></icon>
							</button>
						</div>
					</div>
				</div>
				<div v-else>
					<p>Course currently has no modules</p>
				</div>
			</div>
			<!-- Description -->
			<div
				class=" row-start-4 row-end-5 col-span-12 md:row-start-4 md:row-end-5 md:col-start-1 md:col-end-8  bg-white p-4">
				<p v-html="data.overview"></p>
			</div>
		</div>
		<hui-transition-root appear :show="addModuleOpen" as="template">
			<hui-dialog as="div" @close="toggleAddModule(false)" class="relative z-[100]">
				<hui-transition-child as="template" enter="duration-300 ease-out" enter-from="opacity-0"
					enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
					<div class="fixed inset-0 bg-black/25" />
				</hui-transition-child>
				<div class="flex min-h-full items-center justify-center p-4 text-center bg-black/70 fixed top-0 w-full">
					<hui-transition-child as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
						enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
						leave-to="opacity-0 scale-95">
						<hui-dialog-panel
							class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
							<hui-dialog-title as="h3" class="text-lg font-medium leading-6 text-gray-900">
								Create new Module
							</hui-dialog-title>
							<form v-if="!is_add_module_loading" action="" class="w-full h-full p-4 flex flex-col gap-4"
								@submit.prevent.stop="submitAddCourseModuleForm">
								<cn-form-field #="{ componentField }" as="div" :name="'title'"
									class="flex flex-col gap-2 w-full">
									<cn-form-label for="title">Title</cn-form-label>
									<cn-form-control>
										<cn-input v-bind="componentField" name="title" placeholder="Module title" />
									</cn-form-control>
									<cn-form-message />
								</cn-form-field>
								<cn-form-field #="{ componentField }" as="div" :name="'description'"
									class="flex flex-col gap-2 w-full">
									<cn-form-label for="description">Description</cn-form-label>
									<cn-form-control>
										<cn-textarea v-bind="componentField" name="description"
											placeholder="Module description" />
									</cn-form-control>
									<cn-form-message />
								</cn-form-field>
								<cn-button type="submit"
									class="bg-primary text-white p-2 rounded-lg w-full gap-2 text-sm">
									<icon :name="'fa-regular:save'" />
									<span> Save </span>
								</cn-button>
							</form>
							<spin-loader :controller="controller!" :on-abort-request="abortRequest"
								:is_loading="is_add_module_loading" v-if="is_add_module_loading" />

							<!-- <div class="mt-4">
								<button type="button"
									class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
									@click="toggleAddModule(false)">
									Got it, thanks!
								</button>
							</div> -->
						</hui-dialog-panel>
					</hui-transition-child>
				</div>
			</hui-dialog>
		</hui-transition-root>
	</main>
</template>

<style></style>
