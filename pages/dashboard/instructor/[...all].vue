<script lang="ts" setup>
definePageMeta({
	layout: "instructor-layout",
	middleware: "instructor-auth"
});
</script>
<template>
	<div class="min-h-[40vh] flex justify-center items-center">
		<div class="w-full max-w-2xl p-10 shadow-sm border rounded">
			<h1 class="text-2xl font-bold flex justify-center items-center gap-4"><span>
                    Sorry
                </span>
				<icon class="h-16 w-16" name="iconoir:emoji-sad"></icon>
			</h1>
			<p class="text-center text-lg">
				The page you are looking for not found
			</p>
		</div>

	</div>
</template>
