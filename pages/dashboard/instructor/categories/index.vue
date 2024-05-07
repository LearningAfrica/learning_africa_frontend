<script setup lang="ts">
import type { ColumnDef } from "@tanstack/vue-table";
import moment from "moment";
import type { CategoryResponse } from "~/types/categories";
import type { PaginationData } from "~/types/response";


definePageMeta({
	layout: "instructor-layout",
});
const isLoading = ref(false);
const { $privateAxios, $notify } = useNuxtApp();

// const api = new $API($privateAxios);
const categories = ref<Pick<PaginationData, "categories">["categories"]>();
onMounted(async () => {
	isLoading.value = true;
	try {
		const feedback = await $privateAxios.get("/api/categories/");
		categories.value = feedback.data;
		// $notify.fire("Organizations loaded", "success")
	} catch (error) {
		console.log(error);
	} finally {
		isLoading.value = false;
	}
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

const columns: ColumnDef<CategoryResponse>[] = [
	{
		accessorKey: 'id',
		header: 'ID',
	},
	{
		id: 'Title',
		accessorKey: 'title',
		header: 'Title'
	},{
		header: 'Date Created',
		accessorKey: 'created',
		accessorFn: (p) => moment(p.created).format('LLL')
	}, {
		header: 'Date Updated',
		accessorKey: 'updated', 
		accessorFn: (p) => moment(p.updated).format('LLL')
	}
]


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
			</div>
			<div>
				<nuxt-link :to="{ name: 'dashboard-instructor-categories-new' }"
					class="bg-primary text-white p-2 rounded-lg w-full mb-4">Add category</nuxt-link>
			</div>
		</div>
		<partial-loader v-if="isLoading" />
		<!-- <div>
			<table v-if="categories?.data && !isLoading" class="w-full table border">
				<thead>
					<th>
						Name
					</th>
					<th>
						Date created
					</th>
					<th>
						Last edited
					</th>
					<th>
						Actions
					</th>
				</thead>
				<tbody>
					<tr v-for="cat of categories!.data" :key="cat.id">
						<td>
							<div class="flex flex-col gap-2 flex-[8]">
								<h1 class="text-md font-medium text-left whitespace-nowrap">
									{{ cat.title }}
								</h1>
							</div>
						</td>

						<td>
							{{ moment(cat.created).format('LLL') }}
						</td>
						<td>
							{{ moment(cat.updated).format('LLL') }}
						</td>
						<td>
							<div class="flex gap-4 justify-center">

								<button class="border-primary border py-1 px-4 rounded-sm"
									@click="selectCategoryToUpdate(cat.id)">Update</button>
								<button class="border-red-500 border py-1 px-4 rounded-sm"
									@click="selectCategoryToDelete(cat.id)">Delete</button>
							</div>
						</td>
					</tr>

				</tbody>
			</table>
		</div> -->
		<data-table v-if="categories?.data" :columns="columns" :data="categories!.data ?? []"></data-table>
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
