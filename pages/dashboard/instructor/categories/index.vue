<script setup lang="ts">
import type { PaginationData } from "~/types/response";
import { courseCategoriesColumns } from "~/data/table-columns/categories-table-columns";

definePageMeta({
	layout: "instructor-layout",
	middleware:'instructor-auth'
});

const categoriesApi = useCourseCategories()
const isLoading = ref(false);
const { $privateAxios, $notify } = useNuxtApp();
const categories = ref<Pick<PaginationData, "categories">["categories"]>();
onMounted(async () => {
	await categoriesApi.fetchData();
});

const selectedCategory = ref<Pick<PaginationData, "categories">["categories"]["data"][number]>();

const isUpdateModalOpen = ref(false);
const isDeleteModalOpen = ref(false);
const isUpdating = ref(false);
const isDeleting = ref(false);
const selectCategoryToUpdate = (id: number) => {
	selectedCategory.value = categories.value!.data.find((cat) => cat.id === id);
	toggleDeleteModal(false)
	toggleUpdateModal(true);
};

const selectCategoryToDelete = (id: number) => {
	selectedCategory.value = categories.value!.data.find((cat) => cat.id === id);
	toggleUpdateModal(false)
	toggleDeleteModal(true);
};

const toggleUpdateModal = (state: boolean) => {
	isUpdateModalOpen.value = state;

};

const toggleDeleteModal = (state: boolean) => {
	isDeleteModalOpen.value = state;
};



const handleDeleteCategory = async () => {
	isDeleting.value = true;
	try {
		await $privateAxios.delete(`/api/categories/${selectedCategory.value!.id}/`);
		await $notify.fire("Category deleted", "success");
	} catch (error) {
		console.log(error);
		$notify.fire("Failed to delete category", "error");
	} finally {
		isDeleting.value = false;
		toggleDeleteModal(false);
	}
};

const handleUpdateCategory = async () => {
	isUpdating.value = true;
	try {
		await $privateAxios.put(`/api/categories/${selectedCategory.value!.id}/`, selectedCategory.value);
		await $notify.fire("Category updated", "success");
	} catch (error) {
		console.log(error);
		await $notify.fire("Failed to update category", "error");
	} finally {
		isUpdating.value = false;
		toggleUpdateModal(false);
	}
};
</script>
<template>
	<div class="py-4 flex flex-col gap-4">
		<div class="p-4 flex justify-between border">
			<div>
				<h1>Categories</h1>
				<cn-button
				@click="categoriesApi.refreshData"
				>
					<icon name="material-symbols-light:refresh"/>
				</cn-button>
			</div>
			<div>
				<nuxt-link :to="{ name: 'dashboard-instructor-categories-new' }"
					class="bg-primary text-white p-2 rounded-lg w-full mb-4">Add category</nuxt-link>
			</div>
		</div>
		<partial-loader v-if="categoriesApi.is_loading.value" />
		<data-table v-if="categoriesApi.categories.value.data" :columns="courseCategoriesColumns" :search_label="'Search category...'"
			:search-field="'title'" :data="categoriesApi.categories.value.data ?? []"></data-table>
		<hui-dialog :open="isDeleteModalOpen" @close="toggleDeleteModal(false)"
			class="fixed inset-0 z-[999] overflow-y-auto">
			<div class="flex items-center justify-center min-h-screen w-screen bg-white bg-opacity-70 border ">
				<div class="bg-white border p-6 rounded-lg shadow-lg  w-full min-h-[20vh] max-w-xl flex gap-4 flex-col">
					<hui-dialog-panel>
						<hui-dialog-title
							class="text-lg font-bold my-2 text-center border bg-red-500 text-white rounded">
							Delete {{ selectedCategory!.title }}
						</hui-dialog-title>
						<hui-dialog-description class="text-gray-600 ">

							Are you sure you want to delete this organization?
							This action cannot be undone. All data associated with this organization will be lost.
						</hui-dialog-description>
						<form action="" class="w-full" @submit.prevent.stop="handleDeleteCategory">
							<!-- <div class="w-full">
							<input type="text" v-model="selectedOrganization!.name"
								class="w-full rounded border-blue-200 border-2 ">
						</div> -->

							<div class="flex justify-center mt-6 gap-4">
								<button v-if="!isDeleting" type="button" @click="toggleDeleteModal(false)"
									class="px-4 py-2 text-sm bg-gray-400 hover:bg-gray-600 border rounded-md">Cancel</button>
								<button type="submit" :disabled="isDeleting"
									:class="{ 'cursor-not-allowed': isDeleting }" class="px-4 py-2 
							text-sm bg-red-500 hover:bg-red-700 transition-all ease-in duration-150 rounded-md text-white">
									{{ isDeleting ? "Deleting" : "Delete" }}
								</button>
							</div>
						</form>
					</hui-dialog-panel>
				</div>
			</div>
		</hui-dialog>
		<hui-dialog :open="isUpdateModalOpen" @close="toggleUpdateModal(false)"
			class="fixed inset-0 z-[999] overflow-y-auto">
			<div class="flex items-center justify-center min-h-screen w-screen bg-white bg-opacity-70 border ">
				<div class="bg-white border p-6 rounded-lg shadow-lg  w-full min-h-[20vh] max-w-xl">
					<hui-dialog-panel>
						<hui-dialog-title class="text-lg font-bold my-2">
							{{ selectedCategory!.title }}
						</hui-dialog-title>
						<hui-dialog-description class="text-gray-600">


						</hui-dialog-description>
						<form action="" class="w-full" @submit.prevent.stop="handleUpdateCategory">
							<div class="w-full">
								<input type="text" v-model="selectedCategory!.title"
									class="w-full rounded border-blue-200 border-2 ">
							</div>

							<div class="flex justify-start mt-6 gap-4">
								<button v-if="!isUpdating" type="button" @click="toggleUpdateModal(false)"
									class="px-4 py-2 text-sm bg-gray-400 border rounded-md">Cancel</button>
								<button type="submit" :disabled="isUpdating"
									:class="{ 'cursor-not-allowed': isUpdating }" class="px-4 py-2 
							text-sm bg-primary rounded-md text-white">
									{{ isUpdating ? "Updating" : "Save changes" }}
								</button>
							</div>
						</form>
					</hui-dialog-panel>
				</div>
			</div>
		</hui-dialog>
	</div>
</template>
