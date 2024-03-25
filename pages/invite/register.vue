<script lang="ts" setup>
const {
	$vuelidate,
	$vuelidateValidators: { required, email, minLength, sameAs },
} = useNuxtApp();

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
		required: required,
	},
	last_name: {
		required: required,
	},
	username: {
		required: required,
	},
	email: {
		required: required,
		email: email,
	},
	password: {
		required: required,
		minLength: minLength(6),
	},
	confirm_password: {
		required: required,
		sameAsPassword: sameAs("password"),
	},
};

const $v = $vuelidate.useVuelidate(rules, form);
console.log($v);

const handleSubmit = () => {
	console.log("submitting");

	// $v.$touch();
	if ($v.value.$error) {
		return;
	}
	console.log(form.value);
};
</script>
<template>
  <client-only>

    <div>
      <max-width-wrapper>
        <form>
          <div class="grid sm:grid-cols-2 gap-4">
            <!-- First and last name -->
            <div>
              <label for="first_name">First Name</label>
              <input type="text" id="first_name" name="first_name" v-model="form.first_name" />
              <div v-if="$v.first_name.$error" class="text-red-500">
                <p v-for="error of $v.first_name.$errors" :key="error.$uid">
                  {{ error.$message }}
                </p>
              </div>
            </div>
            <div>
              <label for="last_name">Last Name</label>
              <input type="text" id="last_name" name="last_name" v-model="form.last_name" />
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
              <input type="text" id="username" name="username" v-model="form.username" />
              <div v-if="$v.username.$error" class="text-red-500">
                <p v-for="error of $v.username.$errors" :key="error.$uid">
                  {{ error.$message }}
                </p>

              </div>
              <div>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" v-model="form.email" />
                <div v-if="$v.email.$error" class="text-red-500">
                  <p v-for="error of $v.email.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- Password -->
          <div>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" v-model="form.password" />
            <div v-if="$v.password.$error" class="text-red-500">
              <p v-for="error of $v.password.$errors" :key="error.$uid">
                {{ error.$message }}
              </p>
            </div>
          </div>
          <!-- Confirm password -->
          <div>
            <label for="confirm_password">Confirm Password</label>
            <input type="password" id="confirm_password" name="confirm_password" v-model="form.confirm_password" />
            <div v-if="$v.confirm_password.$error" class="text-red-500">
              <p v-for="error of $v.confirm_password.$errors" :key="error.$uid">
                {{ error.$message }}
              </p>
            </div>
          </div>
          <button type="submit"
            class="bg-primary text-white p-2 rounded-md w-full hover:bg-primary-dark transition duration-300 ease-in-out"
            @click.prevent="handleSubmit">Register</button>
          <p>
            Already have an account? <nuxt-link href="/login">Login</nuxt-link>
          </p>
        </form>
      </max-width-wrapper>
    </div>
  </client-only>
</template>

<style scoped></style>
