<template>
  <div>
    <StaticDashNavbar location="gallery"/>
    <div class="flex flex-col max-w-[100rem] mx-auto px-4 mt-12">
      <div class="grid md:grid-cols-2 max-w-7xl lg:grid-cols-3 gap-4">
        <div class="border-zinc-700/50 border rounded-lg bg-polar-300 p-4">
          <h1 class="text-center font-semibold mb-4">
            NVIDIA_Share_rYjegwyje6 - NahSahh.png
          </h1>
          <img
              alt=""
              class="w-full h-52 rounded-lg"
              src="https://cdn.nest.rip/uploads/169f1b65-785f-44a7-bfd9-17845e36a830.png"
          />
          <div class="border-t border-zinc-700/50 mt-4"></div>
          <div class="flex justify-center gap-2 mt-2">
            <InteractiveButton class="!h-6" text="Edit"/>
            <InteractiveButton
                class="!h-6 bg-red-500 hover:bg-red-600"
                text="Delete"
            />
            <InteractiveButton
                class="!h-6 bg-blue-500 hover:bg-blue-600"
                text="Link"
            />
            <InteractiveButton
                class="!h-6 bg-purple-500 hover:bg-purple-600"
                text="Download"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
