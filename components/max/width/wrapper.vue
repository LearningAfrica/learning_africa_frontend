<script setup lang="ts">

defineProps({
	className: {
		type: String,
		default: ""
	}
});
</script>
<template>
    <div :class="cn('max-w-7xl mx-auto w-full', className)">
        <slot />
    </div>
</template>
