<script lang="ts" setup>
import {useForm} from "vee-validate";
import {AxiosError} from "axios";
import {createCourseModuleSchema} from "~/data/schemas/course-module-schema";

definePageMeta({
	layout: "instructor-layout",
	middleware: "instructor-auth"
});
const {$privateAxios, $notify} = useNuxtApp();
const {
	handleSubmit,
	setFieldValue
} = useForm({validationSchema: createCourseModuleSchema});
const {
	params: {
		id: course_id,
		module_id
	}
} = useRoute("dashboard-instructor-courses-id-module_id");

const courseModule = useSingleCourseModule();

onMounted(async () => {
	await courseModule.fetchData({
		course_id: Number(course_id),
		module_id: Number(module_id)
	});

});
const is_add_content_dialog_open = ref(false);
const is_update_module_open = ref(false);
const is_update_module_loading = ref(false);
const controller = ref<AbortController>();

const abortRequest = () => {
	controller.value?.abort();
	// is_loading.value = false
};

onUnmounted(() => {
	if (controller.value) controller.value?.abort();
});
const toggleAddContent = (state: boolean) => {
	is_add_content_dialog_open.value = state;
};
const toggleEditModule = (state: boolean) => {
	if (state) {
		if (courseModule!.data.value.title) {
			const {title, description} = courseModule!.data.value;
			setFieldValue("title", title);
			setFieldValue("description", description);
		}
	}
	is_update_module_open.value = state;
};
const submitUpdateCourseModuleForm = handleSubmit(async (values) => {
	is_update_module_loading.value = true;
	controller.value = new AbortController();
	try {
		await $privateAxios.put(`/api/courses/${course_id}/modules/${module_id}/`, values, {
			signal: controller.value.signal
		});
		await $notify.fire("Module updated successfully", "success");
		const params = {
			course_id: Number(course_id),
			module_id: Number(module_id)

		};
		await courseModule.fetchData(params, true);
		toggleEditModule(false);
	} catch (error) {
		console.log({error});
		if (error instanceof AxiosError) {
			$notify.fire({
				title: "",
				text: error.response?.data.detail ?? "Something went wrong!",
				timer: 2000
			});
		}
	} finally {

		is_update_module_loading.value = false;
	}

});
</script>
<template>
	<div class="py-4 max-w-7xl">
		<div class="p-2 flex justify-between w-full items-center border-b">
			<nuxt-link
				:to="{ name: 'dashboard-instructor-courses-id', params: { id: course_id } }"
				class="flex items-center text-md rounded-lg border-black border text-black pr-2">
				<icon :name="'heroicons:arrow-small-left'"
					  class="h-8 w-8"></icon>
				 Back
			</nuxt-link>
			<div class="flex justify-end gap-2 items-center">
				<button class="flex items-center"
						@click="toggleEditModule(true)">
					<icon :name="'heroicons:pencil-square'"
						  class="h-8 w-8 border-black border"></icon>
				</button>

				<nuxt-link :to="{
					name: 'dashboard-instructor-courses-id-module_id-add-content',
					params: { id: course_id, module_id },
				}" class="rounded flex items-center"
						   @click="toggleAddContent(true)">
					<icon :name="'heroicons:document-plus'"
						  class="h-8 w-8"></icon>
				</nuxt-link>
			</div>
		</div>
		<partial-loader v-if="courseModule.is_loading.value" />

		<div
			v-else-if="!courseModule.is_loading.value && courseModule.data.value">
			<!-- Action buttons -->

			<div class="flex flex-col gap-2 p-4">
				<h1 class="font-bold text-3xl">
					{{ courseModule!.data.value.title }}
				</h1>
				<p class="whitespace-pre-wrap">
					{{ courseModule!.data.value.description }}
				</p>
			</div>
		</div>
		<div v-if="courseModule.data.value && !courseModule.is_loading.value">
			<!-- If content length is zero -->
			<div v-if="
				Array.isArray(courseModule.data.value.contents) &&
				courseModule.data.value.contents.length === 0
			">
				<div class="flex flex-col gap-2 p-4">
					<p class="text-center">No content available</p>
				</div>
			</div>
			<!-- If content length is not zero -->
			<div v-else>
				<div class="flex flex-col gap-2 mt-4">
					<div
						v-for="(content,index) of courseModule.data.value.contents"
						:key="content.id">
						<nuxt-link :to="{name:'dashboard-instructor-courses-id-module_id-content_id',params:{
							course_id,
							module_id,
							content_id:content.id
						}}" class="flex items-center gap-2 border p-2 rounded visited:text-red-500 hover:text-blue-500">
							<div
								class="border h-8 w-8 flex items-center justify-center rounded-lg ">
								{{ index + 1 }}
							</div>
							<h1 class="text-xl">
								{{ content.title }}
							</h1>

						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
		<hui-transition-root :show="is_update_module_open" appear as="template">
			<hui-dialog as="div" class="relative z-[100]"
						@close="toggleEditModule(false)">
				<hui-transition-child as="template"
									  enter="duration-300 ease-out"
									  enter-from="opacity-0"
									  enter-to="opacity-100"
									  leave="duration-200 ease-in"
									  leave-from="opacity-100"
									  leave-to="opacity-0">
					<div class="fixed inset-0 bg-black/25" />
				</hui-transition-child>
				<div
					class="flex min-h-full items-center justify-center p-4 text-center bg-black/70 fixed top-0 w-full">
					<hui-transition-child as="template"
										  enter="duration-300 ease-out"
										  enter-from="opacity-0 scale-95"
										  enter-to="opacity-100 scale-100"
										  leave="duration-200 ease-in"
										  leave-from="opacity-100 scale-100"
										  leave-to="opacity-0 scale-95">
						<hui-dialog-panel
							class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
							<hui-dialog-title as="h3"
											  class="text-lg font-medium leading-6 text-gray-900">
								Update module
							</hui-dialog-title>
							<form v-if="!is_update_module_loading" action=""
								  class="w-full h-full p-4 flex flex-col gap-4"
								  @submit.prevent.stop="submitUpdateCourseModuleForm">
								<cn-form-field #="{ componentField }" :name="'title'"
											   as="div"
											   class="flex flex-col gap-2 w-full">
									<cn-form-label for="title">Title
									</cn-form-label>
									<cn-form-control>
										<cn-input name="title"
												  placeholder="Module title"
												  v-bind="componentField" />
									</cn-form-control>
									<cn-form-message />
								</cn-form-field>
								<cn-form-field #="{ componentField }" :name="'description'"
											   as="div"
											   class="flex flex-col gap-2 w-full">
									<cn-form-label for="description">
										Description
									</cn-form-label>
									<cn-form-control>
										<cn-textarea name="description"
													 placeholder="Module description"
													 v-bind="componentField" />
									</cn-form-control>
									<cn-form-message />
								</cn-form-field>
								<cn-button class="bg-primary text-white p-2 rounded-lg w-full gap-2 text-sm"
										   type="submit">
									<icon :name="'fa-regular:save'" />
									<span> Save </span>
								</cn-button>
							</form>
							<spin-loader v-if="is_update_module_loading"
										 :controller="controller!"
										 :is_loading="is_update_module_loading"
										 :on-abort-request="abortRequest" />
						</hui-dialog-panel>
					</hui-transition-child>
				</div>
			</hui-dialog>
		</hui-transition-root>

	</div>
</template>

<style scoped></style>
