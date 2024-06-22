<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { AxiosError } from 'axios'
import { createCourseModuleSchema } from '~/data/schemas/course-module-schema'

const { $privateAxios, $notify } = useNuxtApp()
const form = useForm({ validationSchema: createCourseModuleSchema })
const props = defineProps<{
	course_id: number
	is_create_module_dialog_open: boolean
}>();
const isLoading = ref(false)
const emit = defineEmits<{
	(event: 'close', value: boolean): void
}>()
const controller = ref<AbortController>()
const submitForm = form.handleSubmit(async (values) => {
	isLoading.value = true
	controller.value = new AbortController()
	try {
		await $privateAxios.post(`/api/courses/${props.course_id}/modules/`, values, {
			signal: controller.value.signal
		})
		await $notify.fire("Module created successfully", "success");
		emit('close', false)
		// emit('close', response.data)

	} catch (error) {
		if (error instanceof AxiosError) {
			$notify.fire({
				title: '',
				text: error.response?.data.detail ?? 'Something went wrong!',
				timer: 2000,
			})
		}

	} finally {
		isLoading.value = false

	}
	console.log({ values })
})
const abortRequest = () => {
	controller.value?.abort()
	// is_loading.value = false
}

onUnmounted(() => {
	if (controller.value)
		controller.value?.abort()
})


</script>
<template>
	<hui-dialog :open="is_create_module_dialog_open" @close="emit('close', false)"
		class="fixed inset-0 z-[999] overflow-y-auto">
		<div class="flex items-center justify-center min-h-screen w-screen bg-white bg-opacity-70 border ">
			<div class="bg-white border p-6 rounded-lg shadow-lg  w-full min-h-[20vh] max-w-xl">
				<hui-dialog-panel>
					<hui-dialog-title class="text-lg font-bold my-2">
						Create Module
					</hui-dialog-title>
					<hui-dialog-description class="text-gray-600">


					</hui-dialog-description>
					<form v-if="!isLoading" action="" class="w-full h-full border p-4 flex flex-col gap-4"
						@submit.prevent.stop="submitForm">
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
						<cn-button type="submit" class="bg-primary text-white p-2 rounded-lg w-full gap-2 text-sm">
							<icon :name="'fa-regular:save'" />
							<span>
								Save
							</span>
						</cn-button>
					</form>
					<spin-loader :controller="controller!" :on-abort-request="abortRequest" :is_loading="isLoading"
						v-if="isLoading" />


				</hui-dialog-panel>
			</div>
		</div>
	</hui-dialog>
</template>
