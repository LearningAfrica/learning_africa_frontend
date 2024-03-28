<script lang="ts" setup>
definePageMeta({
	middleware: ["student-auth"],
	layout: "student-layout"
});
</script>

<template>
  <div>
    <div class="border rounded-md ">
            <div class="border-b p-4">
                <h1>My course list</h1>
            </div>
            <div class="p-4">
                <div></div>
                <div>
                    <table class="w-full table">
                        <thead>
                            <th>
                                Course title
                            </th>
                            <th>
                                Total lessons
                            </th>
                            <th>
                                Completed lessons
                            </th>
                            <th>
                                Actions
                            </th>
                        </thead>
                        <tbody>
                            <tr v-for="i in 5"
                            :key="i"
                            >
                                <td>
                                    <div class="flex gap-2 items-center">
                                        <div class="flex-[4] h-20 w-full">
                                            <img src="https://demo.stackcodes.net/tm/sovware/html-eduhub/assets/images/courses/4by3/08.jpg"
                                                class="h-20 w-20 object-cover rounded-md" alt="">
                                        </div>
                                        <div class="flex flex-col gap-2 flex-[8]">
                                            <h1 class="text-md font-medium text-left whitespace-nowrap">
                                                Building lasting relations
                                            </h1>
                                            <progress class="w-full bg-white rounded-md" :value="34"
                                                max="100">34%</progress>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    34
                                </td>
                                <td>10</td>
                                <td>
                                    <div class="flex gap-4 justify-center">
                                      <nuxt-link :to="'/dashboard/student/courses/'+i" class="bg-primary py-1 px-4 rounded-sm">View</nuxt-link>
                                        <button class="border-primary border py-1 px-4 rounded-sm">Continue</button>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  </div>
</template>
<style scoped>
table {
    @apply border border-collapse
}

tr {
    @apply border px-2 py-2
}

thead {
    @apply bg-gray-100
}

th {
    @apply px-2 py-2 border
}

td {
    @apply px-2 py-2 border text-center
}
</style>
