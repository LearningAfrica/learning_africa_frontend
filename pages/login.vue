<script lang="ts" setup>
import { useVuelidate } from "@vuelidate/core";
import {
	minLength, required, helpers
} from "@vuelidate/validators";

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
		required: helpers

	},
	password: {
		required: required,
		minLength: minLength(6),
	},
};

const $v = useVuelidate(rules, form);

const handleSubmit = () => {
	console.log("submitting");

	$v.value.$validate();
	if ($v.value.$error) {
		return;
	}
	console.log(form);
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
          <input type="password" id="password" name="password" placeholder="********" v-model="form.password" />
          <div v-if="$v.password.$error" class="text-red-500">
            <p v-for="error of $v.password.$errors" :key="error.$uid">
              {{ error.$message }}
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-2 w-full md:w-96">
          <button type="submit"
            class="bg-primary text-white p-2 rounded-md w-full hover:bg-primary-dark transition duration-300 ease-in-out">Login</button>
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
</style>
