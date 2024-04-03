<script lang="ts" setup>
import { AxiosError } from "axios";

const { $API, $privateAxios } = useNuxtApp();

type PaginationInfo = {
  totalDocs: number;
  totalPages: number;
  page: number;
  limit: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number | null;
  prevPage: number | null;
};

type InstructorData = {
  data: InstructorType[];

} & PaginationInfo;
type InstructorType = {
  first_name: string;
  last_name: string;
};

const isLoading = ref(false);
const api = new $API<InstructorData[]>($privateAxios);
definePageMeta({
	title: "Instructors",
	description: "List of instructors",
	url: "/dashboard/admin/instructors",
	layout: "admin-layout"
});
const instructors = ref<InstructorData>();
function fetchInstructors() {
	isLoading.value = true;
	api.get("/users/instructors/")
		.then((feedback) => {
			instructors.value = feedback.data;
		})
		.catch((error: AxiosError) => {
			console.log(error);
		})
		.finally(() => {
			isLoading.value = false;
		});
}

onMounted(() => {
	fetchInstructors();
});

const editInstructor = (instructor: InstructorType) => {
	console.log(instructor);
};

const deleteInstructor = (instructor: InstructorType) => {
	console.log(instructor);
};

</script>
<template>
  <div>
    <h1 class="text-2xl font-semibold">Instructors</h1>
    <partial-loader v-if="isLoading" />

    <div v-if="!isLoading && instructors?.totalDocs !== 0 && instructors?.data">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="instructor in instructors!.data" :key="instructor.first_name">
            <td class="px-6 py-4 whitespace-nowrap">{{ instructor.first_name }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ instructor.last_name }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <button @click="editInstructor(instructor)" class="text-indigo-600 hover:text-indigo-900">Edit</button>
              <button @click="deleteInstructor(instructor)" class="text-red-600 hover:text-red-900">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-between mt-4">
        <button @click="instructors!.prevPage" :disabled="!instructors!.hasPrevPage"
          class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">Previous</button>
        <button @click="instructors!.nextPage" :disabled="!instructors!.hasNextPage"
          class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">Next</button>
      </div>
    </div>
  </div>
</template>


<style></style>