<template>
<div>
  <StaticDashNavbar location="" />
  <div class="flex justify-center w-full mt-12">
    <div class="w-full flex justify-center">
      <div
        class="bg-polar-300 max-w-2xl w-full border-zinc-700/50 border rounded-lg p-4"
      >
        <h1 class="text-lg text-white-100 font-semibold">User Settings</h1>
        <div class="grid mt-4">
          <div class="flex items-center gap-2">
            <img
              src="https://cdn.discordapp.com/avatars/310088719187050507/96fae1681b9a7dd6c7394abcf1976d34.png"
              class="rounded-full h-14"
              alt=""
            />
            <div>
              <h1 class="text-gray-200 font-semibold">NahSahh</h1>
              <InteractiveModal
                class="!h-6 mt-1"
                text="Edit"
                title="Edit Settings"
                v-model:isOpen="EditorOpen"
              >
                <p class="text-sm text-gray-300">
                  Here you can edit your pfp and Username
                </p>
                <div class="flex flex-col gap-3 mt-2">
                  <InteractiveInput text="New Username" />
                  <InteractiveInput text="Current Password" />
                  <div class="flex justify-between">
                    <InteractiveButton class="mt-1 w-fit" text="Edit pfp" />
                    <InteractiveButton
                      class="mt-1 w-fit !bg-blues-100 !bg-opacity-30 !text-[#2596f3] hover:!bg-blues-200 hover:!bg-opacity-30"
                      text="Save Changes"
                    />
                  </div>
                </div>
                <div>
                  <div class="flex flex-col gap-2 mt-2">
                    <p class="mt-2 text-sm font-medium text-gray-300">
                      Password
                    </p>
                    <InteractiveInput text="Current Password" />
                    <InteractiveInput text="New Password" />
                    <InteractiveButton
                      class="mt-1 w-fit !bg-blues-100 !bg-opacity-30 !text-[#2596f3] hover:!bg-blues-200 hover:!bg-opacity-30"
                      text="Save Changes"
                    />
                  </div>
                </div>
                <div>
                  <div class="flex flex-col gap-2 mt-2">
                    <p class="mt-2 text-sm font-medium text-gray-300">Email</p>
                    <InteractiveInput text="Current Email" />
                    <InteractiveInput text="New Email" />
                    <InteractiveButton
                      class="mt-1 w-fit !bg-blues-100 !bg-opacity-30 !text-[#2596f3] hover:!bg-blues-200 hover:!bg-opacity-30"
                      text="Save Changes"
                    />
                  </div>
                </div>
                <div>
                  <div class="flex flex-col gap-2 mt-2">
                    <p class="mt-2 text-sm font-medium text-gray-300">
                      Description
                    </p>
                    <InteractiveInput text="New Description" />
                    <InteractiveButton
                      class="mt-1 w-fit"
                      text="Change Description"
                    />
                  </div>
                </div>
              </InteractiveModal>
            </div>
          </div>
        </div>
        <div class="mt-2">
          <!-- <h2 class="text-base text-white-100 font-semibold">Privacy</h2>
          <p class="text-sm text-gray-300">
            Privacy settings to ensure the top-most security using Jet.pics.
          </p> -->
          <div
            class="flex gap-2 border-t border-zinc-600 mt-3 w-full items-center"
          ></div>
          <div>
            <p class="mt-2 text-sm font-medium text-gray-300">Wipe Gallery</p>
            <p class="text-sm text-gray-300">
              Deletes all your current uploads.
            </p>
            <InteractiveInput class="mt-2" text="Current Password" />
            <InteractiveButton class="mt-2 !h-7 w-fit" text="Wipe Uploads" />
          </div>
          <div class="mt-4">
            <p class="mt-2 text-sm font-medium text-gray-300">
              Enable 2FA (RECOMMENDED)
            </p>
            <p class="text-sm text-gray-300">
              Enabling 2FA will add another secure authentication layer to your
              account, this will make it extremely hard for anyone but yourself
              to login to your account.
            </p>
            <InteractiveInput class="mt-2" text="Current Password" />
            <InteractiveButton class="mt-2 !h-7 w-fit" text="Get Started" />
          </div>
          <div class="mt-4">
            <p class="mt-2 text-sm font-medium text-gray-300">Delete Account</p>
            <p class="text-sm text-gray-300">
              Deleting your account will permanently remove all your uploads,
              cancel any ongoing subscriptions.
            </p>
            <InteractiveInput class="mt-2" text="Current Password" />
            <InteractiveButton class="mt-2 !h-7 w-fit" text="Delete Account" />
          </div>
          <div class="flex items-center select-none mt-2">
            <input
              id="checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 duration-300 bg-polar-100 rounded-full appearance-none checked:bg-blue-600 focus:ring-blue-600"
            />
            <label for="checkbox" class="ml-2 text-sm font-medium text-gray-300"
              >Hide Username from uploads.</label
            >
            <InteractiveTooltip
              text="On the upload page your username is hidden."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const EditorOpen = ref(false);
</script>
