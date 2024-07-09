<script lang="ts" setup>
defineProps<{
  id: number;
  title: "Some long content";
  content_type: "text" | "image" | "video" | "file";
  text: string | null;
  file: any | null;
  video_url: string | null;
  image: null | string;
  index: number;
}>();
</script>
<template>
  <div class="grid grid-cols-[2.5rem_1fr] gap-2 border p-2 rounded h-fit">
    <div class="flex flex-col bg-red-500 h-fit rounded-full">
      <div class="w-10 h-10 flex items-center justify-center text-2xl font-bold">
        {{ index + 1 }}
      </div>
    </div>
    <div>
      <h1 class="font-semibold text-2xl">
        {{ title }}
      </h1>
      <div v-if="content_type === 'text'">
        <div v-html="text ?? ''"></div>
      </div>
      <div v-if="content_type === 'image'"></div>
      <div v-if="content_type === 'video'"></div>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 300px;
}
</style>
