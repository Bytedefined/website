<template>
  <Button v-bind:class="class" type="button" @click="$emit('update:isOpen', true)">
    {{ text }}
  </Button>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog
      as="div"
      class="relative z-10"
      @close="$emit('update:isOpen', false)"
    >
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-2 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-lg transform overflow-hidden rounded-xl bg-polar-300/70 backdrop-blur-lg p-6 text-left align-middle shadow-xl transition-all"
            >
              <div class="flex flex-row justify-between">
                <DialogTitle class="text-xl font-medium">
                  {{ title }}
                </DialogTitle>

                <button
                  class="h-8 w-8 bg-transparent text-center hover:bg-polar-400 rounded-lg"
                  @click="$emit('update:isOpen', false)"
                >
                  X
                </button>
              </div>
              <slot />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";
import Button from "./Button.vue";

interface Props {
  title?: string;
  isOpen: boolean;
  text?: string;
  class?: string;
}

defineProps<Props>();
defineEmits(["update:isOpen"]);
</script>
