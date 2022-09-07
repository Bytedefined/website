<template>
  <div class="p-2 m-auto max-w-5xl container flex flex-col">
    <div class="mx-auto flex flex-col">
      <h1 class="text-4xl text-whites-100 font-semibold text-center">
        Hello, I'm <span class="text-blues-100">Bytedefined</span>
      </h1>

      <p class="text-gray-300 mt-1 max-w-lg font-medium text-center">
        A Russian/Australian software developer/designer.
      </p>
      <div class="flex gap-2 mx-auto mt-2 w-full">
        <a href="https://twitter.com/Bytedefined" target="_blank">
          <InteractiveButton
            class="ml-auto duration-500 shadow-none !bg-blue-600 hover:!bg-blue-500"
            text="Follow me on Twitter"
          />
        </a>
        <a href="https://github.com/Bytedefined" target="_blank">
          <InteractiveButton
              class="ml-auto duration-500 shadow-none !bg-blue-600 hover:!bg-blue-500"
              text="Check out my Github"
          />
        </a>
      </div>
    </div>
  </div>
</template>
