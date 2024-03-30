<script setup lang="ts">
definePageMeta({
	
	layout: "student-layout"
});
const auth = useAuthStore();

const studentscoreSummary = ref([
	{
		value: 20,
		label: "Points",

	},
	{
		value: 7,
		label: "Completed courses",

	},
	{
		value: 52,
		label: "Completed lessons",

	}
]);

const courseProgresStats = ref([

	{ value: 7, label: "Completed courses", icon: "fe:laptop" },
	{ value: 52, label: "Completed lessons", icon: "tdesign:fact-check" },
	{
		value: 8,
		label: "Achieved certificates",
		icon: "carbon:badge"
	}]);
</script>
<template>
    <div class="w-full">
        <!-- Header -->
        <div class="py-4 flex flex-col justify-between items-center  md:flex-row gap-4 shadow-lg rounded-md ">
            <div class=" p-4 ">
                <div class="flex items-center gap-4 flex-col md:flex-row ">
                    <div class="relative h-32 w-32 bg-white rounded-full border-white">

                        <img src="https://demo.stackcodes.net/tm/sovware/html-eduhub/assets/images/avatar/09.jpg"
                            class="h-full w-full object-cover rounded-full" alt="">
                        <span
                            class="bg-primary text-white px-3 py-[.6px] border rounded-md absolute bottom-0 right-0 z-10">
                            pro
                        </span>
                    </div>
                    <div>
                        <h1>{{ auth.user.username }}</h1>
                        <div class="flex gap-4">
                            <div v-for="item of studentscoreSummary" :key="item.label">
                                <strong>{{ item.value }}</strong>
                                {{ item.label }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button class="bg-primary text-white px-4 py-2 rounded-md">
                    view my courses
                </button>
            </div>
        </div>
        <!-- Summary -->
        <div class=" w-full">
            <div class=" p-4  rounded-md">
                <!-- <h1>Course Progress</h1> -->
                <div class="grid gap-4 grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]">
                    <div v-for="item of courseProgresStats" :key="item.label" class="shadow p-4 border">
                        <div class="flex items-center gap-4">
                            <div>
                                <icon :name="item.icon" class="h-16 w-16"></icon>
                            </div>
                            <div>
                                <h1 class="text-xl font-bold">{{ item.value }}</h1>
                                <p>{{ item.label }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Courses -->
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