<script setup lang="ts">

const auth = useAuthStore();
// const isScroll = ref(false);
// const isAuthenticated = ref(false);


</script>
<template>
    <div class="border-b w-full sticky top-0 flex flex-col gap-0 p-4 bg-white z-50">
        <max-width-wrapper class-name="flex justify-between items-center">
            <div class="flex items-center gap-2">

                <img src="https://avatars.githubusercontent.com/u/150797856?s=200&v=4" alt=""
                    class="h-12 w-12 rounded-full">
                <span class="text-xl hidden md:block  text-primary-pk ml-4 font-bold uppercase">
                    Learning Africa
                </span>
            </div>
            <div v-if="!auth.isAuthenticated">
                <nuxt-link to='/login' class="text-sm font-medium text-gray-900 ml-4 border px-4 py-2 rounded">
                    Sign in
                </nuxt-link> <nuxt-link to='/register'
                    class="text-sm font-medium text-white ml-4 px-4 py-2 bg-black rounded">
                    Sign up
                </nuxt-link>
            </div> 
            <div v-if="auth.isAuthenticated">
                <nuxt-link :to='auth.dashboardUrl' class="text-sm font-medium text-gray-900 ml-4 border px-4 py-2 rounded">
                    Dashboard
                </nuxt-link> <button to='/register'
                    class="text-sm font-medium text-white ml-4 px-4 py-2 bg-black rounded">
                    Profile
                </button>
            </div>

        </max-width-wrapper>
    </div>
</template>

<style scoped>

</style>