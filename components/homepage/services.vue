<template>
    <div class="bg-neutral-100">
        <max-width-wrapper>
            <div class="py-10 px-4">
                <div class="py-8 flex justify-center">
                    <h1 class="text-4xl uppercase font-bold">
                        Our Courses
                    </h1>
                </div>
                <div class="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-4">

                    <div v-for="cs in homeCoursedData" :key="cs.title" class="shadow-md border">
                        <div class="relative w-full h-72 overflow-hidden rounded ">
                            <img :src="cs.thumbnail" alt="" fill class="w-full h-full object-cover" />
                        </div>
                        <div class="p-4">
                            <h2>{{ cs.title }}</h2>

                            <div v-if="cs.tags.length > 0" class="flex gap-2">
                                <span v-for="tg in cs.tags" :key="tg" class="bg-neutral-300 text-sm px-2 rounded-full">
                                    {{ tg }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </max-width-wrapper>
    </div>
</template>

<script setup lang="ts">
type CourseItem = {
    thumbnail: string;
    title: string;
    description: string;
    rating: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
    duration: string;
    views: number;
    tags: string[];
};
const homeCoursedData = ref<CourseItem[]>(
	[
		{
			title: "Photography Masterclass",
			description: "Description",
			duration: "20days",
			rating: 3.5,
			tags: ["photo", "picture"],
			thumbnail:
                "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
			views: 20,
		},
		{
			title: "Google Security Certification",
			description: "Description",
			duration: "20days",
			rating: 3.5,
			tags: ["photo", "picture"],
			thumbnail:
                "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
			views: 20,
		}, {
			title: "CISCO networking course",
			description: "Description",
			duration: "20days",
			rating: 3.5,
			tags: ["photo", "picture"],
			thumbnail:
                "https://plus.unsplash.com/premium_photo-1663134377392-50c34664d632?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D",
			views: 20,
		},
		{
			title: "Photography Masterclass",
			description: "Description",
			duration: "20days",
			rating: 3.5,
			tags: ["photo", "picture"],
			thumbnail:
                "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
			views: 20,
		},
		{
			title: "Photography Masterclass",
			description: "Description",
			duration: "20days",
			rating: 3.5,
			tags: ["photo", "picture"],
			thumbnail:
                "https://images.unsplash.com/photo-1599658880436-c61792e70672?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww",
			views: 20,
		}, {
			title: "Photography Masterclass",
			description: "Description",
			duration: "20days",
			rating: 3.5,
			tags: ["photo", "picture"],
			thumbnail:
                "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1ldHxlbnwwfHwwfHx8MA%3D%3D",
			views: 20,
		},
	]);
</script>

<style scoped></style>