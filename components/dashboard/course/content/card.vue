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
  <div class="grid grid-cols-[2.5rem_1fr] gap-2 p-2 rounded h-fit">
    <div class="flex flex-col bg-orange-600 h-fit rounded-full text-white">
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
      <div v-if="content_type === 'image'">
        {{ image }}
        <LazyNuxtImg :src="image!" />
      </div>
      <div v-if="content_type === 'video'">
        <object type="video/mp4" :data="video_url" width="100%">
          <!-- <img src="path/image.jpg" alt="useful image description" /> -->
        </object>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 300px;
}
</style>
