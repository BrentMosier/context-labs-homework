import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  ignores: ["coverage/*"]
}
  // your custom flat configs go here, for example:
  // {
  //   files: ['**/*.ts', '**/*.tsx'],
  //   rules: {
  //     'no-console': 'off' // allow console.log in TypeScript files
  //   }
  // },
  // {
  //   ...
  // }
)
