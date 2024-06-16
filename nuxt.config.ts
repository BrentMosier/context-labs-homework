// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', 'vuetify-nuxt-module', '@nuxt/test-utils/module'],
  eslint: {
    // options here
  },
  vuetify:{
    moduleOptions:{},
    vuetifyOptions:{
      theme:{
        defaultTheme:'dark'
      }
    }
  }
})