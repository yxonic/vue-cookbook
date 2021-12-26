---
title: Create a floating component
layout: book
---

# Create a floating component

You want to show a menu or tooltip, after user clicks / hovers a button.

Floating components doesn't disrupt the flow of the main content. Therefore, we actually don't have to make any modification to the main content. The biggest concerns of building a floating component are about the floating element itself:
1. We should decide the position of the floating element relative to the reference element.
2. We want to control when and how it appears / disappears.

For the first concern, there is a dedicated library specifically for floating element positioning called [Floating UI](http://floating-ui.com) (formerly [Popper.js](https://popper.js.org)). It helps us to calculate the relative position of the floating element to the reference, with a handy collection of positioning strategies supported. While it is good to use it as the documentation demonstrates, we may still want to integrate it into Vue, in order to have a more consistent API with better organization and control of logic.

The Vue API should wrap the reference element, and also be able to write the floating component within it. We can achieve this by using [named slots](https://v3.vuejs.org/guide/component-slots.html#named-slots). The inital API design would be like this:

```vue
<Float class="inline-block underline">
  floating
  <template #floating>
    <div class="px-2 py-1 bg-white border rounded-lg">tooltip</div>
  </template>
</Float>
```

We write a basic component positioning logic:

```vue
<template>
  <span ref="reference" v-bind="$attrs">
    <slot />
    <div
      ref="floating"
      class="absolute top-0 left-0"
      :style="{ transform: `translate(${position.x}px, ${position.y}px)` }"
    >
      <slot name="floating" />
    </div>
  </span>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, Ref } from 'vue'
import { computePosition, getScrollParents } from '@floating-ui/dom'
const reference: Ref<HTMLElement | null> = ref(null)
const floating: Ref<HTMLElement | null> = ref(null)
const position = reactive({ x: 0, y: 0 })
async function update() {
  assert(reference.value !== null && floating.value !== null)
  const { x, y } = await computePosition(reference.value, floating.value, {
    placement: 'top',
  })
  Object.assign(position, { x, y })
}
onMounted(async () => {
  assert(reference.value !== null && floating.value !== null)
  update()
  getScrollParents(reference.value).forEach((el) => {
    el.addEventListener('scroll', update)
    el.addEventListener('resize', update)
  })
})
</script>
```

<FloatDemo1 />

Some key features in this implementation:

1. We put the floating element intially at top-left corner with `position: absolute`, to make sure it can be moved correctly and efficiently using CSS transform `translate()`.
2. We use reactive variable `position` to track position change, and use inline style binding to actually set position. The position is calculated by Floating UI in function `update`.
3. It is made explicit that the position of the floating element is recalculated whenever the reference element changes position (when scroll or resize happens to one of its ancestors).
