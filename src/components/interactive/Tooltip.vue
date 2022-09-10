<template>
  <div class="group flex cursor-pointer ml-2 flex-col justify-center">
    <div
        class="flex cursor-pointer flex-col justify-center px-2 rounded-3xl bg-polar-500 shadow-lg"
    >
      ?
    </div>
    <div class="relative flex justify-center">
      <div
          class="fixed mt-2 scale-0 p-2 rounded bg-polar-400 text-sm text-white shadow-lg duration-75 group-hover:scale-100"
      >
        <slot>
          <p class="hidden w-full max-w-2xl group-hover:block">
            {{text}}
          </p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  text?: string;
}

defineProps<Props>();
</script>
