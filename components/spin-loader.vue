		
<script setup lang="ts">

defineProps<{
	is_loading: boolean
	controller: AbortController
}>()
const emits = defineEmits<{
	(event: 'abort-request', controller: AbortController): void
}>()


</script>
<template>
	<div
		class="flex items-center flex-col justify-center h-full w-full z-[99999999] fixed inset-0 bg-white bg-opacity-70">
		<div class="flex items center justify-center border flex-col w-full max-w-[20rem] h-[20rem] p-4 items-center">
			<!-- <svg class="animate-spin h-10 w-10 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none"
				viewBox="0 0 24 24">
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
				<path class="opacity-75" fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4.472v3.09a4.001 4.001 0 00-4 4.229l3.465-1.732z">
				</path>
			</svg> -->
			<div
				class="w-full max-w-96 border bg-white rounded-md shadow-sm p-8 flex flex-col-reverse gap-4 justify-center items-center">
				<h1>
					Loading.... Please wait a bit
				</h1>
				<div class="h-20 w-20 border-4 border-black rounded-full animate-spin border-y-transparent p-2"></div>
			</div>
			<cn-button class="bg-gray-400 border text-white p-2 rounded-lg w-fit gap-2 text-sm mt-4"
				@click="$emit('abort-request', controller)">
				<icon :name="'fa-regular:window-close'" class="text-3xl text-slate-400 rounded-full" />
				<span>
					Cancel
				</span>
			</cn-button>
		</div>
		<div>
		</div>
	</div>
</template>

<style scoped></style>
