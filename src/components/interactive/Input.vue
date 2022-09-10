<template>
  <!-- placeholder from props -->
  <input
      class="bg-zinc-800/40 w-full hover:bg-zinc-800 focus:bg-zinc-800 border-zinc-700/50 border duration-300 p-2 px-4 rounded-lg text-sm font-medium tracking-wide text-whites-200 outline-none"
      v-bind:placeholder="text"
  />
</template>

<script lang="ts" setup>
interface Props {
  text?: string;
}

defineProps<Props>();
</script>
