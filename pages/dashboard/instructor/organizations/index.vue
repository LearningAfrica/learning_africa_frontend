<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'
const { $API, $privateAxios } = useNuxtApp();

const api = new $API<OrganizationType[]>($privateAxios);
definePageMeta({
	title: "Organizations",
	description: "List of organizations",
	url: "/dashboard/instructor/organizations",
	layout: "instructor-layout"
});
type OrganizationType = {
	name: string
	logo?: string
}
// const isLoading = ref(false);

const fetchOrganizations = async (): Promise<OrganizationType[]> => {
	const feedback = await api.get("/api/organizations/");
	return feedback.data;

};
const { data, suspense, isFetching, isPending } = useQuery({
	queryKey: ['organizations'],
	queryFn: fetchOrganizations,
	initialData: [],
	gcTime: 60000
})
// function f

onMounted(() => {
	suspense()
});

const haveOrganizations = computed(() => data!.value!.length > 0);
</script>
<template>
	<div>
		<div v-if="!isFetching && haveOrganizations"
			class="grid gap-4 grid-cols-[repeat(auto-fit,minmax(16rem,24rem))]">
			<div v-for="organization of data" :key="organization!.name"
				class="bg-white overflow-hidden shadow-sm rounded border">
				<img :src="organization.logo ?? 'https://i.pinimg.com/236x/87/d7/e2/87d7e20741adb00322ab7b09122d8b79.jpg'"
					alt="Organization logo" class="w-full h-40 object-cover rounded-tl rounded-tr">
				<div class="p-4">
					<h2 class="text-lg font-bold mt-2">{{ organization.name }}</h2>
				</div>
			</div>
		</div>
		<div v-else-if="isFetching" class="flex justify-center items-center">
			<partial-loader />
		</div>
		<div v-else class="flex justify-center items-center flex-col gap-8 p-10 min-h-[60vh] ">
			<h1 class="text-8xl font-extrabold tracking-widest opacity-10">
				404
			</h1>
			<p class="text-3xl opacity-60">No organizations found</p>
		</div>
	</div>
</template>
