<script setup lang="ts">
defineProps({
	is_sidebar_open: {
		type: Boolean,
		required: true
	},
	logo: {
		type: String,
		default: ""

	}
});
const auth = useAuthStore();

const roleColor = (role: "admin" | "super_admin" | "instructor" | "student" | "guest") => {
	switch (role) {
	case "admin":
		return "bg-red-600 text-white";
	case "instructor":
		return "bg-blue-600 text-white";

	case "student":
		return "bg-green-600 text-white";

	case "super_admin":
		return "bg-yellow-600 text-white";

	case "guest":
		return "bg-gray-600 text-white";

	default:
		return "bg-gray-600 text-white";


	}
};
defineEmits(["toggle-sidebar"]);
</script>
<template>
    <div class="flex justify-between gap-6 items-center px-4 border-b sticky top-1 py-2 bg-white z-[99999]">
        <div class="flex items-center">
            <button @click="$emit('toggle-sidebar')" class="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7">
                    </path>
                </svg>
            </button>
            <nuxt-link to="/">
                <icon name="mdi:home" class="text-4xl text-primary-pk"></icon>
            </nuxt-link>
        </div>
        <div class="w-full flex-1">
            <div class="w-full">
                <input type="text" placeholder="Search" class="border p-2 rounded w-full" />
            </div>
        </div>
        <div class="flex justify-end">
            <hui-popover class="relative z-[599999]">
                <hui-popover-button class="text-primary border-none outline-none">
                    <Icon :name="'clarity:avatar-line'" class="w-12 h-12 border p-2 rounded-full border-black"></Icon>
                </hui-popover-button>

                <hui-popover-panel class="absolute z-[56666] h-fit right-0">
                    <div class=" bg-white flex flex-col p-4 border z-[900000] rounded-md w-52 shadow-sm">
                        <p>
                            {{ auth.user.username }}
                        </p>
                        <span class="rounded-full flex items-center justify-center text-white text-xs p-1 my-2"
                            :class="roleColor(auth.user.user_role)">
                            {{ auth.user.user_role }}
                        </span>
                        <hr class="">
                        <nuxt-link to="#" class="p-2">
                            <Icon :name="'clarity:user-line'" class="w-6 h-6"></Icon>
                            Profile
                        </nuxt-link>

                        <nuxt-link to="#" class="p-2">
                            <Icon :name="'clarity:bell-outline-badged'" class="w-6 h-6"></Icon>
                            Notifications
                        </nuxt-link>
                        <nuxt-link to="#" class="p-2">

                            <Icon :name="'clarity:settings-line'" class="w-6 h-6"></Icon>
                            Settings
                        </nuxt-link>
                        <nuxt-link to="/logout" class="p-2 border text-center rounded-md ">
                            <Icon :name="'clarity:logout-line'" class="w-6 h-6"></Icon>
                            Logout
                        </nuxt-link>

                    </div>

                    <img src="/" alt="" />
                </hui-popover-panel>
            </hui-popover>
           
        </div>
    </div>
</template>


<style scoped></style>