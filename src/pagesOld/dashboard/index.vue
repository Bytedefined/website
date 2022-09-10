<template>
  <div>
    <StaticDashNavbar location="dashboard"/>
    <div class="flex flex-col gap-6 container mt-12 w-full px-4 pb-4 md:px-12 mx-auto">
      <div class="flex md:flex-row flex-col justify-center w-full gap-6">
        <StaticCard
            class="w-full"
            rawHtml='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="text-[#007aff]" viewBox="0 0 16 16">
  <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z"/>
</svg>'
            title="MOTD"
        >
          hello
        </StaticCard>
        <StaticCard
            class="w-full"
            rawHtml='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="text-[#007aff]" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
</svg>'
            title="Site Users"
        >
          6090
        </StaticCard>
        <StaticCard
            class="w-full"
            rawHtml='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="text-[#007aff]" viewBox="0 0 16 16">
  <path d="M0 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-1zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM.91 7.204A2.993 2.993 0 0 1 2 7h12c.384 0 .752.072 1.09.204l-1.867-3.422A1.5 1.5 0 0 0 11.906 3H4.094a1.5 1.5 0 0 0-1.317.782L.91 7.204z"/>
</svg>'
            title="Site Usage"
        >
          69GB
        </StaticCard>
      </div>
      <div class="flex md:flex-row flex-col justify-center w-full gap-6">
        <div
            class="flex max-w-7xl w-full flex-col gap-1 border-zinc-700/50 border rounded-lg bg-polar-300 p-6"
        >
          <div>
            <div class="flex flex-col gap-2">
              <h1 class="text-lg text-white-100 font-semibold">Upload Graph</h1>
              <img
                  alt=""
                  src="https://cdn.discordapp.com/attachments/993616210614812752/1004016634568114197/unknown.png"
              />
            </div>
          </div>
        </div>
        <div
            class="flex md:max-w-lg w-full flex-col gap-1 rounded-lg border-zinc-700/50 border bg-polar-300 p-5"
        >
          <div>
            <div class="flex justify-between items-center">
              <div>
                <h1 class="text-lg text-white-100 font-semibold">
                  User Overview
                </h1>
                <div class="flex gap-2 mt-4 w-fit">
                  <img
                      alt=""
                      class="h-12 w-12 rounded-full"
                      src="https://jet.pics/api/v1/userutils/identicon/NahSahh"
                  />
                  <div class="grid">
                    <h1 class="text-gray-200 font-semibold text-center">
                      NahSahh
                    </h1>
                    <p class="text-sm text-gray-300">Pov Nick</p>
                  </div>
                </div>
              </div>
              <InteractiveModal
                  v-model:isOpen="ConfigOpen"
                  class="bg-red-500 hover:bg-red-600"
                  text="Get Config"
                  title="Configuration"
              >
                <p class="text-sm text-gray-300">
                  Here you can download your configs for uploading via, ShareX
                  or ShareNix
                </p>

                <div class="flex gap-2 mt-3">
                  <InteractiveButton class="bg-blue-500 hover:bg-blue-600" text="ShareX config"/>
                  <InteractiveButton class="bg-violet-600 hover:bg-violet-500" text="ShareNix config"/>
                </div>
                <div class="flex flex-col gap-3 mt-3">
                  <video controls="true" height="430">
                    <source
                        src="https://jet.pics/i/a273a947.mp4"
                        type="video/mp4"
                    />
                  </video>
                </div>
              </InteractiveModal>
            </div>
            <div class="flex gap-2 mt-6">
              <div class="w-full">
                <p class="text-gray-300 text-md">Registered On</p>
                <div
                    class="bg-zinc-800 hover:bg-zinc-800 mt-1 cursor-not-allowed select-none border-zinc-600/40 border px-4 min-h-[2.25rem] rounded flex items-center"
                >
                  <span class="text-sm text-gray-500"
                  >16th of January 2022, 12:02 AM</span
                  >
                </div>
              </div>
              <div class="w-full">
                <p class="text-gray-300 text-md">Active Domain</p>
                <div
                    class="bg-zinc-800 hover:bg-zinc-800 mt-1 cursor-not-allowed select-none border-zinc-600/40 border px-4 h-9 rounded flex items-center"
                >
                  <span class="text-sm text-gray-500">jet.pics</span>
                </div>
              </div>
            </div>
            <div class="flex gap-2 mt-2">
              <div class="w-full">
                <p class="text-gray-300 text-md">Invited By</p>
                <div
                    class="bg-zinc-800 hover:bg-zinc-800 mt-1 cursor-not-allowed select-none border-zinc-600/40 border px-4 h-9 rounded flex items-center"
                >
                  <span class="text-sm text-gray-500">Troplo</span>
                </div>
              </div>
              <div class="w-full">
                <p class="text-gray-300 text-md">User ID</p>
                <div
                    class="bg-zinc-800 hover:bg-zinc-800 mt-1 cursor-not-allowed select-none border-zinc-600/40 border px-4 h-9 rounded flex items-center"
                >
                  <span class="text-sm text-gray-500">28</span>
                </div>
              </div>
            </div>
            <div class="w-full mt-2">
              <p class="text-gray-300 text-md">Storage Used</p>
              <div
                  class="bg-zinc-800 hover:bg-zinc-800 mt-1 cursor-not-allowed select-none border-zinc-600/40 border px-4 h-9 rounded flex items-center"
              >
                <span class="text-sm text-gray-500">150MB/15GB</span>
              </div>
            </div>
            <div class="mt-2 w-full flex flex-col gap-2">
              <h1 class="text-lg text-white-100 font-semibold">Misc</h1>
              <div class="flex gap-2 w-full">
                <InteractiveButton
                    class="w-full md:!h-9 !h-12"
                    text="Copy API Key"
                />
                <InteractiveButton
                    class="w-full md:!h-9 !h-12"
                    text="Refresh API Key"
                />
              </div>
              <InteractiveButton
                  class="!bg-transparent duration-500 shadow-none !bg-indigo-600 hover:!bg-indigo-500"
                  text="Link Discord"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const ConfigOpen = ref(false);
</script>
