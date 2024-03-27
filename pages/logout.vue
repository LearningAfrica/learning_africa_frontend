<template>
    <div>
        <!-- <h1>Logging out...</h1> -->
    </div>
</template>
<script setup lang="ts">
const auth = useAuthStore();
const router = useRouter();
onMounted(() => {
	auth.logout();
	router.push("/login");
});
</script>