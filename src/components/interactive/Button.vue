<template>
  <button
    type="button"
    class="bg-zinc-700/50 select-none hover:bg-polar-500 shadow-md duration-300 px-4 py-1 h-8 rounded-lg text-sm font-medium tracking-wide text-whites-200 whitespace-nowrap"
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
