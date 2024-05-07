<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const loginFormSchema = toTypedSchema(z.object({
	username_or_email: z.string().min(3).max(30),
	password: z.string().max(20).min(6),
	show_password: z.boolean().optional().default(false)
}))

definePageMeta({
	middleware: ["open-auth"],
});
const { $openAxios, $notify } = useNuxtApp();
type LoginUserType = typeof loginFormSchema
const { isSubmitting, handleSubmit, ...all } = useForm({
	validationSchema: loginFormSchema, initialValues: {
		password: '',
		username_or_email: ''
	},
	keepValuesOnUnmount: true,

})


const showPassword = ref(false);
// const $v = useVuelidate(rules, form);
const auth = useAuthStore();
const isLoading = ref(false);
const router = useRouter();
const submitForm = handleSubmit(async (values) => {
	// delete values['show_password']

	// isLoading.value = true;
	try {
		const response = await $openAxios.post("/auth/login/", values)

		if (response.status === 200 || response.status === 201) {
			console.log(response.data);
			auth.login({
				access_token: response.data.access_token,
				refresh_token: response.data.refresh_token,
				username: response.data.username,
				user_role: response.data.user_role,
				id: response.data.id,
				organizations: response.data.organizations ?? []
			});
			await $notify.fire({
				title: "Success",
				icon: "success",
				confirmButtonText: "Close",
				text: "Login successful"
			});
			await router.push(auth.dashboardUrl ?? "/");
		} else {
			console.log(response.data);

		}
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		console.error({ error });
		if (error.response.data.detail) {
			$notify.fire({
				title: "Error",
				icon: "error",
				confirmButtonText: "Close",
				text: error.response.data.detail
			});
		}
	} finally {
		isLoading.value = false;
	}
})
</script>

<template>
	<div class="bg-gray-100 p-4 md:p-10 min-h-[100vh] flex justify-center items-center">
		<max-width-wrapper class-name="flex items-center justify-center">
			<form @submit.prevent.stop="submitForm!"
				class="min-h-[50vh] w-full max-w-xl bg-white p-4 md:p-10 rounded-lg shadow-md gap-5 flex flex-col justify-center items-center">
				<div>
					<div class="flex items-center justify-center">
						<img src="https://avatars.githubusercontent.com/u/150797856?s=200&v=4" alt=""
							class="h-20 w-20 object-cover rounded-full border border-primary">
					</div>
					<h1 class="text-center">
						<nuxt-link href="/" class="text-2xl font-bold text-primary uppercase tracking-wider">Learning
							Africa</nuxt-link>
					</h1>
				</div>
				<cn-form-field #="{ componentField }" as="div" :name="'username_or_email'"
					class="flex flex-col gap-2 w-full md:w-96">
					<cn-form-label for="username_or_email">Email/username</cn-form-label>
					<cn-form-control>
						<cn-input v-bind="componentField" name="username_or_email" placeholder="username/email" />
					</cn-form-control>
					<cn-form-message />
				</cn-form-field>

				<cn-form-field #="{ componentField, }" as="div" :name="'password'"
					class="flex flex-col gap-2 w-full md:w-96 text-left">
					<cn-label for="password" class="text-left">Password</cn-label>
					<cn-form-control>

						<cn-input v-bind="componentField" :type="showPassword ? 'text' : 'password'" id="password"
							name="password" placeholder="********" />

					</cn-form-control>
					<cn-form-message />
				</cn-form-field>

				<cn-form-field #="{ value, handleChange }" name="show_password" :as="'div'"
					class="flex w-full md:w-96 items-center gap-2 show-passsword-wrapper">
					<cn-checkbox id="show_password" name="show_password" :value="value"
						@update:checked="handleChange" />
					<cn-label for="show_password">Show password</cn-label>
				</cn-form-field>
				<div class="flex flex-col gap-2 w-full md:w-96">
					<cn-button variant="default"
						:class="isSubmitting ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary text-white p-2 rounded-md w-full hover:bg-primary-dark transition duration-300 ease-in-out'"
						class="bg-primary text-white p-2 rounded-md w-full hover:bg-primary-dark transition duration-300 ease-in-out">
						{{ isSubmitting ? "Loading..." : "Login" }}
					</cn-button>

				</div>
				<p>
					Don't have an account? <nuxt-link href="/register"
						class="text-blue-500 hover:underline transition duration-300 ease-in-out">Register</nuxt-link>
				</p>
			</form>

			<!-- <form class="w-2/3 space-y-6">
				<CnFormField v-slot="{ componentField }" name="username_or_email" :validate-on-blur="!isFieldDirty">
					<CnFormItem>
						<CnFormLabel>Username</CnFormLabel>
						<CnFormControl>
							<CnInput type="text" placeholder="shadcn" v-bind="componentField" />
						</CnFormControl>
						<CnFormMessage />
					</CnFormItem>
				</CnFormField>
				<CnButton type="submit" v-on:click="submitForm">
					Submit
				</CnButton>
			</form> -->
		</max-width-wrapper>
	</div>
</template>

<style scoped>
input {
	@apply border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full;
}

label {
	@apply text-gray-600 uppercase text-sm;
}

.show-passsword-wrapper {
	/* @apply w-full; */
}

.show-passsword-wrapper input {
	@apply border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-5 w-5;
}
</style>
