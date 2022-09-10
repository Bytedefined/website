<template>
  <button
      class="bg-zinc-700/50 select-none hover:bg-polar-500 shadow-md duration-300 px-4 h-8 rounded-lg text-sm font-medium tracking-wide text-whites-200"
      type="button"
  >
    <slot>{{text}}</slot>
  </button>
</template>

<script lang="ts" setup>
interface Props {
  text?: string;
}

defineProps<Props>();
</script>
