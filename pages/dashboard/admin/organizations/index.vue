<script lang="ts" setup>
const { $API, $privateAxios } = useNuxtApp();

const api = new $API<OrganizationType[]>($privateAxios);
definePageMeta({
  title: "Organizations",
  description: "List of organizations",
  url: "/dashboard/admin/organizations",
  layout: "admin-layout"
});
type OrganizationType = {
  name: string
  logo?: string
}
const fetchOrganizations = async () => {
  try {
    const feedback = await api.get("/organizations/");
    organizations.value = feedback.data
  } catch (error) {
    console.log(error);
  }
}

// function f
const organizations = ref<OrganizationType[]>([]);

onMounted(() => {
  fetchOrganizations();

});

</script>
<template>
  <div>

    <div class="flex justify-between items-center border p-4 my-2 rounded">
      <h1 class="text-2xl font-bold">Organizations</h1>
      <nuxt-link :to="{ name: 'dashboard-admin-organizations-new' }" class="px-4 py-2 rounded bg-primary">Add
        new</nuxt-link>
    </div>
    <div class="grid gap-4 grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
      <div v-for="organization of organizations" :key="organization!.name"
        class="bg-white overflow-hidden shadow-sm rounded border">
        <img :src="organization.logo ?? 'https://i.pinimg.com/236x/87/d7/e2/87d7e20741adb00322ab7b09122d8b79.jpg'"
          alt="Organization logo" class="w-full h-40 object-cover rounded-tl rounded-tr">
        <div class="p-4">
          <h2 class="text-lg font-bold mt-2">{{ organization.name }}</h2>
        </div>
      </div>
    </div>

  </div>
</template>
