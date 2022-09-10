<template>
  <div>
    <StaticDashNavbar location=""/>
    <div class="flex h-[90vh]">
      <div class="m-auto p-2 w-full flex flex-col place-items-center">
        <div class="grid gap-2 max-w-2xl w-full bg-polar-300 border-zinc-700/50 border p-6 rounded-xl">
          <img
              alt=""
              class="rounded-full h-24 flex mx-auto w-24"
              src="https://cdn.nest.rip/uploads/1babe31e-d51b-4437-bfb9-e37244c93e79.png"
          />
          <h1 class="font-medium text-2xl text-center">NahSahh</h1>
          <p class="text-sm text-gray-300 text-center">
            Hey, I'm a new user here!
          </p>
          <div
              class="flex text-center justify-center flex-col gap-2 mt-3 border-t border-zinc-700/50 pt-4"
          >
            <p class="text-gray-300 text-sm">
              Registration Date: 25th of August 2022, 4:09 PM
            </p>
            <p class="text-gray-300 text-sm">
              UID: 25th of August 2022, 4:09 PM
            </p>
            <p class="text-gray-300 text-sm">Storage Used: 150 MB</p>
          </div>
        </div>
        <div class="grid gap-4 sm:grid-cols-3 mt-4 max-w-2xl w-full">
          <StaticCard
              class="w-full"
              rawHtml='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="text-blue-400" viewBox="0 0 16 16">
  <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z"/>
</svg>'
              title="Domains"
          >
            0
          </StaticCard>
          <StaticCard
              class="w-full"
              rawHtml='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="text-blue-400" viewBox="0 0 16 16">
  <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z"/>
</svg>'
              title="Uploads"
          >
            250
          </StaticCard>
          <StaticCard
              class="w-full"
              rawHtml='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="text-blue-400" viewBox="0 0 16 16">
  <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z"/>
</svg>'
              title="Invited"
          >
            3 Users
          </StaticCard>
        </div>
      </div>
    </div>
  </div>
</template>
