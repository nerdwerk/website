// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },

    future: {
        compatibilityVersion: 4,
    },

    modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', 'nuxt-headlessui'],

    vue: {
        propsDestructure: true,
    },

    css: ['assets/styles/norican.css', 'assets/styles/main.css'],
});
