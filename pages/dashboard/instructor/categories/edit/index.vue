<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import {
   required, helpers
} from "@vuelidate/validators";

const { $API, $privateAxios, $notify } = useNuxtApp();
type Category = {
    title: string;
    organization: string;
};
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
const form = ref<Category>({
    title: "",
    organization: "",
});
const createCategoryRules = {
    title: {
        required: helpers.withMessage("Category title is required", required),
    },
    organization: {
        required: helpers.withMessage("Organization is required", required),
    },
};
const isOrganizationLoading = ref(false);
const $v = useVuelidate(createCategoryRules, form);
async function createCategory(_event: Event

) {
    $v.value.$validate();
    if ($v.value.$error) {
        return;
    }
    isLoading.value = true;
    try {
        await api.post("/api/categories/", form.value as Category);
        await $notify.fire("Category created", "success");
        await router.push({ name: "dashboard-instructor-categories" });
    } catch (error) {
        console.log(error);
    }
    finally {
        isLoading.value = false;
    }
}
definePageMeta({
    layout: "instructor-layout",
});
</script>
<template>
    <div>
        <form action="" @submit.prevent="createCategory"
            class="bg-white p-4 rounded-lg shadow-md w-full sm:w-1/2 mx-auto mt-4 border min-h-[40vh] flex flex-col justify-center">
            <div class="flex justify-center items-center p-4">
                <div class="h-20 w-20 bg-slate-100 rounded-full border-1">
                    <img src="https://avatars.githubusercontent.com/u/150797856?s=200&v=4" alt="logo"
                        class="w-full h-full object-cover rounded-full">
                </div>
            </div>
            <div>
                <label for="name">
                    Category name
                </label>
                <input v-model="form.title" type="text" placeholder="Category name"
                    class="border border-gray-300 p-2 rounded-lg w-full mb-4">
                <div v-if="$v.title.$error" class="text-red-500">
                    <p v-for="error of $v.name.$errors" :key="error.$uid">
                        {{ error.$message }}
                    </p>
                </div>
            </div>

            <div>
                <div v-if="isOrganizationLoading" class="text-center text-gray-500">Loading organizations...</div>
                <div v-if="organizations.length > 0 && isOrganizationLoading === false">
                    <label for="organization">
                        Organization
                    </label>

                    <select v-model="form.organization" class="border border-gray-300 p-2 rounded-lg w-full mb-4"
                        name="organization" id="organization">
                        <option value="" disabled selected>Select organization</option>
                        <option v-for="organization of organizations" :key="organization.name" :value="organization.id">
                            {{ organization.name }}
                        </option>
                    </select>
                    <div v-if="$v.organization.$error" class="text-red-500">
                        <p v-for="error of $v.organization.$errors" :key="error.$uid">
                            {{ error.$message }}
                        </p>
                    </div>
                </div>
                <div v-else-if="!isOrganizationLoading && organizations.length < 1" class="text-center text-gray-500">No
                    organizations found</div>
            </div>

            <button class="bg-primary text-white p-2 rounded-lg w-full mb-4"
                v-if="!isOrganizationLoading && organizations.length > 0">Add category</button>
        </form>
    </div>
</template>

<style scoped></style>