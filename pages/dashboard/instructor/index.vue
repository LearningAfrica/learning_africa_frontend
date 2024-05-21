<script setup lang="ts">
import { Chart, Grid, Line } from "vue3-charts";
definePageMeta({
  layout: "instructor-layout",
  'middleware':'instructor-auth'
});
const auth = useAuthStore();

const studentscoreSummary = ref([
  {
    value: "4.5",
    label: "Rating",
    icon: "fe:star"

  },
  {
    value: "20k",
    label: "Enrolled students",
    icon: "fe:users"

  },
  {
    value: 52,
    label: "Courses taught",
    icon: "fe:laptop"

  }
]);
const data = ref([
  { name: "Jan", pl: 1000, avg: 500, inc: 300 },
  { name: "Feb", pl: 2000, avg: 900, inc: 400 },
  { name: "Apr", pl: 400, avg: 400, inc: 500 },
  { name: "Mar", pl: 3100, avg: 1300, inc: 700 },
  { name: "May", pl: 200, avg: 100, inc: 200 },
  { name: "Jun", pl: 600, avg: 400, inc: 300 },
  { name: "Jul", pl: 500, avg: 90, inc: 100 }
]);
const direction = ref("horizontal");
const margin = ref({
  left: 0,
  top: 20,
  right: 20,
  bottom: 0
});
const courseProgresStats = ref([

  { value: 7, label: "Total courses", icon: "fe:laptop" },
  { value: 52, label: "Total students", icon: "tdesign:fact-check" },
  { value: 52, label: "Enrolled Students", icon: "tdesign:fact-check" },
  {
    value: 8,
    label: "Certificates issued",
    icon: "carbon:badge"
  }]);
const windowWidth = ref(window.innerWidth);
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
            <span class="bg-primary text-white px-3 py-[.6px] border rounded-md absolute bottom-0 right-0 z-10">
              pro
            </span>
          </div>
          <div>
            <h1>{{ auth.user.username }}</h1>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-2 items-center text-sm">
              <div v-for="item of studentscoreSummary" :key="item.label" class="flex items-center gap-2">
                <icon :name="item.icon" class="text-primary h-4 w-4"></icon>
                <span>{{ item.value }}</span>
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
    <!-- Charts -->
    <Chart :size="{ width: windowWidth - 500, height: 400 }" :data="data" :margin="margin" :direction="direction">

      <template #layers>
        <Grid strokeDasharray="2,2" />
        <Line :dataKeys="['name', 'pl']" />
      </template>

    </Chart>
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
              <tr v-for="i in 5" :key="i">
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
                      <progress class="w-full bg-white rounded-md" :value="34" max="100">34%</progress>
                    </div>
                  </div>
                </td>
                <td>
                  34
                </td>
                <td>10</td>
                <td>
                  <div class="flex gap-4 justify-center">
                    <nuxt-link :to="'/dashboard/student/courses/' + i"
                      class="bg-primary py-1 px-4 rounded-sm">View</nuxt-link>
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
<style>
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