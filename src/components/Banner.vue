<template>
  <div class="bg-blues-100">
    <div class="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex flex-wrap items-center justify-between">
        <div class="flex w-0 flex-1 items-center">
          <span class="flex rounded-lg bg-blues-200 p-2">
            <i class="fa-solid fa-megaphone" v-if="type === 'announcement'"></i>
            <i class="fa-solid fa-circle-exclamation" v-if="type === 'alert'"></i>
            <i class="fa-solid fa-info-circle" v-if="type === 'info'"></i>
          </span>
          <p class="ml-3 font-semibold text-white">
            <span>{{text}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps(["text", "type"]);
</script>
