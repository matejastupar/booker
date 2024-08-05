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
  runtimeConfig: {
    public: {
      brandName: "REPLACE THIS",
      brandLogo: "https://imgs.search.brave.com/_HirqumaD4tF6XfkAvrMLTVsrDeK2X6QpyMgvKv7dVc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dC5icmFuZGZldGNo/LmlvL2lkS3ZLUjND/ZWEvaWR1bUExRExX/NS5zdmc_dXBkYXRl/ZD0xNzE3MzQxNTU2/OTA0",
    }
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
