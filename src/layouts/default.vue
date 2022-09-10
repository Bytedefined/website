<template>
  <Navbar/>
  <div class="flex h-[87vh] relative px-4">
    <NuxtPage/>
  </div>
  <Footer/>
</template>

<script lang="ts" setup>
useHead({
  title: "Bytedefined",
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
      defer: true
    },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css",
      defer: true
    }
  ],
  meta: [
    {charset: "utf-8"},
    {name: "og:title", content: "Bytedefined"},
    {name: "description", content: "A Russian/Australian software developer/designer."},
    {name: "og:description", content: "A Russian/Australian software developer/designer."},
    {name: "format-detection", content: "telephone=no"},
    {name: "viewport", content: "width=device-width, initial-scale=1"},
    {name: "og:type", content: "website"},
    {name: "og:site_name", content: "Bytedefined"},
    {name: "url", content: "https://bytedefined.com"},
    {name: "og:url", content: "https://bytedefined.com"},
    {name: "twitter:site", content: "@Bytedefined"},
    {name: "twitter:creator", content: "@Bytedefined"},
    {name: "twitter:title", content: "Bytedefined"},
    {name: "twitter:description", content: "A Russian/Australian software developer/designer."},
    {httpEquiv: "Content-Security-Policy", content: "script-src 'none'"},
    {name: "theme-color", content: "#0267d3"},
  ],
  style: [
    {fontFamily: "Inter, sans-serif"},
  ]
});
</script>