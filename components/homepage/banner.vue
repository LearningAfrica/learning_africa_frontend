<template>
	<div
		style="background-image: url(&quot;~/assets/images/bg-header.png&quot;)"
		class="bg-orange-300 bg-opacity-35 bg-cover bg-center bg-fixed"
	>
		<max-width-wrapper>
			<div
				class="grid grid-cols-1 lg:grid-cols-2 min-h-[40vh] md:min-h-[60vh] p-4 md:p-8"
			>
				<div class="flex flex-col gap-4 py-10 justify-center">
					<h1 class="text-4xl font-bold">Learning Africa</h1>
					<p class="text-2xl">
						Spread Your Skills Around the world Confidence in Skills
						with experienced mentors and updated curriculum,
						E-learning is ready to advance your career
					</p>
					<div class="flex gap-4">
						<nuxt-link to="/login" class="hover:no-underline">
							<cn-button
								variant="link"
								class="border px-4 py-2 bg-orange-600 text-lg rounded-md text-white font-medium hover:no-underline"
								>Get Started</cn-button
							>
						</nuxt-link>
						<nuxt-link to="/login">
							<cn-button
								class="border px-4 py-2 text-orange-600 text-lg rounded-md bg-white border-orange-600 font-medium hover:bg-white"
							>
								Learn more
							</cn-button>
						</nuxt-link>
					</div>
				</div>
				<div></div>
			</div>
		</max-width-wrapper>
	</div>
</template>

<script setup lang="ts">
// const imageUrl = "~/assets/images/bg-header.png";
</script>

<style lang="scss" scoped></style>
