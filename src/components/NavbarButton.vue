<template>
  <button
      class="hover:bg-blues-200 hover:bg-opacity-30 select-nonetext-sm duration-300 px-3 h-8 rounded-xl font-medium tracking-wide text-whites-200"
      type="button"
  >
    <slot>
      <span class="flex gap-1 items-center">
        <span v-html="rawHtml"> </span>
        {{text}}
      </span>
    </slot>
  </button>
</template>

<script lang="ts" setup>
defineProps(["text", "rawHtml"])
</script>
