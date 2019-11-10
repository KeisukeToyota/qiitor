// eslint-disable-next-line nuxt/no-cjs-in-config
const colors = require('vuetify/es5/util/colors')

// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/vuetify',
    '@nuxtjs/markdownit',
    '@tui-nuxt/editor'
  ],
  router: {
    mode: 'hash'
  },

  dev: process.env.NODE_ENV === 'development',

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.default.blue.darken2,
          accent: colors.default.grey.darken3,
          secondary: colors.default.amber.darken3,
          info: colors.default.teal.lighten1,
          warning: colors.default.amber.base,
          error: colors.default.deepOrange.accent4,
          success: colors.default.green.accent3
        }
      }
    }
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    html: true,
    typographer: true,
    use: ['markdown-it-div', 'markdown-it-attrs']
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.output.publicPath = './_nuxt/'
    }
  }
}
