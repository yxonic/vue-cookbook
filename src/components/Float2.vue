<template>
  <div ref="reference" v-bind="$attrs" @click="show">
    <slot />
  </div>
  <div
    v-if="visible"
    ref="floating"
    v-click-outside:mouseup="hide"
    class="absolute top-0 left-0"
    :style="{ transform: `translate(${position.x}px, ${position.y}px)` }"
  >
    <slot name="floating" />
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, Ref, nextTick } from 'vue'
import {
  computePosition,
  getScrollParents,
  offset,
  shift,
} from '@floating-ui/dom'
import { Placement } from '@floating-ui/core'

const props = defineProps<{
  placement?: Placement
}>()
const visible = ref(false)
const reference: Ref<HTMLElement | null> = ref(null)
const floating: Ref<HTMLElement | null> = ref(null)
const position = reactive({ x: 0, y: 0 })

async function update() {
  if (reference.value === null || floating.value === null) return
  const { x, y } = await computePosition(reference.value, floating.value, {
    placement: props.placement,
    middleware: [offset(5), shift()],
  })
  Object.assign(position, {
    x: Math.round(x),
    y: Math.round(y),
  })
}

function addHooks() {
  if (reference.value === null) return
  getScrollParents(reference.value).forEach((el) => {
    el.addEventListener('scroll', update)
    el.addEventListener('resize', update)
  })
}
function removeHooks() {
  if (reference.value === null) return
  getScrollParents(reference.value).forEach((el) => {
    el.removeEventListener('scroll', update)
    el.removeEventListener('resize', update)
  })
}
function show() {
  if (visible.value === true) return
  visible.value = true
  nextTick(() => {
    update()
    addHooks()
  })
}
function hide() {
  if (visible.value === false) return
  removeHooks()
  visible.value = false
}
</script>
