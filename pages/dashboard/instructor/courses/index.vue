<script lang="ts" setup>
definePageMeta({
	layout: "instructor-layout",
	middleware:'instructor-auth'
});

</script>

<template>
  <div class="py-4 flex flex-col gap-4">
    <div class="p-4 flex justify-between border">
      <div>
        <h1>Courses</h1>
      </div>
      <div>
        <nuxt-link :to="{ name: 'dashboard-instructor-courses-create' }"
          class="bg-primary text-white p-2 rounded-lg w-full mb-4">Add course</nuxt-link>
      </div>
    </div>
    <div>
      <table class="w-full table border">
        <thead>
          <th>
            Title
          </th>
          <th>
            Description
          </th>
          <th>
            Actions
          </th>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>
              <div class="flex gap-2 items-center">

                <div class="flex flex-col gap-2 flex-[8]">
                  <h1 class="text-md font-medium text-left whitespace-nowrap">
                    Building lasting relations
                  </h1>
                </div>
              </div>
            </td>
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptates?
            </td>
            <td>
              <div class="flex gap-4 justify-center">
                <nuxt-link :to="'/dashboard/student/courses/' + i"
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

<style scoped></style>
