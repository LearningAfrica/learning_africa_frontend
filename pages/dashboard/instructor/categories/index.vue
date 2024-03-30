<script setup lang="ts">
definePageMeta({
	layout: "instructor-layout",
});
const columns = [{
	key: "id",
	label: "ID"
}, {
	key: "name",
	label: "Name",
	sortable: true
}, {
	key: "title",
	label: "Title",
	sortable: true
}, {
	key: "email",
	label: "Email",
	sortable: true,
	direction: "desc" as const
}, {
	key: "role",
	label: "Role"
}];

const people = [{
	id: 1,
	name: "Lindsay Walton",
	title: "Front-end Developer",
	email: "lindsay.walton@example.com",
	role: "Member"
}, {
	id: 2,
	name: "Courtney Henry",
	title: "Designer",
	email: "courtney.henry@example.com",
	role: "Admin"
}, {
	id: 3,
	name: "Tom Cook",
	title: "Director of Product",
	email: "tom.cook@example.com",
	role: "Member"
}, {
	id: 4,
	name: "Whitney Francis",
	title: "Copywriter",
	email: "whitney.francis@example.com",
	role: "Admin"
}, {
	id: 5,
	name: "Leonard Krasner",
	title: "Senior Designer",
	email: "leonard.krasner@example.com",
	role: "Owner"
}, {
	id: 6,
	name: "Floyd Miles",
	title: "Principal Designer",
	email: "floyd.miles@example.com",
	role: "Member"
}];
</script>
<template>
	<div class="py-4 flex flex-col gap-4">
		<div class="p-4 flex justify-between border">
			<div>
				<h1>Categories</h1>
			</div>
			<div>
				<nuxt-link :to="{ name: 'dashboard-instructor-categories-new' }"
					class="bg-primary text-white p-2 rounded-lg w-full mb-4">Add category</nuxt-link>
			</div>
		</div>
		<div>
			<table class="w-full table border">
				<thead>
					<th>
						Name
					</th>
					<th>
						Description
					</th>
					<th>
						Actions
					</th>
				</thead>
				<tbody>
					<tr v-for="i in 5" :key="i">
						<td>
							<div class="flex gap-2 items-center">

								<div class="flex flex-col gap-2 flex-[8]">
									<h1 class="text-md font-medium text-left whitespace-nowrap">
										Building lasting relations
									</h1>
								</div>
							</div>
						</td>
						<td>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptates?
						</td>
						<td>
							<div class="flex gap-4 justify-center">
								<nuxt-link :to="'/dashboard/student/courses/' + i"
									class="bg-primary py-1 px-4 rounded-sm">View</nuxt-link>
								<button class="border-primary border py-1 px-4 rounded-sm">Edit</button>
							</div>
						</td>
					</tr>

				</tbody>
			</table>
		</div>

	</div>
</template>
