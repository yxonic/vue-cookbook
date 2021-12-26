<template>
  <div class="text-center py-2">
    <Float :visible="visible" class="inline-block">
      <button class="btn" @click="visible = !visible">click to toggle</button>
      <template #floating>
        <div class="px-2 py-1 bg-white border rounded-lg">tooltip</div>
      </template>
    </Float>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Float from './Float2.vue'
const visible = ref(false)
</script>
<style lang="postcss">
.btn {
  @apply px-3 py-1 bg-gray-800 text-white font-semibold rounded-lg;
}
</style>
