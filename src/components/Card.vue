<template>
    <div class="flex max-w-3xl w-full flex-col gap-1 rounded-lg border-zinc-700/50 border bg-polar-300 p-6">
    <div>
      <div class="flex gap-2">
          <svg v-html="rawHtml" class="h-6 w-6"></svg>
        <h1 class="text-lg text-white-100 font-semibold">{{ title }}</h1>
      </div>
      <p class="text-sm text-gray-300">{{ subtitle }}</p>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(["title", "subtitle", "rawHtml"]);
</script>
