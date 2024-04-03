<script lang="ts" setup>
import { AxiosError } from "axios";

const { $API, $privateAxios, $notify } = useNuxtApp();

const api = new $API<OrganizationType[]>($privateAxios);
definePageMeta({
	title: "Organizations",
	description: "List of organizations",
	url: "/dashboard/admin/organizations",
	layout: "admin-layout"
});
type OrganizationType = {
	id: string
	name: string
	logo?: string
}
const isLoading = ref(false);
const isDeleting = ref(false);
const fetchOrganizations = async () => {
	isLoading.value = true;
	try {
		const feedback = await api.get("/api/organizations/");
		organizations.value = feedback.data;
	} catch (error) {
		console.log(error);
	} finally {
		isLoading.value = false;
	}
};

const isEditOrganizationDialogOpen = ref(false);

const toggleEditOrganizationDialog = (state: boolean) => {
	console.log(isEditOrganizationDialogOpen.value);

	isEditOrganizationDialogOpen.value = state;
};
const openOrganizationForEdit = (organizationId: string) => {
	selectedOrganization.value = organizations.value.find(org => org.id === organizationId);
	if (selectedOrganization.value) {
		toggleEditOrganizationDialog(true);
	} else {
		toggleEditOrganizationDialog(false);
	}
};

const selectedOrganization = ref<OrganizationType>();
// function f
const organizations = ref<OrganizationType[]>([]);

onMounted(() => {
	fetchOrganizations();

});
const isUpdating = ref(false);
const handleOrganizationUpdate = async () => {
	try {
		// const response =
		await api.put<{ name: string }>(`/api/organizations/${selectedOrganization.value?.id}/`, {
			name: selectedOrganization.value!.name
		});
		await $notify.fire({
			title: "Success",
			icon: "success",
			confirmButtonText: "Close",
			text: "Organization updated successfully"
		});
		organizations.value = organizations.value.map(org => org.id === selectedOrganization.value!.id! ? {
			...org,
			name: selectedOrganization.value!.name
		} : org)!;

		toggleEditOrganizationDialog(false);
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

const handleDeleteOrganization = async (organizationId: string) => {
	isDeleting.value = true;
	try {
		await api.delete(`/api/organizations/${organizationId}/`);
		organizations.value = organizations.value.filter(org => org.id !== organizationId);
		await $notify.fire({
			title: "Success",
			icon: "success",
			confirmButtonText: "Close",
			text: "Organization deleted successfully"
		});
		organizations.value = organizations.value.filter(org => org.id !== organizationId);
		toggleOrganizationDeleteDialog(false);
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
		});
	} finally {
		isDeleting.value = false;
	}
};

const isOrganizationDeleteDialogOpen = ref(false);
const toggleOrganizationDeleteDialog = (state: boolean) => {
	isOrganizationDeleteDialogOpen.value = state;
};

const openOrganizationForDelete = (organizationId: string) => {
	selectedOrganization.value = organizations.value.find(org => org.id === organizationId);
	if (selectedOrganization.value) {
		toggleOrganizationDeleteDialog(true);
	} else {
		toggleOrganizationDeleteDialog(false);
	}
};

const haveOrganizations = computed(() => organizations.value.length > 0);

const isInviting = ref(false);
const isInvitingDialogOpen = ref(false);
const toggleInvitingDialog = (state: boolean) => {
	isInvitingDialogOpen.value = state;
};
const openInvitingDialog = () => {
	toggleInvitingDialog(true);
};
const closeInvitingDialog = () => {
	toggleInvitingDialog(false);
};

