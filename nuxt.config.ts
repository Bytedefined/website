import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
    srcDir: "src/",
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    css: [
        '@/assets/css/styles.css',
    ],
});
