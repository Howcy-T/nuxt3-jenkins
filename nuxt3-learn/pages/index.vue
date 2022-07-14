<script lang="ts" setup>
definePageMeta({
  middleware: 'auth',
})
</script>

<template>
  <div>
    <a-button type="primary" @click="$router.push('course-list')">
      Primary Button
    </a-button>
    <a-button>Default Button</a-button>
    <a-button type="dashed">
      Dashed Button
    </a-button>
    <a-button type="text">
      Text Button
    </a-button>
    <a-button type="link">
      Link Button
    </a-button>
  </div>
</template>
