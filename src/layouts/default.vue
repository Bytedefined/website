<template>
  <Navbar />
    <div class="flex h-[87vh] relative px-4">
      <NuxtPage />
    </div>
  <Footer />
</template>

<script setup lang="ts">
useHead({
  title: "Bytedefined",
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
    }
  ],
  meta: [
    { charset: "utf-8" },
    { name: "og:title", content: "Bytedefined" },
    { name: "description", content: "Bytedefined description." },
    { name: "og:description", content: "Bytedefined description." },
    { name: "format-detection", content: "telephone=no" },
  ],
  style: [
    {fontFamily: "Inter, sans-serif"},
  ]
});
</script>