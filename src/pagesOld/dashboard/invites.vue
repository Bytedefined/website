<template>
  <div>
    <StaticDashNavbar location="" />
    <div class="flex justify-center mt-12 px-4">
      <div
        class="flex max-w-7xl w-full flex-col gap-1 border-zinc-700/50 border rounded-lg bg-polar-300 p-6"
      >
        <div>
          <div class="flex flex-col gap-2">
            <h1 class="text-lg text-white-100 font-semibold">Invites</h1>
            <p class="text-sm text-gray-300">
              Here you can manage your invites, create them and copy them to
              clipboard.
            </p>
            <div class="overflow-x-auto relative mt-2">
              <table
                class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="text-xs bg-polar-500 border-zinc-700/50 border-b text-gray-400"
                >
                  <tr>
                    <th scope="col" class="py-3 px-6">Invite Key</th>
                    <th scope="col" class="py-3 px-6">Expired</th>
                    <th scope="col" class="py-3 px-6">Used By</th>
                    <th scope="col" class="py-3 px-6">Created At</th>
                    <th scope="col" class="py-3 px-6">Expiry</th>
                    <th scope="col" class="py-3 px-6">Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b bg-polar-400 border-zinc-700/50">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      hI4HR89H
                    </th>
                    <td class="py-4 px-6">false</td>
                    <td class="py-4 px-6">Unused</td>
                    <td class="py-4 px-6">28th of August 2022, 7:55 AM</td>
                    <td class="py-4 px-6">4th of September 2022, 5:00 AM</td>
                    <td class="py-4 px-6 lg:flex gap-2 grid">
                      <InteractiveButton
                        class="sm:!h-7 !h-10"
                        text="Invalidate"
                      />
                      <InteractiveButton
                        class="sm:!h-7 !h-10"
                        text="Copy"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
