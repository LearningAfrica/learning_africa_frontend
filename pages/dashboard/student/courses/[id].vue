<script lang="ts" setup>
definePageMeta({
	layout: "student-layout"
});
</script>

<template>
  <div class="border my-2">
    <div class="flex gap-4 items-center p-4">
      <div class="h-32 w-32 bg-slate-100 rounded-md overflow-hidden">
        <img src="https://demo.stackcodes.net/tm/sovware/html-eduhub/assets/images/courses/4by3/01.jpg"
          class="h-full w-full object-cover rounded-md" alt="">
      </div>
      <div>
        <h1 class="text-2xl font-semibold">The Complete Digital Marketing Course - 12 Courses in 1</h1>
        <div class="flex gap-4">
          <div class="flex items-center gap-1">
            <icon name="fe:clock" class="text-primary"></icon>
            <strong>34</strong>
            Total lessons
          </div>
          <div>
            <icon name="fe:calendar" class="text-primary"></icon>
            <strong>10</strong>
            Completed lessons
          </div>
          <div class="flex items-center gap-1">
            <icon name="game-icons:network-bars" class="text-primary"></icon>
            <strong>10</strong>
            Completed lessons
          </div>

        </div>
        <button class="bg-primary bg-opacity-20 text-black border border-primary py-2 px-4 rounded-md mt-4">
          <icon name="fe:play" class="text-primary"></icon>
          Continue
        </button>
      </div>
    </div>
    <div class="border-t p-4">

      <h1 class="text-xl font-semibold">
        Course content
      </h1>
      <div>
        <hui-disclosure>
          <hui-disclosure-button class="py-2">
            <div class="p-2 bg-slate-200 w-full">
              <h1>
                Introduction
              </h1>
              <p>
                5 lessons
              </p>
            </div>
          </hui-disclosure-button>
          <hui-disclosure-panel class="text-gray-500">
            <div class="bg-slate-100 p-2">
              <div class="flex gap-4 items-center">
                <div class="h-20 w-20 bg-slate-200 rounded-md overflow-hidden">
                  <img src="https://demo.stackcodes.net/tm/sovware/html-eduhub/assets/images/courses/4by3/01.jpg"
                    class="h-full w-full object-cover rounded-md" alt="">
                </div>
                <div>
                  <h1 class="text-lg font-semibold">Introduction to the course</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                  </p>
                </div>
              </div>
              <div class="flex gap-4 items-center">
                <div class="h-20 w-20 bg-slate-200 rounded-md overflow-hidden">
                  <img src="https://demo.stackcodes.net/tm/sovware/html-eduhub/assets/images/courses/4by3/01.jpg"
                    class="h-full w-full object-cover rounded-md" alt="">
                </div>
                <div>
                  <h1 class="text-lg font-semibold">Introduction to the course</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                  </p>
                </div>
              </div>
            </div>
          </hui-disclosure-panel>
        </hui-disclosure>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
