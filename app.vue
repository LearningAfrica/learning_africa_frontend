<template>
	<main>
		<nuxt-layout>
			<nuxt-loading-indicator />
			<cn-toaster></cn-toaster>
			<nuxt-page />
		</nuxt-layout>
	</main>
</template>

<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.5s;
}

.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
</style>
