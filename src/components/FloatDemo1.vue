<template>
  Result: demo sentence with
  <Float class="inline-block underline">
    floating
    <template #floating>
      <div class="px-2 py-1 bg-white border rounded-lg">tooltip</div>
    </template>
  </Float>
  element.
</template>
<script lang="ts" setup>
import Float from './Float.vue'
</script>
