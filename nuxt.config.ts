// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      title: "Booker",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=2",
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: ['assets/css/main.css'],
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-mongoose", "@sidebase/nuxt-auth"],
  mongoose: {
    uri: process.env.MONGODB_URI,
  },
  auth: { 
    isEnabled: false,
    disableServerSideAuth: true,
  },
})
