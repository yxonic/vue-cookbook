---
title: Detect click outside
layout: book
---

# Detect click outside

## Problem
You want to detect clicks outside an element.

## Solution
The basic idea is to globally capture clicks, and check whether the clicked element is inside the element of our concern. We need a [template ref](https://v3.vuejs.org/guide/composition-api-template-refs.html) to specify the element, and a callback function. Event listener is loaded / removed along with the Vue component.

```ts
function useClickOutside(
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
```

Another way is to provide a custom `v-click-outside` [directive](https://v3.vuejs.org/guide/custom-directive.html):

```ts
function listener(el: Element, onClickOutside: () => void) {
  return (e: Event) => {
    if (el && !el.contains(e.target as HTMLElement)) {
      onClickOutside()
    }
  }
}
app.directive('click-outside', {
  mounted(el, binding) {
    el.clickOutsideListener = listener(el, binding.value)
    document.addEventListener(binding.arg || 'click', el.clickOutsideListener)
  },
  beforeUnmount(el, binding) {
    document.removeEventListener(
      binding.arg || 'click',
      el.clickOutsideListener,
    )
  },
})
```

Usage:
```html
<div v-click-outside:mouseup="onClickOutside"></div>
```
