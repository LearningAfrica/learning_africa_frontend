<script lang="ts" setup>
import { useVuelidate } from "@vuelidate/core";
import {
	minLength, required, helpers
} from "@vuelidate/validators";

definePageMeta({
	middleware: ["open-auth"],
});
const { $openAxios, $notify } = useNuxtApp();
type LoginUserType = {
	username_or_email: string
	password: string
}

const form = ref<LoginUserType>({
	username_or_email: "",
	password: "",
});

const rules = {
	username_or_email: {
		required: helpers.withMessage("Username or email is required", required),

	},
	password: {
		required: required,
		minLength: helpers.withMessage("Password must be at least 6 characters", minLength(6)),
	},
};
const showPassword = ref(false);
const $v = useVuelidate(rules, form);
const auth = useAuthStore();
const isLoading = ref(false);
const router = useRouter();
const handleSubmit = async () => {
	console.log("submitting");

	$v.value.$validate();
	if ($v.value.$error) {
		return;
	}

	isLoading.value = true;
	try {
		const response = await $openAxios.post("/auth/login/", form.value);
		if (response.status === 200 || response.status === 201) {
			console.log(response.data);
			auth.login({
				access_token: response.data.access_token,
				refresh_token: response.data.refresh_token,
				username: response.data.username,
				user_role: response.data.user_role,
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
};
</script>

<template>
	<div class="bg-gray-100 p-4 md:p-10 min-h-[100vh] flex justify-center items-center">
		<max-width-wrapper class-name="flex items-center justify-center">
			<form action="" @submit.prevent.stop="handleSubmit"
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
				<div class="flex flex-col gap-2 w-full md:w-96">
					<label for="username_or_email">Email/username</label>
					<input type="text" id="email" name="username_or_email" placeholder="username/email"
						v-model="form.username_or_email" />
					<div v-if="$v.username_or_email.$error" class="text-red-500">
						<p v-for="error of $v.username_or_email.$errors" :key="error.$uid">
							{{ error.$message }}
						</p>
					</div>
				</div>

				<div class="flex flex-col gap-2 w-full md:w-96">
					<label for="password">Password</label>
					<input :type="showPassword ? 'text' : 'password'" id="password" name="password"
						placeholder="********" v-model="form.password" />
					<div v-if="$v.password.$error" class="text-red-500">
						<p v-for="error of $v.password.$errors" :key="error.$uid">
							{{ error.$message }}
						</p>
					</div>
				</div>
				<!-- Show password -->
				<div class="flex w-full md:w-96 items-center gap-2 show-passsword-wrapper">
					<input type="checkbox" id="show_password" name="show_password" v-model="showPassword" />
					<label for="show_password">Show password</label>
				</div>
				<div class="flex flex-col gap-2 w-full md:w-96">
					<button type="submit"
						:class="isLoading ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary text-white p-2 rounded-md w-full hover:bg-primary-dark transition duration-300 ease-in-out'"
						class="bg-primary text-white p-2 rounded-md w-full hover:bg-primary-dark transition duration-300 ease-in-out">
						{{ isLoading ? "Loading..." : "Login" }}
					</button>
				</div>
				<p>
					Don't have an account? <nuxt-link href="/register"
						class="text-blue-500 hover:underline transition duration-300 ease-in-out">Register</nuxt-link>
				</p>
			</form>
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
