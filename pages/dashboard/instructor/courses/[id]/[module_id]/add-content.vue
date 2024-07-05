      
<script lang="ts" setup>
      const router = useRoute('dashboard-instructor-courses-id-module_id-add-content')
</script>
<template>
  <div>
    <dashboard-course-add-module-add-content :course_id="Number(router.params.id)"
      :module_id="Number(router.params.module_id)" />
  </div>
</template>

<style></style>