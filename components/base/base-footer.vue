<template>
    <div class="bg-[#171717] min-h-[40vh] py-10 text-white border-t p-4">
        <max-width-wrapper class-name="grid gap-8 grid-cols-1 md:grid-cols-2 p-4">
            <div class="flex flex-col gap-5">
                <h1 class="text-3xl font-bold text-white">
                    Patners
                </h1>
                <div class="grid grid-cols-3 gap-4">
                    <div v-for="partner in partners" :key="partner"
                        class="border-white border text-white p-4 rounded-md flex items-center justify-center">
                        {{ partner }}
                    </div>
                </div>
            </div>
            <div>
                <h1 class="text-3xl font-bold text-white underline">
                    About us
                </h1>
                <p class="text-white text-lg
                    ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ipsum suscipit quaerat
                    corrupti accusamus saepe enim odit minus sunt dolore!
                </p>

            </div>
        </max-width-wrapper>

        <max-width-wrapper class-name="flex justify-between items-center">
            <div class="flex items flex-col gap-8 py-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 class="text-primary text-2xl underline">
                                FAQ's
                            </h2>
                            <ul class="flex flex-col gap-2 list-disc">
                                <li v-for="faq in Faqs" :key="faq.question"
                                    class="cursor-pointer text-primary-pk hover:text-neutral-200">
                                    {{ faq.question }}
                                </li>
                            </ul>

                        </div>
                        <div>
                            <h1 class="text-primary text-2xl underline">
                                Services
                            </h1>
                            <ul class="flex flex-col gap-2 list-disc">

                                <li v-for="service in services" :key="service"
                                    class="cursor-pointer text-primary-pk hover:text-neutral-200">
                                    {{ service }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex flex-col gap-3">
                        <div class="flex flex-col">

                            <h2 class="text-primary text-2xl">
                                Contact
                            </h2>
                            <ul class="flex">
                                <li>
                                    <icon name="uil:phone" class="text-primary-pk" />
                                    <span>
                                        +234 123 456 789
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <form action="" class="flex flex-col gap-3">
                            <h2>
                                Sign up for our newsletter
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            </p>
                            <div class="flex gap-2">
                                <input type="email" placeholder="Enter your email" class="p-2 rounded-md">
                                <button type="submit"
                                    class="bg-primary-pk text-white p-2 rounded-md border-white border">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="text-center">
                    Sponsored project by: <span class="text-primary-pk">Learning Africa</span>. All rights reserved
                    &copy; {{ new Date().getFullYear() }}
                </div>
            </div>
        </max-width-wrapper>
    </div>
</template>
<script setup lang="ts">

const partners = ref(["Google", "Netflix", "Open Africa"]);
const Faqs = ref([
	{
		question: "How do I enroll in a course?",
		answer: "To enroll in a course, simply click on the 'Enroll Now' button on the course page and follow the instructions to complete the enrollment process."
	},
	{
		question: "Can I access course materials on my mobile device?",
		answer: "Yes, you can access course materials on your mobile device. Our platform is mobile-friendly and allows you to learn on the go."
	},
	{
		question: "Is there a deadline to complete a course?",
		answer: "While some courses may have deadlines for assignments or exams, most courses on our platform are self-paced, allowing you to complete them at your convenience."
	},
	{
		question: "Are certificates offered for course completion?",
		answer: "Yes, certificates of completion are offered for most courses. You can download your certificate after successfully completing a course."
	},
	{
		question: "Can I get a refund if I'm not satisfied with a course?",
		answer: "We offer a 30-day money-back guarantee. If you're not satisfied with a course, you can request a refund within 30 days of purchase."
	}
]);
const services = ref([
	"Courses",
	"Tutorials",
	"Live Classes",
	"Certifications",
	"Discussion Forums",
	"Assessments"
]);
</script>
