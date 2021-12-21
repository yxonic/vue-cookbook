---
title: Create a popover
layout: book
---

# Create a popover

You want to show a menu or tooltip, after user clicks / hovers a button.

There is a javascript library for creating and positioning tooltips / popovers ([popper.js](https://popper.js.org/)). You may want to wrap it as a Vue component for more flexible use.

```vue
<template>
  <div
    ref="main"
    v-bind="$attrs"
    @click="show()"
  >
    <slot />
  </div>
  <div ref="popper">
    <slot name="popper" />
  </div>
</template>
<script lang="ts" setup>
import { ref, Ref } from 'vue'
const main: Ref<HTMLElement | null> = ref(null)
const popper: Ref<HTMLElement | null> = ref(null)

onMounted(() => {
  assert(main.value && popper.value)
  createPopper(main.value, popper.value, { placement: 'right' })
})
</script>
```
