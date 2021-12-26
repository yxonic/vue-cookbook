<template>
  <span ref="reference" v-bind="$attrs">
    <slot />
    <div
      v-if="visible"
      ref="floating"
      class="absolute top-0 left-0"
      :style="{ transform: `translate(${position.x}px, ${position.y}px)` }"
    >
      <slot name="floating" />
    </div>
  </span>
</template>
<script lang="ts" setup>
import { watch, ref, reactive, Ref, nextTick } from 'vue'
import { computePosition, getScrollParents } from '@floating-ui/dom'
import { assert } from 'vpage/utils'

const props = defineProps<{
  visible: boolean
}>()
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
function addHooks() {
  reference.value !== null &&
    getScrollParents(reference.value).forEach((el) => {
      el.addEventListener('scroll', update)
      el.addEventListener('resize', update)
    })
}
function removeHooks() {
  reference.value !== null &&
    getScrollParents(reference.value).forEach((el) => {
      el.removeEventListener('scroll', update)
      el.removeEventListener('resize', update)
    })
}

watch(
  () => props.visible,
  (v) => {
    if (v)
      nextTick(() => {
        update()
        addHooks()
      })
    else removeHooks()
  },
  { immediate: true },
)
</script>
