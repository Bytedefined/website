<template>
  <button
    type="button"
    class="bg-zinc-700/50 select-none hover:bg-polar-500 shadow-md duration-300 px-4 h-8 rounded-lg text-sm font-medium tracking-wide text-whites-200 hidden-mobile"
  >
    <slot>{{ text }}</slot>
  </button>
  <button
    type="button"
    class="bg-zinc-700/50 select-none hover:bg-polar-500 shadow-md duration-300 px-4 py-6 h-8 rounded-lg text-sm font-medium tracking-wide text-whites-200 whitespace-pre hidden-desktop"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  text?: string;
}

defineProps<Props>();
</script>
