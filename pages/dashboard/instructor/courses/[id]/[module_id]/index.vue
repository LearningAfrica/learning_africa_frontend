<script lang="ts" setup>
import moment from "moment";
definePageMeta({
  layout: "instructor-layout",
  middleware: "instructor-auth",
});

const router = useRoute("dashboard-instructor-courses-id-module_id");

const courseModule = useSingleCourseModule();

onMounted(() => {
  courseModule.fetchData({
    course_id: Number(router.params.id),
    module_id: Number(router.params.module_id),
  });
});
const is_add_content_dialog_open = ref(false);
const toggleAddContent = (state: boolean) => {
  is_add_content_dialog_open.value = state;
};
</script>
<template>
  <div class="py-4">
    <partial-loader v-if="courseModule.is_loading.value" />
    <div v-else-if="!courseModule.is_loading.value && courseModule.data.value">
      <!-- Action buttons -->
      <div class="flex justify-end gap-2">
        <nuxt-link
          :to="{
            name: 'dashboard-instructor-courses-id-module_id-add-content',
            params: { id: router.params.id, module_id: router.params.module_id },
          }"
          @click="toggleAddContent(true)"
          class="bg-primary px-4 py-2 rounded mb-2"
        >
          Add Content</nuxt-link
        >
      </div>
      <div class="flex flex-col gap-2 p-4 border rounded">
        <h1 class="font-bold text-3xl">
          {{ courseModule!.data.value.title }}
        </h1>
        <p class="whitespace-pre-wrap">
          {{ courseModule!.data.value.description }}
        </p>
      </div>
    </div>
    <div v-if="courseModule.data.value && courseModule.is_loading.value === false">
      <!-- If content length is zero -->
      <div
        v-if="
          Array.isArray(courseModule.data.value.contents) &&
          courseModule.data.value.contents.length === 0
        "
      >
        <div class="flex flex-col gap-2 p-4">
          <p class="text-center">No content available</p>
        </div>
      </div>
      <!-- If content length is not zero -->
      <div v-else>
        <div class="flex flex-col gap-2 p-4">
          <div
            v-for="(content, index) of courseModule.data.value.contents"
            :key="content.id"
          >
            <dashboard-course-content-card v-bind="{ ...content, index }" />
          </div>
        </div>
      </div>
    </div>
    <!-- <dashboard-course-add-module-add-content
            v-if="courseModule.data.value && is_add_content_dialog_open"
        :course_id="Number(router.params.id)"
            :module_id="Number(router.params.module_id)" :is_create_content_dialog_open="is_add_content_dialog_open"
            @close="toggleAddContent" /> -->
    <!-- <dashboard-course-add -->
  </div>
</template>

<style scoped></style>
