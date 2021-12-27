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
