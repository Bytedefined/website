import {defineNuxtConfig} from "nuxt";

export default defineNuxtConfig({
    modules: [
        "@nuxtjs/robots"
    ],
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
        "@/assets/css/styles.css",
    ],
    robots: {
        UserAgent: "*",
        Allow: "/",
    }
});
