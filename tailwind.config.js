/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: {
    layers: ['base','components','utilities'],
    content: [
      "./pages/**/*.vue", 
      "./components/**/*.vue", 
      "./plugins/**/*.vue",
      "./static/**/*.vue",
      "./store/**/*.vue"
    ],
  },
  theme: {},
  variants: {},
  plugins: []
}
