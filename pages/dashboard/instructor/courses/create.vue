<script lang="ts" setup>
import { useForm } from 'vee-validate';
import { createCourseSchema } from '~/data/schemas/course-schema';
const categories = useCourseCategories()
onMounted(async()=>{
  categories.fetchData({limit:100,page:1})
})


definePageMeta({
	layout: "instructor-layout",
	middleware:'instructor-auth'
});

const { isSubmitting, handleSubmit } = useForm({
	validationSchema: createCourseSchema,
	keepValuesOnUnmount: true,
})
const submitForm = handleSubmit(async (values) => {

// isLoading.value = true;
// try {
//   await api.post("/api/courses//", values);
//   await $notify.fire("Category created", "success");
//   await router.push({ name: "dashboard-instructor-categories" });
// } catch (error) {
//   if (error instanceof AxiosError) {
//     $notify.fire({
//       title: '',
//       text: error.response?.data.detail,
//       timer: 2000,
//     })
//   }
// } finally {
//   isLoading.value = false;
// }
})
</script>

<template>
  <div>
    <form action="" @submit.prevent="submitForm"
			class="bg-white p-4 rounded-lg shadow-md w-full max-w-xl mx-auto mt-4 border min-h-[40vh] flex flex-col gap-2 justify-center">
			<div class="flex justify-center items-center p-4">
				<div class="h-20 w-20 bg-slate-100 rounded-full border-1">
					<img src="https://avatars.githubusercontent.com/u/150797856?s=200&v=4" alt="logo"
						class="w-full h-full object-cover rounded-full">
				</div>
			</div>
			<cn-form-field #="{ componentField }" as="div" :name="'title'" class="flex flex-col gap-2 w-full">
				<cn-form-label for="title">Title</cn-form-label>
				<cn-form-control>
					<cn-input v-bind="componentField" name="title" placeholder="Category title" />
				</cn-form-control>
				<cn-form-message />
			</cn-form-field>
			<cn-form-field #="{ componentField }" as="div" :name="'category'" class="flex flex-col gap-2 w-full">
				<cn-form-item>
					<cn-form-label for="category">Category</cn-form-label>
					<cn-select v-bind="componentField" >
						<cn-form-control>
							<cn-select-trigger>
								<cn-select-value :placeholder="'Select category'" />
							</cn-select-trigger>
						</cn-form-control>
						<cn-select-content>
							<cn-select-group>
								<cn-select-item :value="cat.id" v-for="cat of categories.categories.value.data">{{ cat.title
									}}</cn-select-item>
							</cn-select-group>
						</cn-select-content>
					</cn-select>
					<cn-form-message />
				</cn-form-item>
			</cn-form-field>
			<cn-select>

			</cn-select>


			<cn-button class="bg-primary text-white p-2 rounded-lg w-full mb-4" :disabled="isSubmitting"
				v-if="!categories.is_loading.value && categories.categories.value.data">Add course</cn-button>
		</form>  </div>
</template>

<style scoped></style>
