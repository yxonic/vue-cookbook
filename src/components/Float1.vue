<template>
  <div ref="reference" v-bind="$attrs">
    <slot />
  </div>
  <div
    ref="floating"
    class="absolute top-0 left-0 z-auto"
    :style="{ transform: `translate(${position.x}px, ${position.y}px)` }"
  >
    <slot name="floating" />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, Ref } from 'vue'
import {
  computePosition,
  getScrollParents,
  offset,
  shift,
} from '@floating-ui/dom'
const reference: Ref<HTMLElement | null> = ref(null)
const floating: Ref<HTMLElement | null> = ref(null)
const position = reactive({ x: 0, y: 0 })
async function update() {
  if (reference.value === null || floating.value === null) return
  const { x, y } = await computePosition(reference.value, floating.value, {
    placement: 'top',
    middleware: [offset(5), shift()],
  })
  Object.assign(position, {
    x: Math.round(x),
    y: Math.round(y),
  })
}
onMounted(async () => {
  if (reference.value === null || floating.value === null) return
  update()
  getScrollParents(reference.value).forEach((el) => {
    el.addEventListener('scroll', update)
    el.addEventListener('resize', update)
  })
})
</script>
