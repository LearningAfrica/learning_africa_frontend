<template>
    <div class="">
        <max-width-wrapper>
            <div class="w-full p-4 flex flex-col gap-8">
                <div>
                    <h1 class="text-4xl text-center">We are trusted globally</h1>
                </div>
                <div class="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-4">
                    
                    <div v-for="stat in homeStats"
                    :key="stat.title"
                    class="w-full border p-4">
                        <div  class=" p-4">
                            <div class="flex justify-center">
                        </div>
                          
                        </div>
                        <div class="flex flex-col gap-2 justify-center items-center">
                            <h2 class="text-5xl">{{ stat.count }}</h2>
                            <p class="text-lg">{{ stat.title }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </max-width-wrapper>
    </div>
</template>

<script setup lang="ts">
const homeStats = ref([
	{
		title: "Courses",
		Icon: "LucideLibrary",
		count: "20K+",
	},
	{
		title: "Certifications",
		Icon: "LucideGraduationCap",
		count: "20K+",
	},
	{
		title: "Instructors",
		Icon: "LucideGraduationCap",
		count: "4.2K+",
	},
	{
		title: "Open Positions",
		Icon: "LucideShipWheel",
		count: "4K+",
	},
	{
		title: "Recommendations",
		Icon: "LucideBadge",
		count: "20K+",
	},
	{
		title: "Active Students",
		Icon: "LucideUser",
		count: "50K+",
	},
]);
</script>

<style scoped></style>