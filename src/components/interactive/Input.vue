<template>
  <!-- placeholder from props -->
  <input
    v-bind:placeholder="text"
    class="bg-zinc-800/40 w-full hover:bg-zinc-800 focus:bg-zinc-800 border-zinc-700/50 border duration-300 p-2 px-4 rounded-lg text-sm font-medium tracking-wide text-whites-200 outline-none"
  />
</template>

<script setup lang="ts">
interface Props {
  text?: string;
}

defineProps<Props>();
</script>
