<script setup lang="ts">

const props = withDefaults(
  defineProps<{
    max_length: number;
    content: string;
  }>(), 
  {
    max_length: 100,
    content: ''
  }
);

const showMore = ref(false);
const toggleShowMore = () => {
  showMore.value = !showMore.value;
};

const showContent = computed(() => {
  return showMore.value ? props.content : props.content.slice(0, props.max_length - 3) + '...';
});


</script>

<template>
  <div v-if="props.content.length > props.max_length">
    <div >
      {{ showContent }}
      <cn-button @click="toggleShowMore"
		class="text-primary-500 text-xs  hover:bg-primary-500 border border-primary-500 hover:border-transparent rounded py-[2px] px-2 h-fit bg-primary">
        {{ showMore ? 'Show less' : 'Show more' }}
      </cn-button>
    </div>
  </div>
  <div v-else>
    {{ props.content }}
  </div>
</template>
