<script lang="ts" setup>
import { AxiosError } from 'axios';
import { useForm } from 'vee-validate';
import { createCourseSchema, type CreateCourseType } from '~/data/schemas/course-schema';


const { $privateAxios, $notify } = useNuxtApp()
const router = useRouter()
// const api = new $API($privateAxios)
const category = useCourseCategories()
const organization = useOrganizations()
const imageUpload =
	useUseImageUpload('create-course-image', 'single')
onMounted(async () => {
	category.fetchData({ limit: 100, page: 1 })
	organization.fetchData()
})

const isLoading = ref(false)


definePageMeta({
	layout: "instructor-layout",
	middleware: 'instructor-auth'
});

const { isSubmitting, handleSubmit, values: formValues } = useForm<CreateCourseType>({
	validationSchema: createCourseSchema,


})
const submitForm = handleSubmit(async (values) => {
	console.log({ values });

	isLoading.value = true;
	try {
		if (imageUpload.has_files.value) {
			(values as any)['course_image'] = imageUpload.uploaded_files.value['create-course-image'][0]
		}
		await $privateAxios.post("/api/courses/", values, {
			headers: {
				"Content-Type": 'multipart/form-data'
			}
		});
		await $notify.fire("Course created successfully", "success");
		imageUpload.clearFiles()
		await router.push({ name: "dashboard-instructor-courses" });
	} catch (error) {
		if (error instanceof AxiosError) {
			$notify.fire({
				title: '',
				text: error.response?.data.detail ?? 'Something went wrong!',
				timer: 2000,
			})
		}
	} finally {
		isLoading.value = false;
	}
})
</script>

