import {defineNuxtConfig} from "nuxt";

export default defineNuxtConfig({
    srcDir: "src/",
    modules: [
        "@nuxtjs/pwa",
        "@nuxtjs/robots"
    ],
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
    pwa: {
        icon: false,
        manifest: {
            name: "Bytedefined",
            description: "A Russian/Australian software developer/designer.",
            short_name: "Bytedefined",
            background_color: "#0B0E11",
            lang: "en",
            useWebmanifestExtension: false,
            theme_color: "#0267d3",
            dir: "ltr",
            display: "standalone",
            start_url: "/"
        }
    },
    css: [
        "@/assets/css/styles.css",
    ],
    robots: {
        UserAgent: "*",
        Allow: "/",
    }
});
