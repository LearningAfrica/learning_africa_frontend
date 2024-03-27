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
/**
  <div
        class="w-full transition-all duration-500 py-2  bg-primary-pk bg-blend-overlay bg-opacity-10">
        <max-width-wrapper class-name="flex justify-between items-center">
            <div class="w-full flex justify-between items-center p-4 rounded-md h-20">

                <div className="w-full flex items-center">
                    <div className="flex items-center">
                        <img className="w-14 h-14 rounded-full"
                            src="https://avatars.githubusercontent.com/u/150797856?s=200&v=4" alt="avatar" />
                        <div class="text-xl hidden md:block  text-primary-pk ml-4 font-bold uppercase">
                            Learning Africa
                        </div>
                    </div>
                </div>
                <div>
                    <div className="items-center hidden md:flex">
                        <div className="text-sm font-medium text-gray-900">
                            Home
                        </div>
                        <div className="text-sm font-medium text-gray-900 ml-4">
                            About
                        </div>
                        <div className="text-sm font-medium text-gray-900 ml-4">
                            Contact
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div v-if="isAuthenticated">
                        <div className="flex items-center gap-2">
                            <div className="text-sm font-medium text-gray-900 ml-4">
                                <nuxt-link to='/' class="text-sm font-medium text-gray-900 ml-4"
                                    :class="{ 'bg-primary-pk px-4 text-white py-2 rounded': isScroll }">
                                    Dashboard
                                </nuxt-link>
                            </div>
                            <img className="w-8 h-8 rounded-full"
                                src="https://secure.gravatar.com/avatar/2b7b7c9b5c9c5b5c9b7c9b5c9b7c9b5c?s=200&d=mm&r=g"
                                alt="avatar" />
                        </div>
                    </div>
                    <div v-else className="flex items-center" class="flex items-center">
                        <nuxt-link to='' class="text-sm font-medium text-blue-600 hover:underline ml-4">
                            Login
                        </nuxt-link>
                        <div
                            className="text-sm font-medium text-gray-900 ml-4 bg-primary-pk px-4 md:px-8 py-2 md:py-4 rounded">
                            Sign up
                        </div>
                    </div>
                </div>
            </div>
        </max-width-wrapper>
    </div> */
</style>