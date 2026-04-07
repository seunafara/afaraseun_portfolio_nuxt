
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2026-04-07',
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },
})

// export default {
//   compatibilityDate: '2026-04-07',
//   target: "static",
//   // Global page headers: https://go.nuxtjs.dev/config-head
//   head: {
//     title: "afaraseun_portfolio",
//     htmlAttrs: {
//       lang: "en",
//     },
//     meta: [
//       { charset: "utf-8" },
//       { name: "viewport", content: "width=device-width, initial-scale=1" },
//       { hid: "description", name: "description", content: "" },
//     ],
//     link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
//   },

//   // Global CSS: https://go.nuxtjs.dev/config-css
//   css: [],

//   script: [
//     {
//       src: "https://www.googletagmanager.com/gtag/js?id=G-LP7C3J39BX",
//     },
//   ],

//   // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
//   plugins: [],

//   // Auto import components: https://go.nuxtjs.dev/config-components
//   components: true,

//   // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules


//   // Modules: https://go.nuxtjs.dev/config-modules
//   modules: [],

//   // Build Configuration: https://go.nuxtjs.dev/config-build
//   build: {},
// };
