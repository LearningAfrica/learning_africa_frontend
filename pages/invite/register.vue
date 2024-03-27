<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { minLength, required, email, helpers } from "@vuelidate/validators";

definePageMeta({
	middleware: ["open-auth"],
});
type RegisterForm = {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  confirm_password: string;
};

const form = ref<RegisterForm>({
	first_name: "",
	last_name: "",
	username: "",
	email: "",
	password: "",
	confirm_password: "",
});
const rules = {
	first_name: {
		required: helpers.withMessage("First name is required", required),
	},
	last_name: {
		required: helpers.withMessage("Last name is required", required),
	},
	username: {
		required: helpers.withMessage("Username is required", required),
	},
	email: {
		required: helpers.withMessage("Email is required", required),
		email: helpers.withMessage("Email must be valid", email),
	},
	password: {
		required: helpers.withMessage("Password is required", required),
		minLength: helpers.withMessage(
			"Password must be at least 6 characters",
			minLength(6)
		),
		// minLength(6, "Password must be at least 6 characters"),
	},
	confirm_password: {
		required: helpers.withMessage("Confirm password is required", required),
		sameAsPassword: helpers.withMessage("Passwords do not match", sameAsPassword),
	},
};

function sameAsPassword(value: string,) {
	return form.value.password === value;
}

const $v = useVuelidate(rules, form);
const showPassword = ref(false);

const handleSubmit = () => {
	// alert("Something good");
	console.log("submitting");
	$v.value.$validate();
	// $v.$touch();
	if ($v.value.$error) {
		return;
	}
	console.log(form.value);
};
</script>

<template>

  <div class="bg-gray-100 p-4 md:p-10 min-h-[100vh] flex justify-center items-center">
    <max-width-wrapper class-name="flex items-center justify-center">
      <form @submit.prevent.stop="handleSubmit"
        class="min-h-[50vh] w-full max-w-xl bg-white p-4 md:p-10 rounded-lg shadow-md gap-5 flex flex-col justify-center items-center">
        <div>
          <div class="flex items-center justify-center">
            <img src="https://avatars.githubusercontent.com/u/150797856?s=200&v=4" alt=""
              class="h-20 w-20 object-cover rounded-full border border-primary" />
          </div>
          <h1 class="text-center">
            <nuxt-link href="/" class="text-2xl font-bold text-primary uppercase tracking-wider">Learning
              Africa</nuxt-link>
          </h1>
        </div>
        <div class="grid sm:grid-cols-2 gap-4">
          <!-- First and last name -->
          <div>
            <label for="first_name">First Name</label>
            <input type="text" id="first_name" name="first_name" placeholder="First name" v-model="form.first_name" />
            <div v-if="$v.first_name.$error" class="text-red-500">
              <p v-for="error of $v.first_name.$errors" :key="error.$uid">
                {{ error.$message }}
              </p>
            </div>
          </div>
          <div>
            <label for="last_name">Last Name</label>
            <input type="text" id="last_name" placeholder="Last name" name="last_name" v-model="form.last_name" />
            <div v-if="$v.last_name.$error" class="text-red-500">
              <p v-for="error of $v.last_name.$errors" :key="error.$uid">
                {{ error.$message }}
              </p>
            </div>
          </div>
        </div>
        <div class="grid sm:grid-cols-2 gap-4">
          <!-- Username and email -->
          <div>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Username" v-model="form.username" />
            <div v-if="$v.username.$error" class="text-red-500">
              <p v-for="error of $v.username.$errors" :key="error.$uid">
                {{ error.$message }}
              </p>
            </div>
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="example@gmail.com" v-model="form.email" />
            <div v-if="$v.email.$error" class="text-red-500">
              <p v-for="error of $v.email.$errors" :key="error.$uid">
                {{ error.$message }}
              </p>
            </div>
          </div>
        </div>
        <!-- Password -->
        <div>
          <label for="password">Password</label>
          <input :type="showPassword ? 'text' : 'password'" id="password" name="password" placeholder="*********"
            v-model="form.password" />
          <div v-if="$v.password.$error" class="text-red-500">
            <p v-for="error of $v.password.$errors" :key="error.$uid">
              {{ error.$message }}
            </p>
          </div>
        </div>
        <!-- Confirm password -->
        <div>
          <label for="confirm_password">Confirm Password</label>
          <input :type="showPassword ? 'text' : 'password'" id="confirm_password" name="confirm_password"
            placeholder="*******" v-model="form.confirm_password" />
          <div v-if="$v.confirm_password.$error" class="text-red-500">
            <p v-for="error of $v.confirm_password.$errors" :key="error.$uid">
              {{ error.$message }}
            </p>
          </div>
        </div>
        <!-- Show password -->
        <div class="flex items-center gap-2 show-passsword-wrapper">
          <input type="checkbox" id="show_password" name="show_password" v-model="showPassword" />
          <label for="show_password">Show password</label>
        </div>
        <div class="flex flex-col gap-2 w-full md:w-96">
          <button type="submit"
            class="bg-primary text-white p-2 rounded-md w-full hover:bg-primary-dark transition duration-300 ease-in-out">
            Register
          </button>
        </div>
        <p>
          Already have an account?
          <nuxt-link href="/login"
            class="text-blue-500 hover:underline transition duration-300 ease-in-out">Login</nuxt-link>
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

form div {
  @apply w-full;
}

.show-passsword-wrapper {
  @apply w-full;
}

.show-passsword-wrapper input {
  @apply border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-5 w-5;
}
</style>
