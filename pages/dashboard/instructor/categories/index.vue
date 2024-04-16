<script setup lang="ts">
import moment from "moment";
import type { PaginationData } from "~/types/response";
const isLoading = ref(false);
const { $privateAxios} = useNuxtApp();

// const api = new $API($privateAxios);
const categories = ref<Pick<PaginationData,"categories">["categories"]>();
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



definePageMeta({
	layout: "instructor-layout",
});
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
		<div>
			<table 
			v-if="categories?.data"
			class="w-full table border">
				<thead>
					<th>
						Name
					</th>
					<th>
						Date created
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
										{{cat.title}}
									</h1>
							</div>
						</td>
						
						<td>
							{{ moment(cat.created).format('LLL') }}
						</td><td>
							{{ moment(cat.updated).format('LLL') }}
						</td>
						<td>
							<div class="flex gap-4 justify-center">
								<nuxt-link :to="'/dashboard/student/courses/' + cat.id"
									class="bg-primary py-1 px-4 rounded-sm">View</nuxt-link>
								<button class="border-primary border py-1 px-4 rounded-sm">Edit</button>
							</div>
						</td>
					</tr>

				</tbody>
			</table>
		</div>

	</div>
</template>
