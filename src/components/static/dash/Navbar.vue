<template>
  <nav class="w-full flex items-center p-3 relative justify-between px-4">
    <img alt="" class="h-7" src="/assets/images/jet.svg">
    <div class="gap-2 md:flex hidden justify-center">
      <NuxtLink to="/dashboard">
        <StaticDashButton
            :class="[
            location == 'dashboard'
              ? '!bg-blues-100 !bg-opacity-30 !text-blues-100'
              : 'hover:!bg-polar-500',
          ]"
            rawHtml='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
          <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
        </svg>'
            text="Dashboard"
        />
      </NuxtLink>
      <NuxtLink to="/dashboard/settings">
        <StaticDashButton
            :class="[
            location == 'settings'
              ? '!bg-blues-100 !bg-opacity-30 !text-blues-100'
              : 'hover:!bg-polar-500',
          ]"
            rawHtml='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-gear-wide" viewBox="0 0 16 16">
                <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"/>
              </svg>'
            text="Settings"
        />
      </NuxtLink>
      <NuxtLink to="/dashboard/domains">
        <StaticDashButton
            :class="[
            location == 'domains'
              ? '!bg-blues-100 !bg-opacity-30 !text-blues-100'
              : 'hover:!bg-polar-500',
          ]"
            rawHtml='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
        </svg>'
            text="Domains"
        />
      </NuxtLink>
      <NuxtLink to="/dashboard/gallery">
        <StaticDashButton
            :class="[
            location == 'gallery'
              ? '!bg-blues-100 !bg-opacity-30 !text-blues-100'
              : 'hover:!bg-polar-500',
          ]"
            rawHtml='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16">
          <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
          <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/>
        </svg>'
            text="Gallery"
        />
      </NuxtLink>
      <NuxtLink to="/dashboard/users">
        <StaticDashButton
            :class="[
            location == 'users'
              ? '!bg-blues-100 !bg-opacity-30 !text-blues-100'
              : 'hover:!bg-polar-500',
          ]"
            rawHtml='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
          <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
        </svg>'
            text="Users"
        />
      </NuxtLink>
    </div>
    <div class="flex gap-2 justify-center items-center">
      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton
              class="w-full cursor-pointer text-sm font-medium text-white p-1 rounded-xl hover:bg-polar-500 transition-all duration-300"
          >
            <img
                class="rounded-full w-8 h-8 transition-all active:translate-y-[2px]"
                src="https://cdn.discordapp.com/attachments/993616210614812752/1004001619333087292/unknown.png"
            />
          </MenuButton>
        </div>

        <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
              class="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-polar-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="px-1 py-1">
              <NuxtLink to="/dashboard/profile">
                <MenuItem v-slot="{ active }">
                  <button
                      :class="[
                    active ? 'bg-polar-400 text-gray-300' : 'text-white',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                  >
                    NahSahh
                  </button>
                </MenuItem>
              </NuxtLink>
              <NuxtLink to="/dashboard/bio">
                <MenuItem v-slot="{ active }">
                  <button
                      :class="[
                    active ? 'bg-polar-400 text-gray-300' : 'text-white',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                  >
                    Edit Bio
                  </button>
                </MenuItem>
              </NuxtLink>
              <NuxtLink to="/plans">
                <MenuItem v-slot="{ active }">
                  <button
                      :class="[
                    active ? 'bg-polar-400 text-gray-300' : 'text-white',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                  >
                    Plans
                  </button>
                </MenuItem>
              </NuxtLink>
              <NuxtLink to="/dashboard/invites">
                <MenuItem v-slot="{ active }">
                  <button
                      :class="[
                    active ? 'bg-polar-400 text-gray-300' : 'text-white',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                  >
                    Invites
                  </button>
                </MenuItem>
              </NuxtLink>
              <MenuItem v-slot="{ active }">
                <button
                    :class="[
                    active ? 'bg-red-800 text-white' : 'text-red-800',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  Logout
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/vue";

defineProps(["location"]);
</script>