<template>
	<div class="w-full flex items-start">
		<form @submit.prevent="submitForm"
			class="bg-white p-4 md:p-10 rounded-lg  w-full max-w-6xl mx-auto mt-4 min-h-[40vh] flex flex-col gap-4 justify-center">
			<div class="flex justify-center items-center p-4">
				<div class=" bg-slate-100 rounded-full border-1">
					<img v-if="imageUpload.has_previews.value"
						src="https://avatars.githubusercontent.com/u/150797856?s=200&v=4" alt="logo"
						class="h-20 w-20 object-cover rounded-full">
					<!-- <img v-if="imageUpload.has_previews.value"
						:src="imageUpload.uploaded_previews.value['create-course-image'][0].preview"
						class="max-w-80 max-h-80 w-full h-full object-cover border" /> -->
				</div>
			</div>
			<cn-form-field #="{ componentField }" as="div" :name="'title'" class="flex flex-col gap-2 w-full">
				<cn-form-label for="title">Title</cn-form-label>
				<cn-form-control>
					<cn-input v-bind="componentField" name="title" placeholder="Category title" />
				</cn-form-control>
				<cn-form-message />
			</cn-form-field>
			<div class="grid md:grid-cols-2 gap-4 items-center align-middle">


				<cn-form-field #="{ componentField }" as="div" :name="'organization'"
					class="flex flex-col gap-2 w-full">
					<cn-form-item>
						<cn-form-label for="organization">Organization</cn-form-label>
						<cn-select v-bind="componentField">
							<cn-form-control>
								<cn-select-trigger>
									<cn-select-value :placeholder="'Select organization'" />
								</cn-select-trigger>
							</cn-form-control>
							<cn-select-content>
								<cn-select-group>
									<cn-select-item :value="org.id" v-for="org of organization.data.value">{{
										org.name
									}}</cn-select-item>
								</cn-select-group>
							</cn-select-content>
						</cn-select>
						<cn-form-message />
					</cn-form-item>
				</cn-form-field>
				<cn-form-field #="{ componentField }" as="div" :name="'category'" class="flex flex-col gap-2 w-full">
					<cn-form-item>
						<cn-form-label for="category">Category</cn-form-label>
						<cn-select v-bind="componentField">
							<cn-form-control>
								<cn-select-trigger>
									<cn-select-value :placeholder="'Select category'" />
								</cn-select-trigger>
							</cn-form-control>
							<cn-select-content>
								<cn-select-group>
									<cn-select-item :value="cat.id" v-for="cat of category.data.value.data">{{
										cat.title
									}}</cn-select-item>
								</cn-select-group>
							</cn-select-content>
						</cn-select>
						<cn-form-message />
					</cn-form-item>
				</cn-form-field>


				<cn-form-field #="{ componentField }" as="div" :name="'is_private'" class="flex flex-col gap-2 w-full">
					<cn-form-item>
						<cn-form-label for="is_private">Is this course private?</cn-form-label>
						<cn-select v-bind="componentField">
							<cn-form-control>
								<cn-select-trigger>
									<cn-select-value :placeholder="'Select below'" />
								</cn-select-trigger>
							</cn-form-control>
							<cn-select-content>
								<cn-select-group>
									<cn-select-item :value="true">Yes
									</cn-select-item><cn-select-item :value="false">No</cn-select-item>
								</cn-select-group>
							</cn-select-content>
						</cn-select>
						<cn-form-message />
					</cn-form-item>
				</cn-form-field>
				<cn-form-field #="{ componentField }" as="div" :name="'is_premium'" class="flex flex-col gap-2 w-full">
					<cn-form-item>
						<cn-form-label for="is_premium">Is this Paid?</cn-form-label>
						<cn-select v-bind="componentField">
							<cn-form-control>
								<cn-select-trigger>
									<cn-select-value :placeholder="'Select below'" />
								</cn-select-trigger>
							</cn-form-control>
							<cn-select-content>
								<cn-select-group>
									<cn-select-item :value="true">Yes
									</cn-select-item><cn-select-item :value="false">No</cn-select-item>
								</cn-select-group>
							</cn-select-content>
						</cn-select>
						<cn-form-message />
					</cn-form-item>
				</cn-form-field>
				<cn-select>
				</cn-select>
			</div>
			<cn-form-field #="{ componentField }" as="div" :name="'tags'" class="flex flex-col gap-2 w-full">
				<cn-form-label for="title">Tags (comma separated)</cn-form-label>
				<cn-form-control>
					<cn-input v-bind="componentField" name="tags" placeholder="e.g course,new course" />
				</cn-form-control>
				<cn-form-message />
			</cn-form-field>
			<cn-form-field #="{ componentField }" as="div" :name="'overview'" class="flex flex-col gap-2 w-full">
				<cn-form-label for="overview">Course Overview</cn-form-label>
				<cn-form-control>
					<cn-textarea v-bind="componentField" name="overview" placeholder="Course Overview" />
				</cn-form-control>
				<cn-form-message />
			</cn-form-field>
			<!-- <cn-form-field #="{ componentField }" as="div" :name="'overview'" class="flex flex-col gap-2 w-full">
				<cn-form-label for="overview">Course Overview</cn-form-label>
				<cn-form-control>
					<cn-textarea v-bind="componentField" name="overview" placeholder="Course Overview" />
				</cn-form-control>
				<cn-form-message />
			</cn-form-field> -->
			<div class="flex justify-center">
				<img v-if="imageUpload.has_previews.value"
					:src="imageUpload.uploaded_previews.value['create-course-image'][0].preview"
					class="max-w-52 max-h-52" />
			</div>
			<label for="course_image"
				class="w-full p-4 border-4 rounded-lg border-gray-500 border-dotted flex justify-center items-center">
				<input name="course_image" id="course_image" type="file" accept="image/*" hidden
					@change="imageUpload.handleFileUpload">
				<div class="flex flex-col justify-center items-center">
					<Icon :name="'humbleicons:upload'" class="text-3xl text-slate-400 rounded-full" />

					<span class="">
						Click to upload
					</span>
				</div>


			</label>

			<cn-button class="bg-primary text-white p-2 rounded-lg w-full mb-4" :disabled="isSubmitting"
				v-if="!category.is_loading.value && !organization.is_loading.value && category.data.value.data && organization.data.value">Add
				course</cn-button>
		</form>
	</div>
</template>

<style scoped></style>