const inviteUser = async () => {
	isInviting.value = true;
	try {
		await api.post("/api/organizations/invite/");
		await $notify.fire({
			title: "Success",
			icon: "success",
			confirmButtonText: "Close",
			text: "User invited successfully"
		});
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
		});
	} finally {
		isInviting.value = false;
	}
};
</script>
<template>
	<div>
		<div v-if="!isLoading && haveOrganizations" class="grid gap-4 grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] place-items-start grid-flow-row-dense">
			<div v-for="organization of organizations" :key="organization!.name"
				class="bg-white shadow-sm rounded border w-full">
				<img :src="organization.logo ?? 'https://i.pinimg.com/236x/87/d7/e2/87d7e20741adb00322ab7b09122d8b79.jpg'"
					alt="Organization logo" class="w-full h-40 object-cover rounded-tl rounded-tr">
				<div class="p-4 flex justify-between">
					<div>

						<h2 class="text-lg font-bold mt-2">{{ organization.name }}</h2>
					</div>
					<div class="relative">
						<hui-menu as="div">
							<hui-menu-button class="focus:outline-none" as="div">
								<button
									class="flex items-center justify-center rounded-full w-12 h-12 bg-gray-100 hover:bg-gray-200">
									<icon name="mdi:ellipsis-vertical-circle-outline" class="text-gray-500" />
								</button>
							</hui-menu-button>
							<hui-menu-items
								class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden border">
								<hui-menu-item as="div">
									<button
										class="block px-4 py-2 text-sm hover:text-neutral-100 transition-all ease-linear duration-100 text-left hover:bg-primary w-full"
										@click="openOrganizationForEdit(organization.id)">
										<icon name="mdi:pencil" class="mr-2" />
										Edit
									</button>
								</hui-menu-item>
								<hui-menu-item as="div">
									<button @click="openOrganizationForDelete(organization.id)"
										class="block px-4 py-2 text-sm hover:text-neutral-100 transition-all ease-linear duration-100 text-left hover:bg-red-500 w-full">
										<icon name="mdi:trash-can-outline" class="mr-2" />
										Delete
									</button>
								</hui-menu-item>
								<hui-menu-item disabled as="div">
									<span
										class="block px-4 py-2 text-sm hover:text-neutral-100 transition-all ease-linear duration-100 text-left hover:bg-primary w-full">
										<icon name="mdi:account-plus" class="mr-2" />
										Invite
									</span>
								</hui-menu-item>
							</hui-menu-items>
						</hui-menu>

					</div>
				</div>
			</div>
		</div>
		<div v-else-if="isLoading" class="flex justify-center items-center">
			<partial-loader />
		</div>
		<div v-else class="flex justify-center items-center flex-col gap-8 p-10 min-h-[60vh] ">
			<h1 class="text-8xl font-extrabold tracking-widest opacity-10">
				404
			</h1>
			<p class="text-3xl opacity-60">No organizations found</p>
			<p>
				<nuxt-link to="/dashboard/admin/organizations/new"
					class="text-primary hover:text-primary-700 bg-primary text-white px-4 py-2 rounded-md transition-all ease-in duration-150">
					Add new organization
				</nuxt-link>
			</p>
		</div>
	</div>
	<!-- hui-dialogue -->
	<hui-dialog :open="isOrganizationDeleteDialogOpen" @close="toggleOrganizationDeleteDialog(false)"
		class="fixed inset-0 z-[999] overflow-y-auto">
		<div class="flex items-center justify-center min-h-screen w-screen bg-white bg-opacity-70 border ">
			<div class="bg-white border p-6 rounded-lg shadow-lg  w-full min-h-[20vh] max-w-xl flex gap-4 flex-col">
				<hui-dialog-panel>
					<hui-dialog-title class="text-lg font-bold my-2 text-center border bg-red-500 text-white rounded">
						Delete {{ selectedOrganization!.name }}
					</hui-dialog-title>
					<hui-dialog-description class="text-gray-600 ">

						Are you sure you want to delete this organization?
						This action cannot be undone. All data associated with this organization will be lost.
					</hui-dialog-description>
					<form action="" class="w-full"
						@submit.prevent.stop="handleDeleteOrganization(selectedOrganization!.id)">
						<!-- <div class="w-full">
							<input type="text" v-model="selectedOrganization!.name"
								class="w-full rounded border-blue-200 border-2 ">
						</div> -->

						<div class="flex justify-center mt-6 gap-4">
							<button v-if="!isDeleting" type="button" @click="toggleOrganizationDeleteDialog(false)"
								class="px-4 py-2 text-sm bg-gray-400 hover:bg-gray-600 border rounded-md">Cancel</button>
							<button type="submit" :disabled="isUpdating" :class="{ 'cursor-not-allowed': isUpdating }"
								class="px-4 py-2 
							text-sm bg-red-500 hover:bg-red-700 transition-all ease-in duration-150 rounded-md text-white">
								{{ isDeleting ? "Deleteing" : "Delete" }}
							</button>
						</div>
					</form>
				</hui-dialog-panel>
			</div>
		</div>
	</hui-dialog>
	<hui-dialog :open="isEditOrganizationDialogOpen" @close="toggleEditOrganizationDialog(false)"
		class="fixed inset-0 z-[999] overflow-y-auto">
		<div class="flex items-center justify-center min-h-screen w-screen bg-white bg-opacity-70 border ">
			<div class="bg-white border p-6 rounded-lg shadow-lg  w-full min-h-[20vh] max-w-xl">
				<hui-dialog-panel>
					<hui-dialog-title class="text-lg font-bold my-2">
						{{ selectedOrganization!.name }}
					</hui-dialog-title>
					<hui-dialog-description class="text-gray-600">


					</hui-dialog-description>
					<form action="" class="w-full" @submit.prevent.stop="handleOrganizationUpdate">
						<div class="w-full">
							<input type="text" v-model="selectedOrganization!.name"
								class="w-full rounded border-blue-200 border-2 ">
						</div>

						<div class="flex justify-start mt-6 gap-4">
							<button v-if="!isUpdating" type="button" @click="toggleEditOrganizationDialog(false)"
								class="px-4 py-2 text-sm bg-gray-400 border rounded-md">Cancel</button>
							<button type="submit" :disabled="isUpdating" :class="{ 'cursor-not-allowed': isUpdating }"
								class="px-4 py-2 
							text-sm bg-primary rounded-md text-white">
								{{ isUpdating ? "Updating" : "Save changes" }}
							</button>
						</div>
					</form>
				</hui-dialog-panel>
			</div>
		</div>
	</hui-dialog>

</template>
