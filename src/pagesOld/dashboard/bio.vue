<template>
  <div>
    <StaticDashNavbar location=""/>
    <div class="flex justify-center mt-12 px-4">
      <div
          class="flex max-w-2xl flex-col gap-1 border-zinc-700/50 border rounded-lg bg-polar-300 p-6"
      >
        <div>
          <div class="flex flex-col gap-2">
            <h1 class="text-lg text-white-100 font-semibold">Edit your Bio</h1>
            <p class="text-sm text-gray-300">
              Here you can customize your bio settings that will affect your bio
              page, your page is accessible,
              <a href="https://jet.pics/p/nahsahh"
              ><span
                  class="text-blue-600 hover:text-blue-500 transition-colors"
              >Here</span
              ></a
              >
            </p>
            <div>
              <div class="flex gap-2">
                <InteractiveInput class="max-w-xs" placeholder="Title"/>
                <InteractiveInput class="max-w-xs" placeholder="Subtitle"/>
              </div>
              <div>
                <textarea
                    class="w-full max-w-[40.5rem] mt-2 bg-zinc-800/40 hover:bg-zinc-800 focus:bg-zinc-800 border-zinc-700/50 border duration-300 p-2 px-4 rounded-lg text-sm font-medium tracking-wide text-whites-200 outline-none"
                    name="bio-content"
                    placeholder="Content"
                    rows="6"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <p class="text-white/70 text-sm mb-2 mt-1">
          pretend this is a combobox from headless that is a dropdown input, it
          will be used to choose your socials, i'll do it with ian. (a combobox
          is just like an input above with a dropdown.)
        </p>

        <div class="flex flex-col gap-2 w-full">
          <div class="flex gap-2">
            <InteractiveButton class="w-full sm:!h-8 !h-10" text="Upload Background"/>
            <InteractiveButton class="w-full sm:!h-8 !h-10" text="Remove Background"/>
          </div>
          <InteractiveButton class="w-full" text="Add Music"/>
        </div>

        <div class="flex ml-auto mt-1">
          <InteractiveButton class="bg-blues-100 bg-opacity-30 !text-blues-100 hover:bg-blues-100 hover:bg-opacity-60"
                             text="Save Changes"/>
        </div>
      </div>
    </div>
  </div>
</template>
