import { defineVitestConfig } from '@nuxt/test-utils/config'
import { coverageConfigDefaults } from 'vitest/config'

export default defineVitestConfig({
  test:{
    environment: 'nuxt',
    coverage: {
          provider: 'v8',
          exclude: [...coverageConfigDefaults.exclude,
            'server/**',
            'nuxt.config.ts'
          ]
    }
  }
})
