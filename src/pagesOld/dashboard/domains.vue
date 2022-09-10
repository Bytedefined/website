<template>
  <div>
    <StaticDashNavbar location="domains"/>
    <div class="flex justify-center mt-12">
      <div class="w-full flex justify-center px-4">
        <div
            class="bg-polar-300 w-full max-w-7xl p-6 rounded-lg border border-zinc-700/50"
        >
          <div class="flex justify-between">
            <h1 class="text-lg text-white-100 font-semibold">All Domains</h1>
            <InteractiveModal
                v-model:isOpen="OpenAddition"
                text="Donate a domain"
                title="Donate your domain"
            >
              <p class="text-sm text-gray-300">
                Set your name servers to:
              </p>
              <div class="flex gap-2 ">
                <p class="bg-zinc-800 text-sm w-full mt-2 px-2 rounded">kianchau.ns.cloudflare.com</p>
                <p class="mt-1">&</p>
                <p class="bg-zinc-800 text-sm w-full mt-2 px-2 rounded">michelle.ns.cloudflare.com</p>
              </div>


              <div class="flex flex-col gap-3 mt-3">
                <InteractiveInput text="Domain Name"/>
                <div
                    class="flex border-t border-zinc-600 pt-2 w-full items-center"
                >
                  <InteractiveButton
                      text="Donate"
                  />
                </div>
              </div>
            </InteractiveModal>
          </div>

          <div class="overflow-x-auto relative mt-6">
            <table
                class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <thead
                  class="text-xs bg-polar-500 border-zinc-700/50 border-b text-gray-400"
              >
              <tr>
                <th class="py-3 px-6" scope="col">Domain Name</th>
                <th class="py-3 px-6" scope="col">Added By</th>
                <th class="py-3 px-6" scope="col">Active Users</th>
                <th class="py-3 px-6" scope="col">Options</th>
              </tr>
              </thead>
              <tbody>
              <tr class="border-b bg-polar-400 border-zinc-700/50">
                <th
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    scope="row"
                >
                  jet.pics
                </th>
                <td class="py-4 px-6">Jayy</td>
                <td class="py-4 px-6">10</td>
                <td class="py-4 px-6 lg:flex gap-2 grid">
                  <!-- if you own it you can manage it, if you dont own it, its not there  -->
                  <InteractiveButton
                      class="sm:!h-8 !h-10"
                      text="Set default"
                  />
                  <InteractiveModal
                      v-model:isOpen="Manage"
                      text="Manage"
                      title="Manage your domain"
                  >
                    <p class="text-sm text-gray-300">
                      here you can manage your domain
                    </p>


                    <div class="flex flex-col gap-3 mt-3">
                      <InteractiveInput text="Set domain state"/>
                      <!-- public/private  -->
                      <div
                          class="flex border-t gap-2 border-zinc-600 pt-2 w-full items-center"
                      >
                        <InteractiveButton
                            text="Delete"
                        />
                        <InteractiveButton
                            text="Save changes"
                        />
                      </div>
                    </div>
                  </InteractiveModal>
                </td>
              </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const OpenAddition = ref(false);
const Manage = ref(false);

</script>