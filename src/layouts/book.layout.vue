<template>
  <article
    class="absolute inset-0 grid grid-cols-[auto,1fr] grid-rows-[auto,1fr]"
  >
    <div
      class="row-span-2 overflow-hidden"
      :class="{
        'md:w-0': !defaultLayout,
        'w-0 md:w-64': defaultLayout,
      }"
    >
      <aside
        class="fixed inset-0 md:w-64 overflow-scroll bg-gray-50 z-10 p-6 transition ease-in-out transform"
        :class="{
          'md:-translate-x-64': !defaultLayout,
          'hidden md:block md:translate-x-0': defaultLayout,
        }"
      >
        <div class="flex justify-center">
          <a-router href="/" class="font-bold"> Vue Cookbook </a-router>
          <button
            v-if="!defaultLayout"
            class="md:hidden absolute top-5 left-6 text-2xl text-gray-400 hover:text-gray-300 focus:outline-none"
            @click="toggleLayout"
          >
            ×
          </button>
        </div>
        <hr class="mt-4" />
        <nav class="mt-6 overflow-hidden">
          <ul class="space-y-4">
            <li>
              <NavLink class="font-semibold" href="/"> Introduction </NavLink>
            </li>
            <li>
              <div class="font-semibold" href="/content">Content</div>
            </li>
            <li>
              <div class="font-semibold" href="/effects">Effects</div>
            </li>
            <li>
              <div class="font-semibold" href="/layouts">Layouts</div>
            </li>
            <li>
              <div class="font-semibold" href="/interactive">Interactive</div>

              <ul class="ml-4 mt-2 space-y-2 leading-snug">
                <li>
                  <NavLink
                    href="/interactive/01-create-a-floating-component"
                    active-class="text-blue-700 font-medium"
                  >
                    Create a floating component
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/interactive/02-create-a-dialog"
                    active-class="text-blue-700 font-medium"
                  >
                    Create a dialog
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <div class="font-semibold" href="/utilities">Utilities</div>

              <ul class="ml-4 mt-2 space-y-2 leading-snug">
                <li>
                  <NavLink
                    href="/utilities/01-assert-with-type-assertion"
                    active-class="text-blue-700 font-medium"
                  >
                    Assert with type assertion
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/utilities/02-detect-click-outside"
                    active-class="text-blue-700 font-medium"
                  >
                    Detect click outside
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/utilities/03-pass-data-along-tree"
                    active-class="text-blue-700 font-medium"
                  >
                    Pass data along tree
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
    </div>

    <header class="col-start-2 px-6 py-4 flex items-center justify-between">
      <button
        class="-ml-2.5 text-2xl font-medium text-gray-400 px-3 py-1 rounded hover:bg-gray-100 focus:outline-none"
        @click="toggleLayout"
      >
        ≡
      </button>
      <a
        class="h-6"
        href="https://github.com/yxonic/vue-cookbook"
        target="_blank"
        rel="noopener"
      >
        <svg
          class="h-6 text-gray-400 fill-current"
          aria-hidden="true"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
      </a>
    </header>

    <main class="col-start-2 overflow-scroll">
      <article class="prose mx-auto p-6">
        <slot></slot>
      </article>
      <footer class="h-16">
        <!-- TODO: prev/next links -->
      </footer>
    </main>
  </article>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import NavLink from '../components/NavLink.vue'

const defaultLayout = ref(true)
const toggleLayout = () => (defaultLayout.value = !defaultLayout.value)
</script>
