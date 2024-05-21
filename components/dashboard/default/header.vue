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
const isCollapsed = ref(false)
const organizations = computed(()=>auth.isAuthenticated&& auth.user&& Array.isArray(useAuthStore().auth.user.organizations)?useAuthStore().auth.user.organizations:[])

const selectedOrganization = computed(()=>organizations.value.length>0?organizations.value.find(o => o.is_current)!.id:null)
const selectedOrganizationData = computed(() => organizations.value.find(item => item.id === selectedOrganization.value))

</script>
<template>
    <div v-if="auth.isAuthenticated" class="flex justify-between gap-6 items-center px-4 border-b sticky top-1 py-2 bg-white z-[99999]">
        <div class="flex items-center">
            <button @click="$emit('toggle-sidebar')" class="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7">
                    </path>
                </svg>
            </button>
            <nuxt-link to="/" class="flex items-center gap-2 border text-3xl p-1 rounded">
                <icon name="ion:home" class="text-primary-pk"></icon>
                <!-- <span class="uppercase">Home</span> -->
            </nuxt-link>
        </div>
        <div class="w-full flex-1 justify-end">
            <search />
        </div>
        <div class="flex justify-end flex-row-reverse">
            <cn-select v-model="selectedOrganization">
                <cn-select-trigger aria-label="Select account" :class="cn(
                    'flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0',
                    { 'flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden': isCollapsed },
                )">
                    <cn-select-value placeholder="Select an account">
                        <div class="flex items-center gap-3" v-if="organizations.length">
                            <!-- <Icon class="size-4" :icon="selectedEmailData!.icon" /> -->
                            <span v-if="!isCollapsed">
                                {{ selectedOrganizationData!.name }}
                            </span>
                        </div>
                    </cn-select-value>
                </cn-select-trigger>
                <cn-select-content>
                    <cn-select-item v-if="organizations.length>0" v-for="organization of organizations" :key="organization.id"
                        :value="organization.id">
                        <div class="flex items-center gap-3 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-foreground" v-if="organization">
                            <!-- <Icon class="size-4" :icon="organization.icon" /> -->
                            {{ organization.name }}
                        </div>
                    </cn-select-item>
                </cn-select-content>
            </cn-select>
            <cn-dropdown-menu>
                <cn-dropdown-menu-trigger>
                    <cn-button variant="outline" class="p-2 rounded">
                        <Icon :name="'mage:user'" :size="'40'" class="text-black" />
                    </cn-button>
                </cn-dropdown-menu-trigger>
                <cn-dropdown-menu-content>
                    <cn-dropdown-menu-label>My Account</cn-dropdown-menu-label>
                    <cn-dropdown-menu-separator />
                    <cn-dropdown-menu-item>Profile</cn-dropdown-menu-item>
                    <cn-dropdown-menu-item>Billing</cn-dropdown-menu-item>
                    <cn-dropdown-menu-item>Team</cn-dropdown-menu-item>
                    <cn-dropdown-menu-item>Subscription</cn-dropdown-menu-item>
                </cn-dropdown-menu-content>
            </cn-dropdown-menu>
        </div>
    </div>
</template>


<style scoped></style>