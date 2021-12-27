import { onBeforeUnmount, onMounted, Ref } from 'vue'

export function useClickOutside(
  el: Ref<HTMLElement | null>,
  onClickOutside: () => void,
  mouseEvent: 'click' | 'dblclick' | 'mouseup' = 'click',
) {
  const listener = (e: Event) => {
    if (el.value && !el.value.contains(e.target as HTMLElement)) {
      onClickOutside()
    }
  }
  onMounted(() => {
    document.addEventListener(mouseEvent, listener)
  })
  onBeforeUnmount(() => {
    document.removeEventListener(mouseEvent, listener)
  })
}
