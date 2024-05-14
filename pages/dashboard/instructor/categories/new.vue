<script setup lang="ts">
import { AxiosError } from "axios";
import { useForm } from "vee-validate";
import { createCourseCategorySchema, } from "~/data";
definePageMeta({
	layout: "instructor-layout",
});
const { $API, $privateAxios, $notify } = useNuxtApp();

type OrgType = {
	id: string
	name: string
	logo?: string
}
const organizations = ref<OrgType[]>([]);
onMounted(async () => {
	isOrganizationLoading.value = true;
	try {
		const feedback = await $privateAxios.get("/api/organizations/");
		organizations.value = feedback.data;
		// $notify.fire("Organizations loaded", "success")
	} catch (error) {
		console.log(error);
	} finally {
		isOrganizationLoading.value = false;
	}
});
const api = new $API($privateAxios);
const isLoading = ref(false);
const router = useRouter();
const { isSubmitting, handleSubmit } = useForm({
	validationSchema: createCourseCategorySchema,
	keepValuesOnUnmount: true,
})

const isOrganizationLoading = ref(false);
const submitForm = handleSubmit(async (values) => {

	isLoading.value = true;
	try {
		await api.post("/api/categories/", values);
		await $notify.fire("Category created", "success");
		await router.push({ name: "dashboard-instructor-categories" });
	} catch (error) {
		if (error instanceof AxiosError) {
			$notify.fire({
				title: '',
				text: error.response?.data.detail,
				timer: 2000,
			})
		}
	} finally {
		isLoading.value = false;
	}
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
			<cn-form-field #="{ componentField }" as="div" :name="'organization'" class="flex flex-col gap-2 w-full">
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
								<cn-select-item :value="org.id" v-for="org of organizations">{{ org.name
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
				v-if="!isOrganizationLoading && organizations.length > 0">Add category</cn-button>
		</form>
	</div>
</template>

<style scoped></style>
