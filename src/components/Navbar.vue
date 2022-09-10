<template>
  <nav class="w-full flex items-center p-3 relative justify-between px-4">
    <NuxtLink to="/">
      <h1 class="text-2xl text-blues-200 tracking-wider font-semibold">Bytedefined</h1>
    </NuxtLink>
    <div class="flex gap-2 hidden-mobile">
      <NuxtLink to="/projects">
        <NavbarButton
            :class="[
                true == 'projects'
                  ? '!bg-blues-100 !bg-opacity-30 !text-blues-100'
                  : 'hover:!bg-polar-500',
              ]"
            rawHtml='<i class="fa-solid fa-diagram-project"></i>'
            text="Projects"
        />
      </NuxtLink>
      <NuxtLink to="/about">
        <NavbarButton
            :class="[
                true == 'about'
                  ? '!bg-blues-100 !bg-opacity-30 !text-blues-100'
                  : 'hover:!bg-polar-500',
              ]"
            rawHtml='<i class="fa-solid fa-address-card"></i>'
            text="About"
        />
      </NuxtLink>
      <NuxtLink to="/contact">
        <NavbarButton
            :class="[
                true == 'contact'
                  ? '!bg-blues-100 !bg-opacity-30 !text-blues-100'
                  : 'hover:!bg-polar-500',
              ]"
            rawHtml='<i class="fa-solid fa-message"></i>'
            text="Contact"
        />
      </NuxtLink>
    </div>
  </nav>
</template>
