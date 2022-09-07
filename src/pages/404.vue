<template>
  <div class="m-auto">
      <div class="max-w-lg grid gap-2">
          <h1 class="font-semibold text-4xl text-center">Error 404 | Page Not Found</h1>
          <p class="text-center text-gray-300">
            Hmm, it seems like you've stumbled upon a page that doesn't exist. This page either never existed in the first place or has moved.
          </p>
          <div class="flex justify-center gap-2">
            <NuxtLink to="/">
              <InteractiveButton text="Take Me Home" />
            </NuxtLink>
          </div>
      </div>
  </div>
</template>