---
title: Create a floating component
layout: book
---

# Create a floating component

## Problem

You want to show a menu or tooltip like this, after user clicks / hovers a button:

<FloatDemo3 />

## Solution

Floating components doesn't disrupt the flow of the main content. Therefore, we actually don't have to make any modification to the main content. The biggest concerns of building a floating component are about the floating element itself:

1. We should decide the position of the floating element relative to the reference element.
2. We want to control when and how it appears / disappears.

For the first concern, there is a dedicated library specifically for floating element positioning called [Floating UI](http://floating-ui.com) (formerly [Popper.js](https://popper.js.org)). It helps us to calculate the relative position of the floating element to the reference, with a handy collection of positioning strategies supported. While it is good to use it as the documentation demonstrates, we may still want to integrate it into a Vue component, in order to have a more consistent API with better organization and control of logic.

### Take #1

For convenience, we want our Vue component to wrap the reference element, and also be able to write the floating component within it. We can achieve this by using [named slots](https://v3.vuejs.org/guide/component-slots.html#named-slots). The inital API design would be like this:

```vue
<template>
  <div class="relative text-center py-4">
    <Float class="inline-block btn" placement="top">
      button
      <template #floating>
        <div class="tooltip">tooltip</div>
      </template>
    </Float>
  </div>
</template>
<script lang="ts" setup>
import Float from './Float1.vue'
</script>
<style lang="postcss">
.btn {
  @apply px-3 py-1 bg-gray-800 text-white font-semibold rounded-lg cursor-pointer;
}
.tooltip {
  @apply px-2 py-1 bg-white ring-1 ring-gray-200 rounded-lg shadow-sm;
}
</style>
```

We write a basic component positioning logic:

```vue
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
```

The result looks like:

<FloatDemo1 />

Some key features in this implementation:

1. We put the floating element intially at top-left corner with `position: absolute`, to make sure it can be moved correctly and efficiently using CSS transform `translate()`.
2. We use reactive variable `position` to track position change, and use inline style binding to actually set position. The position is calculated by Floating UI in function `update`. Notice that we rounded the position for reason described [here](https://floating-ui.com/docs/misc#subpixel-and-accelerated-positioning).
3. It is made explicit that the position of the floating element is recalculated whenever the reference element changes position (when scroll or resize happens to one of its ancestors). Details are described [here](https://floating-ui.com/docs/computePosition#scrollparents).

### Take #2

Now we want to control whether the floating element is visible. Our first implementation is a simple one: click to show tooltip, and click outside to hide it.

Basically, our new component maintains an internal state (`visible`) for the visibility of the tooltip. On reference element clicking, we modify `visible` to be true, and register update hooks. We also add a event listener for clicking outside as described [here](/utilities/02-detect-click-outside).

```vue
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
```

The result looks like:

<FloatDemo2 />

### Take #3

The final version includes more features to make it even more usable:

1. We support different types of triggering condition (hover). We do this by attaching hooks to mouseover and mouseleave events.
2. We allow the user to access and change the internal visibility state (See [scoped slots](https://v3.vuejs.org/guide/component-slots.html#scoped-slots)).
3. We support a smooth transition on visibility change. We do this according to [Vue documentation](https://v3.vuejs.org/guide/transitions-enterleave.html#custom-transition-classes).

The implementation looks like this:

```vue
<template>
  <div
    ref="reference"
    v-bind="$attrs"
    @click="show"
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
  >
    <slot :active="visible" :show="show" :hide="hide" />
  </div>
  <transition
    enter-active-class="transition-opacity duration-100 ease-out"
    leave-active-class="transition-opacity duration-100 ease-out"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="visible"
      ref="floating"
      v-click-outside:mouseup="hide"
      class="absolute top-0 left-0"
      :style="{ transform: `translate(${position.x}px, ${position.y}px)` }"
      @mouseover="onMouseOver"
      @mouseleave="onMouseLeave"
    >
      <slot name="floating" :visible="visible" :show="show" :hide="hide" />
    </div>
  </transition>
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
  type?: 'click' | 'hover' | 'manual'
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

const protect = ref(false)
function onMouseOver() {
  if (props.type !== 'hover') return
  protect.value = true
  show()
}
function onMouseLeave() {
  if (props.type !== 'hover') return
  protect.value = false
  setTimeout(() => {
    if (!protect.value) hide()
  }, 50)
}
</script>
```

With current implementation, we are able to even implement a nesting menu. We delegate menu show and hide control to the underlying component, while observing the visibility state through slot prop `active`.

```vue
<template>
  <div class="relative text-center py-4">
    <Float class="inline-block" placement="bottom-start">
      <template #default>
        <button class="btn">show menu</button>
      </template>
      <template #floating="root">
        <div class="menu">
          <Float class="block" type="hover" placement="right-start">
            <template #default="props">
              <button
                class="menu-item"
                :class="{ 'bg-gray-100': props.active }"
              >
                menu 1
              </button>
            </template>
            <template #floating>
              <div class="menu -mt-1">
                <Float class="block" type="hover" placement="right-start">
                  <template #default="props">
                    <button
                      class="menu-item"
                      :class="props.active ? 'bg-gray-100' : 'bg-white'"
                    >
                      submenu 1
                    </button>
                  </template>

                  <template #floating>
                    <div class="menu -mt-1">
                      <button class="menu-item" @click="root.hide">
                        close
                      </button>
                    </div>
                  </template>
                </Float>
                <button class="menu-item" @click="root.hide">close</button>
              </div>
            </template>
          </Float>
          <Float class="block" type="hover" placement="right-start">
            <template #default="props">
              <button
                class="menu-item"
                :class="props.active ? 'bg-gray-100' : 'bg-white'"
              >
                menu 2
              </button>
            </template>
            <template #floating>
              <div class="menu -mt-1">
                <button class="menu-item text-gray-400 cursor-not-allowed">
                  disabled
                </button>
              </div>
            </template>
          </Float>
        </div>
      </template>
    </Float>
  </div>
</template>
<script lang="ts" setup>
import Float from './Float3.vue'
</script>
<style lang="postcss">
.btn {
  @apply px-3 py-1 bg-gray-800 text-white font-semibold rounded-lg;
}
.menu {
  @apply w-32 py-1 bg-white ring-1 ring-gray-200 rounded shadow-sm;
}
.menu-item {
  @apply inline-block text-left w-full px-2 py-1 hover:bg-gray-100 focus:outline-none;
}
</style>
```

And the final result looks like this:

<FloatDemo3 />
