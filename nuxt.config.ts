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
        themes:{
          light:{
            dark: false,
            colors:{
              surface:'#e0f7fa',
              background:'#b3e5fc'

            }
          }
        }
        
      }
    }
  }
})