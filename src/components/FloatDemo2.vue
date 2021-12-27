<template>
  <div class="relative text-center py-4">
    <Float class="inline-block btn" placement="top">
      button
      <template #floating>
        <div class="tooltip">tooltip</div>
      </template>
    </Float>
  </div>
</template>
<script lang="ts" setup>
import Float from './Float2.vue'
</script>
<style lang="postcss">
.btn {
  @apply px-3 py-1 bg-gray-800 text-white font-semibold rounded-lg cursor-pointer;
}
.tooltip {
  @apply px-2 py-1 bg-white ring-1 ring-gray-200 rounded-lg shadow-sm;
}
</style>
