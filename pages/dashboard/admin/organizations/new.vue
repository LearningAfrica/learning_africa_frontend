<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import {
	required, helpers
} from "@vuelidate/validators";
import { AxiosError } from "axios";
const imageUpload =
	useUseImageUpload('create-organization-image', 'single')
definePageMeta({
	layout: "admin-layout",
});
type OrganizationType = {
	name: string;
};
const { $API, $privateAxios, $notify } = useNuxtApp();

const api = new $API<OrganizationType>($privateAxios);

const form = ref<OrganizationType>({
	name: "",

});


const isLoading = ref(false);
const rules = {
	name: {
		required: helpers.withMessage("Organization name is required", required),
	},


};

const router = useRouter();

const $v = useVuelidate(rules, form);

const handleSubmit = async () => {
	$v.value.$validate();
	if ($v.value.$error) {
		return;
	}
	isLoading.value = true;
	const data = new FormData();
	data.append("name", form.value.name);
	if (imageUpload.has_files.value)
		data.append("logo", imageUpload.uploaded_files.value['create-organization-image'][0]);

	try {
		// const response =
		await $privateAxios.post<OrganizationType>("/api/organizations/", data, {
			headers: {
				"Content-Type": "multipart/form-data",
			},

		});
		await $notify.fire({
			title: "Success",
			icon: "success",
			confirmButtonText: "Close",
			text: "Organization added successfully"
		});
		form.value.name = "";
		imageUpload.clearFiles()

		await router.push({ name: "dashboard-admin-organizations" });
	} catch (error) {
		console.log(error);
		if (error instanceof AxiosError) {

			await $notify.fire({
				title: "Error",
				icon: "error",
				confirmButtonText: "Close",
				text: error.response!.data.detail
			});
		}
		await $notify.fire({
			title: "Error",
			icon: "error",
			confirmButtonText: "Close",
			text: "An error occurred"
		}
		);
	} finally {
		isLoading.value = false;
	}


};



</script>
<template>
	<div>
		<form action="" @submit.prevent.stop="handleSubmit"
			class="bg-white p-4 rounded-lg shadow-md w-full sm:w-1/2 mx-auto mt-4 border min-h-[40vh] flex flex-col justify-center gap-4">
			<div class="flex justify-center items-center p-4">
				<div class="h-20 w-20 bg-slate-100 rounded-full border-1"></div>
			</div>
			<div class="flex flex-col gap-2 w-full">
				<label for="name">Organization name</label>
				<input :disabled="isLoading" type="text" id="name" name="name" placeholder="Organization name"
					v-model="form.name" />
				<div v-if="$v.name.$error" class="text-red-500">
					<p v-for="error of $v.name.$errors" :key="error.$uid">
						{{ error.$message }}
					</p>
				</div>
			</div>
			<div class="flex flex-col gap-2 w-full">
				<label for="logo">Logo</label>
				<input :disabled="isLoading" type="file" allow="image/*" id="logo" name="logo"
					placeholder="https://logo.png" @change="imageUpload.handleFileUpload" />

			</div>

			<button :disabled="$v.$error || isLoading" class="bg-primary text-white p-2 rounded-lg w-full mb-4">
				{{ isLoading ? "Loading..." : "Add organization" }}
			</button>
		</form>
	</div>
</template>

<style scoped>
input {
	@apply border border-gray-300 p-2 rounded-md
}
</style>
