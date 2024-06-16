import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  // any custom Vitest config you require
  test:{
    environment: 'nuxt' //IF YOU HAVE OTHER TESTS, DON'T SET THAT HERE
  }
})
