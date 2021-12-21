import{h as e}from"./vendor.47baf629.js";const n=[e("h1",{},["Create a popover"]),e("p",{},["You want to show a menu or tooltip, after user clicks / hovers a button."]),e("p",{},["There is a javascript library for creating and positioning tooltips / popovers (",e("a",{href:"https://popper.js.org/"},["popper.js"]),"). You may want to wrap it as a Vue component for more flexible use."]),e("pre",{},[`<template>
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
<\/script>
`])];var r={render(){return n}};const t={title:"Create a popover",layout:"book"};export{r as default,t as frontmatter,n as nodes};
