<template>
  <div>
    <StaticDashNavbar location="settings" />
    <div class="flex justify-center mt-12 px-4">
      <div
        class="flex max-w-7xl w-full flex-col gap-1 border-zinc-700/50 border rounded-lg bg-polar-300 p-6"
      >
        <div>
          <div class="flex flex-col gap-2">
            <h1 class="text-lg text-white-100 font-semibold">
              Customizable Settings
            </h1>
            <p class="text-sm text-gray-300">
              Here you can customize settings that will affect your uploads such
              as editing your embed, or editing your URL.
            </p>
            <div class="flex gap-4 mb-1 mt-1">
              <div class="flex items-center select-none">
                <input
                  id="checkybox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 duration-300 bg-polar-100 rounded-full appearance-none checked:bg-blue-600 focus:ring-blue-600"
                />
                <label
                  for="checkybox"
                  class="ml-2 text-sm font-medium text-gray-300"
                  >Fake URL (Discord only)</label
                >
                <InteractiveTooltip
                  text="These paths will appear as a different domain, and path to the
            Discord client, however the embed will still appear as if its the
            proper path. (Example: https://google.com/[attachment.name])"
                />
              </div>
              <div class="flex items-center select-none">
                <input
                  id="checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 duration-300 bg-polar-100 rounded-full appearance-none checked:bg-blue-600 focus:ring-blue-600"
                />
                <label
                  for="checkbox"
                  class="ml-2 text-sm font-medium text-gray-300"
                  >Invisible URL</label
                >
                <InteractiveTooltip
                  text="instead of the regular filename, the URL will be hidden. (Example: https://jet.pics/)"
                />
              </div>
            </div>
            <InteractiveInput class="max-w-xs" placeholder="Custom Path" />
            <div class="flex md:flex-row flex-col gap-6 mt-3">
              <div class="flex flex-col">
                <div class="flex items-center gap-3">
                  <h1 class="text-lg text-white-100 font-semibold">
                    Embed Editor
                  </h1>
                  <div class="flex mt-1 items-center select-none">
                    <input
                      id="embeds"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 duration-300 bg-polar-100 rounded-full appearance-none checked:bg-blue-600 focus:ring-blue-600"
                    />
                    <label
                      for="embeds"
                      class="ml-2 text-sm font-medium text-gray-300"
                      >Enable Embeds</label
                    >
                    <InteractiveTooltip
                      text="Enables embeds, allowing you to edit the embed of your uploads, if disabled the raw url will be served."
                    />
                  </div>
                </div>
                <!-- <div
              class="bg-amber-600 max-w-lg items-center flex p-2 rounded-lg font-semibold"
            >
              Some meta tags may not work as intended on certain types of files,
              for example, certain tags will be excluded on video embeds.
            </div> -->
                <div class="grid gap-3 mt-3">
                  <div class="flex gap-2">
                    <InteractiveInput
                      class="max-w-xs"
                      placeholder="og:site_name"
                    />
                    <InteractiveInput
                      class="max-w-xs"
                      placeholder="og:site_url"
                    />
                  </div>
                  <div class="flex gap-2">
                    <InteractiveInput
                      class="max-w-xs"
                      placeholder="og:author_name"
                    />
                    <InteractiveInput
                      class="max-w-xs"
                      placeholder="og:author_url"
                    />
                  </div>
                  <InteractiveInput
                    class="md:max-w-[26rem]"
                    placeholder="og:title"
                  />
                  <InteractiveInput
                    class="md:max-w-[26rem]"
                    placeholder="og:description"
                  />
                  <InteractiveButton text="choose color"/>
                </div>
              </div>
              <div>
                <h1 class="text-lg text-white-100 font-semibold">
                  Discord Preview
                </h1>
                <p class="text-blue-500">https://jet.pics/751a3287.txt</p>
                <div class="bg-[#2f3136] p-3 w-fit rounded border-l-2">
                  <p class="text-sm text-gray-400">jet.pics</p>
                  <p class="text-sm font-semibold">nahsahh</p>
                  <p class="text-blue-500 font-semibold">filename.png</p>
                  <p class="mb-3 text-sm text-gray-300">Uploaded using jet.</p>
                  <img class="h-36 rounded" src="https://pekwachnamaykoskwaskwaypinwanik.jet.pics/41f2b252fdf9.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
