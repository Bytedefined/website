<template>
  <nav class="w-full flex items-center p-3 relative justify-between px-4">
    <!-- Dark Background Transition -->
    <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
    >
      <div v-show="drawer" class="z-10 fixed inset-0 transition-opacity">
        <div v-on:click="drawer = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
      </div>
    </transition>
    <!-- Sidebar -->
    <aside class="pt-4 px-4 transform top-0 left-0 w-64 bg-sidebar fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30" :class="drawer ? 'translate-x-0' : '-translate-x-full'">
      <h1 class="text-2xl text-blues-200 tracking-wider font-semibold mb-2 text-center">Bytedefined</h1>
      <ul>
        <NuxtLink v-for="item in items" :key="item.id" :to="item.route" class="override">
          <li :class="$route.path == item.route ? 'bg-sidebarItem' : null" class="pl-4 w-54 mb-2 py-2 text-white rounded h-40px cursor-pointer hover:bg-sidebarItem">
              <i :class="item.icon"></i>&nbsp;&nbsp;{{item.name}}
          </li>
        </NuxtLink>
      </ul>
    </aside>
    <!-- Navbar -->
    <NuxtLink to="/">
      <h1 class="text-2xl text-blues-200 tracking-wider font-semibold">Bytedefined</h1>
    </NuxtLink>
    <div class="flex">
      <button v-on:click="toggleDrawer()" class="hidden-desktop">
        <i class="fa-regular fa-bars text-3xl text-white" v-if="!drawer"></i>
        <i class="fa-regular fa-x text-3xl text-white" v-else></i>
      </button>
    </div>
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

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          id: 1,
          name: "Home",
          icon: "fa-solid fa-house",
          route: "/"
        },
        {
          id: 2,
          name: "Projects",
          icon: "fa-solid fa-diagram-project",
          route: "/projects"
        },
        {
          id: 3,
          name: "About",
          icon: "fa-solid fa-address-card",
          route: "/about"
        },
        {
          id: 4,
          name: "Contact",
          icon: "fa-solid fa-message",
          route: "/contact"
        }
      ]
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    }
  }
}
</script>