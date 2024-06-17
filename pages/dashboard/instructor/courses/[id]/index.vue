	<script lang="ts" setup>
	import moment from 'moment';
	definePageMeta({
		layout: "instructor-layout",
		middleware: 'instructor-auth'
	});
	const router = useRoute('dashboard-instructor-courses-id')
	const course = useSingleCourse()
	onMounted(() => {
		course.fetchData(Number(router.params.id))
	})
	const courseInfo = computed(() => course.data)
</script>
<template>
	<main>
		<partial-loader v-if="course.is_loading.value" />

		<div v-else-if="!course.is_loading.value && course.data.value"
			class="max-w-7xl mx-auto  w-full p-4 grid lg:grid-cols-2">
			<div class="flex flex-col gap-2">
				<div class="max-h-72 overflow-hidden">
					<img class="w-full h-full object-fill aspect-auto" :src="courseInfo.value.course_image_url" />
				</div>
				<h1 class="font-bold text-3xl">
					{{ courseInfo.value.title }}
				</h1>
				<div class="flex items-center gap-2 flex-wrap">
					<span v-for="tag of courseInfo.value.tags"
					class="border px-2 rounded-full py-1 bg-slate-200 border-primary"
					>
						{{ tag }}
					</span>
				</div>
				<p class="whitespace-pre-wrap">
					{{ courseInfo.value.overview }}
				</p>
				<p>
					<strong>
						Instructor:
					</strong>
					<span>
						{{ courseInfo.value.instructor?.first_name }} {{ courseInfo.value.instructor?.last_name }}
					</span>
				</p>
				<p>
				Date created:	{{ moment(courseInfo.value.created).format('LL') }}
				</p>
			</div>
			<div>
				
			</div>
		</div>
		<div v-else>
			<h1>
				Something went wrong!
			</h1>
		</div>
	</main>
</template>


<style></style>
