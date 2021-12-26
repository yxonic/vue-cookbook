<template>
  <a-router
    ref="link"
    :href="href"
    :class="{
      [activeClass || 'text-blue-700']: pathname === href,
    }"
  >
    <slot></slot>
  </a-router>
</template>
<script lang="ts" setup>
import { useCurrentUrl } from 'vpage/router'
import { Ref, ref, onMounted } from 'vue'
const { pathname } = useCurrentUrl()

const props = defineProps<{
  href: string
  activeClass?: string
}>()

const link: Ref<{ $el: HTMLElement } | null> = ref(null)
onMounted(() => {
  if (pathname.value === props.href && link.value !== null) {
    link.value.$el.scrollIntoView({
      block: 'nearest',
    })
  }
})
</script>
